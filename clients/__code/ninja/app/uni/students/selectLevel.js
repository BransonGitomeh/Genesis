var inputComponent = require('../../../../__components/forminput');

module.exports = {
  controller: (args) => {
    return {
      courses: m.request({
        method: "GET",
        url: apiUrl + "/basic/getUniCourses/" + m.route.param("uniId")
      }),
      selectedCourse: m.request({
        method: "GET",
        url: apiUrl + "/basic/getLevels/" + m.route.param("course_id")
      }),

      schema: {
        selectedCourse: m.prop("string")
      }
    }
  },
  view: (ctrl, args) => {
    return m(".app row",

      m(".input-field col s12 l3",
        m("select", {
            config: function() {
              $('select').material_select();
            },
            onchange: function(e) {
              // console.log(e)
              // alert(e.target.value)
              ctrl.schema.selectedCourse(e.target.value)
                // alert(ctrl.schema.selectedCourse())

              // alert(m.route.buildQueryString("Object",1))
              m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + e.target.value + "/selectLevel")
            }
          },

          m("option", {
            value: "",
            disabled: true,
            selected: true,
          }, "Course for student"),

          ctrl.courses().map(function(drop) {
            return m("option", {
              value: drop.id,
              selected: (m.route.param("selectedDepartment") == drop.id ? true : false)
            }, drop.name)
          })

        ),

        m("select", {
            config: function() {
              $('select').material_select();
            },
            onchange: function(e) {
              // console.log(e)
              // alert(e.target.value)
              ctrl.schema.selectedCourse(e.target.value)
                // alert(ctrl.schema.selectedCourse())
                // m.route( m.route.buildQueryString("Object","data") )
              m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + e.target.value + "/stages")
                // m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages/" + m.route.param("stage_id")  + "/units/" + e.target.value)
            }
          },

          m("option", {
            value: "",
            disabled: true,
            selected: true,
          }, "Level of the course"),
          ctrl.selectedCourse().levels.map(function(drop) {
            return m("option", {
              value: drop.id,
              selected: (m.route.param("selectedDepartment") == drop.id ? true : false)
            }, drop.name)
          })

        )
      )
    )
  }
}