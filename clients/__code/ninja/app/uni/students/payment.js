var paymentCard = require("./payment-card")
var inputComponent = require('../../../../__components/forminput');

var model = {
	student:() => {
		return m.request({
			method:"GET",
			url:apiUrl + "/basic/getMyTriSems/" + m.route.param("student_id")
		})
	}
}
module.exports = {
	controller:(args)=>{
		return {
			student:model.student(),
			schema:{
				trisem:m.prop(""),
				course:m.prop(""),
				level:m.prop(""),
				stage:m.prop(""),
				
				ammount:m.prop(""),
				receiptNo:m.prop("")
			}
		}
	},
	view:(ctrl,args)=>{
		return m(".app row",[

			m(".card-panel",[
				// m("h1",{class:"center"},"Student's Payment report(ksh " + ctrl.student().sums + ")"),

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

m("div",{class:"card-panel"},[


	m(".input-field col s12 l3",[

			m("select",{
					
                    config:function(){
                      $('select').material_select();
                    },
                    onchange:function(e){
                      ctrl.schema.trisem(e.target.value)
                    }
                  },

                    m("option",{
                      value:"",
                      disabled:true,
                      selected:true,
                    },"Select Tri-semester"),

                    ctrl.student().tri_semesters_i_pay_for.map(function(drop){
                      return m("option",{
                        value:drop.id,
                        selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
                      },drop.name)
                    })

                  )
			]),

	m(".input-field col s12 l3",[

			m("select",{
					
                    config:function(){
                      $('select').material_select();
                    },
                    onchange:function(e){
                      ctrl.schema.course(e.target.value);
                      // alert(ctrl.schema.trisem() + ctrl.schema.course())
                    }
                  },

                    m("option",{
                      value:"",
                      disabled:true,
                      selected:true,
                    },"Select course/class/form"),

                    ctrl.student().courses_ive_done_before.map(function(drop){
                      return m("option",{
                        value:drop.id,
                        selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
                      },drop.name)
                    })

                  )
			]),

	m(".input-field col s12 l3",[

			m("select",{
					
                    config:function(){
                      $('select').material_select();
                    },
                    onchange:function(e){
                      ctrl.schema.level(e.target.value);
                      // alert(ctrl.schema.trisem() + ctrl.schema.course() + ctrl.schema.level())
                    }
                  },

                    m("option",{
                      value:"",
                      disabled:true,
                      selected:true,
                    },"Select level/stream"),

                    ctrl.student().levels_ive_done_before.map(function(drop){
                      return m("option",{
                        value:drop.id,
                        selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
                      },drop.name)
                    })

                  )
			]),

	m(".input-field col s12 l3",[

			m("select",{
					
                    config:function(){
                      $('select').material_select();
                    },
                    onchange:function(e){
                      ctrl.schema.stage(e.target.value);
                      // alert(ctrl.schema.trisem() + ctrl.schema.course() + ctrl.schema.level() + ctrl.schema.sem())
                    }
                  },

                    m("option",{
                      value:"",
                      disabled:true,
                      selected:true,
                    },"Select stage/semester/term"),

                    ctrl.student().stages_ive_done_before.map(function(drop){
                      return m("option",{
                        value:drop.id,
                        selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
                      },drop.name)
                    })

                  )
			]),

			m("form",{
				class:"row",
							onsubmit:(e)=>{
								e.preventDefault();
								m.request({
									method:"POST",
									url:apiUrl + "/basic/makePaymentToStudent/" + m.route.param("student_id"),
									data:{
										trisem_id:ctrl.schema.trisem(),
										stage_id:ctrl.schema.stage(),
										course_id:ctrl.schema.course(),
										level_id:ctrl.schema.level(),

										ammount:ctrl.schema.ammount(),
										receipt:ctrl.schema.receiptNo()
									}
								}).then((res)=>m.route( m.route( ) ))
							}
						},[
							// m("div",{class:"col l3"},[
							// 	m("b",ctrl.payment().trisem.name)
							// ]),

			                m(inputComponent,{
			                  value:ctrl.schema.ammount,
			                  label:"Installment ammount",
			                  // icon:"mdi-editor-attach-money prefix",
			                  type:"text",
			                  sizes:"s12 m12 l6"
			                }),

			                m(inputComponent,{
			                  value:ctrl.schema.receiptNo,
			                  label:"Receipt Number",
			                  // icon:"mdi-editor-insert-drive-file prefix",
			                  type:"text",
			                  sizes:"s12 m12 l6"
			                }),

			                m("div",{class:"s12 m12 l3"},[
			                	m("br"),
			                	m("button",{class:"btn blue col l3 waves-effect waves-block waves-light right"},"submit")
			                ])
			            ])
			])

	

		])
	  }
}