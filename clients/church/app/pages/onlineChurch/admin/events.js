var navItem = require('../../../peices/navItem');
var input = require('../../../../../shared_components/forminput.js');
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
    //getting the data
    var data =  m.request({ method:"GET", url:url + "/events", background: true, initialValue: [] })
    data.then(m.redraw) //redraw to render the data gotten from the server
    return {
      churches:data,
      postChurch:function(){
      	var data = { title:event.schema.title(), date:event.schema.date() }
        m.request({method:"POST",url:url+"/events",data:data}).then(function(){ m.route( m.route() ) })
      },
      deleteAnEvent:function(id){
        m.request({method:"POST",url:url+"/eventDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
      },
      event:event.schema,
      vm:event.vm
    }
  },
  view:function(ctrl,args){
    return m(".events form",[
      m("form",{
        class:"card-panel",
        onsubmit:function(e){
          ctrl.postChurch()
          e.preventDefault();
        }
      },[

        m(".row",[
          m(input,{
            label:"title",
            type:"text",
            value:ctrl.event.title,
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"date",
            type:"text",
            value:ctrl.event.date,
            sizes:"col s12 l6"
          }),

        ]),

        m("button",{class:"btn red"},"create")
      ]),

      m("h5",{class:"header center"},"Church events"),
      m("table",{class:"bordered responsive-table"},[
        m("thead",[
          m("tr",[
            m("th","Event name"),
            m("th","Event Date")
          ])
        ]),
        m("tbody",[
            ctrl.churches().map(function(item){
              return m("tr",[
                m("td",item.title),
                m("td",item.date),
                m("td",[
                  m("button",{
                    onclick:function(){
                      ctrl.deleteAnEvent(item.id)
                    }
                  },"remove")
                ])
              ])
            })

        ])
      ])
    ])
  }
}
