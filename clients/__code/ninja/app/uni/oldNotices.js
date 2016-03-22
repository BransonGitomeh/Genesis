module.exports = {
	controller:function(){
		return {
			notices:m.request({method:"GET",url:apiUrl + "/basic/getNoticeboardOld/" + m.route.param("uniId")})
		}
	},
	view:function(controller){
		return m("div",[
                m("ul",{class:"collection with-header"},[
                	m("li",{class:"collection-header blue white-text"},
                		m("h4","Past notices")
                	),
                	controller.notices().old_noticeboard_items.map(function(notice){
	                	return m("li",{class:"collection-item"},notice.title,[
	                		m("a",{class:"secondary-content btn-floating blue"},[
	                			m("i",{class:"mdi-av-replay"})
	                		]),
	                		m("br"),
	                		m("span","( shared " + moment.duration(moment(notice.createdAt).diff(moment(new Date())),'milliseconds').humanize() + " ago"  + " )")
	                	])
	                })
                ])
			])

	}
}