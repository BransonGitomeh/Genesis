var inputComponent = require('../../../../../__components/forminput');

var stages = [
  {id:"1",text:"semester 1"},
  {id:"2",text:"semester 1"},
  {id:"3",text:"stage 1"}
]

module.exports = {
  controller:function(){
    return {
      // schools:m.request({method:"GET","url:"}),
      stages:m.request({
        url:apiUrl + "/basic/getStages/" + m.route.param("level_id"),
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
                  url:apiUrl + "/basic/makeStage/" + m.route.param("level_id"),
                  method:"POST",
                  data:{
                    name:ctrl.schema.name()
                  }
                }).then(m.route( m.route( ) ))
              }
            },
               m(inputComponent,{
                        value:ctrl.schema.name,
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
                m("h4",{class:"task-card-title"},"Semesters"),
                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
              ]),
              ctrl.stages().stages.map(function(stage){
                return m("a",{
                  class:"collection-item waves-effect waves-dark " + (m.route.param("stage_id") == stage.id ? "grey lighten-2" : ""),
                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + + m.route.param("level_id") + "/stages/" + stage.id + "/units",
                  config:m.route
                },stage.name)
              })
        ])
    ])
  }
}
