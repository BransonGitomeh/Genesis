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
      m("h5","Semesters available"),
      ctrl.departments().availableStages.map((course)=>{
        return ("ul",[
          m("li",course.name,[
            m("button",{
              onclick:(e)=>{
                m.request({
                  method:"GET",
                  url:apiUrl + "/student/addStageToMyself/" + m.route.param("student_id") + "/" + course.id
                }).then(m.route( m.route( ) ))
              }
            },"select")
          ])
        ])
      }),
      m("h5","Semesters registered to"),
      ctrl.departments().selectedStages.map((course)=>{
        return m("li",course.name,[
          m("button",{
              onclick:(e)=>{
                m.request({
                  method:"GET",
                  url:apiUrl + "/student/RemoveStageFromMyself/" + m.route.param("student_id") + "/" + course.id
                }).then(m.route( m.route( ) ))
              }
            },"remove")
        ])
      })
    ])

  }
}
