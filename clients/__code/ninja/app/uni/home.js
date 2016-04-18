var card = require("./card")

var inputComponent = require('../../../__components/forminput');
module.exports = {
	controller: () => {
		return {
			uniStats: m.request({
				method: "post",
				url: apiUrl + "/services",
				data: {
					role: "university",
					cmd: "get_stats",
					university_id: m.route.param("uniId")
				}
			})
		}
	},
	view: (ctrl, atrrs) => {
		return m(".card-panelx", [
			m(".card-stats", [
				m(".row", [
					m(card, {
						title: "Students",
						number: ctrl.uniStats().result.students,
						color: "blue"
					}),
					m(card, {
						title: "Total Cash paid in",
						number: ctrl.uniStats().result.totalFinance + " Rw.f",
						color: "blue darken-1"
					})
				])
			])

		])
	}
}