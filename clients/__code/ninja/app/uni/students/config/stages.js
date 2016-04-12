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
      m("h5","Available Stages"),
      ctrl.departments().availableLevels.map((course)=>{
        return ("ul",[
          m("li",course.name,[
            m("button",{
              onclick:(e)=>{
                m.request({
                  method:"GET",
                  url:apiUrl + "/student/addLevelToMyself/" + m.route.param("student_id") + "/" + course.id
                }).then(m.route( m.route( ) ))
              }
            },"select")
          ])
        ])
      }),
      m("h5","Registered Stages"),
      ctrl.departments().selectedLevels.map((course)=>{
        return m("li",course.name,[
          m("button",{
              onclick:(e)=>{
                m.request({
                  method:"GET",
                  url:apiUrl + "/student/RemoveLevelFromMyself/" + m.route.param("student_id") + "/" + course.id
                }).then(m.route( m.route( ) ))
              }
            },"remove")
        ])
      })
    ])

  }
}
