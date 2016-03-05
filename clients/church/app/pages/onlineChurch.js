var footer = require("../peices/footer")
var topbar = require("../peices/topbar")


module.exports = {
        view:function(){
            return [
                m(topbar),
                // m(hero),
                m(".card-panel",[
                  m("h1","online church")
                ]),
                // custom component with unique content per page
                m(footer)
            ]
        }
    }

    // m.mount(document.body,homapage)
