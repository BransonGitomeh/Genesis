module.exports = (req,res) => {
  req.db.university.findOne({id:req.params.uniId}).populate("tri_semesters").populate("active_tri_semester").exec((err, universities)=>{
    if(err) throw err;
    res.send(universities)
  })
}
