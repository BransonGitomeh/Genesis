module.exports = (req,res) => {
	req.db.student.findOne({
		id:req.params.student_id
	}).exec((err,student)=>{
		console.log(err)
		student.levels_ive_done_before.remove(req.params.level_id)
		student.save((err)=>{
			console.log(err)
			res.send(student)
		})
	})
}