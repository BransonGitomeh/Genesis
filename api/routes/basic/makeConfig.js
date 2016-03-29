module.exports = function(app,db){

  app.post("/basic/makeUnits/:department_id",(req,res) => {
    // console.log(req.params.department_id)
    db.unit.create({name:req.body.name,dep:req.params.department_id}).exec((err,craetedUnit) => {
      if(err) throw err;
      res.send(craetedUnit)
    })
  })

  app.get("/basic/getAllStudy_sessions",(req,res) => {
    db.university.find().populate("study_sessions").exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.get("/basic/getStudy_sessions/:uniId",(req,res) => {
    db.university.findOne({id:req.params.uniId}).populate("study_sessions").exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.post("/basic/makeStudy_session/:uniId",(req,res) => {
    db.study_session.create({name:req.body.name,uni:req.params.uniId}).exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.get("/basic/getAllTri_semesters",(req,res) => {
    db.university.find().populate("tri_semesters").exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.get("/basic/getTri_semesters/:uniId",(req,res) => {
    db.university.findOne({id:req.params.uniId}).populate("tri_semesters").populate("active_tri_semester").exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.get("/basic/getActiveTri_semester/:uniId",(req,res) => {
    db.university.findOne({id:req.params.uniId}).populate("active_tri_semester").exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.post("/basic/makeTri_semesterActive/:uniId",(req,res) => {
    db.university.update({id:req.params.uniId},{active_tri_semester:req.body.tri_semester_id}).exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.get("/basic/makeTri_semesterDead/:tri_semester_id",(req,res) => {
    db.tri_semester.destroy({id:req.params.tri_semester_id}).exec((err, tri_semester)=>{
      if(err) throw err;
      res.send(tri_semester)
    })
  })

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

  app.post("/basic/makeDepartments/:uni_id",(req,res) => {
    db.department.create({name:req.body.name,uni:req.params.uni_id}).exec((err, department)=>{
      if(err) throw err;
      res.send(department)
    })
  })

  app.post("/basic/addUnitToStage/:stage_id",(req,res) => {
    db.stage.findOne({id:req.params.stage_id}).exec((err,stage) => {
      stage.units_i_offer.add(req.body.unit_id)
      stage.save((err) => {
        if(err) throw err;
        res.send(stage)
      })
    })
  })

}
