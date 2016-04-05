module.exports = (req,res) => {
  db.level.findOne({id:req.params.id}).populate("stages").exec((err, level)=>{
    if(err) throw err;
    res.send(level)
  })
}
