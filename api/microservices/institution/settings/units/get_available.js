module.exports = (req,res) => {
  db.department.findOne({id:req.params.id}).populate("units").exec((err, level)=>{
    if(err) throw err;
    res.send(level)
  })
}
