module.exports = (req,res) => {
  var student = req.params.student_id;

  req.db.student.findOne({id:student})
  .populate("payments_i_have_made.tri_semesters_i_was_paid_to")
  .populate("payments_i_have_made.course_paid_to")
  .populate("payments_i_have_made.level_paid_to")
  .populate("payments_i_have_made.stage_paid_to")
  .exec((err,studentFound)=>{
    res.send(studentFound)
  })
}
