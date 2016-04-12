module.exports = (req,res) => {
  var student = req.params.student_id;

  req.db.student.findOne({id:student})
  .populate("tri_semesters_i_pay_for")
  .populate("levels_ive_done_before.course")
  .populate("courses_ive_done_before")
  .populate("stages_ive_done_before.level.course")
  .populate("course")
  .populate("stage")
  .populate("study_mode")
  .populate("level")
  .exec((err,studentFound)=>{
    res.send(studentFound)
  })
}
