var toogle = require("./selectors/switch");

module.exports = {
	controller:()=>{
		var availableTrisemesters = m.request({
			method:"GET",
			url:apiUrl + "/basic/studentsConfiguration/" + m.route.param("student_id")
		})
		return {
			selected:m.prop(false),
			results:availableTrisemesters
		}
	},
	view(ctrl,args){
		return m(".app",[
			m("h1","config for student"),
			m(toogle,{ value:ctrl.selected }),
			m("div",ctrl.selected()),

			m("div","name:" + ctrl.results().name),
			m("div","course:" + ctrl.results().course.name),
			m("div","level:" + ctrl.results().level.name),
			m("div","stage:" + ctrl.results().stage.name),
			m("u","units being offered i this stage"),
			ctrl.results().stage.units_i_offer.map((unit)=>{
				return m("li",unit.name,m("button",{
					onclick:()=>{
						// alert("adding " + unit.name);
						m.request({
							method:"POST",
							url:apiUrl + "/basic/AddUnitToStudent/" + m.route.param("student_id"),
							data:{
								unit_id:unit.id
							}
						}).then(m.route( m.route( ) ))
					}
				},"select unit"))
			}),
			m("u","units you are taking"),
			ctrl.results().units_im_taking.map((unit)=>{
				return m("li",unit.name,m("button",{
					onclick:()=>{
						// alert("adding " + unit.name);
						m.request({
							method:"POST",
							url:apiUrl + "/basic/RemoveUnitFromStudent/" + m.route.param("student_id"),
							data:{
								unit_id:unit.id
							}
						}).then(m.route( m.route( ) ))
					}
				},"remove unit"))
			})
		])
	}
}