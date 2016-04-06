module.exports = (req,res) => {
  req.db.university.findOne({id:req.params.uniId}).populate("noticeboard").exec((err, foundUniversity)=>{

    req.db.noticeboard.findOne({id:foundUniversity.noticeboard.id}).exec((err, foundNoticeboard)=>{

      req.db.noticeboard_item.create(req.body).exec((err, createdNoticeboardItem)=>{

        foundNoticeboard.noticeboard_items.add(createdNoticeboardItem.id)

        foundNoticeboard.save((err)=>{
          if(err) throw err;

          req.db.noticeboard.findOne({id:foundUniversity.noticeboard.id}).populate("noticeboard_items").exec((err, secondndfoundNoticeboard)=>{
            res.send(secondndfoundNoticeboard)
          })

        })

      })

    })

  })
  
}
