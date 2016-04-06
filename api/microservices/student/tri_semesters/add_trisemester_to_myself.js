module.exports = (req,res) => {
  var trisem_id = req.body.trisem_id;
  var student = req.params.student_id;

  db.student.findOne({id:student}).populate("tri_semesters_i_pay_for").exec((err,studentFound)=>{
    studentFound.tri_semesters_i_pay_for.add(trisem_id);

    studentFound.save((err)=>{
      if(err) throw err
      db.student.findOne({id:student})
       .populate("tri_semesters_i_pay_for")
       .exec((err,studentFound2)=>{
          res.send(studentFound2)
        })
    })
  })
}
