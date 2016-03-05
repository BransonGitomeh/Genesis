var register = require('../../../../../../shared_components/auth/register');
module.exports = {
  view:function(ctrl){
      return m(".app",[
          m.component(register,{
            backgroundColor:"blue",
            btnColor:"blue",
            holderPic:"/images/default/logo.png",
            verifyLink:"/auth/Student/verify"
          })
       ])
    }
}
