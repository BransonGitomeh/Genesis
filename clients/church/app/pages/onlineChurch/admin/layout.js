var userCard = require('./userCard');
var sidenavItem = require('./sidenavItem');

module.exports = {
  view:function(ctrl,args){
    return m(".app",[
      //header, the nav bar
      m("header",{id:"header",class:"page-topbar"},[
        m("div",{class:"navbar-fixed"},[
          m("nav",{class:"blue"},[
            m("div",{class:"nav-wrapper"},[

              m("h1",{class:"logo-wrapper"},[
                m("a",{class:"brand-logo"},"Gathering church kenya admin")
              ]),

              m("ul",{class:"right"},[
                //
                // m("li",[
                //   m("a",{class:"waves-effect waves-block waves-light toggle-fullscreen"},[
                //     m("i",{class:"mdi-action-settings-overscan"})
                //   ])
                // ]),

                m("li",[
                  m("a",{class:"waves-effect waves-block waves-light",href:"/",config:m.route},[
                    m("i",{class:"mdi-action-home"})
                  ])
                ])

              ]),

              m("a",{
                "data-activates":"slide-out",
                class:"sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"
              },[
                m("i",{class:"mdi-navigation-menu"})
              ])

            ])
          ])
        ])
      ]),

      //the main part of the body
      m("#main",[
        //sidebar-
        m("wrapper",[
          //left side-nav
          m("aside",{id:"left-sidebar-navx"},[
            m("ul",{id:"slide-out",class:"side-nav fixed leftside-navigation",style:"width: 240px"},[
              m(userCard),

              m("li",{class:"li-hover"},[
                m("p",{class:"ultra-small margin more-text"},"Welcome")
              ]),

              m(sidenavItem,{
                link:"/onlineChurch/admin/sermons",
                icon:"mdi-av-my-library-books",
                text:"Sermons"
              }),

              m(sidenavItem,{
                link:"/onlineChurch/admin",
                icon:"mdi-notification-event-note",
                text:"Upcoming events"
              }),

              m(sidenavItem,{
                link:"/onlineChurch/admin/messages/index",
                icon:"mdi-action-question-answer",
                text:"Messages"
              }),

              m(sidenavItem,{
                link:"/onlineChurch/admin/members",
                icon:"mdi-action-perm-contact-cal",
                text:"Members"
              })

            ])

          ]),

          //rest of the body
          m("section",{id:"content"},[
            m(".container",[
              // m("h1","side content side contentside contentside contentside content"),
              args.body ? m(args.body) : m("h1","body here")
            ])
          ])


        ])

      ])


    ])
  }
}
