var membersList = require("../../../../../__components/auth/membersList")


module.exports = {
        view:function(ctrl){
            return m(".app",[
              m(membersList,{
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
