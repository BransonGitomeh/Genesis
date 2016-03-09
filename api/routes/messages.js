module.exports = function(app,db){
  app.get("/messages",(req,res) => {
    db.message.find().exec((err, messages) => res.send(messages))
  }),

  app.post("/messages",(req,res) => {
    db.message.create(req.body).exec((err, createdMessage) => res.send(createdMessage))
  }),

  app.post("/messagesDelete",(req,res) => {
    var responce = {status:"deleted"}
    db.message.destroy(req.body).exec((err) => res.send(responce))
  })
}
