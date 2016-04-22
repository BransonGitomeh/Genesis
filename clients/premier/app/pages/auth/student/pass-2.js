var password = require('../../../../../../__components/auth/inputPassword');
module.exports = {
  view:function(ctrl){
      return m(".app",[
          m.component(password,{
            backgroundColor:"blue",
            btnColor:"blue",
            holderPic:"/images/default/tempImage.png",
            forgotLink:"/auth/Student/forgot"
          })
       ])
    }
}
