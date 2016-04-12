module.exports = (req,res) => {
  req.db.student.findOne({id:"5704cfa402e6d9de328f318d"})
  .populate("course.department.courses")
  .populate("courses_ive_done_before")
  .populate("course.department.proschool.departments")
  .exec((err,found)=>{

    found.course.department.courses.map((course)=>{
      found.courses_ive_done_before.map((done_course)=>{
        if(done_course.id === course.id){
          course.selected = true
        }else{
          course.selected = false
        }
      })
    })

    var responce = {
      departments:found.course.department.proschool.departments,
      courses:found.course.department.courses,
      // currentCourse:found.courses_ive_done_before
    }

    res.send(responce)
  })
}
