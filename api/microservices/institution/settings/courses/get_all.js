module.exports = (req,res) => {
  db.department.findOne({id:req.params.department_id}).populate("courses").exec((err, department)=>{
    if(err) throw err;
    res.send(department)
  })
}
