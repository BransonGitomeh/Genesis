module.exports = (req,res) => {
  req.db.noticeboard_item.destroy({id:req.params.id}).exec((err)=>{
    if(err) throw err;
    var responce = {
      status:"done"
    }
    res.send(responce)
  })
}
