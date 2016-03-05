var footer = require("../../../peices/footer")
var topbar = require("../../../peices/topbar")


module.exports = {
        view:function(){
            return [
                m(topbar),
                // m(hero),
                m(".row center card-panel",[
                  // m("h1","about us")
                  m(".col l5",[
                    m("div","Development")
                  ])
                ]),
                m(footer)
            ]
        }
    }

