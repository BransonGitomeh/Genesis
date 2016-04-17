var forgot = require("../../../../__components/auth/inputPassword")


module.exports = {
        view:function(ctrl){
            return m(".app",[
              m(forgot,{
                headerText:"Pastorial",
                registerLink:"/login/register",
                forgotPasswordLink: "/login/forgotPassword"
              }),
            ])
        }
    }
