module.exports = (req,res) => {
  req.db.payment.create().exec((err, payment)=>{
    req.db.installment.create({ammout:3000,payment_i_belongTo:req.params.paymentId}).exec((err, installment)=>{
      req.db.installment.findOne({id:installment.id}).populate("payment_i_belongTo").exec((err, foundInstallment)=>{

        if(err) throw err;
        res.send(foundInstallment)

      })
    })
  })
}
