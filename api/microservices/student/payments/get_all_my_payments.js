var seneca = require("seneca")()

module.exports = (req, res) => {
	// import the students micro-service
	var student = require("./student_ms")(req.db),paymentLog,unitsRegistered
	//register the ms's that i want
	seneca.use(student.getUnits)
	seneca.use(student.getAllUnitRegistrations)
	seneca.use(student.getPayments)

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

			res.send({
				payments_log:paymentLog,
				units_log:unitsRegistered,
				balance:unitsRegistered.totalCost - paymentLog.totalPayments 
			})
		})

	})
}