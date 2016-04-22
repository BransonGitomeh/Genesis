var inputComponent = require('../../../../__components/forminput');
var selectCourse = require("./selectors/selectCourse")

module.exports = {
  controller: (args) => {
    return {
      courses: m.request({
        method: "GET",
        url: apiUrl + "/basic/getUniCourses/" + m.route.param("uniId")
      }),
      schema: {
        selectedCourse: m.prop("string")
      }
    }
  },
  view: (ctrl, args) => {
    return m(".app row",

      m(".input-field col s12 l3",
        m(selectCourse)
      )
    )
  }
}