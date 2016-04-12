module.exports = (req, res) => {
	req.db.unit_registration.create({
			student: req.params.student_id,
			stage: req.params.semester_id,
			unit: req.params.unit_id,
			tri_semester: req.params.tri_semester_id
		})
		.populate("student")
		.exec((err, registration) => {
			console.log(registration)
			res.send(registration)
		})
}