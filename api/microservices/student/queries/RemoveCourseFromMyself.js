module.exports = (req,res) => {
	req.db.student.findOne({
		id:req.params.student_id
	}).exec((err,student)=>{
		if(err) throw err
		student.courses_ive_done_before.remove(req.params.course_id)
		student.save((err)=>{
			if(err) throw err
			res.send(student)
		})
	})
}