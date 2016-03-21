var noticeboard_item = require("../../../ninja/app/uni/noticeItem")
module.exports = {
	controller:function(){
		var items = m.request({
				method:"GET",
				url:apiUrl + "/basic/getNoticeboard/" + m.route.param("id"),
				background: true,
			    initialValue: {noticeboard_items:[]}
		})

		items.then(function(stuff){
			console.log(stuff)
		})
		return {
			items:items
		}
	},
	view:function(ctrl,args){
		return m(".noticeboard",[
          m(".row",[
            m(".col l12",[
            (ctrl.items().noticeboard_items.length === 1 ?
                          ctrl.items().noticeboard_items.map(function(item){
            			     return m(noticeboard_item,{
            	                  id:item.id,
            	                  title:item.title,
            	                  content:item.content,
            	                  args:item.createdAt,
            	                  deleteBtn:false
            	                })
            			   })
                         ? m("h1","no items so far"))
            ])
          ])
        ])
	}
}




           