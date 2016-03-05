var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")
var sidebar = require('./sidebar');

module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),

                m(".row",[

                  m(".col l2",[
                    m(sidebar)
                  ]),

                  m(".col l10 card-panel",[
                      m("h1","How to connect with us"),

                      m("p","The best way to get to know Gathering Church International is to stop by on a Sunday morning. After doing that, if you would like to get connected, you  may want to consider attending the following:"),

                      m("h5","Home-cells"),

                      m("p","The Christian life is not meant to be lived in isolation. God intends for us to grow as we care for others and receive care from others (Ephesians 4:15-16). One of the ways we try to live this out at Gathering Church International is through Community Groups, which are smaller groups of about 10-20 people that get together on the 1st and 3rd Wednesdays, Thursdays, and Fridays of each month"),

                      m("p","Community Groups meet in homes of church members throughout the area. If you are interested in visiting a group, please contact the church office at office@gatheingchurch.org to find out which Community Group meets closest to you. To learn more about why and when we meet, visit our Community Groups page."),

                      m("h5","Praise 101"),

                      m("p","Praise 101 (EGCI) is an informative course designed for those who are considering becoming a member of the Gathering Church International family. EGCI classes are held on occasional Saturdays from 9am-2pm. "),

                      m("p","If you are interested in attending or learning more about the next EGCI course, you can check our events calendar to see when the next course is being held, or contact us at: office@gatheringchurch.org")
                  ])

                ]),
                m(footer)
            ]
        }
}
