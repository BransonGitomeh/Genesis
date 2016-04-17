var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")
var sidebar = require('./sidebar');
var map = require("../../peices/map")

module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                // m("br"),


                m(".row",[

                  m(".col l2",[
                    // m("p",{class:"flow-text"},"What we teach"),
                    m(sidebar)
                  ]),

                  m(".col l10 card-panel",[
                      m("h1",{class:"center"},"Where you will find us"),

                      m("h6",{class:"center"},"We meet every sunday at 9.00am at Joska along kangundo road"),


                      m.component(map,{
                        location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8159560801514!2d37.093341314422034!3d-1.2843486990632342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6f3ae5aa008b%3A0x52c11944d2787634!2sJoska+Kangundo+RD!5e0!3m2!1sen!2ske!4v1454967089897",
                        width:"1100",
                        height:"450"
                      })
                  ])

                ]),
                m(footer)
            ]
        }
}
