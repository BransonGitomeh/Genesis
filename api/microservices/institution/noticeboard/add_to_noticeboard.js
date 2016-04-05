module.exports = (req,res) => {
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
  
}
