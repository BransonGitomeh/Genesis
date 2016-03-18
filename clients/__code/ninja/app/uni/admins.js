var myComponent = require("./noticeItem")

var inputComponent = require('../../../__components/forminput');
module.exports = {
  controller:function(){
    return {
      admins:m.request({
        url:apiUrl + "/basic/getAdmins/" + m.route.param("uniId"),
        method:"GET"
      }),
      schema:{
        userIdentifier:m.prop(""),
        userUsername:m.prop(""),
        userPassword:m.prop(""),
        confirmPassword:m.prop("")
      }
    }
  //req.body.userIdentifier
  //req.body.userUsername
  //req.body.userPassword
  },
  view:function(controller,atrrs){
    return m(".row",[
        m("div",{class:"col l8"},[

        m("form",{
          class:"card-panel",
          onsubmit:function(e){
            m.request({
              url:apiUrl + "/basic/addNewAdminToUniversity/" + m.route.param("uniId"),
              method:"POST",
              data:{
                userIdentifier:controller.schema.userIdentifier(),
                userUsername:controller.schema.userUsername(),
                userPassword:controller.schema.userPassword()
              }
            }).then(m.route( m.route( ) ))
            e.preventDefault();
          }
        },[
          m("h1",{class:"center"},"Enter new admin user account"),

          m(inputComponent,{
            label:"Email",
            type:"text",
            sizes:"col l6",
            value:controller.schema.userIdentifier
          }),

          m(inputComponent,{
            label:"Surname",
            type:"text",
            sizes:"col l6",
            value:controller.schema.userUsername
          }),

          m(inputComponent,{
            label:"Password",
            type:"password",
            sizes:"col l6",
            value:controller.schema.userPassword
          }),

          m(inputComponent,{
            label:"Confirm Password",
            type:"password",
            sizes:"col l6",
            value:controller.schema.confirmPassword
          }),

            m("button",{
                type:"submit",
                class:"btn waves-effect waves-block waves-light cyan"
            },"Create User")
        ])
      ]),

      m("div",{class:"col l4"},[
        m("form",{class:"card-panel"},[
          m("h1",{class:"center"},"Search existing user"),
          m(inputComponent,{
            label:"Registered email",
            type:"text",
            sizes:"col l12 center",
            value:controller.schema.title
          }),
            m("button",{
                type:"submit",
                class:"btn waves-effect waves-block waves-light cyan"
            },"Search User")
        ])
      ]),

        

        m(".col l12",[
          // m("br"),

          m("h1","Current Admins"),
          m("table",[

            m("thead",[
              m("tr",[
                m("td","id"),
                m("td","email"),
                m("td","createdAt")
              ])
            ]),

            m("tbody",[
              controller.admins().map(function(admin){
                return m("tr",[
                  m("td",admin.id),
                  m("td",admin.identifier),
                  m("td",admin.createdAt),
                  m("td",[
                    m("button",{
                      class:"btn-flat waves-effect waves-cyan waves-block"
                    },"revoke admin rights")
                  ]),
                  m("td",[
                    m("button",{
                      class:"btn-flat waves-effect waves-cyan waves-block"
                    },"View activity")
                  ])
                ])
              })
            ])
          ])
        ])
      ])
  }
}
