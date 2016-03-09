var navItem = require('../navItem');
var input = require('../forminput.js');
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
    return m(".app",[
      m("form",{
        class:"card-panelx",
        onsubmit:function(e){
          ctrl.postChurch()
          e.preventDefault();
        }
      },[

        m(".row",[
          m(".row",[
            m(".input-field col s12 l12 center",[
              m("img",{src:"/picture", class:"responsive-img valign profile-image-login"}),
              m("p",{class:"center login-form-text"},"Gathering registration Form"),
            ])
          ]),
          // m("h5",{class:"header center"},"Registration Form"),
          m(".row",[

            m(input,{
              label:"Your Surname",
              type:"text",
              value:ctrl.event.surname,
              icon:"mdi-social-person-outline prefix",
              sizes:"col s12 l6"
            }),

            m(input,{
              label:"Other Names",
              type:"text",
              value:ctrl.event.othernames,
              icon:"mdi-action-account-circle prefix",
              sizes:"col s12 l6"
            })
          ]),

        m(".row",[
          m(input,{
            label:"Date Of Birth",
            type:"text",
            value:ctrl.event.dob,
            icon:"mdi-action-event prefix",
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"Gender",
            type:"text",
            value:ctrl.event.gender,
            icon:"mdi-action-picture-in-picture prefix",
            sizes:"col s12 l6"
          })
        ]),

        m(".row",[
          m(input,{
            label:"Nationality",
            type:"text",
            value:ctrl.event.nationality,
            icon:"mdi-content-flag prefix",
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"ID / Passport number",
            type:"text",
            value:ctrl.event.id_passport,
            icon:"mdi-action-wallet-membership prefix",
            sizes:"col s12 l6"
          })
        ]),

        m(".row",[
          m(input,{
            label:"Email you use frequently",
            type:"text",
            value:ctrl.event.email,
            icon:"mdi-communication-email prefix",
            sizes:"col s12 l6"
          }),

          m(input,{
            label:"Postal Address",
            type:"text",
            value:ctrl.event.postalAddress,
            icon:"mdi-communication-quick-contacts-mail prefix",
            sizes:"col s12 l6"
          })
        ]),

        m("button",{class:"btn blue right"},"next")
        ])
      ])
    ])
  }
}
