module.exports = (req,res) => {
  req.db.university.find().exec((err, universities)=>{
    if(err) throw err;
    res.send(universities)
  })
}
