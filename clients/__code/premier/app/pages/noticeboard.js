var noticeboard_item = require("../../../ninja/app/uni/noticeItem")
module.exports = {
	controller:function(){
		return {
			items:m.request({
				method:"GET",
				url:"http://localhost:3000/basic/getNoticeboard/" + m.route.param("id")
			})
		}
	},
	view:function(ctrl,args){
		return m(".noticeboard",[
          m(".row",[
            m(".col l12",[
              ctrl.items().noticeboard_items.map(function(item){
			     return m(noticeboard_item,{
	                  id:item.id,
	                  title:item.title,
	                  content:item.content,
	                  args:item.createdAt,
	                  deleteBtn:false
	                })
			   })
            ])
          ])
        ])
	}
}




           