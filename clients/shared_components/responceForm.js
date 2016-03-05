var navItem = require('./navItem');
var input = require('./forminput');
var url = "http://localhost:3000"

var event = {
  schema:{
    sendermail:m.prop(""),
    location:m.prop(""),
    sendate:m.prop(""),
    message:m.prop(""),
    readstatus:m.prop("")
  },
  vm:{
    sending:m.prop(false)
  }
}

module.exports = {
  controller:function(){
    //getting the data
    var data =  m.request({ method:"GET", url:url + "/messages", background: true, initialValue: [] })
    data.then(m.redraw) //redraw to render the data gotten from the server
    return {
      churches:data,
      postChurch:function(type){
      	var data = {
          sendermail:event.schema.sendermail(),
          location:event.schema.location(),
          sendate:new Date(),
          message:event.schema.message(),
          type:type
        }
        m.request({method:"POST",url:url+"/messages",data:data}).then(function(){ m.route( m.route() ) })
      },
      deleteAnEvent:function(id){
        m.request({method:"POST",url:url+"/messagesDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
      },
      event:event.schema,
      vm:event.vm
    }
  },
  view:function(ctrl,args){
    return m(".events form",[
      m("h1",{class:"center"},"Leave us a " + args.header),
      m("form",{
        class:"card-panel",
        onsubmit:function(e){
          ctrl.postChurch(args.header)
          e.preventDefault();
        }
      },[

        m(".row",[
          m(input,{
            label:"Your Personal Email Or Phone Number",
            type:"text",
            value:ctrl.event.sendermail,
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"Your location",
            type:"text",
            value:ctrl.event.location,
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"Your " + args.header,
            type:"textarea",
            value:ctrl.event.message,
            sizes:"col s12 l12"
          }),

        ]),

        m("button",{class:"btn blue"},"send " + args.header)
      ]),
    ])
  }
}
