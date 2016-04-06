module.exports = (req,res) => {
  req.db.university.findOne({id:req.params.id}).populate("proschools").exec((err, university)=>{
    if(err) throw err;
    req.db.proschool.create({name:req.body.name,uni:university.id}).exec(function(err,proschool){
      res.send(proschool);
    })
  })
}
