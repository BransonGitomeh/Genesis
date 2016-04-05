module.exports = (app,db) => {
  
  app.get("/basic/feePayment/:paymentId",(req,res) => {
    db.payment.create().exec((err, payment)=>{
      db.installment.create({ammout:3000,payment_i_belongTo:req.params.paymentId}).exec((err, installment)=>{
        db.installment.findOne({id:installment.id}).populate("payment_i_belongTo").exec((err, foundInstallment)=>{

          if(err) throw err;
          res.send(foundInstallment)

        })
      })
    })
  })

  app.get("/basic/getfeePayment/:paymentId/:student",(req,res) => {
    db.payment.findOne({id:req.params.paymentId}).populate("installments").exec((err, payment)=>{
      res.send(payment)
    })
  })

  app.get("/basic/getAllfeePayments",(req,res) => {
    db.student.find().populate("payments").exec((err, payment)=>{
      res.send(payment)
    })
  })

  app.get("/basic/getfeePayments/:student_id",(req,res) => {
    db.student.findOne({id:req.params.student_id})
    .populate("payments.installments")
    .populate("level")
    .populate("course")
    .populate("stage")
    .populate("study_mode")
    .exec((err, student)=>{
      var length = student.payments.length - 1
      var counter = 0;
      var sums = []

      function mathIt(payment){
        db.payment.findOne({id:payment.id}).populate("installments").populate("trisem").exec((err, payment)=>{
          var sum = 0
          payment.installments.map((installment)=>{
            sum = Number(sum) + Number(installment.ammount)
          })

          payment.sum = sum
          sums.push(payment.sum)

          if(counter == length){
            nextthing()
          }else{
            counter ++ 
            mathIt(student.payments[counter])
          }
        })
      }

      function nextthing(){
        var adds = sums.reduce((a, b) => a + b, 0);
        student.sums=adds
        res.send(student)
      }

      mathIt(student.payments[counter])

    })
  })

  // add an installment to a payment to a semester
  app.post("/basic/addInstalment/:payment_id",(req,res) => {
    db.payment.findOne({id:req.params.payment_id}).exec((err, payment)=>{
      db.installment.create({ammount:req.body.ammount,receipt:req.body.receipt}).exec((err, installment)=>{
        console.log(installment)
        payment.installments.add(installment.id)

        payment.save((err)=>{
          db.payment.findOne({id:req.params.payment_id}).populate("installments").exec((err, payment)=>{
            console.log(payment)
            res.send(payment)
          })
        })
        
      })
    })
  })

  app.get("/basic/getInstallments/:payment_id",(req,res) => {
    db.payment.findOne({id:req.params.payment_id}).populate("installments").populate("trisem").exec((err, payment)=>{
      var sum = 0
      payment.installments.map((installment)=>{
        sum = Number(sum) + Number(installment.ammount)
      })

      payment.sum = sum

      res.send(payment)
    })
  })

}

37