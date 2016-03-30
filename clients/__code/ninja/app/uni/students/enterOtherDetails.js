var inputComponent = require('../../../../__components/forminput');

module.exports = {
  controller:(args) => {
    return {
      courses:m.request({method:"GET",url:apiUrl + "/basic/getUniCourses/" + m.route.param("uniId")}),
      selectedCourse:m.request({method:"GET",url:apiUrl + "/basic/getLevels/" + m.route.param("course_id")}),
      selectedLevel:m.request({method:"GET",url:apiUrl + "/basic/getStages/" + m.route.param("level_id")}),
      studySessions:m.request({method:"GET",url:apiUrl + "/basic/getStudy_sessions/" + m.route.param("uniId")}),

      schema:{
        adm:m.prop(""),
        name:m.prop(""),
        selectedCourse:m.prop("")
      }
    }
  },
  view:(ctrl,args) => {
    return m(".app row",

    m(".input-field col s12 l3",
                m("select",{
                  config:function(){
                    $('select').material_select();
                  },
                  onchange:function(e){
                    // console.log(e)
                    // alert(e.target.value)
                    ctrl.schema.selectedCourse(e.target.value)
                    // alert(ctrl.schema.selectedCourse())

                    // alert(m.route.buildQueryString("Object",1))
                    m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + e.target.value + "/selectLevel")
                  }
                },

                  m("option",{
                    value:"",
                    disabled:true,
                    selected:true,
                  },"Course for student"),

                  ctrl.courses().map(function(drop){
                    return m("option",{
                      value:drop.id,
                      selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
                    },drop.name)
                  })

                ),

                m("select",{
                  config:function(){
                    $('select').material_select();
                  },
                  onchange:function(e){
                    // console.log(e)
                    // alert(e.target.value)
                    ctrl.schema.selectedCourse(e.target.value)
                    // alert(ctrl.schema.selectedCourse())
                    // m.route( m.route.buildQueryString("Object","data") )
                    m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + e.target.value + "/stages")
                    // m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages/" + m.route.param("stage_id")  + "/units/" + e.target.value)
                  }
                },

                  m("option",{
                    value:"",
                    disabled:true,
                    selected:true,
                  },"Level of the course"),
                  ctrl.selectedCourse().levels.map(function(drop){
                    return m("option",{
                      value:drop.id,
                      selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
                    },drop.name)
                  })

                ),

                m("select",{
                  config:function(){
                    $('select').material_select();
                  },
                  onchange:function(e){
                    // console.log(e)
                    // alert(e.target.value)
                    ctrl.schema.selectedCourse(e.target.value)
                    // alert(ctrl.schema.selectedCourse())
                    // m.route( m.route.buildQueryString("Object","data") )
                    // m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages/" + m.route.param("stage_id")  + "/units/" + e.target.value)

                    // m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + m.route.param("stage_id") + "/stages/" + e.target.value + "/study_mode")
                    m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + m.route.param("level_id") + "/stages/" + e.target.value + "/study_mode")

                  }
                },

                  m("option",{
                    value:"",
                    disabled:true,
                    selected:true,
                  },"Semester to join"),
                  ctrl.selectedLevel().stages.map(function(drop){
                    return m("option",{
                      value:drop.id,
                      selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
                    },drop.name)
                  })

                ),

                m("select",{
                  config:function(){
                    $('select').material_select();
                  },
                  onchange:function(e){
                    // console.log(e)
                    // alert(e.target.value)
                    ctrl.schema.selectedCourse(e.target.value)
                    // alert(ctrl.schema.selectedCourse())
                    // m.route( m.route.buildQueryString("Object","data") )
                    // alert(m.route.param("stage_id"));
                    m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + m.route.param("level_id") + "/stages/" + m.route.param("stage_id") + "/study_mode/" + e.target.value)
                  }
                },

                  m("option",{
                    value:"",
                    disabled:true,
                    selected:true,
                  },"Select Study mode"),
                  ctrl.studySessions().study_sessions.map(function(drop){
                    return m("option",{
                      value:drop.id,
                      selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
                    },drop.name)
                  })

                )
              ),
          m("div",{class:"col s12 l6"},[
            m("form",{
              class:"row card-panel",
              onsubmit:(e) => {
                e.preventDefault()

                var data = {
                  adm:ctrl.schema.adm,
                  names:ctrl.schema.name(),

                  course: m.route.param("course_id"),//it
                  level: m.route.param("level_id"),//diploma
                  stage: m.route.param("stage_id"),//stage 5
                  study_mode: m.route.param("study_mode"),//holidays
                }

                m.request({
                  method:"POST",
                  url:apiUrl + "/basic/makeStudent/" + m.route.param("uniId"),
                  data:data
                }).then((res)=>{
                  m.route( "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/index" )
                })
                

                // alert(data)
                // console.log(data)
                // alert("sending data")
              }
            },[

                m(inputComponent,{
                  value:ctrl.schema.adm,
                  label:"Admission Number",
                  type:"text",
                  sizes:"s12 m12 l12"
                }),

                m(inputComponent,{
                  value:ctrl.schema.name,
                  label:"Names",
                  type:"text",
                  sizes:"s12 m12 l12"
                }),

                m("button",{
                  class:"btn blue",
                  type:"submit"
                },"submit")
            ])
          ])


    )
  }
}
