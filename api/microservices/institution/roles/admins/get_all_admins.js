module.exports = (req,res) => {
  req.db.university.findOne({id:req.params.id}).populate("admins").exec((err, university)=>{
    if(err) throw err;
    res.send(university.admins)
  })
}
