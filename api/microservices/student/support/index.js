module.exports = (app,db) => {
  
  app.get("/basic/cleanPayments",(req,res) => {
    db.payment.find().populate("trisem").exec((err, payments)=>{
      payments.map((payment)=>{
        if(payment.trisem){
          console.log(payment.trisem.id)
        }else{
          db.payment.destroy({id:payment.id}).exec((err, payments)=>{
            console.log("deleted")
          })
        }
      })
      res.send(payments)
    })
  })

  app.get("/basic/cleanStudents",(req,res) => {
    db.student.find().populate("payments").exec((err, students)=>{
      students.map((student)=>{
        // student.payments[0] ... look for students with no payment objects
        // student.name === "test 1" ...per condition
        if(student.name != "test 1"){
          console.log(student.payments[0].id)
        }else{
          db.student.destroy({id:student.id}).exec((err, student)=>{
            console.log("deleted")
          })
        }
      })
      res.send(students)
    })
  })

  app.get("/basic/cleanUniversities",(req,res) => {
    db.university.find().populate("noticeboard").exec((err, universities)=>{
        // student.payments[0] ... look for students with no payment objects
        // student.name === "test 1" ...per condition
      universities.map((university)=>{
        if(university.noticeboard){
          console.log((university.name || university.uniName) + " is okey")
        }else{
          db.noticeboard.create({university:university.id}).exec((err, noticeboard)=>{
            db.university.update({id:university.id},{noticeboard:noticeboard.id}).exec(function(err,updated){
              console.log("fixed" + (university.name || university.uniName))
            })
          })
        }
      })

      res.send(universities)
    })
  })
}
