module.exports = (req,res) => {
  db.stage.findOne({id:req.params.id})
    .populate("units_i_offer").exec((err, level)=>{
    if(err) throw err;
    res.send(level)
  })
}
