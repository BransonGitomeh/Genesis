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
                      m("h3","Giving")
                    ]),

                    m(".col s12 l2",[
                      m(infocard,{
                         text:"Offering",
                         url:"http://c.asstatic.com/images/1502925_634804997052043750-1.jpg",
                         cardLink:"/onlineChurch/giving/offering"
                        })
                    ]),
                    m(".col s12 l2",[
                      m(infocard,{
                        text:"Tithe",
                        url:"http://teachersofgod.org/wp-content/uploads/2013/08/tithing.gif",
                        cardLink:"/onlineChurch/giving/tithe"
                       })
                    ]),
                    m(".col s12 l2",[
                      m(infocard,{
                        text:"First Fruits",
                        url:"http://www.catholic.org/files/images/ins_news/2013033858.jpg",
                        cardLink:"/onlineChurch/giving/firstfruits"
                       })
                    ]),
                    m(".col s12 l2",[
                      m(infocard,{
                        text:"Love Offering",
                        url:"http://www.universitymethodist.org/wp-content/uploads/2015/01/love-offering.jpg",
                        cardLink:"/onlineChurch/giving/loveoffering"
                       })
                    ]),
                    m(".col s12 l2",[
                      m(infocard,{
                        text:"Thanksgiving",
                        url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTn3HsXafqJ1BC0JzDqSCStCpcekV7-5Hieg-xuPLm5msKyj_jXSA",
                        cardLink:"/onlineChurch/giving/thanksgiving"
                       })
                    ]),
                    m(".col s12 l2",[
                      m(infocard,{
                        text:"Church Development",
                        url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyfNwan0o0gupyaC08HsxePk-17VbrR0d-COfaRKfj_fnfBZOA",
                        cardLink:"/onlineChurch/giving/development"
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
