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
      m("h5","Available Units"),
      ctrl.departments().availableUnits.map((course)=>{
        return ("ul",[
          m("li",course.name,[
            m("button",{
              onclick:(e)=>{
                m.request({
                  method:"GET",
                  url:apiUrl + "/student/addUnitToMyself/" + m.route.param("student_id") + "/" + course.id
                }).then(m.route( m.route( ) ))
              }
            },"select")
          ])
        ])
      }),
      m("h5","Selected Units"),
      ctrl.departments().selectedUnits.map((course)=>{
        return m("li",course.name,[
          m("button",{
              onclick:(e)=>{
                m.request({
                  method:"GET",
                  url:apiUrl + "/student/RemoveUnitFromMyself/" + m.route.param("student_id") + "/" + course.id
                }).then(m.route( m.route( ) ))
              }
            },"remove")
        ])
      })
    ])

  }
}
