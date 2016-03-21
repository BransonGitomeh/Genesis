//put tests for api's here to keep them away from the normal api's

module.exports = function(app,db){

  app.get("/basic/getUnis",(req,res) => {
    db.university.find().exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.get("/basic/getSchools/:id",(req,res) => {
    db.university.findOne({id:req.params.id}).populate("proschools").exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.get("/basic/getCourses/:id",(req,res) => {
    db.proschool.findOne({id:req.params.id}).populate("courses").exec((err, proschools)=>{
      if(err) throw err;
      res.send(proschools)
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

  app.get("/basic/getDepartments/:id",(req,res) => {
    db.university.findOne({id:req.params.id}).populate("departments").exec((err, university)=>{
      if(err) throw err;
      res.send(university)
    })
  })


}
