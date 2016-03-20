module.exports = {
  view:function(controller,atrrs){
    return m("div",
    	// m("br"),
    	m(".row",[
	     	m("nav",{class:"blue"},
	     		m(".nav-wrapper",
	     			m(".col s12",
	     				atrrs.crumps.map(function(crump){
	     					return m("a",{config:m.route, class:"breadcrumb"},crump.text)
	     				})
	     			)
	     		)
	     	)
	    ])
    )
  }
}