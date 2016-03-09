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
           m("h3",{class:"center blue-text"},"Product Information"),

           // m("h5",{class:"center"},"We are proud to present our bronchure,"),

           m("h6",{class:"center"},"Feel free to download and go through the document at any time, any enqueries should be posted through ",[
            m("a",{
              href:"/contactus",
              config:m.route
            },"here")
           ]),

           m.component(pdfobject,{
             name:"Product_Information.pdf"
           }),
         ])

       ]),

       m.component(footer)
     ])

  }
}
