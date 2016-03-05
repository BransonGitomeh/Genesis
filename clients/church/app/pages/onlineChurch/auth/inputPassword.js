var forgot = require("../../../../../shared_components/auth/inputPassword")


module.exports = {
        view:function(ctrl){
            return m(".app",[
              m(forgot,{
                backgroundColor:"blue",
                holderPic:"/build/assets/img/orgface/gathering_logo.png",
                btnColor:"orange",
                
                headerText:"Pastorial",
                registerLink:"/login/register",
                forgotPasswordLink: "/login/forgotPassword"
              }),
            ])
        }
    }
