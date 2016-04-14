var seneca = require("seneca")()

module.exports = (req, res) => {
	//import the sevice directory
	var student_services = require("./student_ms")(req.db)
		//register all the services in it
	for (x in student_services) {
		seneca.use(student_services[x])
	}

	// ask for all the charges for the units registered
	seneca.act({
		role: 'student',
		cmd: 'getAllUnitRegistrations',
		studentId: req.params.student_id
	}, (err, unitsRegistered) => {
		if (err) return console.error

		// get all the payments in that student
		seneca.act({
			role: 'student',
			cmd: 'getPayments',
			studentId: req.params.student_id
		}, (err, paymentLog) => {
			if (err) return console.error
				// get the students details
			seneca.act({
				role: 'student',
				cmd: 'getDetails',
				studentId: req.params.student_id
			}, (err, studentDetails) => {
				if (err) return console.error

				res.send({
					studentDetails: studentDetails.result,
					payments_log: paymentLog,
					units_log: unitsRegistered,
					balance: unitsRegistered.totalCost - paymentLog.totalPayments
				})
			})
		})
	})
}