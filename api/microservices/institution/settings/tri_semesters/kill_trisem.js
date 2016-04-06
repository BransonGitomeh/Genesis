module.exports = (req,res) => {
  req.db.tri_semester.destroy({id:req.params.tri_semester_id}).exec((err, tri_semester)=>{
    if(err) throw err;
    res.send(tri_semester)
  })
}
