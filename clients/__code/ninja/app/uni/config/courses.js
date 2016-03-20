var item = require('./item');
var inputComponent = require('../../../../__components/forminput');

var courses = [
   {id:"1",text:"IT"},
   {id:"2",text:"BBIT"}
]

module.exports = {
  view:function(ctrl,args){
    return m("div",{class:"col l4"},[
            m("form",{class:"row"},
               m(inputComponent,{
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
              courses.map(function(course){
                return m("a",{
                  class:"collection-item " + (m.route.param("course_id") === course.id ? "grey lighten-2" : ""),
                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + course.id + "/levels",
                  config:m.route
                },course.text)
              })
        ])
    ])
  }
}