var footer = require("../peices/footer")
var topbar = require("../peices/topbar")
var infocard = require("../peices/infocard")


module.exports = {
        view:function(){
            return [
                m(topbar),
                // m(hero),
                m(".row center",[
                  m("br"),
                  m(".divider"),
                  m("h3","Select a Ministry"),
                  m(".divider"),
                  m(".row center",[
                      m(".col l3",[
                        m(infocard,{
                          cardLink:"/ministries/leadership",
                          url:"/build/assets/img/icons/worship.jpg",
                          text:"Local Church leadership"
                        })
                      ]),

                       m(".col l3",[
                         m(infocard,{
                          cardLink:"/ministries/children",
                          url:"/build/assets/img/icons/worship.jpg",
                          text:"Children Ministry"
                        })
                      ]),

                      m(".col l3",[
                         m(infocard,{
                          cardLink:"/ministries/youth",
                          url:"/build/assets/img/icons/worship.jpg",
                          text:"Youth Ministry"
                        })
                      ]),

                      m(".col l3",[
                         m(infocard,{
                          cardLink:"/ministries/pillars",
                          url:"/build/assets/img/icons/worship.jpg",
                          text:"Pillars Ministry"
                        })
                      ]),

                      m(infocard,{
                          cardLink:"/ministries/stewards",
                          url:"/build/assets/img/icons/worship.jpg",
                          text:"Stewards Ministry"
                        })
                      ]),

                      m(".col l3",[
                         m(infocard,{
                          cardLink:"/ministries/homecells",
                          url:"/build/assets/img/icons/worship.jpg",
                          text:"Home cells Ministry"
                        })
                      ]),

                      m(".col l3",[
                         m(infocard,{
                          cardLink:"/ministries/hospitality",
                          url:"/build/assets/img/icons/worship.jpg",
                          text:"Hospitality(sanctuary keepers,catering) ministry"
                        })
                      ]),

                      m(".col l3",[
                         m(infocard,{
                          cardLink:"/ministries/worship",
                          url:"/build/assets/img/icons/worship.jpg",
                          text:"Praise & worship /choir ministry "
                        })
                      ]),

                      m(".col l3",[
                         m(infocard,{
                          cardLink:"/ministries/school",
                          url:"/build/assets/img/icons/worship.jpg",
                          text:"School of evangelism and new life studies and discipleship "
                        })
                      ]),

                      m(".col l3",[
                         m(infocard,{
                          cardLink:"/ministries/wemen",
                          url:"/build/assets/img/icons/worship.jpg",
                          text:"Women Ministry"
                        })
                      ])
                    ]),
                     m(footer)
                  ]
                
               
            
        }
    }