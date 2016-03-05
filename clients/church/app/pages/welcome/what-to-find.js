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
                    m(sidebar)
                  ]),

                  m(".col l10 card-panel",[
                      m("h4","What you will find"),

                      m("li","You will find a group of people experiencing God's GRACE."),

                      m("li","You will find a group of people building relationships as a COMMUNITY."),

                      m("li","You will find a group of people for whom Jesus died. His Body. His CHURCH."),

                      m("p","Each Sunday we gather together to worship our Saviour and hear a Biblical message of hope. Just like this website, we talk a lot about grace because we are amazed at the grace we've experienced through Jesus Christ! This grace is a gift from God, unearned and undeserved. Our Sunday Service provides an opporunity to worship God together and hear the Word of God proclaimed and taught as we grow in our mission as a church. At Gathering Church International you will find..."),

                      m("h5","Friendly people."),

                      m("p","We love to meet new folks and to have guests join us."),

                      m("h5","Relaxed atmosphere."),

                      m("p","You'll notice some folks who like to dress up for church and others who don't. Feel free to wear what's comfortable for you, and you'll fit right in."),


                      m("h5","Contemporary worship"),

                      m("p","Our meetings include contemporary music and relevant preaching from the Bible."),

                      m("h5","Children's ministry."),

                      m("p","After the singing portion of the service, children ages 1yr to 5th grade go to classes for Bible teaching and fun activities designed with them in mind."),
                  ]),



                ]),
                m(footer)
            ]
        }
}
