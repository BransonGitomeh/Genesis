var noticeboard_item = require("../../../ninja/app/uni/noticeItem")
var oldNotices = require("../../../ninja/app/uni/oldNotices")
module.exports = {
	controller:function(){
		var items = m.request({method:"GET",url:apiUrl + "/basic/getNoticeboard/" + m.route.param("uniId"),background: true,initialValue: {noticeboard_items:[]}});
		items.then(m.redraw);
		return {
			items:items
		}
	},
	view:function(ctrl,args){
		return m(".noticeboard",[
          m(".row",[
            m(".col l8",[
            //-----
            ctrl.items().noticeboard_items.length > 0 ?
                          ctrl.items().noticeboard_items.reverse().map(function(item){
            			     return m(noticeboard_item,{
            	                  id:item.id,
            	                  title:item.title,
            	                  content:item.content,
            	                  createdAt:item.createdAt,
            	                  deleteBtn:false
            	                })
            			   })
                         : m(".loading",[
                         	m("br"),
                         	m("h6",{class:"center"},"fetching your notices"),
                         	m(".progress",[                  		
                         		m(".indeterminate blue")
                           ])
                         ])
            ]),
            //------
            m(".col l4",[
                m.component(oldNotices),
            ])
          ])
        ])
	}
}




           