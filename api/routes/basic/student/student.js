var _ = require("underscore")

function getAllStudents(db,uniId,callback){
	   db.university.findOne({id:uniId})
		   .populate("proschools.courses.students.level")
		   .populate("proschools.courses.students.course")
		   .populate("proschools.courses.students.stage")
		   .populate("proschools.courses.students.study_mode")
		   .exec((err,university)=>{
	   	var Allstudents = []

	   	university.proschools.map((proschool)=>{
	   		proschool.courses.map((course)=>{
	   			course.students.map((student)=>{
	   				Allstudents.push(student)
	   			})
	   		})
	   	})

	   	callback(_.sortBy(Allstudents, 'createdAt'))
	   })
  
}

module.exports = getAllStudents