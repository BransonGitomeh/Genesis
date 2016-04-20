var inputComponent = require('../../../../../__components/forminput');

var levels = [
  {id:"1",text:"diploma"},
  {id:"2",text:"digree"}
]

module.exports = {
  controller:function(){
    return {
      // schools:m.request({method:"GET","url:"}),
      levels:m.request({
        url:apiUrl + "/basic/getLevels/" + m.route.param("course_id"),
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
                  url:apiUrl + "/basic/makeLevel/" + m.route.param("course_id"),
                  method:"POST",
                  data:{
                    name:ctrl.schema.name()
                  }
                }).then(m.route( m.route( ) ))
              }
            },
               m(inputComponent,{
                        value:ctrl.schema.name,
                        label:"Name of new Stage",
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
                m("h4",{class:"task-card-title"},"Level"),
                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
              ]),
              ctrl.levels().levels.map(function(level){
                return m("a",{
                  class:"collection-item waves-effect waves-dark " + (m.route.param("level_id") == level.id ? "grey lighten-2" : ""),
                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + level.id,
                  config:m.route
                },level.name)
              })
        ])
    ])
  }
}
