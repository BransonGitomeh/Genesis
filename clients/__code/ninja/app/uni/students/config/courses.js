module.exports = {
	controller(){
		return {
			departments:m.request({
				method:"GET",
				url:apiUrl + "/student/getDepartmentsAndCourses/" + m.route.param("student_id")
			})
		}
	},
	view(ctrl,args){
		return m("div",[
			m("h5","Courses Available"),
			ctrl.departments().availableCourses.map((course)=>{
				return ("ul",[
					m("li",course.name,[
						m("button",{
							onclick:(e)=>{
								m.request({
									method:"GET",
									url:apiUrl + "/student/addCourseToMyself/" + m.route.param("student_id") + "/" + course.id
								}).then(m.route( m.route( ) ))
							}
						},"select")
					])
				])
			}),
			m("h5","Courses registered to"),
			ctrl.departments().selectedCourses.map((course)=>{
				return m("li",course.name,[
					m("button",{
							onclick:(e)=>{
								m.request({
									method:"GET",
									url:apiUrl + "/student/RemoveCourseFromMyself/" + m.route.param("student_id") + "/" + course.id
								}).then(m.route( m.route( ) ))
							}
						},"remove")
				])
			})
		])

	}
}
