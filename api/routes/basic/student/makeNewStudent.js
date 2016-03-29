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
  	db.student.create({adm:req.body.adm,name:req.body.names}).exec(function(err,created){
  		if(err) throw err;
  		// res.send(created)
  		req.progress.createStudent = created;
  		next();
  	})
  };

  createRelationships = (req,res,next) => {
  	var student = req.progress.createStudent.id

  	db.student.update(
  		{id:student},
  		{
  			course:req.body.course,
  			level:req.body.level,
  			stage:req.body.stage,
  			study_mode:req.body.study_mode
  		}
  	).exec((err,student) => next())
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
        console.log(payment)
        var length = tri_semesters.length - 1
        console.log(length + " - " + counter)
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
  	db.student.find().populate("course").populate("level").populate("stage").populate("study_mode").exec((err,student) => res.send((student || err)))
  }

  app.post("/basic/makeStudent",[
  	createStudent,
  	createRelationships,
    connectPayments,
  	respond
  ])

  app.get("/basic/getAllStudents",(req,res)=>{
    db.student.find().populate("course").populate("level").populate("stage").populate("study_mode").exec((err,students)=>res.send((err||students)))
  })
//getting students inside courses in a school
//passes through every pschool and course inside looking for those
  app.get("/basic/getAllStudents/:uniId",(req,res)=>{

    db.university.findOne({id:req.params.uniId})
    .populate("proschools")
    .exec((err,university)=>{
      var Allstudents = []
      var length = university.proschools.length - 1;
      var counter = 0;

      function getCourses(proschool){
        console.log(proschool)

        db.proschool.findOne({id:proschool.id}).populate("courses").exec((err,foundProschool)=>{
          var courses_length = foundProschool.courses.length - 1
          var courses_counter = 0

          function getStudents(course){
            // console.log(course)
            db.course.findOne({id:course.id}).populate("students").exec((err,course)=>{
              course.students.map((student)=>{
                db.student.findOne({id:student.id}).populate("course").populate("level").populate("stage").populate("study_mode").exec((err,foundStudent)=>{
                  console.log(foundStudent)
                  Allstudents.push(foundStudent)
                })
              })
              // console.log(course.students)

              if(courses_length - 1 == courses_counter){
                //move to next proschool

                if(length - 1 == counter){
                //move to next proschool
                  console.log("finifhed all proschools")
                  console.log(Allstudents)
                }else{
                  counter ++
                  console.log(length + " = " + counter)
                  // getCourses(university.proschools[counter])

                  if(university.proschools[counter]){
                    console.log(university.proschools[counter])
                    getCourses(university.proschools[counter])
                  }else{
                    // counter ++
                    // getCourses(university.proschools[counter])
                    // console.log(university.proschools[counter])
                    // console.log("there is o other pschool in that school")
                  }
                }

              }else{
                courses_counter ++
                console.log(courses_length + " = " + courses_counter)
                // getStudents((proschool.courses[courses_counter]))

                 if(foundProschool.courses[courses_counter]){
                    // console.log(foundProschool.courses[courses_counter])
                     getStudents(foundProschool.courses[courses_counter])
                  }else{
                    counter ++

                    if(university.proschools[counter]){
                      console.log(university.proschools[counter])
                      getCourses(university.proschools[counter])
                    }else{
                      // counter ++
                      // getCourses(university.proschools[counter])
                      // console.log(university.proschools[counter])
                      res.send(Allstudents)
                      console.log("there is o other pschool in that school")
                    }
                    // console.log(foundProschool)
                  }
              }

            })
          }

          // console.log(foundProschool)

          if(foundProschool.courses[courses_counter]){
            // console.log(foundProschool.courses[courses_counter])
             getStudents(foundProschool.courses[courses_counter])
          }else{
            counter ++
            // getCourses(university.proschools[counter])
            // console.log(foundProschool)
            console.log("there are no more pschools here")
            res.send(Allstudents)
          }
         
        })
      }

      


      if(university.proschools[counter]){
        console.log(university.proschools[counter])
        getCourses(university.proschools[counter])
      }else{
        // counter ++
        // getCourses(university.proschools[counter])
        // console.log(university.proschools[counter])
        console.log("there are no pschools in this school")
        res.send(Allstudents)
      }

    })




  })
}