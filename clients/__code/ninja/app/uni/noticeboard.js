var myComponent = require("./noticeItem")
var oldNotices = require("./oldNotices")
var inputComponent = require('../../../__components/forminput');
module.exports = {
  controller:function(){
    return {
      noticeboardItems:m.request({
        url:apiUrl + "/basic/getNoticeboard/" + m.route.param("uniId"),
        method:"GET"
      }),
      schema:{
        title:m.prop(""),
        content:m.prop("")
      }
    }
  },
  view:function(controller,atrrs){
    return m("span",[
        m("h1",{class:"center"},"Current Noticeboard Items"),
        m("a",{
                href:"/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard/add",
                config:m.route,
                type:"submit",
                class:"btn waves-effect waves-block waves-light blue center"
        },"Create New Notice"),
        m("br"),
        m(".notice-space",[
           

          m(".row",[
            m(".col l8",[
              controller.noticeboardItems().noticeboard_items ?
              controller.noticeboardItems().noticeboard_items.map(function(item){
                return m(myComponent,{
                  id:item.id,
                  title:item.title,
                  content:item.content,
                  args:item.createdAt,
                  deleteBtn:true
                })
              })
              : ""
            ]),
            m(".col l4",
              m(oldNotices)
            )
          ])
        ])
      ])
  }
}
