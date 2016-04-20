module.exports = (req, res) => {
	console.log("showing the units i am registereing to")
	console.log(req.params.unit_id)

	req.db.unit.findOne({
		id: req.params.unit_id
	})
	.exec((err, found_unit) => {
		req.db.unit_registration.create({
			student: req.params.student_id,
			stage: req.params.semester_id,
			price:found_unit.price,
			unit: req.params.unit_id,
			tri_semester: req.params.tri_semester_id
		})
		.populate("student")
		.exec((err, registration) => {
			// console.log(registration)
			res.send(registration)
		})
	})

	
}