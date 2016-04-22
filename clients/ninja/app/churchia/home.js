var card = require("./card")

var inputComponent = require('../../../__components/forminput');
module.exports = {
	controller: () => {
		return {
			ChurchStats: m.request({
				method: "post",
				url: apiUrl + "/services",
				data: {
					role: "church",
					cmd: "get_stats",
					church_id: m.route.param("churchId")
				}
			})
		}
	},
	view: (ctrl, atrs) => {
		var stats = ctrl.ChurchStats().result
		console.log(stats)
		return m(".card-panelx", [
			m(".card-stats", [

				m(".row", [
					m(card, {
						title: "Admins",
						number: stats.admins,
						color: "orange"
					}),

					m(card, {
						title: "Users",
						number: stats.users,
						color: "orange darken-2"
					}),

					m(card, {
						title: "Messages",
						number: stats.messages,
						color: "orange darken-3"
					}),

					m(card, {
						title: "Unique visitors",
						number: stats.uniqueVisitors,
						color: "orange darken-4"
					})
				])
			])

		])
	}
}