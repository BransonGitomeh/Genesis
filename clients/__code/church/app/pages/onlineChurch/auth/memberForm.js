var navItem = require('../../../peices/navItem');
var input = require('../../../../../__components/forminput.js');
// var url = apiUrl + ""

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
      m("form",{
        class:"card-panel",
        onsubmit:function(e){
          ctrl.postChurch()
          e.preventDefault();
        }
      },[

        m(".row",[
          m("h5",{class:"header"},"Registration Form"),
          m(input,{
            label:"surname",
            type:"text",
            value:ctrl.event.surname,
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"othernames",
            type:"text",
            value:ctrl.event.othernames,
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"dob",
            type:"text",
            value:ctrl.event.dob,
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"gender",
            type:"text",
            value:ctrl.event.gender,
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"nationality",
            type:"text",
            value:ctrl.event.nationality,
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"id/passport",
            type:"text",
            value:ctrl.event.id_passport,
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"email",
            type:"text",
            value:ctrl.event.email,
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"postal address",
            type:"text",
            value:ctrl.event.postalAddress,
            sizes:"col s12 l6"
          })

        ]),

        m("button",{class:"btn red"},"create")
      ])
    ])
  }
}
