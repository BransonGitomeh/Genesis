var toogle = require("./selectors/switch");
var courses = require("./config/courses")
var stages = require("./config/stages")
var semesters = require("./config/semesters")
var units = require("./config/units")

module.exports = {
	controller: () => {
		var availableTrisemesters = m.request({
			method: "GET",
			url: apiUrl + "/student/getDepartmentsAndCourses/" + m.route.param("student_id")
		})
		return {
			selected: m.prop(false),
			results: availableTrisemesters
		}
	},
	view(ctrl, args) {
		return m(".app row", [

			m(".input-field col s12 l12", [
				m("select", {
						config: function() {
							$('select').material_select();
						},
						onchange: function(e) {
							// ctrl.schema.trisem(e.target.value)
							m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/config/" + m.route.param("student_id") + "/units/" + e.target.value)
						}
					},

					m("option", {
						value: "",
						disabled: true,
						selected: true,
					}, "Select Semester to register to"),

					ctrl.results().availableStages.map(function(stage) {
						return m("option", {
							value: stage.id,
						}, stage.level.course.name + " - " + stage.level.name + " - " + stage.name)
					})

				)
			]),
			m(".row container", [
				// m(".col l3", [
				// 	// m(".center","thing 1"),
				// 	m(courses)
				// ]),
				// m(".col l3", [
				// 	m(stages)
				// ]),
				// m(".col l3", [
				// 	m(semesters)
				// ]),
				// m(".col l3", [
				// 	m(units)
				// ])
			])
		])
	}
}