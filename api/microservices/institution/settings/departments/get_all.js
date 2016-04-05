module.exports = (req,res) => {
  db.proschool.findOne({id:req.params.school_id}).populate("departments").exec((err, university)=>{
    if(err) throw err;
    res.send(university)
  })
}
