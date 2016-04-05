module.exports = (req,res) => {
  db.level.findOne({id:req.params.id}).populate("stages").exec((err, level)=>{
    if(err) throw err;
    db.stage.create({name:req.body.name,level:level.id}).exec(function(err,level){
      res.send(level);
    })
  })
}
