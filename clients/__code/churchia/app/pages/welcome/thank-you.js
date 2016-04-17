var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")
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
                      m("h1","Welcome to Gathering church international"),

                      m("b","'I came that they may have life and have it abundantly.'"),

                      m("p","- Jesus Christ (John 10:10)"),

                      m("p","Thanks for stopping by and taking the time to learn a little more about us. As you look over our site, we hope you get a better picture of what Gathering Church International is all about."),

                      m("p","We believe that life is lived to its fullest when it's lived in a relationship with God through Jesus Christ and lived in community through a local church. We're excited to be joined together as a church family and would love to have you join us in our journey."),

                      m("p","Maybe you're searching for a church home. Or maybe you're searching for answers to life's questions. No matter what your situation, we would love to share with you what God is doing in our lives as individuals and as a church. If after visiting our web site you're interested in learning more about us, please contact us at office@gatheringchurch.org"),

                      m("p","You are invited to come join us for a Sunday service sometime. We meet every week at 9:00am."),

                      m("p","Please let us know how we can serve you.")
                  ])

                ]),
                m(footer)
            ]
        }
}
