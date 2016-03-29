//course IT
//level Diploma
//stage stage 4
//studymode fulltime
//units

module.exports = (app,db) => {
  // app.get("/basic/makeStudent",(req,res) => {
  //   db.student.create({name:"branie"}).exec((err, university)=>{
  //     if(err) throw err;
  //     res.send(university)
  //   })
  // })

  app.get("/basic/getStudents",(req,res) => {
    db.student.find().exec((err, university)=>{
      if(err) throw err;
      res.send(university)
    })
  })

  app.get("/basic/getUniCourses/:uniId",(req,res) => {
    db.university.findOne({id:req.params.uniId}).populate("proschools").exec((err, university)=>{
      if(err) throw err;
      // res.send(university)

      var length = university.proschools.length
      var  counter = 0;
      var Collectedcourses = []
      // console.log(university.proschools[counter])

      function getCourses(proschool){
      	// console.log(proschool)
      	db.proschool.findOne({id:proschool.id}).populate("courses").exec((err,school)=>{
      		// console.log(school.courses)

      		school.courses.map((course)=> Collectedcourses.push(course))

      		if(counter >= length - 1){
      			next()
      		}else{
      			counter ++
      			getCourses(university.proschools[counter])
      		}
      	})
      }

      getCourses(university.proschools[counter])

      function next(){
      	console.log(Collectedcourses)
      	res.send(Collectedcourses)
      	// console.log("completed all of them")
      }

    })
  })

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
