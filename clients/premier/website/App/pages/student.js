var navbar = require("../peices/navbar");
var forminput = require("../peices/forminput");

var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
// var pdfobject = require("../peices/pdfobject");

var contactForm = require("../../../../shared_components/contactForm")
var login = require('../../../../shared_components/login/login');

module.exports = {
  view:function(ctrl){
      return m(".app",[
          m.component(login,{
            headerText:"student Login",
            backgroundColor:"blue",
            btnColor:"blue",
            holderPic:"/images/default/logo.png",
            registerLink:"/register/student",
            passwordLink:"/login/student-pass/",
            domain:"student"
          })
       ])
    }
}
