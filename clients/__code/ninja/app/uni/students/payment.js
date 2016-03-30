var paymentCard = require("./payment-card")

var model = {
	student:() => {
		return m.request({
			method:"GET",
			url:apiUrl + "/basic/getfeePayments/" + m.route.param("student_id")
		})
	}
}
module.exports = {
	controller:(args)=>{
		return {
			student:model.student()
		}
	},
	view:(ctrl,args)=>{
		return m(".app",[

			m(".card-panel",[
				m("h1",{class:"center"},"Student's Payment report(ksh " + ctrl.student().sums + ")"),

				m("table",[
					m("tbody",[
						m("tr",[
							m("td",{class:"left"},"Admission Number :",m("b",ctrl.student().adm)),
							m("td",{class:"center"},"Names :",m("b",ctrl.student().name)),
							m("td",{class:"right"},"stage :",m("b",ctrl.student().stage.name))
						]),
						m("tr",[
							m("td",{class:"left"},"Course :",m("b",ctrl.student().course.name)),
							m("td",{class:"center"},"Study mode :",m("b",ctrl.student().study_mode.name)),
							m("td",{class:"right"},"Level :",m("b",ctrl.student().level.name))
						])
					])
				]),

			]),

			ctrl.student().payments.map((payment)=>{
				return 	m("span",{key:payment.id},[
					m(paymentCard,{ payment_id:payment.id})
				])
			})
		])
	  }
}

// {key: item.id}
