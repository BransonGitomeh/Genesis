module.exports = {
	controller:(args)=>{
		return {
			students:m.request({
				method:"GET",
				url:apiUrl + "/basic/getAllStudents/" + m.route.param("uniId")
			})
		}
	},
	view:(ctrl,args)=>{
		return m(".app",[
			m("br"),
			m("a",{
					class:"btn blue right",
					href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students",
					config:m.route
			},"add student"),

			m(".flow-text","All Students inside " + m.route.param("uniName")),

			m("table",[

				m("thead",[
					m("tr",[
						m("th","id"),
						m("th","name"),
						m("th","adm"),
						m("th","course"),
						m("th","level"),
						m("th","stage"),
						m("th","study_mode")
					])
				]),
				m("tbody",[
						ctrl.students().map((student)=>{
							return m("tr",[
								m("td",student.id),
								m("td",student.name),
								m("td",student.adm),
								m("td",student.course ? student.course.name : ""),
								m("td",student.level ? student.level.name : ""),
								m("td",student.stage ? student.stage.name : ""),
								m("td",student.study_mode ? student.study_mode.name : ""),
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
