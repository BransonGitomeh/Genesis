var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")


module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                // m(hero),
                m(".row center card-panel",[
                  // m("h1","about us")
                  m(".col l5",[
                    m("div","Gospel")
                  ])
                ]),
                m(footer)
            ]
        }
}
