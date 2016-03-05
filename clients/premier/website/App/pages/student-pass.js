var navbar = require("../peices/navbar");
var forminput = require("../peices/forminput");

var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
// var pdfobject = require("../peices/pdfobject");

var contactForm = require("../../../../shared_components/contactForm")
var password = require('../../../../shared_components/login/inputPassword');
module.exports = {
  view:function(ctrl){
      return m(".app",[
          m.component(password,{
            backgroundColor:"blue",
            btnColor:"blue",
            holderPic:"/images/default/tempImage.png",
            forgotLink:"/login/student-forgot/"
          })
       ])
    }
}
