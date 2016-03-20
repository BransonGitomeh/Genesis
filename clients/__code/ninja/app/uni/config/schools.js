var item = require('./item');
var inputComponent = require('../../../../__components/forminput');

var schools = [
  {id:"1",text:"School of It"},
  {id:"2",text:"School of law"}
]

module.exports = {
  view:function(ctrl,args){
    return m("div",{class:"col l4"},[
            m("form",{class:"row"},
               m(inputComponent,{
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
              schools.map(function(school){
                return m("a",{
                  class:"collection-item " + (m.route.param("school_id") === school.id ? "grey lighten-2" : ""),
                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + school.id + "/courses",
                  config:m.route
                },school.text)
              })
        ])
    ])
  }
}