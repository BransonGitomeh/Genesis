// var data = {
//                   adm:ctrl.schema.adm,
//                   name:ctrl.schema.name(),

//                   course: m.route.param("course_id"),//it
//                   level: m.route.param("level_id"),//diploma
//                   stage: m.route.param("stage_id"),//stage 5
//                   study_mode: m.route.param("study_mode"),//holidays
//                 }

// req.body.course
// req.body.level
// req.body.stage
// req.body.study_mode


module.exports = (app,db) => {
  createStudent = (req,res,next) => {
  	req.progress = {}
  	db.student.create({
      adm:req.body.adm,
      name:req.body.names,

      course:req.body.course,
      level:req.body.level,
      stage:req.body.stage,
      study_mode:req.body.study_mode
    }).exec(function(err,created){
  		if(err) throw err;
  		// res.send(created)
      // console.log(created)
  		req.progress.createStudent = created;
  	
      //save this records in the students hostory of stuff done before
      db.course.findOne({id:req.body.course}).exec((err,course)=> {
        course.students_that_have_done_me_before.add(created.id)
        course.save()
      })

      db.level.findOne({id:req.body.level}).exec((err,level)=> {
        level.students_that_have_done_me_before.add(created.id)
        level.save()
      })

      db.stage.findOne({id:req.body.stage}).exec((err,stage)=> {
        stage.students_that_have_done_me_before.add(created.id)
        stage.save()
      })

      db.study_session.findOne({id:req.body.study_mode}).exec((err,study_session)=> {
        study_session.students_that_have_done_me_before.add(created.id)
        study_session.save()
      })

      //find the activesem and make it available to the student, register him to it
      db.course.findOne({id:req.body.course})
      .populate("school.uni.active_tri_semester").exec((err,course)=> {

        created.tri_semesters_i_pay_for.add(course.school.uni.active_tri_semester.id);
        created.levels_ive_done_before.add(req.body.level);
        created.stages_ive_done_before.add(req.body.stage);
        created.courses_ive_done_before.add(req.body.course);

        created.save(console.log);

      })

      // tri_semesters_i_pay_for

      next();
  	})
  };




  createRelationships = (req,res,next) => {
  	// var student = req.progress.createStudent
    next()
  	// db.student.findOne({id:student.id}).exec((err,student) => {
   //    student.my_universities.add(req.params.uniid)
   //    student.save((err) => )
   //  })
  }

  connectPayments = (req,res,next) => {
    var student = req.progress.createStudent.id
    var counter = 0;
    function makePaymentConnection(student_id,tri_semesters,next){
      //make payment,
      //connect it to student
      //connect it to trisemester
      //save it
      //go to next trisemester

      var trisem_id = tri_semesters[counter].id

      db.payment.create({student:student,trisem:trisem_id}).exec((err,payment)=>{
        // console.log(payment)
        var length = tri_semesters.length - 1
        // console.log(length + " - " + counter)
        if(counter === length){
          next()
        }else{
          counter ++
          makePaymentConnection(student_id,tri_semesters,next)
        }
      })
    }

    db.course.findOne({id:req.body.course}).populate("school").exec((err,course)=>{
      db.proschool.findOne({id:course.school.id}).populate("uni").exec((err,proschool)=>{
        db.university.findOne({id:proschool.uni.id}).populate("tri_semesters").exec((err,university)=>{
          makePaymentConnection(student,university.tri_semesters,next)

        })
      })
    })


  }

  respond = (req,res,next) => {
  	db.student.findOne({id:req.progress.createStudent.id})
    .populate("course")
    .populate("level")
    .populate("stage")
    .populate("study_mode")
    .exec((err,student) => {
      // console.log(student)
      req.progress = {}
      res.send((student || err))
    })
  }

  app.post("/basic/makeStudent/:uniId",[
  	createStudent,
  	createRelationships,
    connectPayments,
  	respond
  ])


//getting students inside courses in a school
//passes through every pschool and course inside looking for those
  app.get("/basic/getAllStudents/:uniId",(req,res)=>{
    
    require("./student").getAllStudents(db,req.params.uniId,(students)=>{
      res.send(students)
    })
    
  })
}
