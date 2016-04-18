var _ = require("underscore")

module.exports = function(db) {
	return {
		test: function(options) {
			this.add({
				role: "test",
				cmd: "greet"
			}, (args, res) => {
				console.log("awesemness")
				res(null, {
					result: "hello world"
				})
			})
		},
		university_requests: function(options) {
			this.add({
				role: "university",
				cmd: "get_trisemesters"
			}, (args, res) => {
				db.university.findOne({
						id: args.id
					})
					.populate("tri_semesters")
					.exec((err, uni) => {
						res(err, {
							result: uni
						})
					})
			})

			/*
			 *this one looks at the finance section and counts the sum of all the 
			 *payments that have been made by the students, it can also total by 
			 *other categories but for now its "all"
			 */
			this.add({
					role: "finance",
					cmd: "get_total_payments",
					scope: "all"
				}, (args, res) => {

					db.university.findOne({
							id: args.university_id
						})
						.populate("proschools.departments.courses.students.payments_i_have_made")
						.exec((err, university) => {
							var total = 0
							university.proschools.map((proschool) => {
								proschool.departments.map((department) => {
									department.courses.map((courses) => {
										courses.students.map((student) => {
											student.payments_i_have_made.map((payment) => {
												total = Number(total) + Number(payment.ammount)
											})
										})
									})
								})
							})
							res(null, {
								// result: university,
								total: total
							})
						})
				}),

				// this service gets the stats of a university
				this.add({
					role: "university",
					cmd: "get_stats"
				}, (args, res) => {

					db.university.findOne({
							id: args.university_id
						})
						.populate("proschools.departments.courses.students")
						.exec((err, found) => {
							// console.log(found)
							var departments = 0
							var courses = 0
							var students = 0

							found.proschools.map((proschool) => {
								departments = departments + proschool.departments.length

								proschool.departments.map((department) => {
									courses = courses + department.courses.length

									department.courses.map((course) => {
										students = students + course.students.length
									})
								})
							})

							var results = {
								proschools: found.proschools.length,
								departments: departments,
								courses: courses,
								students: students
							}

							this.act({
								role: "finance",
								cmd: "get_total_payments",
								scope: "all",
								university_id: args.university_id
							}, (args, result) => {
								// console.log(result)
								results.totalFinance = result.total
								res(err, {
									result: results
								})
							})
						})
				})

			/*
			 *this one returns the trisemesters in a university
			 *mainly used to select in the ui and maybe make a payment against it
			 */
			this.add({
				role: "university",
				cmd: "get_trisemesters",
				mode: "simple"
			}, (args, res) => {
				db.university.findOne({
						id: args.id
					})
					.populate("tri_semesters")
					.exec((err, uni) => {
						var trisems = []
						uni.tri_semesters.map((trisem) => {
							trisems.push({
								id: trisem.id,
								name: trisem.name
							})
						})
						res(err, {
							tri_semesters: trisems
						})
					})
			})
		},
		students_payments_data_getting: function(options) {
			/*
			 *this direcory is supposed to provide the data for providing
			 *a payment on the payment ui
			 */

			/*
			 *this one looks for semesters where this student has made a registration
			 *and returns them so that a student can make a payment with those
			 */
			this.add({
				role: "studentInfo",
				cmd: "get_semesters_payable_to"
			}, (args, res) => {
				var semesters = []

				db.unit_registration.find({
						student: args.studentId
					})
					.populate("stage.level.course")
					.exec((err, unit_registrations) => {
						unit_registrations.map((registration) => {

							var y = !!_.where(semesters, {
								id: registration.stage.id
							}).length;

							// console.log(y)
							if (y === false) {
								semesters.push({
									id: registration.stage.id,
									name: registration.stage.name,
									level: {
										id: registration.stage.level.id,
										name: registration.stage.level.name,
										course: {
											id: registration.stage.level.course.id,
											name: registration.stage.level.course.name
										}
									}
								})

								// console.log(semesters)
							} else {
								console.log("the semester exists")
							}


						})

						res(err, semesters)
					})
			})

			/*
			 *this one pics payments from a student 
			 *
			 */
			this.add({
				role: "finance",
				cmd: "pick_payment_for_student"
			}, (args, res) => {

				db.payment.create({
					student_who_made_me: args.student_id,
					tri_semesters_i_was_paid_to: args.tri_sem_id,
					course_paid_to: args.course_id,
					level_paid_to: args.level_id,
					stage_paid_to: args.stage_id,
					ammount: args.paymentAmmount,
					receipt: args.receiptNo,
					payment_method: args.payment_channel
				}).exec((err, createdPayment) => {
					res(err, {
						result: createdPayment
					})
				})

			})
		},

		/*
		 *this one manages the payments-payment method formular to ensure each payment 
		 *has a payment method so we can analyse and see which bank or chanel brought 
		 *which ammount of money
		 */

		payments_Uni: function(options) {
			//creates a payment chanel for a uni

			/*
			 *args- 
			 *university_id->is the is of the university to add the payment channel to
			 *channel_name->is the name of the chanel, ie equity
			 *channel_number-> is the unique identifier for the channel, ie the account number of the channel
			 *location-> location of the payment method eith "mobile", or the physical location of the bank
			 */
			this.add({
				role: "finance",
				cmd: "create_payment_chanel"
			}, (args, res) => {
				//create the object in the db
				db.payment_method.create({
					name: args.channel_name,
					channel_number: args.channel_number,
					location: args.location,
					university: args.uni_id
				}).exec((err, created) => {
					//res with error or created Object
					res(err, {
						result: created
					})
				})

			})

			/*
			 *this one gets the payment methods in a uni
			 */

			this.add({
				role: "finance",
				cmd: "get_payment_channels_in_a_uni"
			}, (args, res) => {
				db.university.findOne({
						id: args.uni_id,
					})
					.populate("payment_methods")
					.exec((err, found) => {
						//res with error or created Object
						res(err, {
							result: found.payment_methods
						})
					})
			})
		},

		student_management: function(options) {
			this.add({
				role: "student_management",
				cmd: "get_student_details"
			}, (args, res) => {
				db.student.findOne({
						id: args.student_id
					})
					.populate("course")
					.populate("level")
					.populate("stage")
					.populate("study_mode")

				.populate("course.department.proschool.uni.active_tri_semester")
					.exec((err, student) => {
						// console.log(student.course.department.proschool.uni.active_tri_semester);
						res(err, {
							studentInfo: {
								id: student.id,
								name: student.name,
								active_trisemester: {
									id: student.course.department.proschool.uni.active_tri_semester.id,
									name: student.course.department.proschool.uni.active_tri_semester.name
								},
								course: {
									id: student.course.id,
									name: student.course.name
								},
								level: {
									id: student.level.id,
									name: student.level.name
								},
								stage: {
									id: student.stage.id,
									name: student.stage.name
								},
								study_mode: {
									id: student.study_mode.id,
									name: student.study_mode.name
								}

							}
						})
					})
			})
		},

		church: function(options) {
			// create new church, noticeboard, admin, and normal user
			this.add({
				role: "church",
				cmd: "new",
			}, (args, res) => {
				/*
				 *args- church_name
				 */
				db.church.create({
					name: args.church_name
				}).exec((err, church) => {
					res(null, {
						result: church
					})
				})

			})

			//get details of a single church
			this.add({
				role: "church",
				cmd: "get_details",
				scope: "single"
			}, (args, res) => {
				/*
				 *args- church_name
				 */
				db.church.findOne({
					id: args.church_id
				}).exec((err, church) => {
					res(null, {
						result: church
					})
				})
			})

			//get details of a church
			this.add({
				role: "church",
				cmd: "get_details",
				scope: "all"
			}, (args, res) => {
				/*
				 *args- church_name
				 */
				db.church.find().exec((err, churches) => {
					res(null, {
						result: churches
					})
				})
			})

			this.add({
					role: "church",
					cmd: "get_details",
					scope: "delete_all"
				}, (args, res) => {
					//delete all churches
					this.act({
						role: "church",
						cmd: "get_details",
						scope: "all"
					}, (err, result) => {
						/*
						 *args- church_name
						 */
						result.result.map((church) => {
							db.church.destroy({
								id: church.id
							}).exec((err) => {
								console.log("deleted " + church.id)
							})
						})

						res(null, {
							result: "deleting all"
						})

					})

				}),

				this.add({
					role: "church",
					cmd: "get_stats"
				}, (args, res) => {
					//delete all churches
					res(null, {
						result: {
							admins: 20,
							users: 30,
							messages: 200,
							uniqueVisitors: 4
						}
					})

				}),

				/*
				 *this fixes a church that does not have a noticeboard or a notice_item
				 */
				this.add({
					role: "church",
					cmd: "add_noticeboard"
				}, (args, res) => {
					//delete all churches
					//create a noticeboard,
					//create a notice_item,
					//mash them together with the church

					db.noticeboard.create({
						church: args.church_id
					}).exec((err, noticeboard) => {

						//create the notice_item
						db.noticeboard_item.create({
							myboard: noticeboard.id
						}).exec((err, noticeboard_item) => {
							if (err) console.log
						})

						db.church.update({
							id: args.church_id
						}, {
							noticeboard: noticeboard.id
						}).exec((err, noticeboard_item) => {
							if (err) console.log
						})

						res(null, {
							result: "succcess"
						})
					})
				}),

				/*
				 *this one gets the notice items inside the noticeboard in a church
				 */

				this.add({
					role: "church",
					cmd: "get_notices"
				}, (args, res) => {
					//delete all churches
					//create a noticeboard,
					//create a notice_item,
					//mash them together with the church
					console.log(args.church_id)
					db.church.findOne({
							id: args.church_id
						})
						.populate("noticeboard.noticeboard_items")
						.exec((err, church) => {
							if (err) console.error
								// console.log(church)
							res(err, {
								result: (church ? church.noticeboard.noticeboard_items : "")
							})
						})
				}),

				/*
				 *this one adds a notice item inside the noticeboard in a church
				 */

				this.add({
					role: "church",
					cmd: "add_notice"
				}, (args, res) => {
					db.church.findOne({
							id: args.church_id
						})
						.populate("noticeboard")
						.exec((err, church) => {

							// create a notice item
							db.noticeboard_item.create({
								title: args.title,
								content: args.content,
								myboard: church.noticeboard.id
							}).exec((err, noticeboard_item) => {

								res(err, {
									result: "success"
								})

							})
						})
				}),
				// delete a notice
				this.add({
					role: "church",
					cmd: "remove_notice"
				}, (args, res) => {
					// create a notice item
					db.noticeboard_item.destroy({
						id: args.notice_id
					}).exec((err, noticeboard_item) => {

						res(err, {
							result: "success"
						})
					})
				}),

				this.add({
					role: "church",
					cmd: "make_notice_old"
				}, (args, res) => {
					// create a notice item
					db.noticeboard_item.findOne({
						id: args.notice_id
					}).exec((err, noticeboard_item) => {

						db.noticeboard_item.update({
							id: args.notice_id
						}, {
							myboard: null,
							oldboard: noticeboard_item.myboard
						}).exec((err, updated) => {
							res(err, {
								result: updated
							})
						})


					})
				}),

				//get old notices of a church
				this.add({
					role: "church",
					cmd: "get_old_notices"
				}, (args, res) => {
					// create a notice item
					db.church.findOne({
							id: args.church_id
						})
						.populate("noticeboard.noticeboard_items")
						.exec((err, church) => {

							res(err, {
								old_noticeboard_items: church.noticeboard.old_noticeboard_items
							})
						})
				})
		},
		app: function(options) {
			this.add({
					role: "app",
					cmd: "get_stats"
				}, (args, res) => {
					db.request.count().exec(function(err, requests) {
						db.university.count().exec(function(err, universities) {
							db.church.count().exec(function(err, churches) {
								res(err, {
									requests: requests,
									universities: universities,
									churches: churches
								})
							})
						})
					})
				}),

				//units having multiple price points
				//and an active price point
				//so that registrations can take the active price as the price
				this.add({
					role: "unit",
					cmd: "add_price"
				}, (args, res) => {
					db.price.create({
						unit: args.unit_id,
						ammount: args.ammount
					}).exec((err, price) => {
						res(err, {
							result: price
						})
					})
				}),

				this.add({
					role: "unit",
					cmd: "get_prices"
				}, (args, res) => {
					db.unit.findOne({
							id: args.unit_id
						})
						.populate("other_prices")
						.exec((err, unit) => {
							res(err, {
								result: unit
							})
						})
				}),

				this.add({
					role: "unit",
					cmd: "make_price_active"
				}, (args, res) => {
					db.unit.update({
						id: args.unit_id
					}, {
						price: args.price_id
					}).exec((err, unit) => {
						res(err, {
							result: unit
						})
					})
				}),

				this.add({
					role: "unit",
					cmd: "destroy_price"
				}, (args, res) => {
					db.price.destroy({
						id: args.price_id
					}).exec((err, unit) => {
						res(err, {
							result: unit
						})
					})
				})
		}
	}
}