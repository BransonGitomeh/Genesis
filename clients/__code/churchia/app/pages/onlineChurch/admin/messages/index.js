var navItem = require('../../../../peices/navItem');
var input = require('../../../../../../__components/forminput.js');
// var url = apiUrl + ""

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
      postChurch:function(){
      	var data = {
          sendermail:event.schema.sendermail(),
          location:event.schema.location(),
          sendate:new Date(),
          message:event.schema.message()
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
    return m(".row",[
      m("h5",{class:"center"},"Church messages sent from website"),

            ctrl.churches().map(function(item){
              return m(".card-panel",[
                m(".col l6",[
                  m("i","From "+item.sendermail)
                ]),

                m(".col l6",[
                  m("i",{class:"right"},item.type + " (" + "Posted " + moment.duration(moment(item.sendate).diff(moment(new Date())),'milliseconds').humanize() + " ago"  + ")")
                ]),

                m(".col l12 card-panelx",[
                  m(".divider"),
                  m("p",m.trust(item.message)),
                  // m(".divider"),
                ]),

                m("br"),

                m(".row",[
                  // m(".col l6",[
                  //   // var birthday = moment(item.sendate);
                  //   // var inputDate = moment(new Date);
                  //   // var diff = birthday.diff(inputDate, 'days');
                  //   m("i",{class:"left"},)
                  // ]),


                  // m("td",item.readstatus),

                  m(".col l12",[
                    m("a",{
                      class:"btn-flat waves-effect waves-light right",
                      onclick:function(){
                        ctrl.deleteAnEvent(item.id)
                      }
                    },"delete message")
                  ])
                ])

              ])
            })

    ])
  }
}
