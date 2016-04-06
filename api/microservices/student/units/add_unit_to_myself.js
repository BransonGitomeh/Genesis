module.exports = (req,res) => {
  db.student.findOne({id:req.params.student_id}).exec((err,student)=>{
    student.units_im_taking.add(req.body.unit_id)
    student.save((err)=>{
      res.send((err||student))
    })
  })
}
