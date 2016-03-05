var url = "http://localhost:3000"

var event = {
  schema:{
    title:m.prop(""),
    date:m.prop("")
  },
  vm:{
    sending:m.prop(false)
  }
}

module.exports = {
  controller:function(){
    var data =  m.request({ method:"GET", url:url + "/events", background: true, initialValue: [] })
    var sendData = function(sendData,callback){m.request({method:"POST",url:url+"/events",data:sendData}).then(function(){
      if(callback) callback()
    })}
    data.then(m.redraw)
    return {
      churches:data,
      postChurch:function(){
      	var data = {
      		title:event.schema.title(),
          date:event.schema.date()
      	}
        sendData(data,function(){
          m.route( m.route() )
        })
      },
      event:event.schema,
      vm:event.vm
    }
  },
  view:function(ctrl,args){
    return m("div",[
      // console.log(ctrl.data.responseJSON),
      // m("h1","mithril"),
      console.log("draw"),
      m(".card-panel",[
        m("h5",{class:"center"},"Upcoming Events"),
        m("ul",{class:"table-of-contents"},[

          //upcomming events in descending order
          ctrl.churches().map(function(event){
            return m("li",[
              m("a",{
                    class:ctrl.churches().indexOf(event) === 0 ? "active" : " "
                  },[
                    m("b",event.date + " - "),
                    m("span",event.title)
                  ]),
            ])
          }),

        ]),

        m("h5",{class:"center"},"Weekly Meetings"),

        m("ul",{class:"table-of-contents"},[
          //move this to its own component
          //upcomming events in descending order
          // meetings.map(function(meeting){
          //   return m("li",[
          //     m("a",[
          //       m("b",meeting.date + " - "),
          //       m("span",meeting.eventName),
          //       m("b",meeting.time)
          //     ]),
          //     m("br")
          //   ])
          // })
        ]),


      ])
    ])
  }
}
