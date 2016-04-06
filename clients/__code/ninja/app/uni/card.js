module.exports = {
	view:(ctrl,args)=>{
		return 	m(".col s12 m6 l3",[
					m(".card hoverable",[
	      				m(".card-content white-text " + args.color,[
	      					m("h5",{class:"center card-stats-title"},[
	      						// m("i",{class:"mdi-social-group-add"})
	      					],args.title),
	      					m("h5",{class:"center card-stats-number"},args.number)
	      				]),
	      				m(".card-action darken-2 " + args.color,[

	      				])
	    			])
	    	])
	}
}