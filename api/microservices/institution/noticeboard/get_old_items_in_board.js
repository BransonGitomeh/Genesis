module.exports = (req,res) => {
  db.university.findOne({id:req.params.uniId}).populate("noticeboard").exec((err, foundUniversity)=>{
    db.noticeboard.findOne({id:foundUniversity.noticeboard.id}).populate("old_noticeboard_items").exec((err, foundNoticeboard)=>{
      // setTimeOut(() => {},2000)
      res.send(foundNoticeboard)
    })

  })
}
