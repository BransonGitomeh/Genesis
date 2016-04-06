/*
*logoText {@param} - has text of the logo, on the left of the top bar
*sideBarItems {@array} - objects that will be used to create the sidebar
*
*/

var userCard = require('./userCard');
var sideNavItem = require('./sideNavItem');
var topNavItem = require('./topNavItem');

module.exports = {
  controller:()=>{
     m.redraw.strategy("all")
  },
  view:function(ctrl,args){
    return m(".app",[
      //header, the nav bar
      m("header",{id:"header",class:"page-topbar"},[
        m("div",{class:"navbar-fixed"},[
          m("nav",{class:args.config().color},[
            m("div",{class:"nav-wrapper"},[

              m("h1",{class:"logo-wrapper"},[
                m("a",{class:"brand-logo"},args.config().logoText ? args.config().logoText : "logoText here")
              ]),



              m("ul",{class:"right"},[
                args.config().topBarItems.map(function(item){
                  return m(topNavItem,{
                    url:item.url,
                    icon:item.icon,
                    text:item.text,
                    drops:item.drops
                  })
                })

              ]),

            ])
          ])
        ])
      ]),

      //the main part of the body
      m("#main",[
        //sidebar-
        m(".wrapper",[
          //left side-nav
          m("aside",{id:"left-sidebar-nav"},[

            m("ul",{id:"slide-out",class:"side-nav fixed leftside-navigation",style:"width: 240px"},[
              m(userCard,{
                color:args.config().color
              }),

              m("li",{class:"li-hover"},[
                m("p",{class:"ultra-small margin more-text"},"Welcome")
              ]),

              args.config().sideBarItems.map(function(item){
                return m(sideNavItem,{
                  link:item.url,
                  icon:item.icon,
                  text:item.text,
                  drops:item.drops,
                  color:args.config().color
                })
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
