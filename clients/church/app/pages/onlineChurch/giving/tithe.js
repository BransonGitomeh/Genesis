var footer = require("../../../peices/footer")
var topbar = require("../../../peices/topbar")

module.exports = {
        view:function(){


            return [
                // console.log(tokenize(queryString)),
                console.log(root(tokenize(queryString))),
                // console.log(queryString.match(/\S+/g)),
                // console.log("i am parrrrsring"),
                m(topbar),
                // m(hero),
                m(".row center card-panel",[

                  m(".col s12 l12",[
                    m(".col s12 l12",[
                      m("h3","tithe")
                    ])
                  ])
                ]),
                m(footer)

            ]
        }
      }
