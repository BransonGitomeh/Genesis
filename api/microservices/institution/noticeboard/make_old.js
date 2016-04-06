module.exports = (req,res) => {
  req.db.noticeboard_item.findOne({id:req.params.id}).populate("myboard").populate("oldboard").exec((err,notice)=>{
    if(err) throw err;
    req.db.noticeboard_item.update({id:req.params.id},{myboard:null,oldboard:notice.myboard.id}).exec((err,item)=>{
      res.send(item)
    })

  })
}
