module.exports = function(app,db){
  app.get("/get",(req,res) => {
    res.send("the cors req wa successfull")
  }),

  app.post("/post",(req,res) => {
    res.send(req.body.name)
  })
}
