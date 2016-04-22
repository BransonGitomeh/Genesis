var inputComponent = require('../../../../__components/forminput');

var selectCourse = require("./selectors/selectCourse")
var selectLevel = require("./selectors/selectLevel")


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
        m(selectCourse),
        m(selectLevel)
      )
    )
  }
}