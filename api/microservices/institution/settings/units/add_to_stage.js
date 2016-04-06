module.exports = (req,res) => {
  req.db.stage.findOne({id:req.params.stage_id}).exec((err,stage) => {
    stage.units_i_offer.add(req.body.unit_id)
    stage.save((err) => {
      if(err) throw err;
      res.send(stage)
    })
  })
}
