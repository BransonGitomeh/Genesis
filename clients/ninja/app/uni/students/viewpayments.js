var paymentCard = require("./payment-card")
var studentInfo = require("./studentInfo")

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
		return m(".container row", [
			args ? "" : m(studentInfo),
			m(".invoice-header card-panel", [
				m(".row", [

					// the totals area
					m(".col s12 m3 l12", [
						m(".row", [
							m(".col s12 m3 l3 blue white-text right", [
								// m("h4",{class:"header"},"Total Paid: " + ctrl.payments().payments_log.totalPayments)
							])
						])
					]),

					m("h5", "Charges"),
					m("table", {
						class: "striped"
					}, [
						m("thead", [
							m("tr", [
								m("th", "Semester"),
								m("th", "Course"),
								m("th", "Level"),
								m("th", "Semester"),
								m("th", "Unit"),
								m("th", "Date of registration"),
								m("th", "Cost")
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
									m("td", moment(unit.date).format('MM/DD/YYYY')),
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

					m("h5", "Payments"),
					m("table", {
						class: "striped"
					}, [
						m("thead", [
							m("tr", [
								m("th", "Semester"),
								m("th", "Course"),
								m("th", "Level"),
								m("th", "Reciept issued"),
								m("th", "Payment record date"),
								m("th", "Channel"),
								m("th", "Payment Ammount"),
							])
						]),
						m("tbody", [

							ctrl.payments().payments_log.payments.map((payment) => {
								return m("tr", [
									m("td", payment.trimester),
									m("td", payment.course),
									m("td", payment.level),
									m("td", payment.receipt),
									m("td", moment(payment.date).format('MM/DD/YYYY')),
									m("td", payment.channel + " - " + payment.location),
									m("td", payment.ammount)

								])
							})
						])
					]),
					m(".col s12 m3 l12", [
						m(".row", [
							m(".col s12 m3 l3 blue white-text right", [
								m("h6", {
									class: "header"
								}, "Total payments: " + ctrl.payments().payments_log.totalPayments)
							])
						])
					]),

					m("br"),
					m("br"),
					m(".col s12 m3 l3 blue white-text right", [
						m("h6", "Current Balance: " + ctrl.payments().balance)
					])
				])
			])
		])
	}
}