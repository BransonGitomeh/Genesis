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
         m(".col l9",[
           m("h3",{class:"center blue-text"},"Department Of Examinations"),

           m("h5",{class:"center"},"Our General Examination Policies"),

           m.component(pdfobject,{
             name:"GENERAL_EXAMINATION_POLICY.pdf"
           }),
         ])

       ]),

       m.component(footer)
     ])

  }
}
