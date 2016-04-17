var links = function(student) {
	return [{
		url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/viewpayments/" + student.id,
		text: "View payments"
	}, {
		url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/payments/" + student.id,
		text: "Add Payment"
	}, {
		url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/config/" + student.id + "/units/" + student.stage.id + "/" + student.active_trisemester.id,
		text: "Select units"
	}, {
		url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Student/" + student.id,
		text: "Student Portal",
		direction: "right"
	}]
}

module.exports = {
	controller: function() {
		return {
			student: m.request({
				method: "Post",
				url: apiUrl + "/services",
				data: {
					role: "student_management",
					cmd: "get_student_details",
					student_id: m.route.param("student_id")
				}
			})
		}
	},
	view: function(ctrl, args) {
		var student = ctrl.student().studentInfo
		console.log(student)
		return m(".", [
			m("." + (args ? args.css : "card"), [
				m(".col l3", m("b", "Name: "), student.name),
				m(".col l3", m("b", "Study_mode: "), student.study_mode.name),
				m(".col l2", m("b", "Course: "), student.course.name),
				m(".col l2", m("b", "Level: "), student.level.name),
				m(".col l2", m("b", "Semester: "), student.stage.name),


			]),
			m("nav", [
				m(".nav-wrapper blue", [
					m("ul", [
						links(student).map((link) => {
							return m("li", {
								class: (link.url === m.route() ? "active " : "") + link.direction + " waves-effect waves-light waves-block",
							}, m("a", {
								href: link.url,
								config: m.route
							}, link.text))
						}),
					])
				])
			])
		])
	}
}