module.exports = (req, res) => {
	req.db.student.findOne({
			id: req.params.student_id
		})
		.populate("units_ive_done_before")
		.exec((err, student) => {
			res.send(student)
		})
}