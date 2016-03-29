var myComponent = require("./noticeItem")

var inputComponent = require('../../../__components/forminput');
module.exports = {
  controller:function(){
    return {
      admins:m.request({
        url:apiUrl + "/basic/getAdmins/" + m.route.param("uniId"),
        method:"GET"
      }), 
      revokedAdmins:m.request({
        url:apiUrl + "/basic/getRevokedAdmins/" + m.route.param("uniId"),
        method:"GET"
      }),
      schema:{
        userIdentifier:m.prop(""),
        userUsername:m.prop(""),
        userPassword:m.prop(""),
        confirmPassword:m.prop("")
      }
    }
  },
  view:function(controller,atrrs){
    return m(".row",[
        m(".col l12",[
          // m("br"),
          //all admins
          m("h1","Current Admins"),
          m("a",{
            class:"btn blue right",
            href:"/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/add",
            config:m.route
          },"add admin"),
          m("table",[

            m("thead",[
              m("tr",[
                m("th","email"),
                // m("td","createdAt")
              ])
            ]),

            m("tbody",[
              controller.admins().map(function(admin){
                return m("tr",[
                  m("td",admin.identifier),
                  // m("td",admin.createdAt),
                  m("td",[
                    m("button",{
                      class:"btn-flat waves-effect waves-cyan waves-block hoverable",
                      onclick:function(){
                        m.request({
                          url:apiUrl + "/basic/revokeAdmin/" + m.route.param("uniId"),
                          method:"POST",
                          data:{
                            userId:admin.id
                          }
                        }).then(function(){
                          m.route( m.route( ) )
                        })
                      }
                    },"revoke admin rights")
                  ]),
                  m("td",[
                    m("button",{
                      class:"btn-flat waves-effect waves-cyan waves-block hoverable"
                    },"View activity")
                  ])
                ])
              })
            ])
          ]),

          // revoked admins
          m("h1","Access Revoked Admins"),
          m("table",[

            m("thead",[
              m("tr",[
                m("th","email"),
                // m("td","createdAt")
              ])
            ]),

            m("tbody",[
              controller.revokedAdmins().map(function(admin){
                return m("tr",[
                  console.log(admin),
                  m("td",admin.identifier),
                  // m("td",admin.createdAt),
                  m("td",[
                    // restore admin rights
                    m("button",{
                      class:"btn-flat waves-effect waves-blue waves-block hoverable",
                      onclick:function(){
                        m.request({
                          url:apiUrl + "/basic/restoreAdmin/" + m.route.param("uniId"),
                          method:"POST",
                          data:{
                            userId:admin.id
                          }
                        }).then(function(){
                          m.route( m.route( ) )
                        })
                      }
                    },"Restore admin rights")
                  ]),
                  m("td",[
                    //remove from admin completely
                    m("button",{
                      class:"btn-flat waves-effect waves-cyan waves-block waves-red hoverable",
                      onclick:function(){
                        var confirmation = confirm("Are you sure you want to remove him from your admins permanently?")

                        if(confirmation == true){
                          m.request({
                            url:apiUrl + "/basic/removeAdmin/" + m.route.param("uniId"),
                            method:"POST",
                            data:{
                              userId:admin.id
                            }
                          }).then(function(){
                            m.route( m.route( ) )
                          })
                        }
                      }
                    },"Remove as admin completely")
                  ]),
                  m("td",[
                    m("button",{
                      class:"btn-flat waves-effect waves-cyan waves-block hoverable"
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
