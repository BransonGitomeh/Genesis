var navItem = require('../../../peices/navItem');
var input = require('../../../../../__components/forminput.js');
// var url = "http://localhost:3000"

var event = {
  schema:{
    surname:m.prop(""),
    othernames:m.prop(""),
    dob:m.prop(""),
    gender:m.prop(""),
    nationality:m.prop(""),
    id_Passport:m.prop(""),
    maritalStatus:m.prop(""),
    email:m.prop(""),
    postalAddress:m.prop("")
  },
  vm:{
    sending:m.prop(false)
  }
}

module.exports = {
  controller:function(){
    //getting the data
    var data =  m.request({ method:"GET", url:url + "/members", background: true, initialValue: [] })
    data.then(m.redraw) //redraw to render the data gotten from the server
    return {
      churches:data,
      postChurch:function(){
      	var data = {
          surname:event.schema.surname(),
          othernames:event.schema.othernames(),
          dob:event.schema.dob(),
          gender:event.schema.gender(),
          nationality:event.schema.nationality(),
          id_Passport:event.schema.id_Passport(),
          maritalStatus:event.schema.maritalStatus(),
          email:event.schema.email(),
          postalAddress:event.schema.postalAddress()
        }
        console.log(data);
        m.request({method:"POST",url:url+"/members",data:data}).then(function(){ m.route( m.route() ) })
      },
      deleteAnEvent:function(id){
        m.request({method:"POST",url:url+"/memberDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
      },
      event:event.schema,
      vm:event.vm
    }
  },
  view:function(ctrl,args){
    return m(".events form",[

      m("h5",{class:"header center"},"Registered Church members"),
      m("table",{class:"bordered responsive-table"},[
        m("thead",[
          m("tr",[
            m("th","surname"),
            m("th","othernames"),
            m("th","dob"),
            m("th","gender"),
            m("th","nationality"),
            m("th","id/passport"),
            m("th","email"),
            m("th","postalAddress")
          ])
        ]),
        m("tbody",[
            ctrl.churches().map(function(item){
              return m("tr",[
                m("td",item.surname),
                m("td",item.othernames),
                m("td",item.dob),
                m("td",item.gender),
                m("td",item.nationality),
                m("td",item.id_passport),
                m("td",item.email),
                m("td",item.postalAddress),
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
