module.exports = (req,res) => {
  // console.log(req.params.department_id)
  db.unit.create({
    name:req.body.name,
    cost:req.body.cost,
    dep:req.params.department_id
  }).exec((err,craetedUnit) => {
    if(err) throw err;
    res.send(craetedUnit)
  })
}
