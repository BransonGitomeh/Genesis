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
        url:apiUrl + "/basic/getUnitsAvailable/" + m.route.param("department_id"),
        method:"GET"
      }),
      schema:{
        name:m.prop(),
        cost:m.prop()
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
                  url:apiUrl + "/basic/makeUnits/" + m.route.param("department_id"),
                  method:"POST",
                  data:{
                    name:ctrl.schema.name(),
                    cost:ctrl.schema.cost()
                  }
                }).then(m.route( m.route( ) ))
              }
            },
               m(inputComponent,{
                        value:ctrl.schema.name,
                        label:"Name of new Unit",
                        type:"text",
                        sizes:"s12 m12 l10",
                  }),
              m(inputComponent,{
                           value:ctrl.schema.cost,
                           label:"Cost of the unit",
                           type:"text",
                           sizes:"s12 m12 l10",
                     }),
                  m(".col l2",
                    m("br"),
                    m("button",{
                      type:"submit",
                      class:"btn-floating waves-effect waves-light"
                    },
                      m("i",{class:"mdi-content-send blue"})
                    )
                  )
            ),

            m("ul",{class:"collection with-header"},[
              m("li",{class:"collection-header blue white-text"},[
                m("h4",{class:"task-card-title"},"Units"),
                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
              ]),
              ctrl.schools().units.map(function(school){
                return m("a",{
                  class:"collection-item waves-effect waves-dark waves-block " + (m.route.param("school_id") == school.id ? "grey lighten-2" : ""),
                  id:school.id + "parent"
                },school.name,[
                  m("a",{class:"secondary-content"},[
                    m("span",{class:"ultra-small"},school.cost ? school.cost : "")
                  ])
                ])
              })
        ])
    ])
  }
}

// <a href="#" class="secondary-content"><span class="ultra-small">Monday</span></a>
