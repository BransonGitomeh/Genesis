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
		getting_the_trisemesters_in_a_university: function(options) {
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
			 *this one returns the trisemesters but in a simple 
			 *
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

							console.log(y)
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

								console.log(semesters)
							} else {
								console.log("the semester exists")
							}


						})

						res(err, semesters)
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
		}
	}
}