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
           m("h3",{class:"center blue-text"},"Academic calender"),
           m("h5",{class:"center"},"The following is the calender we are using for 2015/2016"),
           m("h6",{class:"center"},"Download and feel free to peruce through at your own time"),

           m.component(pdfobject,{
             name:"Academic_Calender_2015.pdf"
           }),
         ])

       ]),

       m.component(footer)
     ])

  }
}
