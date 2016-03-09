module.exports = function(app,db){
  app.get("/sermons",(req,res) => {
    db.sermon.find().exec((err, found) => {
      res.send(found)
    })
    // res.send("the cors req wa successfull")
  }),

  app.post("/sermons",(req,res) => {
    db.sermon.create({author:req.body.author,content:req.body.content}).exec((err, created) => {
      res.send(created)
    })
  })

  app.post("/sermonDelete",(req,res) => {
    db.sermon.destroy({id:req.body.id}).exec((err) => {
      var responce = {status:"success"}
      res.send(responce)
    })
  })
}
