module.exports = (req,res) => {
  // res.send("In the begining there was the word, and the word was with God, and the word was God")
  // express.static('public')
  req.db.university.findOne({id:req.params.uniId})
    .populate("proschools.departments.courses.students")
    .exec((err,found)=>{
      // console.log(found)
      var departments = 0
      var courses = 0
      var students = 0

      found.proschools.map((proschool)=>{
        departments = departments + proschool.departments.length

        proschool.departments.map((department) => {
          courses = courses + department.courses.length

          department.courses.map((course)=>{
            students = students + course.students.length
          })
        })
      })

      var results = {
        proschools:found.proschools.length,
        departments:departments,
        courses:courses,
        students:students
      }

      res.send(results)
    })
}
