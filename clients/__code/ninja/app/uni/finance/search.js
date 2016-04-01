var inputComponent = require('../../../../__components/forminput');

module.exports = {
	controller:()=>{
		var results = m.request({
			method:"POST",
			url:apiUrl + "/saerchStudent/" + m.route.param("uniId"),
			data:{
				searchTerm:m.route.param("q")
			}
		})

		return {
			results:results,
			schema:{
				searchTerm:m.prop("")
			}
		}
	},
	view:(ctrl,args)=>{
		return m(".containerx card-panel",[
			m("form",{
				class:"row margin",
				onsubmit:(e)=>{
					e.preventDefault();
					m.route(m.route(),{q:ctrl.schema.searchTerm()})
				}
			},[
                m(inputComponent,{
                  value:ctrl.schema.searchTerm,
                  label:"Student admission number",
                  icon:"mdi-action-search prefix",
                  type:"text",
                  sizes:"s12 m12 l10",
                }),
                m(".searchButton",[
                	m("br"),
                	m("button",{
	                	class:"btn blue",
	                	type:"submit"
	                },"search")
                ])
            ]),

            m("table",{class:"bordered stripped"},[
            	m("thead",[
            		m("tr",[
            			m("th","Adm"),
            			m("th","Names"),
            			m("th","Course"),
            			m("th","Level"),
            			m("th","Stage"),
            			m("th","Study Mode")
            		])
            	]),
            	m("tbody",[
               			ctrl.results().map((result)=>{
	            			 return m("tr",[
	            				m("td",result.adm),
		            			m("td",result.name),
		            			m("td",result.course.name),
		            			m("td",result.level.name),
		            			m("td",result.stage.name),
		            			m("td",result.study_mode.name),
		            			m("td",[
									m("a",{
										href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/viewpayments/" + result.id,
										config:m.route
									},"view payments")
								]),
								m("td",[
									m("a",{
										href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/payments/" + result.id,
										config:m.route
									},"make payment")
								])
		            		 ])
            			})	
            		
            	])
            ]),

            m("br"),
            ctrl.schema.searchTerm() === "" ? m(".flow-text center","Search for a student here..") : ""
		])
	}
}