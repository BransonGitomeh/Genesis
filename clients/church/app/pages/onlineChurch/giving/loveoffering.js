var footer = require("../../../peices/footer")
var topbar = require("../../../peices/topbar")


module.exports = {
        view:function(){
            return [
                m(topbar),
                // m(hero),
                m(".row center card-panel",[

                  m(".col s12 l12",[
                    m(".col s12 l12",[
                      m("h3","loveoffering")
                    ])
                  ])
                ]),
                m(footer)

            ]
        }
    }
