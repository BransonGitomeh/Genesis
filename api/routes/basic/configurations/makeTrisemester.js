module.exports = (app,db) => {
  makeTri_semester = (req,res,next) => {
    req.progress = {}
    db.tri_semester.create({name:req.body.name,uni:req.params.uniId}).exec((err, tri_semester)=>{
      if(err) throw err;
      req.progress.tri_semester = tri_semester
      // res.send(tri_semester)
      next()
    })
  };

  getUniWithProschools = (req,res,next) => {
    // req.progress = {}
    db.university.findOne({id:req.params.uniId}).populate("proschools").exec((err,uni)=>{
      // console.log(uni)
      if(err) throw err
      req.progress.foundUni = uni;
      next();
    })
  };

  getAllCourses = (req,res,next) => {
    var proschools = req.progress.foundUni.proschools;
    req.progress.courses = [];

    var proschool_length = proschools.length;
    var proschool_counter = 0

    function getCourses(proschool){
      db.proschool.findOne({id:proschool.id}).populate("courses").exec((err,proschool)=>{
        // console.log(proschool)
        proschool.courses.map((course)=>req.progress.courses.push(course))
        if(err) throw err
        // next();
        if(proschool_length -1 == proschool_counter){
          next()
        }else{
          proschool_counter ++
          getCourses(proschools[proschool_counter])
        }
      })
    }

    getCourses(proschools[proschool_counter]);
   
  };

  getAllStudentsInCourses = (req,res,next) => {
    var courses = req.progress.courses;
    req.progress.students = []
    var courses_length = courses.length;
    var courses_counter = 0

    function getStudents(course){
      db.course.findOne({id:course.id}).populate("students").exec((err,course)=>{
        // console.log(course)
        course.students.map((student)=>req.progress.students.push(student))
        if(err) throw err
        // next();
        if(courses_length -1 == courses_counter){
          next()
        }else{
          courses_counter ++
          getStudents(courses[courses_counter])
        }
      })
    }

    getStudents(courses[courses_counter]);
  }

  makePaymentObjects = (req,res,next) => {
    var students = req.progress.students
    // console.log(students)
    var length = students.length;
    var counter = 0

    function makeObjects(student){
      db.payment.create({trisem:req.progress.tri_semester.id}).exec((err,payment)=>{
        db.student.findOne({id:student.id}).exec((err,student)=>{
          console.log(student)
          student.payments.add(payment.id)

          student.save((err)=>{
            if(err) throw err
            // next();
            if(length - 1 == counter){
              next()
            }else{
              counter ++
              makeObjects(students[counter])
            }
          })

          
        })
      })
    }
    if(students[counter]){
      makeObjects(students[counter])
    }else{
      next()
    }
    
  }



  respond = (req,res,next) => {
    //get uni, with courses,
    //pic courses populating student
    //pick students, making payment entries and 
    //ready for installments picking
    //we can start math now()

   

    db.student.find().populate("payments").exec((err,foundStudents)=>{
      if(err) throw err;
      res.send(foundStudents)
    })
  }

  app.post("/basic/makeTri_semester/:uniId",[
    makeTri_semester,
    getUniWithProschools,
    getAllCourses,
    getAllStudentsInCourses,

    makePaymentObjects,

    respond
  ])
}