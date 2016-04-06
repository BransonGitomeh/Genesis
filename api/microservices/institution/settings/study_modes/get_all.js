module.exports = (req,res) => {
  req.db.university.findOne({id:req.params.uniId}).populate("study_sessions").exec((err, universities)=>{
    if(err) throw err;
    res.send(universities)
  })
}
