module.exports = {
	controller: () => {
		return {
			selectedCourse: m.request({
				method: "GET",
				url: apiUrl + "/basic/getLevels/" + m.route.param("course_id")
			})
		}
	},
	view: (ctrl, args) => {
		return m("select", {
				config: function() {
					$('select').material_select();
				},
				onchange: function(e) {
					m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + e.target.value + "/stages")
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
					selected: (m.route.param("level_id") == drop.id ? true : false)
				}, drop.name)
			})

		)
	}
}