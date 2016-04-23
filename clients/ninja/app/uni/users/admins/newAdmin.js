// var myComponent = require("./noticeItem")

var inputComponent = require('../../../../../__components/forminput');
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
        confirmPassword:m.prop(""),
        //for the search existing user form
        existingUserIdentifier:m.prop(""),
      }
    }
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
            }).then(m.route("/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId") )) //back to view all admins
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
        m("form",{
          class:"card-panel",
          onsubmit:function(e){
            e.preventDefault();
            // var move = 
            m.request({
              url:apiUrl + "/basic/addExistingUserToAdmin/" + m.route.param("uniId"),
              method:"POST",
              data:{
                identifier:controller.schema.existingUserIdentifier(),
              }
            }).then(function(res){
              console.log(res)
              //back to view all admins
              if(res.result === false){
                alert("no user with that email was found")
              }else{
                m.route("/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId") )
              }
            }) 
            
          }
        },[
          m("h1",{class:"center"},"Search existing user"),
          m(inputComponent,{
            label:"Registered email",
            type:"text",
            sizes:"col l12 center",
            value:controller.schema.existingUserIdentifier
          }),
            m("button",{
                type:"submit",
                dissabled:"true",
                class:"btn waves-effect waves-block waves-light cyan"
            },"Search User")
        ])
      ])
    ])
  }
}
