var paymentCard = require("./payment-card")
var inputComponent = require('../../../../__components/forminput');
var studentInfo = require("./studentInfo")

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
			trisemesters: m.request({
				method: "POST",
				url: apiUrl + "/services",
				data: {
					role: "university",
					cmd: "get_trisemesters",
					id: m.route.param("uniId"),
					mode: "simple"
				}
			}),
			payable_semesters: m.request({
				method: "POST",
				url: apiUrl + "/services",
				data: {
					role: "studentInfo",
					cmd: "get_semesters_payable_to",
					studentId: m.route.param("student_id")
				}
			}),
			pay_channels: m.request({
				url: apiUrl + "/services",
				method: "POST",
				data: {
					role: "finance",
					cmd: "get_payment_channels_in_a_uni",
					uni_id: m.route.param("uniId")
				}
			}),
			student: model.student(),
			schema: {
				trisem: m.prop(""),
				course: m.prop(""),
				level: m.prop(""),
				stage: m.prop(""),
				payment_channel: m.prop(""),

				ammount: m.prop(""),
				receiptNo: m.prop("")
			}
		}
	},
	view: (ctrl, args) => {
		return m(".container row", [

			m(studentInfo),

			m("form", {
				class: ".row"
			}, [

				m(".card-panel", [

					m("form", {
						onsubmit: (e) => {
							e.preventDefault();
							m.request({
								method: "POST",
								url: apiUrl + "/services",
								data: {
									role: "finance",
									cmd: "pick_payment_for_student",
									student_id: m.route.param("student_id"),
									tri_sem_id: ctrl.schema.trisem(),
									stage_id: ctrl.schema.stage(),
									course_id: ctrl.schema.course(),
									level_id: ctrl.schema.level(),
									payment_channel: ctrl.schema.payment_channel(),

									paymentAmmount: ctrl.schema.ammount(),
									receiptNo: ctrl.schema.receiptNo()
								}
							}).then((res) => m.route(m.route()))
						}
					}, [
						m(".row", [

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

									ctrl.trisemesters().tri_semesters.map(function(drop) {
										return m("option", {
											value: drop.id,
											selected: (m.route.param("selectedDepartment") == drop.id ? true : false)
										}, drop.name)
									})

								)
							]),



							m(".input-field col s12 l4", [

								m("select", {

										config: function() {
											$('select').material_select();
										},
										onchange: function(e) {
											// console.log(ctrl.student().levels_ive_done_before)

											ctrl.payable_semesters().map((sem) => {
												// console.log(sem.id  + " === " + e.target.value)
												// console.log(ctrl.payable_semesters())
												console.log(sem.id)
												console.log(e.target.value)
												if (sem.id == e.target.value) {
													// console.log(sem)
													ctrl.schema.course(sem.level.course.id);
													ctrl.schema.level(sem.level.id);
													ctrl.schema.stage(sem.id);
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

									ctrl.payable_semesters().map(function(stage) {
										return m("option", {
											value: stage.id,
											selected: (m.route.param("selectedDepartment") == stage.id ? true : false)
										}, stage.level.course.name + " - " + stage.level.name + " - " + stage.name)
									})

								)
							]),

							m(".input-field col s12 l4", [

								m("select", {

										config: function() {
											$('select').material_select();
										},
										onchange: function(e) {
											// console.log(ctrl.student().levels_ive_done_before)
											ctrl.schema.payment_channel(e.target.value)
												// alert(ctrl.schema.trisem() + ctrl.schema.course() + ctrl.schema.level())
										}
									},

									m("option", {
										value: "",
										disabled: true,
										selected: true,
									}, "Select Payment Channel"),

									ctrl.pay_channels().result.map(function(stage) {
										return m("option", {
											value: stage.id,
											selected: (m.route.param("selectedDepartment") == stage.id ? true : false)
										}, stage.name)
									})

								)
							]),

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
								type: "date",
								selectableMonths: true,
								years: 15,
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
							])
						])
					])
				])
			])

		])
	}
}