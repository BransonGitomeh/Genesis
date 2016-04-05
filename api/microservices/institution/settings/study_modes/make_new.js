module.exports = (req,res) => {
  db.study_session.create({name:req.body.name,uni:req.params.uniId}).exec((err, universities)=>{
    if(err) throw err;
    res.send(universities)
  })
}
