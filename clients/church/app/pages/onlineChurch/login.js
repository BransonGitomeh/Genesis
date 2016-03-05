var login = require("../../../../shared_components/auth/login")


module.exports = {
        view:function(ctrl){
            return m(".app",[
              m(login,{
                backgroundColor:"blue",
                holderPic:"build/assets/img/orgface/gathering_logo.png",
                btnColor:"orange",

                headerText:"Online Church Login",
                registerLink:"/onlineChurch/register",
                forgotPasswordLink: "/onlineChurch/forgotPassword"
              }),
            ])
        }
    }
