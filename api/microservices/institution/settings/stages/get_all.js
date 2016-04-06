module.exports = (req,res) => {
  req.db.level.findOne({id:req.params.level_id}).populate("stages").exec((err, level)=>{
    if(err) throw err;
    console.log(level)
    res.send(level)
  })
}
