module.exports = (req,res) => {
  db.university.update({id:req.params.uniId},{active_tri_semester:req.body.tri_semester_id}).exec((err, universities)=>{
    if(err) throw err;
    res.send(universities)
  })
}
