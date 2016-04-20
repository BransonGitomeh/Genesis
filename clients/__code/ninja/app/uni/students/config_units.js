var toogle = require("./selectors/switch");
var courses = require("./config/courses")
var stages = require("./config/stages")
var semesters = require("./config/semesters")
var units = require("./config/units")
var studentInfo = require("./studentInfo")

module.exports = {
	controller: () => {
		// http://localhost:3000/basic/getTri_semesters/570a8fd2b1a9b99a0d2fc9a6
		var availableTrisemesters = m.request({
			method: "GET",
			url: apiUrl + "/student/getDepartmentsAndCourses/" + m.route.param("student_id")
		})
		var getTri_semesters = m.request({
			method: "GET",
			url: apiUrl + "/basic/getTri_semesters/" + m.route.param("uniId")
		})
		var availableUnits = m.request({
			method: "GET",
			url: apiUrl + "/basic/getUnitsOfferedVersusStudent/" + m.route.param("semester_id") + "/" + m.route.param("student_id") + "/" + m.route.param("tri_sem_id")
		})

		var selectedUnits = m.request({
			method: "GET",
			url: apiUrl + "/student/getMyUnits/" + m.route.param("student_id")
		})

		return {
			selected: m.prop(false),
			results: availableTrisemesters,
			units: availableUnits,
			selectedUnits: selectedUnits,
			getTri_semesters: getTri_semesters,
			selectedTrisem: m.prop("")
		}
	},
	view: (ctrl, args) => {
		return m(".container row", [
			m(studentInfo),
			m(".card-panel", [
				m(".input-field col s12 l4", [
					m("select", {
							config: function() {
								$('select').material_select();
							},
							onchange: function(e) {
								// ctrl.schema.trisem(e.target.value)
								ctrl.selectedTrisem(e.target.value)
								m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/config/" + m.route.param("student_id") + "/units/" + m.route.param("semester_id") + "/" + e.target.value)
							}
						},

						m("option", {
							value: "",
							// disabled: true,
							selected: true,
						}, "Select trimester"),

						ctrl.getTri_semesters().tri_semesters.map(function(stage) {
							console.log(stage.id + " " + m.route.param("tri_sem_id"))
							return m("option", {
								value: stage.id,
								// disabled:true,
								selected: (stage.id == m.route.param("tri_sem_id") ? true : false)
							}, stage.name)
						})

					)
				]),
				m(".input-field col s12 l8", [
					m("select", {
							config: function() {
								$('select').material_select();
							},
							onchange: function(e) {
								m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/config/" + m.route.param("student_id") + "/units/" + e.target.value + "/" + m.route.param("tri_sem_id"))
							}
						},

						m("option", {
							value: "",
							// disabled: true,
							selected: true,
						}, "Select Semester to register to"),

						ctrl.results().availableStages.map(function(stage) {
							return m("option", {
								value: stage.id,
								// disabled:true,
								selected: (stage.id == m.route.param("semester_id") ? true : false)
							}, stage.level.course.name + " - " + stage.level.name + " - " + stage.name)
						})

					)
				]),
				m(".row container", [
					// console.log(ctrl.units()),
					ctrl.units().units_i_offer.map(function(unit) {
						var random = Math.random()
						return m("p", [
							m("input", {
								type: "checkbox",
								class: "filled-in",
								id: "filled-in-box" + random,
								checked: unit.selected,
								onchange: (e) => {
									// alert("changed " + e.target.checked)
									//send request to add this unit to the list that this student has done
									if (unit.selected === false) {
										m.request({
											method: "GET",
											url: apiUrl + "/student/AddUnitToMyself/" + m.route.param("student_id") + "/" + unit.id + "/" + m.route.param("semester_id") + "/" + m.route.param("tri_sem_id")
										}).then(m.route(m.route()))
									} else {
										m.request({
											method: "GET",
											url: apiUrl + "/student/RemoveUnitFromMyself/" + m.route.param("student_id") + "/" + unit.id + "/" + m.route.param("semester_id") + "/" + m.route.param("tri_sem_id")
										}).then(m.route(m.route()))
									}

								}
							}),
							m("label", {
								for: "filled-in-box" + random
							}, unit.name)
						])
					})
				])
			])
		])
	}
}