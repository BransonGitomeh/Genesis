module.exports = (req,res)=>{

  require("./support/student").getAllStudents(req.db,req.params.uniId,(students)=>{
    res.send(students)
  })

}
