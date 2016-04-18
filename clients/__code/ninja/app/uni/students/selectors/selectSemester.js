module.exports = {
	controller: () => {
		return {
			selectedLevel: m.request({
				method: "GET",
				url: apiUrl + "/basic/getStages/" + m.route.param("level_id")
			})
		}
	},
	view: (ctrl, args) => {
		return m("select", {
				config: function() {
					$('select').material_select();
				},
				onchange: function(e) {
					m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + m.route.param("level_id") + "/stages/" + e.target.value + "/study_mode")
				}
			},

			m("option", {
				value: "",
				disabled: true,
				selected: true,
			}, "Semester to join"),
			ctrl.selectedLevel().stages.map(function(drop) {
				return m("option", {
					value: drop.id,
					selected: (m.route.param("stage_id") == drop.id ? true : false)
				}, drop.name)
			})

		)
	}
}