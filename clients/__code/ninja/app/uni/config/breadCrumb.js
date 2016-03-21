module.exports = {
  view:function(controller,attrs){
    return m("div",
    	// m("br"),
    	m(".row",[
	     	m("nav",{class:"blue"},
	     		m(".nav-wrapper",
	     			m(".col s12",
	     				attrs.crumps.map(function(crump){
	     					return m("a",{
	     						config:m.route, 
	     						class:"breadcrumb",
	     						href:(crump.url ? crump.url :"")
	     					},crump.text)
	     				})
	     			)
	     		)
	     	)
	    ])
    )
  }
}