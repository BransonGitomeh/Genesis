var paymentCard = require("./payment-card")

var model = {
	payments: () => {
		return m.request({
			method: "GET",
			url: apiUrl + "/basic/getMyPayments/" + m.route.param("student_id")
		})
	}
}
module.exports = {
	controller: (args) => {
		return {
			payments: model.payments()
		}
	},
	view: (ctrl, args) => {
		return m(".container", [

			m(".invoice-header", [
				m(".row", [
					m(".col s12 m3 l12 blue white-text", [
						m("h4", "Financial Statement")
					]),
					// the totals area
					m(".col s12 m3 l12", [
						m(".row", [
							m(".col s12 m3 l3 blue white-text right", [
								// m("h4",{class:"header"},"Total Paid: " + ctrl.payments().payments_log.totalPayments)
							])
						])
					]),

					m("h5", {
						class: "center"
					}, "Charges"),
					m("table", [
						m("thead", [
							m("tr", [
								m("th", "tri-semester"),
								m("th", "course"),
								m("th", "stage"),
								m("th", "semester"),
								m("th", "unit name"),
								m("th", "unit cost")
							])
						]),
						m("tbody", [

							ctrl.payments().units_log.unitsRegistered.map((unit) => {
								return m("tr", [
									m("td", unit.tri_semester),
									m("td", unit.course),
									m("td", unit.level),
									m("td", unit.stage),
									m("td", unit.unit),
									m("td", unit.cost)
								])
							})


						])
					]),

					m(".col s12 m3 l12", [
						m(".row", [
							m(".col s12 m3 l3 blue white-text right", [
								m("h6", {
									class: "header"
								}, "Total Charges: " + ctrl.payments().units_log.totalCost)
							])
						])
					]),

					m("h5", {
						class: "center"
					}, "Payments"),
					m("table", [
						m("thead", [
							m("tr", [
								m("th", "tri-semester"),
								m("th", "course"),
								m("th", "level"),
								m("th", "receipt"),
								m("th", "ammount"),
								m("th", "date")
							])
						]),
						m("tbody", [

							ctrl.payments().payments_log.payments.map((payment) => {
								return m("tr", [
									m("td", payment.trimester),
									m("td", payment.course),
									m("td", payment.level),
									m("td", payment.receipt),
									m("td", payment.ammount),
									m("td", payment.date)
								])
							})


						])
					]),
					m(".col s12 m3 l12", [
						m(".row", [
							m(".col s12 m3 l2 blue white-text right", [
								m("h6", {
									class: "header"
								}, "Total payments: " + ctrl.payments().payments_log.totalPayments)
							])
						])
					]),
				]),
				m("br"),
				m("br"),
				m(".col s12 m3 l6 blue white-text right", [
					m("h6", "Balance: " + ctrl.payments().balance)
				])
			])
		])
	}
}