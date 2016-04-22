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
        url:apiUrl + "/basic/getTri_semesters/" + m.route.param("uniId"),
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
                  url:apiUrl + "/basic/makeTri_semester/" + m.route.param("uniId"),
                  method:"POST",
                  data:{
                    name:ctrl.schema.name()
                  }
                }).then(m.route( m.route( ) ))
              }
            },
               m(inputComponent,{
                        value:ctrl.schema.name,
                        label:"Name of new tri-semester",
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
                m("h4",{class:"task-card-title"},"Tri-Semesters"),
                m("p",{class:"task-card-date"},"Active tri_semester is ",m("u",(ctrl.schools().active_tri_semester ? ctrl.schools().active_tri_semester.name : ""))),
              ]),
              ctrl.schools().tri_semesters.map(function(school){
                return m("li",{
                  class:"collection-item " + ( ctrl.schools().active_tri_semester ? (ctrl.schools().active_tri_semester.id == school.id ? "grey lighten-2" : "") : ""),
                },school.name,[
                  // <a href="#!" class="secondary-content"><i class="material-icons">send</i></a>
                  m("a",{
                    class:"secondary-content waves-effect waves-light waves-block"
                  },
                    m("i",{
                      class:"mdi-action-trending-up hoverable",
                      onclick:()=>{
                        m.request({
                          url:apiUrl + "/basic/makeTri_semesterActive/" + m.route.param("uniId"),
                          method:"POST",
                          data:{
                            tri_semester_id:school.id
                          }
                        }).then(m.route( m.route( ) ))
                      }
                    }),

                    m("i",{
                      class:"mdi-navigation-close hoverable",
                      onclick:()=>{
                        m.request({
                          url:apiUrl + "/basic/makeTri_semesterDead/" + school.id,
                          method:"GET",
                        }).then(m.route( m.route( ) ))
                        // alert("aweosmness")
                      }
                    })
                  )
                ])
              })
        ])
    ])
  }
}