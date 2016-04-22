var verify = require('../../../../../../__components/auth/verify');
module.exports = {
  view:function(ctrl){
      return m(".app",[
          m.component(verify,{
            backgroundColor:"blue",
            btnColor:"blue",
            holderPic:"/images/default/logo.png",
            registerLink:"/register/student"
          })
       ])
    }
}
