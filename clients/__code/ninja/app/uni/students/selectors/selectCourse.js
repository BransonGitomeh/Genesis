module.exports = {
	controller: () => {
		return {
			courses: m.request({
				method: "GET",
				url: apiUrl + "/basic/getUniCourses/" + m.route.param("uniId")
			})
		}
	},
	view: (ctrl, args) => {
		return m("select", {
				config: function() {
					$('select').material_select();
				},
				onchange: function(e) {
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
					selected: (m.route.param("course_id") == drop.id ? true : false)
				}, drop.name)
			})

		)
	}
}