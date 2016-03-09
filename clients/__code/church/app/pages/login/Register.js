var register = require("../../../../__components/auth/register")


module.exports = {
        view:function(ctrl){
            return m(".app",[
              m(register,{
                headerText:"Pastorial",
                registerLink:"/login/register"
              }),
            ])
        }
    }
