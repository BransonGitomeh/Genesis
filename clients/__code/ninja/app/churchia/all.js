module.exports = {
	controller: function() {
		return {
			churches: m.request({
				url: apiUrl + "/services",
				method: "post",
				data: {
					role: "church",
					cmd: "get_details",
					scope: "all"
				}
			})
		}
	},
	view: function(controller, atrrs) {
		return m("div", [
			m("div", {
				class: "card-panel"
			}, [
				m("br"),
				m("span", {
					class: "flow-text"
				}, "All Registered Churches"),
				m("a", {
					class: "btn blue right",
					href: "/churchia/new",
					config: m.route
				}, "create new"),
				m("br"),
				m("table", [
					m("thead", [
						m("tr", [
							// m("th","id"),
							m("th", "name"),
							m("th", "createdAt")
						])
					]),
					m("tbody", [
						console.log(controller.churches()),
						controller.churches().result.map(function(church) {
							return m("tr", [
								// m("td",university.id),
								m("td", church.name),
								m("td", church.createdAt),
								m("td", [
									m("a", {
										href: "/churchAdmin/" + church.name + "/" + church.id,
										config: m.route
									}, "Admin Ui")
								]),
								m("td", [
									m("a", {
										href: "/uniLogin/" + church.name + "/" + church.id,
										config: m.route,
										rel: "external",
									}, "Login Screens")
								])
							])
						})
					])
				])
			])
		])
	}
}