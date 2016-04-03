//course IT
//level Diploma
//stage stage 4
//studymode fulltime
//units

module.exports = (app,db) => {
  app.get("/basic/getUniCourses/:uniId",(req,res) => {
    db.university.findOne({id:req.params.uniId})
      .populate("proschools.departments.courses")
      .exec((err, university)=>{
        var Collectedcourses = []

        university.proschools.map((proschool)=>{
          proschool.departments.map((dep)=>{
            dep.courses.map((course)=>{
              Collectedcourses.push(course)
            })
          })
        })
        
        res.send(Collectedcourses)
    })
  })

  app.post("/basic/AddUnitToStudent/:student_id",(req,res) => {
    db.student.findOne({id:req.params.student_id}).exec((err,student)=>{
      student.units_im_taking.add(req.body.unit_id)
      student.save((err)=>{
        res.send((err||student))
      })
    })
  })

  app.post("/basic/RemoveUnitFromStudent/:student_id",(req,res) => {
    db.student.findOne({id:req.params.student_id}).exec((err,student)=>{
      student.units_im_taking.remove(req.body.unit_id)
      student.save((err)=>{
        res.send((err||student))
      })
    })
  })

  app.post("/basic/addTrisemToMe/:student_id",(req,res) => {
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
  })

  app.get("/basic/getMyTriSems/:student_id",(req,res) => {
    var student = req.params.student_id;

    db.student.findOne({id:student})
    .populate("tri_semesters_i_pay_for")
    .populate("levels_ive_done_before")
    .populate("courses_ive_done_before")
    .populate("stages_ive_done_before")
    .populate("course")
    .populate("stage")
    .populate("study_mode")
    .populate("level")
    .exec((err,studentFound)=>{
      res.send(studentFound)
    })
  })

  app.get("/basic/getMyPayments/:student_id",(req,res) => {
    var student = req.params.student_id;

    db.student.findOne({id:student})
    .populate("payments_i_have_made.tri_semesters_i_was_paid_to")
    .populate("payments_i_have_made.course_paid_to")
    .populate("payments_i_have_made.level_paid_to")
    .populate("payments_i_have_made.stage_paid_to")
    .exec((err,studentFound)=>{
      res.send(studentFound)
    })
  })

  app.post("/basic/makePaymentToStudent/:student_id",(req,res) => {
    var student_id = req.params.student_id;
    var trisem_id = req.body.trisem_id;
    var receiptNo = req.body.receipt;
    var ammount = req.body.ammount;
    var course = req.body.course_id;
    var level = req.body.level_id;
    var stage = req.body.stage_id;

    var paymentMaker = require("./student").makePaymentTotri_sem;

    paymentMaker(db,trisem_id,student_id,ammount,course,level,stage,receiptNo,()=>{
      db.student.findOne({id:student_id})
      .populate("tri_semesters_i_pay_for")
      .populate("payments_i_have_made")
      .exec((err,studentFound)=>{
        res.send(studentFound)
      })
    })
    // db,tri_sem_id,student_id,paymentAmmount,callback

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
