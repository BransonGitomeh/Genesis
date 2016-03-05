var navbar = require('../peices/navbar')
var sidebar = require('../peices/sidebar')
var nivoslider = require('../peices/nivoslider')
var footer = require('../peices/footer')

var objectives = [
  {text:"To provide education geared toward development of the childs mental, physical and spiritual growth."},
  {text:" To provide accessible, affordable and quality childhood education to teachers"},
  {text:" To promote the national goals and objectives of Early Childhood Development Education to Rwanda."}


];

module.exports = {
  view:function(ctrl){
    return m(".app",[
       m.component(navbar),

       m(".row",[
         //collumn 1 , the sidebar
         m(".col l3 s3 m3  hide-on-med-and-down",[
           m.component(sidebar)
         ]),
         //the sider and everything else
         m(".col l9 s12 m12",[
           m.component(nivoslider),

           // m("h4",{class:"center blue-text"},"Welcome"),
           m(".card-panel",[
             m("p","Premier ECDE teachers college is an accredited Institution of high learning by the Rwanda government. It started in 2013 with 3 objectives:"),

             m("ol",[
               objectives.map(function(objective){
                return m("li",objective.text)
               })
             ]),

             m(".card-panels",[
                m("p","View a detailed product information on what we offer ",[
                  m("a",{
                    href:"/proffessional_development/productinformation",
                    config:m.route
                  },"here")
                ])
             ]),

             m(".row",[
                m(".col l6",[
                  m('h4',{class:"center"},"Mission"),
                  m("p","A model institution providing quality early childhood teacher education for africa and beyond.")
                ]),

                m(".col l6",[
                  m('h4',{class:"center"},"Vision"),
                  m("p","To attain world class standard in Early childhood teacher Education training, research and innovation for sustainable individual holistic growth.")
               ])
             ])

           ]),


         ]),




       ]),

       m.component(footer)
     ])

  }
}
