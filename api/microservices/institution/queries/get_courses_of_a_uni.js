module.exports = (req,res) => {
  req.db.university.findOne({id:req.params.uniId})
    .populate("proschools.departments.courses")
    .exec((err, university)=>{
      var Collectedcourses = []

      university.proschools.map((proschool)=>{
        proschool.departments.map((dep)=>{
          dep.courses.map((course)=>{
            Collectedcourses.push(course)
          })
        })
      })

      res.send(Collectedcourses)
  })
}
