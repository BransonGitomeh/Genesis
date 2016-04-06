module.exports = (req,res) => {
  req.db.course.findOne({id:req.params.course_id}).populate("levels").exec((err, course)=>{
    if(err) throw err;
    res.send(course)
  })
}
