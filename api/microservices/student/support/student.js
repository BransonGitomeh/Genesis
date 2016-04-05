var _ = require("underscore")

function getAllStudents(db,uniId,callback){
	   db.university.findOne({id:uniId})
		   .populate("proschools.departments.courses.students.level")
		   .populate("proschools.departments.courses.students.course")
		   .populate("proschools.departments.courses.students.stage")
		   .populate("proschools.departments.courses.students.study_mode")
		   .exec((err,university)=>{
	   	var Allstudents = []

			//  	university.proschools.map((proschool)=>{
	   // 		proschool.courses.map((course)=>{
	   // 			course.students.map((student)=>{
	   // 				Allstudents.push(student)
	   // 			})
	   // 		})
			//  	})

			university.proschools.map((school)=>{
				school.departments.map((department)=>{
					department.courses.map((course)=>{
						course.students.map((student)=>{
							Allstudents.push(student)
						})
					})
				})
			})

	   	callback(_.sortBy(Allstudents, 'createdAt'))
	   })

}

function makePaymentTotri_sem(
	db,
	tri_sem_id,
	student_id,
	paymentAmmount,
	course,
	level,
	stage,
	receiptNo,
	callback){
	//make a payment
	//make connet that to student and trisem
	//save it
	db.payment.create({
		student_who_made_me:student_id,
		tri_semesters_i_was_paid_to:tri_sem_id,
		course_paid_to:course,
        level_paid_to:level,
        stage_paid_to:stage,
		ammount:paymentAmmount,
		receipt:receiptNo
	}).exec((err,createdPayment)=>{

		db.student.findOne({id:student_id}).exec((err,student)=>{

			student.payments_i_have_made.add(createdPayment);
			student.save((err),callback)
		})
		// callback(createdPayment)
	})
}

module.exports = {
	getAllStudents:getAllStudents,
	makePaymentTotri_sem:makePaymentTotri_sem
}
