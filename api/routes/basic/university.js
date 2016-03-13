//put tests for api's here to keep them away from the normal api's

module.exports = function(app,db){
  app.get("/basic/getUniversities",(req,res) => {
    db.university.find().exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })
}
