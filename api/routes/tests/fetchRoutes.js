//put tests for api's here to keep them away from the normal api's

module.exports = function(app,db){

  app.get("/fetch/universities",(req,res) => {
    db.university.find().populate("admins").exec((err, users)=>{
      res.send(users)
    })
  })

  app.get("/fetch/users",(req,res) => {
    db.user.find().populate("unis_i_admin").exec((err, universities)=>{
      res.send(universities)
    })
  })

  app.get("/fetch/files",(req,res) => {
    var path = __dirname + "/../index.html"
    console.log(path)
    // res.sendFile(__dirname + "/../index.html")
  })

}
//
