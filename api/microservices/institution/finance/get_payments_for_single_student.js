module.exports = (req,res) => {
  req.db.payment.findOne({id:req.params.paymentId}).populate("installments").exec((err, payment)=>{
    res.send(payment)
  })
}
