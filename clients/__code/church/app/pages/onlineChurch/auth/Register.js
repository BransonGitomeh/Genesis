var register = require("../../../../../__components/auth/register")


module.exports = {
        view:function(ctrl){
            return m(".app",[
              m(register,{
                backgroundColor:"blue",
                holderPic:"/build/assets/img/orgface/gathering_logo.png",
                btnColor:"orange",

                headerText:"Pastorial",
                registerLink:"/onlineChurch/register",
                verifyLink:"/onlineChurch/verifyCode"
              }),
            ])
        }
    }
