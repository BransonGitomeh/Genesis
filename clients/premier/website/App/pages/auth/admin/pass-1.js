var login = require('../../../../../../shared_components/auth/login');

module.exports = {
  view:function(ctrl){
      return m(".app",[
          m.component(login,{
            headerText:"Admin Login (alpha)",
            backgroundColor:"blue",
            btnColor:"blue",
            holderPic:"/images/default/logo.png",
            registerLink:"/auth/Admin/register/",
            passwordLink:"/auth/Admin/pass-2/",
            domain:"student"
          })
       ])
    }
}
