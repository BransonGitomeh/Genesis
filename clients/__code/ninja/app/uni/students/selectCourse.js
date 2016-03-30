var inputComponent = require('../../../../__components/forminput');

module.exports = {
	controller:(args) => {
		return {
			courses:m.request({method:"GET",url:apiUrl + "/basic/getUniCourses/" + m.route.param("uniId")}),
			schema:{
				selectedCourse:m.prop("string")
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
                      m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + e.target.value + "/selectLevel",{test1:"working"})
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

                  )
                )
		)
	}
}
