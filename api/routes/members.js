module.exports = function(app,db){
  app.get("/members",(req,res) => {
    db.member.find().exec((err, messages) => res.send(messages))
  }),

  app.post("/members",(req,res) => {
    db.member.create(req.body).exec((err, createdMessage) => res.send(createdMessage))
  }),
  app.post("/memberDelete",(req,res) => {
    var responce = {status:"deleted"}
    db.member.destroy(req.body).exec((err) => res.send(responce))
  })
}
