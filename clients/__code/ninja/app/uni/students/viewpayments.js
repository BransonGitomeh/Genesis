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
				m(".row-section", [
					m("br"),
					m("h5",{class:"center"},m.route.param("uniName")),
					m("h5",{class:"center"},"Student Financial Statement"),
					m("br"),
					m("table", {
						class: "striped"
					}, [
						m("thead", []),
						m("tbody", [
							m("tr", [
								m("td", m("b", "Names")),
								m("td", ctrl.payments().student.name),

								m("td", m("b", "Admission Number")),
								m("td", ctrl.payments().student.adm),

								m("td", m("b", "Course")),
								m("td", ctrl.payments().student.course),
							]),
							m("tr", [

								m("td", m("b", "Study Mode")),
								m("td", ctrl.payments().student.study_mode),
								m("td", m("b", "Stage")),
								m("td", ctrl.payments().student.level),
								m("td", m("b", "Semester")),
								m("td", ctrl.payments().student.stage)
							])

						])
					]),
					m("br"),
					m("br")
				]),
				m(".row", [
					m(".col s12 m3 l12 blue white-text", [
						m("h4", "Financial Statement")
					]),
					m(".invoice-table container", [
						m(".row", [
							m("table", {
								class: "striped"
							}, [
								m("thead", [
									m("tr", [
										m("th", "Semester"),
										m("th", "Units selected"),
										m("th", "Cost of units"),
										m("th", "Payments made"),
										m("th", "Receipt Number")
									])
								]),
								m("tbody", [
									ctrl.payments().stages.map((stage) => {
										return [
											m("tr", [
												m("td", stage.name),
												m("td", [
													m("ul", [
														stage.unitsSelected.map((unit) => {
															return m("li", unit.unit)
														})
													])
												]),
												m("td", [
													m("ul", [
														stage.unitsSelected.map((unit) => {
															return m("li", unit.cost)
														})
													])
												]),
												m("td", [
													m("ul", [
														stage.myPaymentsInThisSem.map((payment) => {
															return m("li", payment.ammount)
														})
													])
												]),
												m("td", [
													m("ul", [
														stage.myPaymentsInThisSem.map((payment) => {
															return m("li", payment.receiptNo)
														})
													])
												])

											]),
											m("tr", [
												m("td", " "),
												m("td", " "),
												m("td", m("b", "TOTAL: " + stage.UnitsCharges)),
												m("td", m("b", "TOTAL:" + stage.TotalPayments))
											])
										]
									})
								])
							])
						])
					]),
					// the totals area
					m(".col s12 m3 l12", [
						m(".row", [
							m(".col s12 m3 l3 blue white-text right", [
								// m("h4",{class:"header"},"Total Paid: " + ctrl.payments().sums)
							])
						])
					])

				]),
				m("br"),
				m("br"),
				m(".col s12 m3 l6 blue white-text right", [
					m("h5", " Total Payments: " + ctrl.payments().overall.totalPaid + " Balance: " + ctrl.payments().overall.totalBalance)
				])
			])
		])
	}
}