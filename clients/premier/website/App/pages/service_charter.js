var navbar = require("../peices/navbar");
var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
var pdfobject = require("../peices/pdfobject");



module.exports = {
  view:function(ctrl){
    return m(".app",[
       m.component(navbar),

       m(".row",[
         //collumn 1 , the sidebar
         m(".col l3 hide-on-med-and-down",[
           m.component(sidebar)
         ]),
         //the sider and everything else
         m(".col s12 m9 l9",[
           m("h3",{class:"center blue-text"},"Service Charter"),

           m("h5",{class:"center"},"we are proud to present our service charter"),

           m.component(pdfobject,{
             name:"COLLEGE_SERVICE_CHARTER.pdf"
           }),
         ])

       ]),

       m.component(footer)
     ])

  }
}
