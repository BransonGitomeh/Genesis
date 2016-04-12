var paymentCard = require("./payment-card")
var inputComponent = require('../../../../__components/forminput');

var model = {
	student: () => {
		return m.request({
			method: "GET",
			url: apiUrl + "/basic/getMyTriSems/" + m.route.param("student_id")
		})
	}
}
module.exports = {
	controller: (args) => {
		return {
			student: model.student(),
			schema: {
				trisem: m.prop(""),
				course: m.prop(""),
				level: m.prop(""),
				stage: m.prop(""),

				ammount: m.prop(""),
				receiptNo: m.prop("")
			}
		}
	},
	view: (ctrl, args) => {
		return m("span", {
			class: "row"
		}, [
			m("nav", [
				m(".nav-wrapper blue", [
					m(".col s6", [
						m("a", {
							class: "breadcrumb"
						}, "Dashboard"),
						m("a", {
							class: "breadcrumb"
						}, "All Students"),
						m("a", {
							class: "breadcrumb"
						}, "New Payment"),
					])
				])
			]),

			// m("h4", {
			// 	class: "center"
			// }, m("u", "Enter a payment")),

			m(".container", [

				m("br"),

				m("div", [
					m("table", {
						class: "stripped"
					}, [
						m("thead", []),
						m("tbody", [
							m("tr", [
								m("td", m("b", "Admission Number")),
								m("td", ctrl.student().adm),
								m("td", m("b", "Names")),
								m("td", ctrl.student().name),
								m("td", m("b", "Course")),
								m("td", ctrl.student().course.name),
							]),
							m("tr", [

								m("td", m("b", "Study Mode")),
								m("td", ctrl.student().study_mode.name),
								m("td", m("b", "Level")),
								m("td", ctrl.student().level.name),
								m("td", m("b", "Stage")),
								m("td", ctrl.student().stage.name)
							])

						])
					])

				]),

				m("div", [


					m(".input-field col s12 l4", [

						m("select", {

								config: function() {
									$('select').material_select();
								},
								onchange: function(e) {
									ctrl.schema.trisem(e.target.value)
								}
							},

							m("option", {
								value: "",
								disabled: true,
								selected: true,
							}, "Select Tri-semester"),

							ctrl.student().tri_semesters_i_pay_for.map(function(drop) {
								return m("option", {
									value: drop.id,
									selected: (m.route.param("selectedDepartment") == drop.id ? true : false)
								}, drop.name)
							})

						)
					]),



					m(".input-field col s12 l8", [

						m("select", {

								config: function() {
									$('select').material_select();
								},
								onchange: function(e) {
									// console.log(ctrl.student().levels_ive_done_before)

									ctrl.student().stages_ive_done_before.map((stage) => {
										if (stage.id === e.target.value) {
											ctrl.schema.course(stage.level.course.id);
											ctrl.schema.level(stage.level.id);
											ctrl.schema.stage(stage.id);
										}
									})

									// alert(ctrl.schema.trisem() + ctrl.schema.course() + ctrl.schema.level())
								}
							},

							m("option", {
								value: "",
								disabled: true,
								selected: true,
							}, "Select semester to pay to"),

							ctrl.student().stages_ive_done_before.map(function(stage) {
								return m("option", {
									value: stage.id,
									selected: (m.route.param("selectedDepartment") == stage.id ? true : false)
								}, stage.level.course.name + " - " + stage.level.name + " - " + stage.name)
							})

						)
					]),

					m("form", {
						onsubmit: (e) => {
							e.preventDefault();
							m.request({
								method: "POST",
								url: apiUrl + "/basic/makePaymentToStudent/" + m.route.param("student_id"),
								data: {
									trisem_id: ctrl.schema.trisem(),
									stage_id: ctrl.schema.stage(),
									course_id: ctrl.schema.course(),
									level_id: ctrl.schema.level(),

									ammount: ctrl.schema.ammount(),
									receipt: ctrl.schema.receiptNo()
								}
							}).then((res) => m.route(m.route()))
						}
					}, [
						// m("div",{class:"col l3"},[
						// 	m("b",ctrl.payment().trisem.name)
						// ]),

						m(inputComponent, {
							value: ctrl.schema.ammount,
							label: "Installment ammount",
							// icon:"mdi-editor-attach-money prefix",
							type: "text",
							sizes: "s12 m12 l4"
						}),

						m(inputComponent, {
							value: ctrl.schema.receiptNo,
							label: "Receipt Number",
							// icon:"mdi-editor-insert-drive-file prefix",
							type: "text",
							sizes: "s12 m12 l4"
						}),

						m(inputComponent, {
							value: ctrl.schema.receiptNo,
							label: "Date",
							// icon:"mdi-editor-insert-drive-file prefix",
							type: "text",
							sizes: "s12 m12 l4"
						}),

						m("div", {
							class: "s12 m12 l4"
						}, [
							m("br"),
							m("br"),
							m("button", {
								class: "btn blue col l3 waves-effect waves-block waves-light"
							}, "submit")
						]),

						m("div", {
							class: "s12 m12 l4"
						}, [
							m("br"),
							m("br"),
							m("button", {
								class: "btn blue right col l3 waves-effect waves-block waves-light",
								onclick: () => {
									window.history.back();
								}
							}, "back")
						])
					])
				])
			])
		])
	}
}