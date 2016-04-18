var inputComponent = require('../../../../__components/forminput');
var selectCourse = require("./selectors/selectCourse")
var selectLevel = require("./selectors/selectLevel")
var selectSemester = require("./selectors/selectSemester")
var selectStudyMode = require("./selectors/selectStudyMode")

module.exports = {
  controller: (args) => {
    return {

      

      schema: {
        adm: m.prop(""),
        name: m.prop(""),
        selectedCourse: m.prop("")
      }
    }
  },
  view: (ctrl, args) => {
    return m(".app row",

      m(".input-field col s12 l3",
        m(selectCourse),

        m(selectLevel),

        m(selectSemester),

        m(selectStudyMode)

      ),
      m("div", {
        class: "col s12 l9"
      }, [
        m("form", {
          class: "row card-panel",
          onsubmit: (e) => {
            e.preventDefault()

            var data = {
              adm: ctrl.schema.adm,
              names: ctrl.schema.name(),

              course: m.route.param("course_id"), //it
              level: m.route.param("level_id"), //diploma
              stage: m.route.param("stage_id"), //stage 5
              study_mode: m.route.param("study_mode"), //holidays
            }

            m.request({
              method: "POST",
              url: apiUrl + "/basic/makeStudent/" + m.route.param("uniId"),
              data: data
            }).then((res) => {
              m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/index")
            })


            // alert(data)
            // console.log(data)
            // alert("sending data")
          }
        }, [

          m(inputComponent, {
            value: ctrl.schema.adm,
            label: "Admission Number",
            type: "text",
            sizes: "s12 m12 l12"
          }),

          m(inputComponent, {
            value: ctrl.schema.name,
            label: "Names",
            type: "text",
            sizes: "s12 m12 l12"
          }),

          m("button", {
            class: "btn blue",
            type: "submit"
          }, "submit")
        ])
      ])


    )
  }
}