var item = require('./item');
var inputComponent = require('../../../../__components/forminput');

var selectedUnits = [
  {id:"2",text:"semester 1"},
  {id:"3",text:"stage 1"}
]

var units = [
  {id:"1",text:"semester 1"},
  {id:"2",text:"semester 1"},
  {id:"3",text:"stage 1"}
]

var drops = [
  {id:"1",text:"semester 1"},
  {id:"2",text:"semester 2"},
  {id:"3",text:"stage 1"}
]

module.exports = {
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
                    }
                  },

                    m("option",{
                      value:"",
                      disabled:true,
                      selected:true,
                    },"Select your department"),

                    drops.map(function(drop){
                      return m("option",{
                        value:drop.id,
                      },drop.text)
                    })
                  )
                )
              ),
              

              m("ul",{class:"collection with-header"},[
                m("li",{class:"collection-header blue white-text"},[
                  m("h4",{class:"task-card-title"},"Select Units"),
                  // m("p",{class:"task-card-date"},"Some other management thing :-)"),
                ]),
                units.map(function(unit){
                  return m("a",{
                    class:"collection-item " + (m.route.param("stage_id") === unit.id ? "grey lighten-2" : ""),
                    href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages/" + unit.id + "/units",
                    config:m.route
                  },unit.text)
                })
          ])
      ]),
        m("div",{class:"col l4"},[
              m("ul",{class:"collection with-header"},[
                m("li",{class:"collection-header blue white-text"},[
                  m("h4",{class:"task-card-title"},"Selected Units"),
                  // m("p",{class:"task-card-date"},"Some other management thing :-)"),
                ]),
                selectedUnits.map(function(unit){
                  return m("a",{
                    class:"collection-item " + (m.route.param("unit_id") === unit.id ? "grey lighten-2" : ""),
                    href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages/" + unit.id + "/units",
                    config:m.route
                  },unit.text)
                })
          ])
      ])
    )
  }
}

// <div class="input-field col s12">
//     <select>
//       <option value="" disabled selected>Choose your option</option>
//       <option value="1">Option 1</option>
//       <option value="2">Option 2</option>
//       <option value="3">Option 3</option>
//     </select>
//     <label>Materialize Select</label>
//   </div>