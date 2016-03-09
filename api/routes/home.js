module.exports = function(app,db){
  app.get("/",(req,res) => res.send("In the begining there was node, and then came frameworks and they <b>fucked everything up</b>"));

  app.get("/events",(req,res) => {
    db.event.find().exec((err,found) => {
      res.send(found)
    })
  });

  app.post("/events",(req,res) => {
    db.event.create({title:req.body.title,date:req.body.date}).exec((err,created) => {
      res.send(created)
    })
    // res.send(req.body)
  });

  app.post("/eventDelete",(req,res) => {
    // db.event.create({title:"thing",date:"date"}).exec((err,created) => {
    //   res.send(created)
    // })

    db.event.destroy({id:req.body.id}).exec((err) => {
      if(err) throw err

      var status = {
        status:"success"
      }
      res.send(status)
    })
    // res.send(req.body)
  })
}
