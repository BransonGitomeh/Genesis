module.exports = (req,res) => {
  db.department.findOne({id:req.params.department_id}).exec((err, department)=>{
    if(err) throw err;

    db.course.create({name:req.body.name,department:department.id}).exec(function(err,department){
      res.send(department);
    })
  })
}
