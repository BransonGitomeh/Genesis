var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")
var infocard = require("../../peices/infocard")


module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                // m(hero),
                m(".row center card-panel",[

                  m(".col s12 l12",[
                    m(".col s12 l12",[
                      m("h3","Service")
                    ]),

                    m(".col s12 l3",[
                      m(infocard,{
                         text:"Praise and Worship",
                         url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4s1FsktwABCO4xGOFlFN7TGJTQotlTyqFhnl97opHLJnH6ETUcg"
                        })
                    ]),
                    m(".col s12 l3",[
                      m(infocard,{
                        text:"Prayers",
                        url:"http://cdn.modernghana.com/images/content/hlco26ree8_praying_hands.jpg"
                       })
                    ]),
                    m(".col s12 l3",[
                      m(infocard,{
                        text:"Sermon",
                        url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEKCBPpU3kLdEjLFrAJvuPSaDC6U822TUN04oBnMeF-8gYhOs9"
                       })
                    ]),
                    m(".col s12 l3",[
                      m(infocard,{
                        text:"Online Giving",
                        url:"https://goaim1.org/cms/wp-content/uploads/2014/01/giving.png"
                       })
                    ])
                  ])
                ]),
                // custom component with unique content per page
                m(footer)

            ]
        }
    }

    // m.mount(document.body,homapage)
