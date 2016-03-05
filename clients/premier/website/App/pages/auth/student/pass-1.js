var login = require('../../../../../../shared_components/auth/login');

module.exports = {
  view:function(ctrl){
      return m(".app",[
          m.component(login,{
            headerText:"student Login(comming soon...)",
            backgroundColor:"blue",
            btnColor:"blue",
            holderPic:"/images/default/logo.png",
            registerLink:"/auth/Student/register/",
            passwordLink:"/auth/Student/pass-2/",
            domain:"student"
          })
       ])
    }
}
