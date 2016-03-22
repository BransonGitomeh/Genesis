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
        m("form",{
          class:"card-panel",
          onsubmit:function(e){
            m.request({
              url:apiUrl + "/basic/addToNoticeboard/" + m.route.param("uniId"),
              method:"POST",
              data:{
                title:controller.schema.title(),
                content:controller.schema.content()
              }
            }).then(m.route( m.route( ) ))
            e.preventDefault();
          }
        },[
          m("h1",{class:"center"},"New Noticeboard Item"),
          m(inputComponent,{
            label:"New Notice Header",
            icon:"mdi-communication-business prefix",
            type:"text",
            value:controller.schema.title
          }),

          m(inputComponent,{
            label:"New Notice Body",
            icon:"mdi-communication-business prefix",
            type:"textarea",
            value:controller.schema.content
          }),
            m("button",{
                type:"submit",
                class:"btn waves-effect waves-block waves-light green center"
            },"Create Notice")
        ]),

        m("br"),

        m("h1",{class:"center"},"Current Noticeboard Items"),

        m(".card-panel",[
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
