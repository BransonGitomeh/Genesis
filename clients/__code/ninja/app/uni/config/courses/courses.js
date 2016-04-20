var inputComponent = require('../../../../../__components/forminput');

var courses = [
   {id:"1",text:"IT"},
   {id:"2",text:"BBIT"}
]

module.exports = {
  controller:function(){
    return {
      // schools:m.request({method:"GET","url:"}),
      courses:m.request({
        url:apiUrl + "/basic/getCourses/" + m.route.param("department_id"),
        method:"GET"
      }),
      schema:{
        name:m.prop()
      }
    }
  },
  view:function(ctrl,args){
    return m("div",{class:"col l4"},[
            m("form",{
              class:"row",
              onsubmit:function(e){
                e.preventDefault()
                m.request({
                  url:apiUrl + "/basic/makeCourse/" + m.route.param("department_id"),
                  method:"POST",
                  data:{
                    name:ctrl.schema.name()
                  }
                }).then(m.route( m.route( ) ))
              }
            },
               m(inputComponent,{
                        value:ctrl.schema.name,
                        label:"Name of new Course",
                        icon:"mdi-image-exposure-plus-1 prefix",
                        type:"text",
                        sizes:"s12 m12 l10",
                  }),
                  m(".col l2",
                    m("br"),
                    m(".btn-floating waves-effect waves-light ",
                      m("i",{class:"mdi-content-send blue"})
                    )
                  )
            ),

            m("ul",{class:"collection with-header"},[
              m("li",{class:"collection-header blue white-text"},[
                m("h4",{class:"task-card-title"},"Courses"),
                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
              ]),
              ctrl.courses().courses.map(function(course){
                return m("a",{
                  class:"collection-item waves-effect waves-dark " + (m.route.param("course_id") == course.id ? "grey lighten-2" : ""),
                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + course.id + "/levels",
                  config:m.route
                },course.name)
              })
        ])
    ])
  }
}
