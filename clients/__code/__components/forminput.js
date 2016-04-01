module.exports = {
  controller:()=>{
    var id = Math.random();
    return {
      uniqId:()=> {return id}
    }
  },
  view:function(ctrl,attrs){
    var textarea =  m("div",{class:"input-field validate  col " + attrs.sizes},[
      attrs.icon ? m("i",{class:attrs.icon}) : m("span"),
      m("textarea[required]",{
        id:attrs.label + ctrl.uniqId(),
        // value:attrs.value(),
        name:attrs.label,
        type:attrs.type,
        class:"materialize-textarea",
        "aria-required":"true",
        oninput:m.withAttr("value",attrs.value)
      }),
      m("label",{for:attrs.label + ctrl.uniqId()},attrs.label)
    ]);

    var input =  m("div",{class:"input-field col " + attrs.sizes + (attrs.required ? "validate" : " ")},[
      attrs.icon ? m("i",{class:attrs.icon}) : m("span"),
      m("input[required]",{
        id:attrs.label + ctrl.uniqId(),
        // value:attrs.value(),
        name:attrs.label,
        type:attrs.type,
        "aria-required":"true",
        oninput:m.withAttr("value",attrs.value)
      }),
      m("label",{for:attrs.label + ctrl.uniqId()},attrs.label)
    ]);

    var select = m(".input-field col s12",
                  m("select",{
                    config:function(){
                      $('select').material_select();
                      console.log(attrs)
                    },
                    onchange:function(e){
                      // console.log(e)
                      // alert(e.target.value)
                      ctrl.schema.selectedCourse(e.target.value),
                      alert(ctrl.schema.selectedCourse())
                      // m.route.buildQueryString("Object","data")
                      // m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages/" + m.route.param("stage_id")  + "/units/" + e.target.value)
                    }
                  },

                    m("option",{
                      value:"",
                      disabled:true,
                      selected:true,
                    },"Course for student")
                    // console.log(typeof(attrs.data))
                    // attrs.data.map((item)=>console.log(item))
                    // attrs.data.map((drop)=>{
                    //   return m("option",{
                    //     value:drop.id,
                    //     selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
                    //   },drop.name)
                    // })

                  )
                );

    // return what is asked for
    if(attrs.type === "textarea"){
      return textarea
    }else if(attrs.type === "select"){
      return select
    }else{
      return input
    }
  }
}


// (m.route() === attrs.link.url ? 'active': '')
