module.exports = (req,res) => {
  db.student.findOne({id:req.params.student_id})
  .populate("level.stages")
  .populate("course")
  .populate("units_im_taking")
  .populate("stage.units_i_offer")
  .exec((err, level)=>{
    if(err) throw err;
    res.send(level)
  })
}
