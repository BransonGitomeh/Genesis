module.exports = {
	controller: (args) => {
		var getTri_semesters = m.request({
			method: "GET",
			url: apiUrl + "/basic/getTri_semesters/" + m.route.param("uniId")
		})
		return {
			students: m.request({
				method: "GET",
				url: apiUrl + "/basic/getAllStudents/" + m.route.param("uniId")
			}),
			getTri_semesters: getTri_semesters
		}
	},
	view: (ctrl, args) => {
		return m("span", [
			m("nav", [
				m(".nav-wrapper blue", [
					m(".col s6", [
						m("a", {
							class: "breadcrumb"
						}, "Dashboard"),
						m("a", {
							class: "breadcrumb"
						}, "All Students"),
					])
				])
			]),
			m("br"),

			m("div", {
				class: "container"
			}, [
				m("a", {
					class: "btn right blue",
					href: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students",
					config: m.route
				}, "New Student"),
				m("br"),

				m("table", [

					m("thead", [
						m("tr", [
							// m("th","id"),
							m("th", "name"),
							m("th", "adm"),
							m("th", "course"),
							m("th", "level"),
							m("th", "stage"),
							m("th", "study_mode")
						])
					]),
					m("tbody", [
						ctrl.students().map((student) => {
							return m("tr", [
								// m("td",student.id),
								m("td", student.adm),
								m("td", student.name),
								m("td", student.course ? student.course.name : ""),
								m("td", student.level ? student.level.name : ""),
								m("td", student.stage ? student.stage.name : ""),
								m("td", student.study_mode ? student.study_mode.name : ""),
								
								m("td", [
									m("a", {
										href: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/viewpayments/" + student.id,
										config: m.route
									}, "View payments")
								]),
								
							])
						})
					])
				])
			])
		])
	}
}