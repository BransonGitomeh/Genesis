var inputComponent = require('../../../../../__components/forminput');

var schools = [
  {id:"1",text:"School of It"},
  {id:"2",text:"School of law"}
]

module.exports = {
  controller:function(){
    return {
      // schools:m.request({method:"GET","url:"}),
      schools:m.request({
        url:apiUrl + "/basic/getSchools/" + m.route.param("uniId"),
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
                  url:apiUrl + "/basic/makeSchool/" + m.route.param("uniId"),
                  method:"POST",
                  data:{
                    name:ctrl.schema.name()
                  }
                }).then(m.route( m.route( ) ))
              }
            },
               m(inputComponent,{
                        value:ctrl.schema.name,
                        label:"Name of new School",
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
                m("h4",{class:"task-card-title"},"Schools"),
                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
              ]),
              ctrl.schools().proschools.map(function(school){
                return m("a",{
                  class:"collection-item waves-effect waves-dark " + (m.route.param("school_id") == school.id ? "grey lighten-2" : ""),
                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + school.id,
                  config:m.route
                },school.name)
              })
        ])
    ])
  }
}
// "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + school.id + "/courses",
// /uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "departments"
