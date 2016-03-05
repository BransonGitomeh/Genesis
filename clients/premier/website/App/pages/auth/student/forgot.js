var forgot = require('../../../../../../shared_components/auth/forgot');
module.exports = {
  view:function(ctrl){
      return m(".app",[
          m.component(forgot,{
            backgroundColor:"blue",
            btnColor:"blue",
            holderPic:"/images/default/logo.png",
            verifyLink:"/verify/student/"
          })
       ])
    }
}
