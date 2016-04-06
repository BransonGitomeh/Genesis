module.exports = (req,res) => {
  var student_id = req.params.student_id;
  var trisem_id = req.body.trisem_id;
  var receiptNo = req.body.receipt;
  var ammount = req.body.ammount;
  var course = req.body.course_id;
  var level = req.body.level_id;
  var stage = req.body.stage_id;

  var paymentMaker = require("../support/student").makePaymentTotri_sem;

  paymentMaker(req.db,trisem_id,student_id,ammount,course,level,stage,receiptNo,()=>{
    req.db.student.findOne({id:student_id})
    .populate("tri_semesters_i_pay_for")
    .populate("payments_i_have_made")
    .exec((err,studentFound)=>{
      res.send(studentFound)
    })
  })
  // db,tri_sem_id,student_id,paymentAmmount,callback

}
