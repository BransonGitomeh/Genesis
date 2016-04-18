module.exports = {
	controller: () => {
		return {
			studySessions: m.request({
				method: "GET",
				url: apiUrl + "/basic/getStudy_sessions/" + m.route.param("uniId")
			})
		}
	},
	view: (ctrl, args) => {
		return m("select", {
				config: function() {
					$('select').material_select();
				},
				onchange: function(e) {
					m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + m.route.param("level_id") + "/stages/" + m.route.param("stage_id") + "/study_mode/" + e.target.value)
				}
			},

			m("option", {
				value: "",
				disabled: true,
				selected: true,
			}, "Select Study mode"),
			ctrl.studySessions().study_sessions.map(function(drop) {
				return m("option", {
					value: drop.id,
					selected: (m.route.param("study_mode") == drop.id ? true : false)
				}, drop.name)
			})

		)
	}
}