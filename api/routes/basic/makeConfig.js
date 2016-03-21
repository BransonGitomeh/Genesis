//put tests for api's here to keep them away from the normal api's

module.exports = function(app,db){

  app.get("/basic/getUnis",(req,res) => {
    db.university.find().exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.post("/basic/makeSchool/:id",(req,res) => {
    //name
    db.university.findOne({id:req.params.id}).populate("proschools").exec((err, university)=>{
      if(err) throw err;
      db.proschool.create({name:req.body.name,uni:university.id}).exec(function(err,proschool){
        res.send(proschool);
      })
      
    })
  })

  app.post("/basic/makeCourse/:id",(req,res) => {
    db.proschool.findOne({id:req.params.id}).populate("courses").exec((err, proschool)=>{
      if(err) throw err;

      db.course.create({name:req.body.name,school:proschool.id}).exec(function(err,proschool){
        res.send(proschool);
      })
      // res.send(proschools)
    })
  })

  app.post("/basic/makeLevel/:id",(req,res) => {
    db.course.findOne({id:req.params.id}).populate("levels").exec((err, course)=>{
      if(err) throw err;

      db.level.create({name:req.body.name,course:course.id}).exec(function(err,level){
        res.send(level);
      })
    })
  })

  app.post("/basic/makeStage/:id",(req,res) => {
    db.level.findOne({id:req.params.id}).populate("stages").exec((err, level)=>{
      if(err) throw err;
      db.stage.create({name:req.body.name,level:level.id}).exec(function(err,level){
        res.send(level);
      })
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
