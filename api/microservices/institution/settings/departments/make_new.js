module.exports = (req,res) => {
  db.department.create({name:req.body.name,proschool:req.params.school_id}).exec((err, department)=>{
    if(err) throw err;
    res.send(department)
  })
}
