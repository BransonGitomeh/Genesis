module.exports = (db) => {
	return {
		getUnits: function(options) {
			this.add({
				role: "student",
				cmd: "getUnits",
			}, (args, respond) => {
				db.student.findOne({
						id: args.studentId
					})
					.populate("unit_registrations.unit")
					.populate("unit_registrations.tri_semester")
					.populate("unit_registrations.stage.level.course")
					.populate("unit_registrations.tri_semester")
					.exec((err, studentFound) => {

						// console.log(studentFound.unit_registrations)
						var units = []
						studentFound.unit_registrations.map((registration) => {
							// console.log(registration.tri_semester)
							units.push({
								tri_semester: registration.tri_semester.name,
								course: registration.stage.level.course.name,
								level: registration.stage.level.name,
								stage: registration.stage.name,
								unit: registration.unit.name,
								cost: registration.unit.cost
							})

						})

						respond(null, {
							units: units
						})
					})
			})
		},
		// this service get the payments of a student and returns a total to show how much he/she has paid
		// args-studentId - is the id of the student you want to get the sum of the payments
		getAllUnitRegistrations: function(options) {
			this.add({
				role: "student",
				cmd: "getAllUnitRegistrations",
			}, (args, respond) => {
				// re-use the other action's responce to get the units, then compute from that
				this.act({
					role: "student",
					cmd: "getUnits",
					studentId: args.studentId
				}, (args, result) => {
					// console.log(result.payments)
					var sum = 0
					result.units.map((unit) => {
						sum = Number(sum) + Number(unit.cost)
					})

					respond(null, {
						unitsRegistered: result.units,
						totalCost: sum
					})
				})

			})
		},

		getPayments: function(options) {
			this.add({
				role: "student",
				cmd: "getPayments"
			}, (args, res) => {
				db.student.findOne({
						id: args.studentId
					})
					.populate("payments_i_have_made.tri_semesters_i_was_paid_to")
					.populate("payments_i_have_made.course_paid_to")
					.populate("payments_i_have_made.level_paid_to")
					.exec((err, student) => {
						// console.log(student)
						var payments = [];
						var sum = 0;
						student.payments_i_have_made.map((payment) => {
							payments.push({
								trimester: payment.tri_semesters_i_was_paid_to.name,
								course: payment.course_paid_to.name,
								level: payment.level_paid_to.name,
								ammount: Number(payment.ammount),
								receipt: payment.receipt,
								date: payment.createdAt
							})
							sum = Number(sum) + Number(payment.ammount)
						})

						res(null, {
							payments: payments,
							totalPayments: sum
						})
					})
			})
		},

		getStudentsDetails: function(options) {
			this.add({
				role: "student",
				cmd: "getDetails"
			}, (args, respond) => {
				db.student.findOne({
						id: args.studentId
					})
					.populate("course")
					.populate("level")
					.populate("stage")
					.populate("study_mode")
					.exec((err, student) => {
						// console.log(student)

						var finalStudent = {
							course: student.course.name,
							level: student.level.name,
							stage: student.stage.name,
							study_mode: student.level.name,
							name: student.name,
							id: student.id
						}
						respond(null, {
							result: finalStudent
						})
					})


			})
		}
	}
}