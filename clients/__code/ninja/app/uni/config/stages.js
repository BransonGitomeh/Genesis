var item = require('./item');
var inputComponent = require('../../../../__components/forminput');

var stages = [
  {id:"1",text:"semester 1"},
  {id:"2",text:"semester 1"},
  {id:"3",text:"stage 1"}
]

module.exports = {
  view:function(ctrl,args){
    return m("div",{class:"col l4"},[
            m("form",{class:"row"},
               m(inputComponent,{
                        label:"Name of new Level",
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
                m("h4",{class:"task-card-title"},"Stages"),
                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
              ]),
              stages.map(function(stage){
                return m("a",{
                  class:"collection-item " + (m.route.param("stage_id") === stage.id ? "grey lighten-2" : ""),
                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages/" + stage.id + "/units",
                  config:m.route
                },stage.text)
              })
        ])
    ])
  }
}