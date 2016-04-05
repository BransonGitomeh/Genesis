module.exports = (req,res) => {
  db.tri_semester.destroy({id:req.params.tri_semester_id}).exec((err, tri_semester)=>{
    if(err) throw err;
    res.send(tri_semester)
  })
}
