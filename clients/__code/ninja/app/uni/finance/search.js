var inputComponent = require('../../../../__components/forminput');

module.exports = {
	controller: () => {
		var results = m.request({
			method: "POST",
			url: apiUrl + "/saerchStudent/" + m.route.param("uniId"),
			data: {
				searchTerm: m.route.param("q")
			}
		})

		return {
			results: results,
			schema: {
				searchTerm: m.prop("")
			}
		}
	},
	view: (ctrl, args) => {
		return m("span", [
			m("form", {
				class: "row margin container",
				onsubmit: (e) => {
					e.preventDefault();
					m.route(m.route(), {
						q: ctrl.schema.searchTerm()
					})
				}
			}, [
				m(inputComponent, {
					value: ctrl.schema.searchTerm,
					label: "Student ADM.no / Name",
					icon: "mdi-action-search prefix",
					type: "text",
					sizes: "s12 m12 l8",
				}),
				m(".searchButton", [
					m("br"),
					m("div", {
						class: "btn blue col l2",
						type: "submit"
					}, "Search")
				]),
				m("a", {
					class: "btn right blue",
					href: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students",
					config: m.route
				}, "New Student")
			]),

			m("table", {
				class: "bordered stripped container"
			}, [
				m("thead", [
					m("tr", [
						m("th", "Adm"),
						m("th", "Names"),
						m("th", "Course"),
						m("th", "Level"),
						m("th", "Stage"),
						m("th", "Study Mode")
					])
				]),
				m("tbody", [
					ctrl.results().map((result) => {
						return m("tr", [
							m("td", result.adm),
							m("td", result.name),
							m("td", result.course.name),
							m("td", result.level.name),
							m("td", result.stage.name),
							m("td", result.study_mode.name),
							m("td", [
								m("a", {
									href: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/viewpayments/" + result.id,
									config: m.route
								}, "View payments")
							]),
						])
					})

				])
			])
		])
	}
}