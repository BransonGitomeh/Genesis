//put tests for api's here to keep them away from the normal api's

module.exports = function(app,db){

  app.get("/basic/getSchools/:id",(req,res) => {
    db.university.findOne({id:req.params.id}).populate("proschools").exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.get("/basic/getCourses/:department_id",(req,res) => {
    db.department.findOne({id:req.params.department_id}).populate("courses").exec((err, department)=>{
      if(err) throw err;
      res.send(department)
    })
  })

  app.get("/basic/getLevels/:id",(req,res) => {
    db.course.findOne({id:req.params.id}).populate("levels").exec((err, course)=>{
      if(err) throw err;
      res.send(course)
    })
  })

  app.get("/basic/getStages/:id",(req,res) => {
    db.level.findOne({id:req.params.id}).populate("stages").exec((err, level)=>{
      if(err) throw err;
      res.send(level)
    })
  })

  app.get("/basic/getUnitsOffered/:id",(req,res) => {
    db.stage.findOne({id:req.params.id}).populate("units_i_offer").exec((err, level)=>{
      if(err) throw err;
      res.send(level)
    })
  })

  app.get("/basic/getUnitsAvailable/:id",(req,res) => {
    db.department.findOne({id:req.params.id}).populate("units").exec((err, level)=>{
      if(err) throw err;
      res.send(level)
    })
  })

  app.get("/basic/studentsConfiguration/:student_id",(req,res) => {
    db.student.findOne({id:req.params.student_id})
    .populate("level.stages")
    .populate("course")
    .populate("units_im_taking")
    .populate("stage.units_i_offer")
    .exec((err, level)=>{
      if(err) throw err;
      res.send(level)
    })
  })

  app.get("/basic/getUnitsInCourse/:stage_id",(req,res) => {
    db.stage.findOne({id:req.params.id})
      .populate("units_i_offer").exec((err, level)=>{
      if(err) throw err;
      res.send(level)
    })
  })

  app.get("/basic/getDepartments/:school_id",(req,res) => {
    db.proschool.findOne({id:req.params.school_id}).populate("departments").exec((err, university)=>{
      if(err) throw err;
      res.send(university)
    })
  })


}
