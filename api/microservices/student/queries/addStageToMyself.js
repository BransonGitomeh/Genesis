module.exports = (req,res) => {
	req.db.student.findOne({
		id:req.params.student_id
	}).exec((err,student)=>{
		// if(err) throw err
		console.log(err)
		student.stages_ive_done_before.add(req.params.stage_id)
		student.save((err)=>{
			// if(err) throw err
				console.log(err)
			res.send(student)
		})
	})
}