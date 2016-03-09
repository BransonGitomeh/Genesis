var footer = require("../../../peices/footer")
var topbar = require("../../../peices/topbar")
var sidebar = require('./sidebar');

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
                      m("h1","Our Church leadership")
                  ])

                ]),
                m(footer)
            ]
        }
}
