var inputComponent = require('../../../../../__components/forminput');

var selectedUnits = [
  {id:"2",text:"bbb"},
  {id:"3",text:"bbc"}
]

var units = [
  {id:"1",text:"bbb"},
  {id:"2",text:"bba"},
  {id:"3",text:"bbc"}
]

var drops = [
  {id:"1",text:"Dep of ECDE"},
  {id:"2",text:"Dep of Environment"},
]

module.exports = {
  controller:function(){
    return {
      // schools:m.request({method:"GET","url:"}),
      units_selected:m.request({
        url:apiUrl + "/basic/getUnitsOffered/" + m.route.param("stage_id"),
        method:"GET"
      }),
      units_available:m.request({
        url:apiUrl + "/basic/getUnitsAvailable/" + m.route.param("selectedDepartment"),
        method:"GET"
      }),
      departments:m.request({
        url:apiUrl + "/basic/getDepartments/" + m.route.param("school_id"),
        method:"GET"
      }),
    }
  },
  view:function(ctrl,args){
    return m("div",
        m("div",{class:"col l4"},[
              m("form",{class:"row"},
                 // m(inputComponent,{
                 //          label:"Name of new Level",
                 //          icon:"mdi-image-exposure-plus-1 prefix",
                 //          type:"text",
                 //          sizes:"s12 m12 l10",
                 //    }),
                 //    m(".col l2",
                 //      m("br"),
                 //      m(".btn-floating waves-effect waves-light ",
                 //        m("i",{class:"mdi-content-send blue"})
                 //      )
                 //    )
                m(".input-field col s12",
                  m("select",{
                    config:function(){
                      $('select').material_select();
                    },
                    onchange:function(e){
                      // console.log(e)
                      // alert(e.target.value)
                      m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages/" + m.route.param("stage_id")  + "/units/" + e.target.value)
                    }
                  },

                    m("option",{
                      value:"",
                      disabled:true,
                      selected:true,
                    },"Select department for units"),

                    ctrl.departments().departments.map(function(drop){
                      return m("option",{
                        value:drop.id,
                        selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
                      },drop.name)
                    })

                  )
                )
              ),


              m("ul",{class:"collection with-header"},[
                m("li",{class:"collection-header blue white-text"},[
                  m("h4",{class:"task-card-title"},"Available Units"),
                  // m("p",{class:"task-card-date"},"Click to select add the unit to the semester"),
                ]),
                ctrl.units_available().units.map(function(unit){
                  return m("a",{
                    class:"collection-item waves-effect waves-dark",
                    href:"javaScript:void(0);",
                    onclick:() => {
                      // alert("adding")
                      m.request({
                        url:apiUrl + "/basic/addUnitToStage/" + m.route.param("stage_id"),
                        method:"POST",
                        data:{
                          unit_id:unit.id
                        }
                      }).then(m.route( m.route( ) ))
                    }
                  },unit.name)
                })
          ])
      ]),
        m("div",{class:"col l4"},[
              m("ul",{class:"collection with-header"},[
                m("li",{class:"collection-header blue white-text"},[
                  m("h4",{class:"task-card-title"},"Selected Units"),
                  // m("p",{class:"task-card-date"},"Some other management thing :-)"),
                ]),
                ctrl.units_selected().units_i_offer.map(function(unit){
                  return m("a",{
                    class:"collection-item waves-effect waves-dark",
                    href:"javaScript:void(0);"
                  },unit.name)
                })
          ])
      ])
    )
  }
}
