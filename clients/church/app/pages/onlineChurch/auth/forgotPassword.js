var forgot = require("../../../../../shared_components/forgotPassword")


module.exports = {
        view:function(ctrl){
            return m(".app",[
              m(forgot,{
                headerText:"Pastorial",
                registerLink:"/login/register"
              }),
            ])
        }
    }
