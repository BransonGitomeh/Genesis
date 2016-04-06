module.exports = (req,res) => {
  req.db.department.findOne({id:req.params.department_id}).exec((err, department)=>{
    if(err) throw err;

    req.db.course.create({name:req.body.name,department:department.id}).exec(function(err,department){
      res.send(department);
    })
  })
}
