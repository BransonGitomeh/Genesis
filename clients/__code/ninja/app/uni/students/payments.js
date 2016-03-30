module.exports = {
	controller:(args)=>{
		return {
			students:m.request({
				method:"GET",
				url:apiUrl + "/basic/getAllfeePayments/"
			})
		}
	},
	view:(ctrl,args)=>{
		return m(".app",[
			m("h1","the students list"),

			m("a",{
					class:"btn blue right",
					href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students",
					config:m.route
				},"add student"),
			m("a",{
					class:"btn blue right",
					href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/payments",
					config:m.route
				},"payments"),

			m("table",[

				m("thead",[
					m("tr",[
						m("th","id"),
						m("th","name"),
						m("th","adm"),
						m("th","payments")
					])
				]),
				m("tbody",[
						ctrl.students().map((student)=>{
							return m("tr",[
								m("td",student.id),
								m("td",student.name),
								m("td",student.adm),

								m("td",[
									console.log(student.payments),
									student.payments.map((payment)=>{
										return m("td",(payment.trisem ? payment.trisem + "," : ""))
									})

								]),
								m("td",[
									m("a",{
										href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/payments/" + student.id,
										config:m.route
									},"view payments")
								])

							])
						})
				])

			])

		])
	}
}
