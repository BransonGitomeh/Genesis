module.exports = (req, res) => {

	req.db.unit_registration.destroy({
		student: req.params.student_id,
		stage: req.params.semester_id,
		unit: req.params.unit_id,
		tri_semester:req.params.tri_semester_id
	}).exec((err, unit_registration) => {
		res.send(unit_registration)
	})
	
}