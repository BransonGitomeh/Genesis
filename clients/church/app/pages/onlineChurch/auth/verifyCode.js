var verify = require("../../../../../shared_components/verifyCode")


module.exports = {
        view:function(ctrl){
            return m(".app",[
              m(verify,{
                headerText:"Pastorial",
                registerLink:"/login/register"
              }),
            ])
        }
    }
