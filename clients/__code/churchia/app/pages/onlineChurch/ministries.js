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
                      m("h3","Ministries")
                    ]),

                    m(".col s12 l3",[
                      m(infocard,{
                         text:"Children Ministry",
                         url:"http://graceinbuckeye.com/wp-content/uploads/childrens-ministry.jpg"
                        })
                    ]),
                    m(".col s12 l3",[
                      m(infocard,{
                        text:"Youth Ministry",
                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSok6mZbuzGCUwnzJF9H-pLDYameDi6CRGuLbyBnFzCqXRbvT6K"
                       })
                    ]),
                    m(".col s12 l3",[
                      m(infocard,{
                        text:"Mens Ministry",
                        url:"http://www.rccgcityofjoy.org/images/men.jpg"
                       })
                    ]),
                    m(".col s12 l3",[
                      m(infocard,{
                        text:"Ladies Ministry",
                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8LbluqFescxCvH-RE8gUXQFFiIAztAyfIsB41IlU8cNsYRI8"
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
