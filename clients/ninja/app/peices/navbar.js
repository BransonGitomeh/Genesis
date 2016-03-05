var navItem = require("./navItem")
var JD = require('../../../shared_components/libs/jollyData');


module.exports = {
        controller:function(){
          return {
            sessionIdentifier:function(){
              // setTimeout(function(){
              //   if(JD.session){
              //     console.log("session exists");
              //     console.log(JD.session);
              //   }
              // },1)


              console.log(JD.session().session.identifier);


              return JD.session().session.identifier
            }
          }
        },
        view:function(ctrl,args){
            return m("div",{class: args.fixed ? "navbar-fixed" : "navbar"},[
                // ctrl.sessionIdentifier(),
                m("nav",{
                    class:color
                },[
                    m(".containerx",[
                        m(".nav-wrapper",[


                            m("ul",{
                              class:"hide-on-med-and-down",
                              config:function(){
                                $('.dropdown-button').dropdown({
                                   inDuration: 300,
                                   outDuration: 225,
                                   constrain_width: false, // Does not change width of dropdown to that of the activator
                                   alignment: 'left',
                                   hover: true, // Activate on hover
                                   gutter: 0, // Spacing from edge
                                   belowOrigin: true // Displays dropdown below the button
                                 });
                              },
                            },[
                              JD.loggedIn() ?

                                m(navItem,{ name:ctrl.sessionIdentifier(),direction:"right",dropId:"loggedIControls" })

                                :

                                // m(navItem,{ name:"Login",direction:"right",dropId:"portals" }),

                                m(navItem,{ name:"Feedback",direction:"right",url:"/contactus",dropId:"contactus" }),
                                m(navItem,{ name:"Online Church",direction:"right",url:"/onlineChurch",dropId:"onlineChurch"}),



                                m(navItem,{ name:"Ministries",direction:"right", dropId:"ministries" }),
                                m(navItem,{ name:"About Us",direction:"right",url:'/AboutUs',dropId:"aboutUs"}),

                                m(navItem,{ name:"Home", direction:"left",url:"/" }),
                                m(navItem,{ name:"Welcome",direction:"left", dropId:"welcome" }),


                                m("ul",{ //dropdown list
                                  class:"dropdown-content",
                                  id:"welcome"
                                },[
                                  m(navItem,{ name:"Thank You",url:"/Welcome/thank-you"}),
                                  m(navItem,{ name:"What you will find",url:"/Welcome/what-to-find"}),
                                  m(navItem,{ name:"Connect",url:"/Welcome/connect"}),
                                  m(navItem,{ name:"Location",url:"/Welcome/location"})
                                ]),

                                m("ul",{ //dropdown list
                                  class:"dropdown-content",
                                  id:"contactus"
                                },[
                                  m(navItem,{ name:"Complement",url:"/feedback/complement"}),
                                  m(navItem,{ name:"Complaint",url:"/feedback/complaint"}),
                                  m(navItem,{ name:"Suggestion",url:"/feedback/suggestion"})
                                ]),

                                m("ul",{ //dropdown list
                                  class:"dropdown-content",
                                  id:"aboutUs"
                                },[
                                  m(navItem,{ name:"Statement Of Faith",url:"/AboutUs/whatWeTeach/thegospel"}),
                                  m(navItem,{ name:"History",url:"/AboutUs/whatWeTeach/history"}),
                                  m(navItem,{ name:"Leadership",url:"/AboutUs/whatWeTeach/leadership"}),
                                  m(navItem,{ name:"What we teach",url:"/AboutUs/whatWeTeach"})
                                ]),

                                //------------------------------------------------------------------------------------------------
                                //swap this out so that they are not available
                                JD.loggedIn() ?
                                m("ul",{ //dropdown list
                                  class:"dropdown-content",
                                  id:"loggedIControls"
                                },[
                                  m("span",{
                                    onclick:function(){
                                      // alert("clicked")
                                      JD.invalidateSession()                                    }
                                  },[
                                    m(navItem,{
                                      name:"Logout",
                                    }),
                                  ]),
                                  //-------------------------------------------------------------------------------------------------

                                  m(navItem,{ name:"Help",url:"/AboutUs/History"}),
                                ]) :
                                m("span"),

                                m("ul",{ //dropdown list
                                  class:"dropdown-content",
                                  id:"portals"
                                },[

                                  m(navItem,{ name:"Congregation",url:"/login/Members"}),
                                  m(navItem,{ name:"Leadership",url:"/login/Pastorial"}),
                                  m(navItem,{ name:"Ministries",url:"/login/Mleaders"})
                                ]),

                                m("ul",{ //dropdown list
                                  class:"dropdown-content",
                                  id:"ministries"
                                },[
                                  m(navItem,{ name:"Pillars Ministry",url:"/ministries/pillars"}),
                                  m(navItem,{ name:"Ladies Ministry",url:"/ministries/wemen"}),
                                  m(navItem,{ name:"Youth Ministry",url:"/ministries/youth"}),
                                  m(navItem,{ name:"Teneez Ministry",url:"/ministries/teneez"}),
                                  m(navItem,{ name:"Children Ministry",url:"/ministries/children"}),
                                  m(navItem,{ name:"Home cells",url:"/ministries/home-cells"}),


                                ]),

                                m("ul",{ //dropdown list
                                  class:"dropdown-content",
                                  id:"onlineChurch"
                                },[
                                  JD.loggedIn() ?   m(navItem,{ name:"Admin",url:"/onlineChurch/admin"}) : m("span",""),
                                  m(navItem,{ name:"Join Us Online",url:"/onlineChurch/register"}),
                                  m(navItem,{ name:"Team Blog",url:"/onlineChurch/blog"}),
                                  m(navItem,{ name:"Sermon Archive",url:"/onlineChurch/sermons"}),
                                  m(navItem,{ name:"Gallery",url:"/onlineChurch/gallery"}),
                                  m(navItem,{ name:"Giving",url:"/onlineChurch/giving"}),
                                  m(navItem,{ name:"Login",url:"/onlineChurch/login"}),
                                ])
                            ]),

                            m("ul",{class:"side-nav", id:"side-nav"},[
                              m(navItem,{ name:"Home",url:"/" }),
                              m(navItem,{ name:"About Us",url:'/AboutUs' }),
                              // -------------------------swap controlls-----------------------
                              JD.loggedIn() ? m(navItem,{ name:ctrl.sessionIdentifier() }) :
                                m("span",[
                                  m(navItem,{ name:"Login",url:"/onlineChurch/login"}),
                                ]),
                              //----------------------------------swap over---------------------

                              m(".divider"),
                              //ministries
                              m(navItem,{ name:"Children Ministry",url:"/ministries/children"}),
                              m(navItem,{ name:"Youth Ministry",url:"/ministries/youth"}),
                              m(navItem,{ name:"Mens Ministry",url:"/ministries/pillars"}),
                              m(navItem,{ name:"Women's Ministry",url:"/ministries/wemen"}),
                              m(navItem,{ name:"Contact Us",url:"/contactus" }),

                              m(".divider"),
                              //online church
                              m(navItem,{ name:"Join Us Online",url:"/onlineChurch/register"}),
                              m(navItem,{ name:"Team Blog",url:"/onlineChurch/blog"}),
                              m(navItem,{ name:"Sermon Archive",url:"/onlineChurch/sermons"}),
                              m(navItem,{ name:"Gallery",url:"/onlineChurch/gallery"}),
                              m(navItem,{ name:"Giving",url:"/onlineChurch/giving"}),
                            ]),

                            m("a",{class: "brand-logo hide-on-large-only"},"The Gathering Church"),

                            m("a",{
                                class:"button-collapse",
                                "data-activates":"side-nav",
                                config:function(){
                                    $(".button-collapse").sideNav({
                                      edge: 'left', // Choose the horizontal origin
                                      closeOnClick: true
                                    });
                                }
                            },[
                                m("i",{class:"mdi-navigation-menu"})
                            ])
                        ])
                    ])
                ])
            ])
        }
    };
