//put tests for api's here to keep them away from the normal api's

module.exports = function(app,db){
  app.get("/",(req,res) => {
    res.send("In the begining there was the word, and the word was with God, and the word was God")
  })

  app.get("/basic/getUniversities",(req,res) => {
    db.university.find().populate("departments").exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.get("/basic/getRevokedAdmins/:id",(req,res) => {
    db.university.findOne({id:req.params.id}).populate("revoked_admins").exec((err, university)=>{
      if(err) throw err;
      res.send(university.revoked_admins)
    })
  })

  app.get("/basic/getAdmins/:id",(req,res) => { 
    db.university.findOne({id:req.params.id}).populate("admins").exec((err, university)=>{
      if(err) throw err;
      res.send(university.admins)
    })
  })

  app.post("/basic/revokeAdmin/:id",(req,res) => {
    db.university.findOne({id:req.params.id}).populate("revoked_admins").exec((err, university)=>{
      if(err) throw err;
      university.admins.remove(req.body.userId)
      university.revoked_admins.add(req.body.userId)
      university.save((err) => {
        var responce = {
          status:"success"
        }
        res.send(responce)
      })
    })
  })

  app.post("/basic/restoreAdmin/:id",(req,res) => {
    db.university.findOne({id:req.params.id}).populate("revoked_admins").exec((err, university)=>{
      if(err) throw err;
      university.admins.add(req.body.userId)
      university.revoked_admins.remove(req.body.userId)
      university.save((err) => {
        var responce = {
          status:"success"
        }
        res.send(responce)
      })
    })
  })

  app.post("/basic/removeAdmin/:id",(req,res) => {
    db.university.findOne({id:req.params.id}).populate("revoked_admins").exec((err, university)=>{
      if(err) throw err;
      university.admins.remove(req.body.userId)
      university.revoked_admins.remove(req.body.userId)
      university.save((err) => {
        var responce = {
          status:"success"
        }
        res.send(responce)
      })
    })
  })

  app.get("/basic/getUniversity/:id",(req,res) => {
    db.university.findOne({id:req.params.id}).exec((err, universities)=>{
      if(err) throw err;
      res.send(universities)
    })
  })

  app.post("/basic/addToNoticeboard/:uniId",(req,res) => {
    db.university.findOne({id:req.params.uniId}).populate("noticeboard").exec((err, foundUniversity)=>{

      db.noticeboard.findOne({id:foundUniversity.noticeboard.id}).exec((err, foundNoticeboard)=>{

        db.noticeboard_item.create(req.body).exec((err, createdNoticeboardItem)=>{

          foundNoticeboard.noticeboard_items.add(createdNoticeboardItem.id)

          foundNoticeboard.save((err)=>{
            if(err) throw err;

            db.noticeboard.findOne({id:foundUniversity.noticeboard.id}).populate("noticeboard_items").exec((err, secondndfoundNoticeboard)=>{
              res.send(secondndfoundNoticeboard)
            })

          })

        })

      })

    })
  })

  app.get("/basic/removeFromNoticeboard/:id",(req,res) => {
    db.noticeboard_item.destroy({id:req.params.id}).exec((err)=>{
      if(err) throw err;
      var responce = {
        status:"done"
      }
      res.send(responce)
    })
  })

  app.get("/basic/makeNoticeOld/:id",(req,res) => {
    db.noticeboard_item.findOne({id:req.params.id}).populate("myboard").populate("oldboard").exec((err,notice)=>{
      if(err) throw err;
      db.noticeboard_item.update({id:req.params.id},{myboard:null,oldboard:notice.myboard.id}).exec((err,item)=>{
        res.send(item)
      })
      
    })
  })


  app.get("/basic/getNoticeboard/:uniId",(req,res) => {
    db.university.findOne({id:req.params.uniId}).populate("noticeboard").exec((err, foundUniversity)=>{
      if(err) throw err;
      db.noticeboard.findOne({id:foundUniversity.noticeboard.id}).populate("noticeboard_items").exec((err, foundNoticeboard)=>{
        if(err) throw err;
        res.send(foundNoticeboard)
      })

    })
  })

  app.get("/basic/getNoticeboardOld/:uniId",(req,res) => {
    db.university.findOne({id:req.params.uniId}).populate("noticeboard").exec((err, foundUniversity)=>{
      db.noticeboard.findOne({id:foundUniversity.noticeboard.id}).populate("old_noticeboard_items").exec((err, foundNoticeboard)=>{
        // setTimeOut(() => {},2000)
        res.send(foundNoticeboard)
      })

    })
  })

  app.post("/basic/makeUniversity",(req,res) => {
    db.university.create(req.body).exec((err, createdUniversity)=>{

      db.noticeboard.create().exec((err, createdNoticeboard) => {

        db.university.update({id:createdUniversity.id},{noticeboard:createdNoticeboard.id}).exec((err) => {
          db.noticeboard.update({id:createdNoticeboard.id},{university:createdUniversity.id}).exec((err) => {

            db.noticeboard.findOne({id:createdNoticeboard.id}).populate("university").exec((err, foundNoticeboard) => {

              db.university.findOne({id:createdUniversity.id}).populate("noticeboard").exec((err, foundUniversity) => {

                var responce = {
                  university:foundUniversity,
                  noticeboard:foundNoticeboard
                }

                res.send(responce)

              })

            })

          })

        })

      })

    })

  })

}
