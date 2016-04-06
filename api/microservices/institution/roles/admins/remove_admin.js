module.exports = (req,res) => {
  req.db.university.findOne({id:req.params.id}).populate("revoked_admins").exec((err, university)=>{
    if(err) throw err;
    university.admins.remove(req.body.userId)
    university.revoked_admins.remove(req.body.userId)
    university.save((err) => {
      var responce = {
        status:"success"
      }
      res.send(responce)
    })
  })
}
