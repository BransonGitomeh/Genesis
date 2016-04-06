module.exports = (req,res) => {
  req.db.university.findOne({id:req.params.id}).populate("proschools").exec((err, universities)=>{
    if(err) throw err;
    res.send(universities)
  })
}
