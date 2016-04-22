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
           m("h3",{class:"center blue-text"},"Student Admissions"),
           m("h5",{class:"center"},"Admissions are open to school based proggrammes"),
           m("h6",{class:"center"},"Download and Fill in the following admmision form,then submit to the school administration admisions center"),

           m.component(pdfobject,{
             name:"Student_application_form__.pdf"
           }),
         ])

       ]),

       m.component(footer)

     ])

  }
}
