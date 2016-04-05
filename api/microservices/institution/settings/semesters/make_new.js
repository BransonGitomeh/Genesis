module.exports = (req,res) => {
  db.course.findOne({id:req.params.id}).populate("levels").exec((err, course)=>{
    if(err) throw err;

    db.level.create({name:req.body.name,course:course.id}).exec(function(err,level){
      res.send(level);
    })
  })
}
