webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var layout = __webpack_require__(1)
	// var m = require('mithril');
	m.route.mode = "hash";

	m.route(document.body,"/",{
			"/":__webpack_require__(4),
				//events
				"/events/Celebrations":__webpack_require__(12),
				"/events/Keshas":__webpack_require__(13),
				"/events/Meetings":__webpack_require__(14),
				"/events/Seminars":__webpack_require__(15),
				//recentnews
				"/recentNews/Announcements":__webpack_require__(16),
				"/recentNews/Development":__webpack_require__(17),
				"/recentNews/Ministry":__webpack_require__(18),
				"/recentNews/Youth":__webpack_require__(19),

				"/Welcome/connect":__webpack_require__(20),
				"/Welcome/location":__webpack_require__(23),
				"/Welcome/thank-you":__webpack_require__(25),
				"/Welcome/what-to-find":__webpack_require__(26),




			"/AboutUs":__webpack_require__(27),
				"/AboutUs/Gospel":__webpack_require__(28),
				"/AboutUs/History":__webpack_require__(29),
				"/AboutUs/Leadership":__webpack_require__(30),
				"/AboutUs/whatWeTeach":__webpack_require__(31),
						"/AboutUs/whatWeTeach/thegospel":__webpack_require__(34),
						"/AboutUs/whatWeTeach/history":__webpack_require__(35),
						"/AboutUs/whatWeTeach/leadership":__webpack_require__(36),

						"/AboutUs/whatWeTeach/churchdiscipline":__webpack_require__(37),
						"/AboutUs/whatWeTeach/bibilicaleldership":__webpack_require__(38),
						"/AboutUs/whatWeTeach/divorceandmariage":__webpack_require__(39),
						"/AboutUs/whatWeTeach/evangelisingchildren":__webpack_require__(40),
						"/AboutUs/whatWeTeach/roleofwemen":__webpack_require__(41),

			"/ministries":__webpack_require__(42),
				"/ministries/teneez":__webpack_require__(44),
				"/ministries/home-cells":__webpack_require__(47),
				"/ministries/children":__webpack_require__(48),
				"/ministries/wemen":__webpack_require__(49),
				"/ministries/youth":__webpack_require__(50),
				"/ministries/pillars":__webpack_require__(51),

			"/onlineChurch":__webpack_require__(52),


			"/feedback/complaint":__webpack_require__(53),
			"/feedback/complement":__webpack_require__(57),
			"/feedback/suggestion":__webpack_require__(58),

			// online church
			"/onlineChurch/blog":__webpack_require__(59),
			"/onlineChurch/sermons":__webpack_require__(60),
			"/onlineChurch/gallery":__webpack_require__(61),

			"/onlineChurch/felowship":__webpack_require__(62),
			"/onlineChurch/service":__webpack_require__(63),
			"/onlineChurch/ministries":__webpack_require__(64),
			//auth
			"/onlineChurch/login":__webpack_require__(65),
			"/onlineChurch/register":__webpack_require__(67),


			"/onlineChurch/admin":m.component(layout, {body: __webpack_require__(70)}),

			"/onlineChurch/admin/sermons":m.component(layout, {body: __webpack_require__(71)}),
			"/onlineChurch/admin/newSermon":m.component(layout, {body: __webpack_require__(72)}),
			"/onlineChurch/admin/messages/index":m.component(layout, {body: __webpack_require__(73)}),
			"/onlineChurch/admin/members":m.component(layout, {body: __webpack_require__(74)}),



			"/onlineChurch/admin/layout":__webpack_require__(1),


			"/onlineChurch/forgotPassword":__webpack_require__(75),
			"/onlineChurch/inputPassword/:identifier":__webpack_require__(77),
			"/onlineChurch/verifyCode/:identifier":__webpack_require__(79),

			"/onlineChurch/giving":__webpack_require__(81),
				"/onlineChurch/giving/offering":__webpack_require__(82),
				"/onlineChurch/giving/thanksgiving":__webpack_require__(83),
				"/onlineChurch/giving/tithe":__webpack_require__(84),
				"/onlineChurch/giving/loveoffering":__webpack_require__(85),
				"/onlineChurch/giving/firstfruits":__webpack_require__(86),
				"/onlineChurch/giving/development":__webpack_require__(87),

			// main admin console
			"/mainAdmin/makeChurch":__webpack_require__(88)
	})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var userCard = __webpack_require__(2);
	var sidenavItem = __webpack_require__(3);

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(){
	    return m("li",{class:"user-details blue darken-3"},[
	      m(".row",[
	        //pic image
	        m(".col col s4 m4 l4",[
	          m("img",{src:"http://www.imran.com/xyper_images/icon-user-default.png", class:"circle responsive-img profile-image"})
	        ]),
	        //dropdown and roal
	        m(".col col s8 m8 l8 black-text",[
	          m("a",{
	            class:"btn-flat dropdown-button waves-effect waves-light white-text profile-btn",
	            config:function(){
	              $(".dropdown-button").dropdown( {
	                inDuration: 300,
	                outDuration:125,
	                constrain_width:!0,
	                hover:!1,
	                alignment:"left",
	                gutter:0,
	                belowOrigin:!0
	              })
	            }
	          },[
	            m("span",{class:"white-text"},"Admin1 name"),
	            m("i",{class:"mdi-navigation-arrow-drop-down right"})
	          ]),

	          //roal
	          m("p",{class:"user-roal white-text"},"Administrator")
	        ])
	      ])
	    ])
	  }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("li",{class:"waves-effect waves-block waves-blue"},[
	      m("a",{href:args.link,config:m.route,class:(args.link === m.route() ? "blue-grey lighten-5" : " " )},[
	        m("i",{class:args.icon}),
	        m("div",args.text)
	      ])
	    ])
	  }
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5);
	var topbar = __webpack_require__(7);
	var eventsSidebar = __webpack_require__(11)

	var events = [
	  {
	    date:"21st Feb",
	    eventName:"1st Aniversary and dedication of children"
	  },
	  {
	    date:"28st Feb",
	    eventName:"Ladies Sunday"
	  },
	  {
	    date:"6th March",
	    eventName:"Baptism"
	  },
	  {
	    date:"13th March",
	    eventName:"Fundraising for sundayschool tent"
	  },
	  {
	    date:"28th March",
	    eventName:"Sunday School Day & Great Commision training"
	  },
	  {
	    date:"17th April",
	    eventName:"Ladies Sunday"
	  },
	  {
	    date:"23rd April",
	    eventName:"Youth Hike/Retreat"
	  },
	  {
	    date:"30th April",
	    eventName:"Mentorship Program"
	  },
	  {
	    date:"15th May",
	    eventName:"Ladies Sunday"
	  }
	]

	var meetings = [
	  {
	    date:"Tuesday",
	    eventName:"Prayers ",
	    time:"From 6-7pm"
	  },
	  {
	    date:"Thursday",
	    eventName:"Bible study",
	    time:"From 6-7pm"
	  },
	  {
	    date:"Thursday",
	    eventName:"Fellowship at New Horizon Childrens home",
	    time:"From 7.30 - 8.30 pm"
	  }
	]

	module.exports = {
	  view:function(){
	      return [
	          m(topbar),

	          m(".row",[

	            m(".col l9 s12",[
	              m("br"),
	              m("br"),
	                m("div",{
	                  id:"slider",
	                  config:function(){
	                    var slider = new IdealImageSlider.Slider('#slider');
	                  	slider.start();
	                  }
	                },[
	                  m("img",{src:"/build/assets/img/event21/children.jpg",alt:"slide 1"}),
	                  m("img",{src:"/build/assets/img/event21/general.jpg",alt:"slide 1"}),
	                  m("img",{src:"/build/assets/img/event21/pillars.jpg",alt:"slide 1"}),
	                  m("img",{src:"/build/assets/img/event21/teneez.jpg",alt:"slide 1"}),
	                  m("img",{src:"/build/assets/img/event21/ladies.jpg",alt:"slide 1"}),
	                  // m("img",{src:"/build/assets/img/1.jpg",alt:"slide 1"}),
	                ]),
	              m("span",[
	                m("h3",{class:"center blue-text"},"2016: THE YEAR OF DEVINE ESTABLISHMENT"),
	                m("h5",{class:"center"},[
	                  m("b","DEUT 28:9..."),
	                  m("span","The lord shall establish you as his holy people...")
	                ])
	              ])

	            ]),

	            m(".col l3 s12",[
	              m("br"),
	              m("br"),
	              m(eventsSidebar),

	              m(".card-panel row center",[
	                m("h5",{class:"center"},"Our 2016 year planner"),



	                  m("a",
	                    {
	                      class:"btn waves-block waves-" + primaryColor +" waves-effect " + color,
	                      href:"http://gatheringchurchkenya.org/build/assets/docs/GatheringChurchyear2016Planner1.pdf"
	                    },[
	                      m("i",{
	                        class:"mdi-file-cloud-download left"
	                      }),
	                      m("span","download")
	                    ]),



	              ])
	            ]),

	            // m("br"),
	            // m("a",{class:"active"},"Dedication Of children 21st March 2016"),
	            // m("br"),
	            // m("a",{class:"active"},"Sunday School/Teens meeting on Saturday 6/2/2016"),
	            // m("br"),
	            // m("a",{class:"active"},"Life Ministry training - induction on 14/2/2016")

	            // m("div",{class:"col l12"},[
	            //   m("br"),
	            //   m(".divider"),
	            //   m("h5","Upcoming Events"),
	            //   m(".divider"),
	            //
	            //   m(".row",[
	            //     m(".col l3",[
	            //       m(infocard,{
	            //         cardLink:"/events/Meetings",
	            //         url:"/build/assets/img/icons/worship.jpg",
	            //         text:"Seminars"
	            //       })
	            //     ]),
	            //      m(".col l3",[
	            //        m(infocard,{
	            //         cardLink:"/events/Meetings",
	            //         url:"/build/assets/img/icons/worship.jpg",
	            //         text:"Keshas"
	            //       })
	            //     ]),
	            //     m(".col l3",[
	            //        m(infocard,{
	            //         cardLink:"/events/Meetings",
	            //         url:"/build/assets/img/icons/worship.jpg",
	            //         text:"Meetings"
	            //       })
	            //     ]),
	            //     m(".col l3",[
	            //        m(infocard,{
	            //         cardLink:"/events/Celebrations",
	            //         url:"/build/assets/img/icons/worship.jpg",
	            //         text:"Celebrations"
	            //       })
	            //     ]),
	            //
	            //   ]),
	            // ]),

	            // m("div",{class:"col l12"},[
	            //               m(".divider"),
	            //               m("h5","Recent News"),
	            //               m(".divider"),
	            //
	            //               m(".row center",[
	            //                 m(".col l3",[
	            //                   m(infocard,{
	            //                     cardLink:"/recentNews/Development",
	            //                     url:"/build/assets/img/icons/worship.jpg",
	            //                     text:"Development"
	            //                   })
	            //                 ]),
	            //                  m(".col l3",[
	            //                    m(infocard,{
	            //                     cardLink:"/recentNews/Ministry",
	            //                     url:"/build/assets/img/icons/word.jpg",
	            //                     text:"Gospel"
	            //                   })
	            //                 ]),
	            //                 m(".col l3",[
	            //                    m(infocard,{
	            //                     cardLink:"/recentNews/Youth",
	            //                     url:"/build/assets/img/icons/worship.jpg",
	            //                     text:"Youth"
	            //                   })
	            //                 ]),
	            //                 m(".col l3",[
	            //                    m(infocard,{
	            //                     cardLink:"/aweosme",
	            //                     url:"/build/assets/img/icons/worship.jpg",
	            //                     text:"Online Church"
	            //                   })
	            //                 ]),
	            //
	            //               ]),
	            //       ])
	          ]),

	          m(footer)
	      ]
	  }
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var fbPagePlugin = __webpack_require__(6)

	module.exports={
	        view:function(){
	            return m("footer",{class:"page-footer " + primaryColor},[
	                m(".container",[
	                    m(".row center",[

	                        m(".col l3 s12 white-text",[
	                            m("h5",{class:"center"},"Help The Gathering Church Grow"),

	                            m("p","We hope you have enjoyed Our Church! If you feel The Gathering Church has helped you out and want to support Our team, send us over a donation! Any amount would help support and continue development on this Church and is greatly appreciated."),

	                            m("a",{class:"center btn waves-effect waves-light red " + color,href:"/onlineChurch/giving",config:m.route},"Give")
	                        ]),

	                        m(".col l3 s12 white-text",[
	                            m("h5",{class:"center"},"Join Our Discussion"),

	                            m("p","At the gathering church we love hearing the voices of our congregation, please join us and tell us what you feel, or what you want for the church"),

	                            m("a",{class:"btn waves-effect waves-light red " + color, href:"/onlineChurch/blog",config:m.route},"Blog")

	                        ]),

	                        m(".col l3 s12 white-text",[
	                            m("h5",{class:"center"},"Affiliations"),
	                            m("a",{href:"http://jiarelief.org/"},[
	                                m("img",{class:"btn waves-effect waves-light red " + color, src:"http://jiarelief.org/wp-content/themes/jia/images/jia.png"})
	                            ])

	                        ]),

	                        m(".col l3 s12 white-text",[
	                            // m("h5",{class:"center"},"Connect with us
	                            m("br"),
	                            m(fbPagePlugin,{
	                              page:"https://web.facebook.com/Gathering-Church-617022945064040/?fref=ts",
	                              width:"300",
	                              height:"300",
	                              hideCover:"false",
	                              smallHeader:"true",
	                              facePile:"true",
	                              showPosts:"false",
	                              tabs:"timeline,events,messages"
	                            })
	                        ]),

	                    ])
	                ]),

	                m(".footer-copyright container",[
	                        "Copyright © " + config.settings.installationYear + "-" + config.settings.currentYear + ", All rights reserved." + config.profile.churchName,[
	                            m("span",{class:"right"}," < SSC: 0.1.0 />")
	                        ]
	                ])
	            ])
	        }
	    }


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m(".fb-page",{
	      "data-href":args.page,
	      "data-width":args.width,
	      "data-height":args.height,
	      "data-hide-cover":args.hideCover,
	      "data-small-header":args.smallHeader,
	      "data-show-facepile":args.facePile,
	      "data-show-posts":args.showPosts,
	      "data-tabs":args.tabs,
	      config:function(){

	        /**
	        *if this is called at first, FB object will not have innitialized and will screw things up,
	        *this is usefull in a re-draw where the fb thing will be blown away, but the FB sdk will
	        *have innitialized and hence calling parse will render it :-)
	        */
	        if (typeof FB != 'undefined'){
	          FB.XFBML.parse();
	        }
	      }
	    })
	  }
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(8);

	module.exports={
	        view:function(){
	            return  m("header",[
	              m("div",{id:"index-banner",class:"section no-pad-bot " + color + " hide-on-med-and-down"},[
	                    m(".container row center-on-small-only ",[
	                      // logo area
	                      m(".col l4 s12 white-text center-align",[
	                        m("br"),

	                        m("h1",[
	                          m("b"," GATHERING CHURCH INTERNATIONAL")
	                        ])
	                      ]),

	                      // services
	                      m(".col l5 s12 white-text",[

	                              m("h4","Join Us this sunday at 9.00am"),


	                          m(".divider"),
	                          m(".row",[
	                            m(".col l6",[

	                              m("p","Express Service",[
	                                m("b",": 9.00am"),
	                                m("span"," to "),
	                                m("b","10.30am ")
	                              ]),

	                              m("p","Main Service",[
	                                m("b",": 10.30am"),
	                                m("span"," to "),
	                                m("b","1.00pm "),
	                              ]),

	                            ]),

	                            m(".col l6",[
	                              m("br"),

	                              m("a",{
	                                class:"btn white-text dropdown-button-topbar " + color,
	                                "data-activates":'dropContact',
	                                config:function(){
	                                  $('.dropdown-button-topbar').dropdown();
	                                }
	                              },"Contact Us"),


	                              m("ul",{
	                                id:"dropContact",
	                                class:"dropdown-content"
	                              },[
	                                m("li",[
	                                  m("a",{href:"/Welcome/location",config:m.route},"Directions"),
	                                ]),
	                                m("li",[
	                                  m("a",{href:"/Welcome/contactUs",config:m.route},"Reach an Usher")
	                                ])


	                              ])

	                            ])
	                          ]),









	                      ]),

	                      // Contact
	                      // m(".col l2 s12 white-text",[
	                      //     // m("h5","Contact"),
	                      //     // m(".divider"),
	                      //     // m("p","PST Martin: 0722409158")
	                      // ]),

	                      // location
	                      m(".col l2 s12 white-text",[
	                        m("img",{
	                          class:"materialboxed",
	                          "data-caption":"Our Sanctuary",
	                          width:"250",
	                          src:"/build/assets/img/orgFace/gathering_logo.png",
	                          config:function(){
	                            $('.materialboxed').materialbox();
	                          }
	                        })
	                      ])
	                    ])
	                  ]),

	                  m(navbar,{
	                    fixed:false
	                  }),
	            ])


	        }
	    }


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(9)
	var JD = __webpack_require__(10);


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
	                                  m(navItem,{ name:"Admin",url:"/onlineChurch/admin"}),
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


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	        view:function(ctrl,args){
	            return m("li",{
	              class:args.direction + " dropdown-button " + (m.route() === args.url ? "active" : ""),
	              "data-activates":args.dropId
	          },[
	                m("a",{
	                  href:args.url,
	                  config:m.route
	                },args.name,[
	                  (args.dropId ? m("i",{class:"mdi-navigation-arrow-drop-down right"})  : m("span"))
	                ])
	            ])
	        }
	    }


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports =  {
	    makeQuery:function(collectionName,schema,MutationType,authIdentifier){
	      var QueryHead = collectionName + '[' + MutationType +']{'
	      var QueryTail = '}'

	      var QueryBody = " "
	      for(item in schema){
	        // var re = /\w+\s/g;
	        // if(schema[item]().match(re)){ //check if there is any white space
	        //   // var str = "fee fi fo fum";
	        //   var myArray = schema[item]().match(re); //extract the strings into an array
	        //   console.log(myArray);
	        //   var fullString;
	        //   if(myArray){
	        //     myArray.map(function(item){
	        //       if(item){
	        //         fullString = fullString + item
	        //       }
	        //     })
	        //     console.log(fullString)
	        //   }
	        // }

	        // var schemaValue;
	        // if(schema[item]().toString().split(" ")){
	        //   // alert(/^\S+$/.test(schema[item]()));
	        //   var thing = schema[item]().split(" ")
	        //   // console.log(thing)
	        //   // var fulltext;
	        //   // thing.map(function(text){
	        //   //   fulltext = fulltext + "__" + text
	        //   // })
	        //   schemaValue = thing;
	        // }else{
	        //   schemaValue = schema[item]()
	        // }
	        var QueryItem = item + ":" + schema[item]().toString();
	        QueryBody = QueryBody + QueryItem + " "
	      }

	      if(authIdentifier){
	        console.log(authIdentifier);
	        QueryBody = QueryBody + "identifier:" + authIdentifier
	      }

	      var Query = QueryHead + QueryBody + QueryTail
	      console.log(Query)
	      return Query;
	    },

	    sendQuery:function(collection,MutationType,success,err,authIdentifier,domain){
	      if(this.loggedIn()){
	        var sskey = this.session().session.id
	      }else{
	        var sskey = null
	      }
	      console.log(sskey);
	      console.log("domain is  - >" + domain);

	      var myObject = {
	          Query:this.makeQuery(collection.name,collection.schema,MutationType,authIdentifier)
	      }

	      $.ajax({
	        method:"GET",
	        // crossDomain: true,
	        // crossDomain: true,
	        // dataType: 'jsonp',
	        // headers: {"Access-Control-Allow-Origin": "*"},
	        // contentType: "application/json; charset=utf-8",
	        url:apiUrl + myObject.Query,
	        // dataType: "json",
	        // data:myObject
	      }).done(function(res) { //pass
	          if(res.responseJSON){ //some res from server arent normal...will investigate
	            success(res.responseJSON)
	          }else{
	            success(res)
	          }
	        }).fail(function(res) {//fail
	          // console.log(res.responseJSON);
	          err(res.responseJSON)
	        });
	      // $.ajax({
	      //   url:apiUrl,
	      //   type:"POST",
	      //   // crossDomain: 'true',
	      //   contentType:'application/json',
	      //   data:myObject,
	      //   success:function(r){
	      //     console.log(r);
	      //   }
	      // })

	      // m.request({
	      //   method: "GET",
	      //   url: apiUrl + myObject.Query)
	      //   // data: myObject,
	      //   // config:function(xhr) {
	      //   //   xhr.withCredentials = false;
	      //   // }
	      // });



	    },

	    loggedIn:function(){
	      var session = JSON.parse(localStorage.getItem("GRIDsession"))
	      if(session){
	        // console.log("you are logged in already, session stored")
	        // console.log(session)
	        return true
	      }else{
	        // console.log("you are not logged in")
	        return false
	      }
	    },
	    session:function(){
	      return JSON.parse(localStorage.getItem("GRIDsession"))
	    },
	    invalidateSession:function(){
	      localStorage.removeItem("GRIDsession");
	    }
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	// var url = "http://localhost:3000"

	var event = {
	  schema:{
	    title:m.prop(""),
	    date:m.prop("")
	  },
	  vm:{
	    sending:m.prop(false)
	  }
	}

	module.exports = {
	  controller:function(){
	    var data =  m.request({ method:"GET", url:url + "/events", background: true, initialValue: [] })
	    var sendData = function(sendData,callback){m.request({method:"POST",url:url+"/events",data:sendData}).then(function(){
	      if(callback) callback()
	    })}
	    data.then(m.redraw)
	    return {
	      churches:data,
	      postChurch:function(){
	      	var data = {
	      		title:event.schema.title(),
	          date:event.schema.date()
	      	}
	        sendData(data,function(){
	          m.route( m.route() )
	        })
	      },
	      event:event.schema,
	      vm:event.vm
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",[
	      // console.log(ctrl.data.responseJSON),
	      // m("h1","mithril"),
	      console.log("draw"),
	      m(".card-panel",[
	        m("h5",{class:"center"},"Upcoming Events"),
	        m("ul",{class:"table-of-contents"},[

	          //upcomming events in descending order
	          ctrl.churches().map(function(event){
	            return m("li",[
	              m("a",{
	                    class:ctrl.churches().indexOf(event) === 0 ? "active" : " "
	                  },[
	                    m("b",event.date + " - "),
	                    m("span",event.title)
	                  ]),
	            ])
	          }),

	        ]),

	        m("h5",{class:"center"},"Weekly Meetings"),

	        m("ul",{class:"table-of-contents"},[
	          //move this to its own component
	          //upcomming events in descending order
	          // meetings.map(function(meeting){
	          //   return m("li",[
	          //     m("a",[
	          //       m("b",meeting.date + " - "),
	          //       m("span",meeting.eventName),
	          //       m("b",meeting.time)
	          //     ]),
	          //     m("br")
	          //   ])
	          // })
	        ]),


	      ])
	    ])
	  }
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Celebrations")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	    }



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Keshas")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	    }



/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Meetings")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	    }



/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Semminars")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	    }



/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Announcements")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	    }



/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Development")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	    }



/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Ministry")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	    }



/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Youth")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	    }



/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(21);

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


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var sidebarItem = __webpack_require__(22);

	var links = [
	  {text:"Welcome",url:"/Welcome/thank-you"},
	  {text:"What you will find",url:"/Welcome/what-to-find"},
	  {text:"How to connect with us",url:"/Welcome/connect"},
	  {text:"Our Location",url:"/Welcome/location"}
	]

	// var distinctives = [
	//   {text:"Church Discipline",url:"/AboutUs/whatWeTeach/churchdiscipline"},
	//   {text:"Bibilical eldership",url:"/AboutUs/whatWeTeach/bibilicaleldership"},
	//   {text:"Divorce and Marriage",url:"/AboutUs/whatWeTeach/divorceandmariage"},
	//   {text:"Evangelising children",url:"/AboutUs/whatWeTeach/evangelisingchildren"},
	//   {text:"The role of wemen in the church",url:"/AboutUs/whatWeTeach/roleofwemen"},
	// ]


	module.exports = {
	  view:function(){
	    return m("span",[
	      m(".divider"),
	      m("ul",{class:"section table-of-contents"},[
	            links.map(function(link){
	              return m(sidebarItem,{
	                text:link.text,
	                link:link.url
	              })
	            })
	      ]),
	      // m(".divider"),
	      // m("ul",{class:"section table-of-contents"},[
	      //       distinctives.map(function(link){
	      //         return m(sidebarItem,{
	      //           text:link.text,
	      //           link:link.url
	      //         })
	      //       })
	      // ]),
	    ])

	  }
	}


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("li",[
	        m("a",{
	          class:(args.link === m.route() ? "active" : " "),
	          href:args.link,
	          config:m.route
	        },args.text)
	      ])
	  }
	}


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(21);
	var map = __webpack_require__(24)

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
	                      m("h1",{class:"center"},"Where you will find us"),

	                      m("h6",{class:"center"},"We meet every sunday at 9.00am at Joska along kangundo road"),


	                      m.component(map,{
	                        location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8159560801514!2d37.093341314422034!3d-1.2843486990632342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6f3ae5aa008b%3A0x52c11944d2787634!2sJoska+Kangundo+RD!5e0!3m2!1sen!2ske!4v1454967089897",
	                        width:"1100",
	                        height:"450"
	                      })
	                  ])

	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("iframe",{
	      frameborder:"0",
	      scrolling:"no",
	      marginheight:"0",
	      marginwidth:"0",
	      width: args.width ? args.width  :"100%",
	      height: args.height ? args.height  :"100%",
	      src: args.location,
	      allowfullscreen:true
	    })
	  }
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(21);

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


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(21);

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


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)

	module.exports = {
	        view:function(){
	            return [
	                m(topbar,{
	                  fixed:true
	                }),
	                // m(hero),
	                m(".row card-panel",[
	                  m("h1","about us"),

	                  // image of the church

	                  m(".col l3",[
	                    m(".tabs-wrapper .row",{
	                    },[
	                      m("img",{
	                        class:"materialboxed",
	                        "data-caption":"Our Sanctuary",
	                        width:"250",
	                        src:"http://jiarelief.org/wp-content/uploads/2013/05/Murrell-Ewing-Childrens-Home-11x17.jpg",
	                        config:function(){
	                          $('.materialboxed').materialbox();
	                        }
	                      }),

	                      m("blockquote",{class:"card-panel flow-text"},"We are closely affiliated with the",[
	                        m(".blue-text","Jordan inter`national Aid"),
	                        m("div","and above is a model of the dream church that we are building at Joska")
	                      ])
	                    ])
	                  ]),

	                  m(".col l9",[
	                    m(".card-panel",[
	                      m("h3",{class:"center"},"About Us"),
	                      m(".row",[

	                        // the core values
	                        m(".col l6",[
	                          m("h5",{class:"center"},"Our Core Values"),

	                            m("ol",[

	                              m("li",[
	                                m("b","BUILDING RELATIONSHIPS - "),
	                                m("i","We live life with people")
	                              ]),

	                              m("br"),

	                              m("li",[
	                                m("b","RESTORING LIVES  - "),
	                                m("i","It is never too late to be what God has designed us to be")
	                              ]),

	                               m("br"),

	                              m("li",[
	                                m("b","SHARING CHRIST  - "),
	                                m("i","It is never too late to be what God has designed us to be")
	                              ]),

	                               m("br"),

	                              m("li",[
	                                m("b","LIVING CHRIST CENTERED  - "),
	                                m("i","It is never too late to be what God has designed us to be")
	                              ])
	                            ])

	                        ]),

	                        // the Mission Statement

	                        m(".col l6",[
	                          m("h5",{class:"center"},"Our Mission statement"),

	                          m("p","We exist to lead people to become fully committed Disciples of Christ"),

	                          m("h6","OUR CORE FOUR"),

	                          m("ol",[

	                            m("li",[
	                                m("b","Building"),
	                            ]),
	                            m("li",[
	                                m("b","Unity"),
	                            ]),
	                            m("li",[
	                                m("b","Teaching"),
	                            ]),
	                            m("li",[
	                                m("b","Favor"),
	                            ])
	                          ])

	                        ]),

	                        m(".col l12",[
	                            m("h4",{class:"center"},"Our Goals and  Objectives"),

	                            m("h5",{class:"center"},"1. Scale up growth in gathering church"),

	                            // objective 1
	                            m("u","Objective 1 - To increase Gathering  Church membership from the current figure of 50 to 200 in 2016"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td","A broad church membership"),
	                                m("td",[
	                                  m("ol",[
	                                    m("li",[
	                                      m("span","To train the Leaders and co-workers on "),m("br"),
	                                      m("span","Church management skills")
	                                    ]),
	                                    m("li","To start training the pastoral team.")
	                                  ])
	                                ])
	                              ])
	                            ]),

	                            // objective 2
	                            m("u","Objective 2 - To groom and nurture the younger generation"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","A Godly younger generation in all societal institutions,"),m("br"),
	                                  m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To develop dynamic, attractive and friendly programs"),
	                                    m("li","to train children workers."),
	                                    m("li","Rites of passage – develop a church programme to provide this important service")
	                                  ])
	                                ])
	                              ])
	                            ]),

	                          // objective 3
	                           m("u","Objective 3 - To increase attendance and participation of youths in Gathering Church"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","A Godly younger generation in Gathering Church,"), //m("br"),
	                                  // m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To intensify our outreach to schools (Primary and secondary), colleges and universities in Joska Town"),
	                                    m("li","To establish sport evangelism "),
	                                    m("li","To reach the touts and motorcycle riders"),
	                                    m("li","To start/ initiate  entertainment and media programmes"),
	                                    m("li","To initiate youth services in Gathering Church "),

	                                  ])
	                                ])
	                              ])
	                            ]),

	                          // objective 4
	                           m("u","Objective 4 - To have an effective evangelism and outreach ministry at all departments"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","Establish a fully equipped evangelistic team for evangelism"), //m("br"),
	                                  // m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To Train all members on evangelism and discipleship"),
	                                    m("li","To establish sport evangelism "),
	                                    m("li","To have a very strong discipleship department"),
	                                    m("li","To train all members on how to use the four spiritual laws")
	                                  ])
	                                ])
	                              ])
	                            ]),

	// objective 4
	                           m("u","Objective 5 -  To establish 10 cells  in 2016 within the church"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","Cell group ministry Members identify with a cell group"), //m("br"),
	                                  // m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To Train all members on evangelism and discipleship"),
	                                    m("li","To Train all members on small group dynamics Church leadership to continuously give cell group topical study"),
	                                    m("li","To train members on the use of life studies materials")
	                                  ])
	                                ])
	                              ])
	                            ]),

	                            m("img",{
	                            class:"materialboxed",
	                            "data-caption":"Our Sanctuary",
	                            width:"250",
	                            src:"/app/images/organogram.png",
	                            config:function(){
	                              $('.materialboxed').materialbox();
	                            }
	                          }),

	                            m(".divider"),

	                            m("div",[
	                              m("span",[
	                                m("span","more goals can be downloaded from here"),

	                              ])
	                            ])







	                        ])
	                      ])
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)

	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Gospel")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Gospel")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","Gospel")
	                  ])
	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(32);

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
	                  //ToDo water baptism
	                  m(".col l9 card-panel",[
	                      m("h1","What we teach"),

	                      m("h5",[m("b","Holy Scriptures")]),
	                      m("p","We teach that the Bible is God’s written revelation to man, and thus the 66 books of the Bible given to us by the Holy Spirit constitute the plenary (inspired equally in all parts) Word of God (1 Corinthians 2:7-14; 2 Peter 1:20-21). We teach that the Word of God is an objective, propositional revelation (1 Thessalonians 2:13; 1 Corinthians 2:13), verbally inspired in every word (2 Timothy 3:16), absolutely inerrant in the original documents, infallible, and God-breathed. We teach the literal, grammatical-historical interpretation of Scripture which affirms the belief that the opening chapters of Genesis present creation in six literal days (Genesis 1:31; Exodus 31:17). We teach that the Bible constitutes the only infallible rule of faith and practice (Matthew 5:18; 24:35; John 10:35; 16:12-13; 17:17; 1 Corinthians 2:13; 2 Timothy 3:15-17; Hebrews 4:12; 2 Peter 1:20-21)."),

	                      m("p","We teach that God spoke in His written Word by a process of dual authorship. The Holy Spirit so superintended the human authors that, through their individual personalities and different styles of writing, they composed and recorded God’s Word to man (2 Peter 1:20-21) without error in the whole or in the part (Matthew 5:18; 2 Timothy 3:16)"),

	                      m("p","We teach that, whereas there may be several applications of any given passage of Scripture, there is but one true interpretation. The meaning of Scripture is to be found as one diligently applies the literal grammatical-historical method of interpretation under the enlightenment of the Holy Spirit (John 7:17; 16:12-15; 1 Corinthians 2:7-15; 1 John 2:20). It is the responsibility of believers to ascertain carefully the true intent and meaning of Scripture, recognizing that proper application is binding on all generations. Yet the truth of Scripture stands in judgment of men; never do men stand in judgment of it."),

	                      m("h5",[m("b","Man")]),
	                      m("p","We teach that man was directly and immediately created by God in His image and likeness. Man was created free of sin with a rational nature, intelligence, volition, self-determination, and moral responsibility to God (Genesis 2:7, 15-25; James 3:9)."),

	                      m("p","We teach that God’s intention in the creation of man was that man should glorify God, enjoy God’s fellowship, live his life in the will of God, and by this accomplish God’s purpose for man in the world (Isaiah 43:7; Colossians 1:16; Revelation 4:11)."),

	                      m("p","We teach that, because all men were in Adam, a nature corrupted by Adam’s sin has been transmitted to all men of all ages, Jesus Christ being the only exception. All men are thus sinners by nature, by choice, and by divine declaration (Psalm 14:1-3; Jeremiah 17:9; Romans 3:9-18, 23; 5:10-12)."),

	                      m("h5",[m("b","Salvation")]),
	                      m("p","We teach that salvation is wholly of God by grace on the basis of the redemption of Jesus Christ, the merit of His shed blood, and not on the basis of human merit or works (John 1:12; Ephesians 1:7; 2:8-10; 1 Peter 1:18-19)."),

	                      m("h5",[m("b","What it means to be a christian")]),

	                      m("p","Being a Christian is more than identifying yourself with a particular religion or affirming a certain value system. Being a Christian means you have embraced what the Bible says about God, mankind, and salvation. Consider the following truths found in Scripture."),

	                      m("p",[
	                        m("b","God Is Sovereign Creator."),
	                        m("span","Contemporary thinking says man is the product of evolution. But the Bible says we were created by a personal God to love, serve, and enjoy endless fellowship with Him. The New Testament reveals it was Jesus Himself who created everything (John 1:3; Colossians 1:16). Therefore, He also owns and rules everything (Psalm 103:19). That means He has authority over our lives and we owe Him absolute allegiance, obedience, and worship")
	                      ]),

	                      m("p",[
	                        m("b","God Is Holy."),
	                        m("span","God is absolutely and perfectly holy (Isaiah 6:3), therefore He cannot commit or approve of evil (James 1:13). God requires holiness of us as well. First Peter 1:16 says, 'You shall be holy, for I am holy.'")
	                      ]),

	                      m("p",[
	                        m("b","Mankind Is Sinful. "),
	                        m("span","According to Scripture, everyone is guilty of sin: 'There is no man who does not sin' (1 Kings 8:46). That doesn’t mean we’re incapable of performing acts of human kindness. But we’re utterly incapable of understanding, loving, or pleasing God on our own. (Romans 3:10-12).")
	                      ]),

	                      m("p",[
	                        m("b","Sin Demands a Penalty."),
	                        m("span"," God’s holiness and justice demand that all sin be punished by death: (Ezekiel 18:4). That’s why simply changing our patterns of behavior can’t solve our sin problem or eliminate its consequences.")
	                      ]),

	                      m("p",[
	                        m("b","Jesus Is Lord and Savior."),
	                        m("span","The New Testament reveals it was Jesus Himself who created everything (Colossians 1:16). Therefore He owns and rules everything (Psalm 103:19). That means He has authority over our lives and we owe Him absolute allegiance, obedience, and worship. Romans 10:9 says, “If you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you shall be saved.” Even though God’s justice demands death for sin, His love has provided a Savior who paid the penalty and died for sinners (1 Peter 3:18). Christ’s death satisfied the demands of God’s justice and Christ’s perfect life satisfied the demands of God’s holiness (2 Corinthians 5:21), thereby enabling Him to forgive and save those who place their faith in Him (Romans 3:26).")
	                      ]),

	                      m("p",[
	                        m("b","The Character of Saving Faith. "),
	                        m("span","True faith is always accompanied by repentance from sin. Repentance is agreeing with God that you are sinful, confessing your sins to Him, and making a conscious choice to turn from sin (Luke 13:3,5; 1 Thessalonians 1:9) and pursue Christ (Matthew 11:28-30; John 17:3) and obedience to Him (1 John 2:3). It isn’t enough to believe certain facts about Christ. Even Satan and his demons believe in the true God (James 2:19), but they don’t love and obey Him. True saving faith always responds in obedience (Ephesians 2:10).")
	                      ])

	                      // m("p",[ //for future adds
	                      //   m("b",""),
	                      //   m("span","")
	                      // ]),



	                  ])

	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var sidebarItem = __webpack_require__(33);

	var links = [
	  {text:"Introduction",url:"/AboutUs/whatWeTeach"},
	  {text:"Our statement of faith",url:"/AboutUs/whatWeTeach/thegospel"},
	  {text:"History",url:"/AboutUs/whatWeTeach/history"},
	  {text:"Leadership",url:"/AboutUs/whatWeTeach/leadership"},


	]

	var distinctives = [
	  {text:"Church Discipline",url:"/AboutUs/whatWeTeach/churchdiscipline"},
	  {text:"Bibilical eldership",url:"/AboutUs/whatWeTeach/bibilicaleldership"},
	  {text:"Divorce and Marriage",url:"/AboutUs/whatWeTeach/divorceandmariage"},
	  {text:"Evangelising children",url:"/AboutUs/whatWeTeach/evangelisingchildren"},
	  {text:"The role of wemen in the church",url:"/AboutUs/whatWeTeach/roleofwemen"},
	]


	module.exports = {
	  view:function(){
	    return m("span",[
	      m(".divider"),
	      m("ul",{class:"section table-of-contents"},[
	            links.map(function(link){
	              return m(sidebarItem,{
	                text:link.text,
	                link:link.url
	              })
	            })
	      ]),
	      m(".divider"),
	      m("ul",{class:"section table-of-contents"},[
	            distinctives.map(function(link){
	              return m(sidebarItem,{
	                text:link.text,
	                link:link.url
	              })
	            })
	      ]),
	    ])

	  }
	}


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("li",[
	        m("a",{
	          class:(args.link === m.route() ? "active" : " "),
	          href:args.link,
	          config:m.route
	        },args.text)
	      ])
	  }
	}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(32);

	var verses = [
	  {
	    head:"2 Timothy 3:16",
	    content:"The Bible to be the inspired word of God"
	  },
	  {
	    head:"Deut 6:4; Mark 12:29",
	    content:"In one God, is both holy spirit and became a man, Jesus"
	  },
	  {
	    head:"1 Timothy 3:16; Mathew 1:23",
	    content:"In the virgin birth and Diety of jesus christ, that he was God and Man"
	  },
	  {
	    head:"Ephesians 2:8-9",
	    content:"In sinners saved by Gods grace and not human efforts"
	  },
	  {
	    head:"Mathew 28:19;Acts 2:38; 10-47-48",
	    content:"In repentance and water baptism for the removal of sin - that its Gods plan for every believer to be baptised in water"
	  },
	  {
	    head:"Mark 16:17,Acts 2:1-5; 19-1-6",
	    content:"In the rebirth of makind by being field with the holy Spirit-that speaking in tongue is evidence of this initial spirit birth"
	  },
	  {
	    head:"1 john 5:4",
	    content:"That every believer is given power to live a victorios, Overcoming life"
	  },
	  {
	    head:"Hebrews 12:14",
	    content:"That every believer is powered to live in holiness"
	  },
	  {
	    head:"Psalms 47:1",
	    content:"In vibrant singing and an outward expression of worship"
	  },
	  {
	    head:"1 corrinthians 12:14",
	    content:"in the operation of the gifts of the holy spirit and corporately"
	  },
	  {
	    head:"Mark 16:18; James 5:14; 1 Peter 2:24",
	    content:"That devine healing through the redemptive work of christ is available for every believer"
	  },
	  {
	    head:"Luke 22:17-20; 1 corrinthians 11:28-32",
	    content:"in the table of the lord commonly called communion or the lord's supper, for believer"
	  },
	  {
	    head:"John 5:24; John 3:16; Mark 9-43-48; revelation 20:10-15",
	    content:"In Eternal Life for believers and eternal Punishment for unbelievers"
	  },
	]

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
	                      m("h1",[
	                        m("b","Our Statement Of faith")
	                      ]),

	                      verses.map(function(verse){
	                        return m("span",[
	                          m("h5",verse.head),
	                          m("p",verse.content)
	                        ])
	                      })
	                  ])

	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(32);

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
	                      m("h1","Our History")
	                  ])

	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(32);

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
	                      m("h1","Our Church leadership")
	                  ])

	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(32);

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

	                  m(".col l9 card-panel",[
	                      m("h1","Church Discipline"),

	                      m("p","On occasion a Christian will wander away from the fellowship of other believers and find himself ensnared by sin through ignorance or willful disobedience. It then becomes necessary for the church, and particularly its shepherds, to actively seek the repentance and restoration of that Christian. As shepherds of the flock, the elders love the sheep and are also held accountable by God for their spiritual welfare, including that of the wandering sheep. As in Jesus’ parable in Luke 15:3-8, it is a time of joy, both in heaven and within the church, when the wandering Christian truly repents."),

	                      m("p","One means by which the church seeks to lovingly restore wandering believers is the process of church discipline. In Matthew 18, the Lord explains to His disciples how to respond when a fellow believer sins. The principles He sets forth must guide the body of Christ as she seeks to implement discipline in the church today."),

	                      m("h5",[m("b","The Purpose of Discipline")]),

	                      m("p","The purpose of church discipline is the spiritual restoration of fallen members and the consequent strengthening of the church and glorifying of the Lord. When a sinning believer is rebuked and he turns from his sin and is forgiven, he is won back to fellowship with the body and with its head, Jesus Christ"),

	                      m("p","The goal of church discipline, then, is not to throw people out of the church or to feed the self-righteous pride of those who administer the discipline. It is not to embarrass people or to exercise authority and power in some unbiblical manner. The purpose is to restore a sinning believer to holiness and bring him back into a pure relationship within the assembly."),

	                      m("p","In Matthew 18:15, Jesus says, “And if your brother sins, go and reprove him in private; if he listens to you, you have won your brother.” The Greek word translated “won” was originally used of accumulating wealth in the sense of monetary commodities. Here it refers to the gaining back of something of value that is lost, namely, an erring brother. When a brother or sister strays, a valuable treasure is lost, and the church should not be content until he or she is restored. The body of Christ is in the business of recovery (Gal. 6:1), and such is the purpose of church discipline."),

	                      m("h5",[m("b","The Process of Discipline")]),

	                      m("p","In Matthew 18:15-17, Jesus sets forth the fourstep process of church discipline: (1) tell him his sin alone; (2) take some witnesses; (3) tell the church; and (4) treat him as an outsider."),

	                      m("p","Step One (Matt. 18:15). The process of church discipline begins on an individual level. Jesus said, “And if your brother sins, go and reprove him in private” (v. 15a). Here, an individual believer is to go to a sinning brother privately and confront him in a spirit of humility and gentleness. This confrontation involves clearly exposing his sin so that he is aware of it and calling him to repentance. If the sinning brother repents in response to the private confrontation, that brother is forgiven and restored (v. 15b)."),

	                      m("p","Step Two (Matt. 18:16). If the sinning brother refuses to listen to the one who has rebuked him privately, the next step in the discipline process is to take one or two more believers along to confront him again (v. 16a). The purpose of taking other believers is so that “by the mouth of two or three witnesses every fact may be confirmed” (v. 16b). In other words, the witnesses are present not only to confirm that the sin was committed but, in addition, to confirm that the sinning brother was properly rebuked and that he has or has not repented."),

	                      m("p","The presence of additional witnesses is as much a protection for the one being approached as it is for the one approaching. After all, a biased person could erroneously say, “Well, I tried to confront him, but he’s impenitent.” It would be presumptuous to think that one person could make that ultimate determination, especially if he was the one who had been sinned against. The witnesses need to confirm whether there is a heart of repentance or one of indifference or rejection. Such a report provides the basis for further action because the situation has been verified beyond the report of one individual."),

	                      m("p","At this point, it should be hoped that the one or two who are brought along to confront the sinner will not have to become public witnesses against him before the rest of the church. Ideally, their added rebuke will be sufficient to induce a change of heart in the offending brother that the initial rebuke did not cause. If this change of heart does occur, that brother is forgiven and restored, and the matter is dropped."),

	                      m("p","Step Three (Matt. 18:17a). If the sinning brother refuses to listen and respond to the confrontation of the witnesses after a period of time, those witnesses are then to tell it to the church (v. 17a). This is most appropriately done by bringing the matter to the attention of the elders, who in turn oversee its communication to the assembly as a whole."),

	                      m("p","How long should the witnesses continue to call the person to repentance before telling the church? The elders at Gathering Church International avoid carrying out the third or fourth stage of church discipline until they are absolutely certain that the erring believer has truly sinned, or is continuing to sin, and that he has refused to repent when appropriately confronted. The elders will routinely send a letter by registered mail warning the individual that the third (or fourth) step of discipline will be taken if they have not received word of repentance by a specific date. When this date has passed, the person’s sin and refusal to repent are made known publicly, either before the entire assembly during a Communion service or through a fellowship group in which the person is known."),

	                      m("p","It has been the custom at Gathering Church International, upon enacting this third step, to clearly indicate to the congregation that they are to pursue the person aggressively and plead with him to repent before the fourth step becomes necessary. That crucial and potent procedure often draws the sinner to repentance and obedience. If repentance does take place, the sinning believer is forgiven and restored."),

	                      m("p","Step Four (Matt. 18:17b). The fourth and final step in the process of church discipline is ostracism. If a sinning believer refuses to listen even to the church, he is to be ostracized from the fellowship. Jesus said, “let him be to you as a Gentile and a tax-gatherer” (v. 17b). The term “Gentile” was primarily used of non-Jews who held to their traditional paganism and had no part in the covenant, worship, or social life of the Jews. On the other hand, a “tax-gatherer” was an outcast from the Jews by choice, having become a traitor to his own people. Jesus’ use of these terms doesn’t mean that the church is to treat these people badly. It simply means that when a professing believer refuses to repent, the church is to treat him as if he were outside of the fellowship. They are not to let him associate and participate in the blessings and benefits of the Christian assembly."),

	                      m("p","When a man in the Corinthian church refused to forsake an incestuous relationship with his stepmother, the apostle Paul commanded that the man be removed from their midst (1 Cor. 5:13). The believers there were not even to share a meal with him (1 Cor. 5:11), for dining with someone was symbolic of a hospitable and cordial fellowship. The one who is persistently unrepentant is to be totally ostracized from the fellowship of the church and treated like an outcast, not a brother."),

	                      m("p","As far as the welfare of the church is concerned, the purpose of putting the brother out is to protect the purity of the fellowship (1 Cor. 5:6), to warn the assembly of the seriousness of sin (1 Tim. 5:20), and to give a testimony of righteousness to a watching world. But as far as the welfare of the brother himself is concerned, the purpose of the ostracism is not to punish but to awaken, and it must therefore be done in humble love and never in a spirit of self-righteous superiority (2 Thess. 3:15)."),

	                      m("p","When a church has done everything it can to bring a sinning member back to purity of life but is unsuccessful, that individual is to be left to his sin and his shame. If he is truly a Christian, God will not cast him away, but He may allow him to sink still deeper before he becomes desperate enough to turn from his sin."),

	                      m("p","The command not to have fellowship or even social contact with the unrepentant brother does not exclude all contact. When there is an opportunity to admonish him and try to call him back, the opportunity should be taken. In fact, such opportunities should be sought. But the contact should be for the purpose of admonishment and restoration and no other."),

	                      m("p","Adapted from John MacArthur, The MacArthur New Testament Commentary: Matthew 16–23 (Chicago: Moody Press, 1988); John MacArthur, The Master’s Plan for the Church (Chicago: Moody Press, 1991); and Stuart Scott and George Crawford, “Restoring the Wandering Sheep,” (unpublished paper). For a fuller treatment of church discipline, consult these resources.")


	                  ])

	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(32);

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
	                      m("h1","Eldeship in the church"),

	                      m("p","Biblically, the focal point of all church leadership is the elder. An elder is one of a plurality of biblically qualified men who jointly shepherd and oversee a local body of believers. The word translated “elder” is used nearly twenty times in Acts and the epistles in reference to this unique group of leaders who have responsibility for overseeing the people of God"),

	                      m("h5",[m("b","The Office of Elder")]),
	                      m("p","As numerous passages in the New Testament indicate, the words “elder” (presbuteros), “overseer” (episkopos), and “pastor” (poim¯en) all refer to the same office. In other words, overseers and pastors are not distinct from elders; the terms are simply different ways of identifying the same people. The qualifications for an overseer (episkopos) in 1 Timothy 3:1-7, and those for an elder (presbuteros) in Titus 1:6-9 are unmistakably parallel. In fact, in Titus 1, Paul uses both terms to refer to the same man (presbuteros in v. 5 and episkopos in v. 7). All three terms are used interchangeably in Acts 20. In verse 17, Paul assembles all the elders (presbuteros) of the church of Ephesus to give them his farewell message. In verse 28 he says, “Be on guard for yourselves and for all the flock, among which the Holy Spirit has made you overseers [episkopos], to shepherd [poimaino¯] the church of God.” First Peter 5:1-2 brings all three terms together as well. Peter writes, “Therefore, I exhort the elders [presbuteros] among you, as your fellow elder and witness of the sufferings of Christ, and a partaker also of the glory that is to be revealed, shepherd [poimaino¯] the flock of God among you, exercising oversight [episkope¯o] not under compulsion, but voluntarily, according to the will of God.” The different terms, then, indicate various features of ministry, not varying levels of authority or separate offices, as some churches espouse."),

	                      m("h5",[m("b","A Plurality of Elders")]),
	                      m("p","The consistent pattern throughout the New Testament is that each local body of believers is shepherded by a plurality of God-ordained elders. Simply stated, this is the only pattern for church leadership given in the New Testament. Nowhere in Scripture does one find a local assembly ruled by majority opinion or by a single pastor"),

	                      m("p","The Apostle Paul left Titus in Crete and instructed him to 'appoint elders in every city' (Titus 1:5). James instructed his readers to “call for the elders of the church” to pray for those who are sick (James 5:14). When Paul and Barnabas were in Derbe, Lystra, Iconium, and Antioch, they “appointed elders for them in every church” (Acts 14:23). In Paul’s first epistle to Timothy, the apostle referred to “the elders who rule well” at the church at Ephesus (1 Tim. 5:17; see also Acts 20:17, where Paul addresses “the elders of the church” at Ephesus). The book of Acts indicates that there were “elders” at the church in Jerusalem (Acts 11:30; 15:2, 4; 21:18)."),

	                      m("p","Again and again, reference is made to a plurality of elders in each of the various churches. In fact, every place in the New Testament where the term presbuteros (“elder”) is used it is plural, except where the apostle John uses it of himself in 2 and 3 John and where Peter uses it of himself in 1 Peter 5:1. Nowhere in the New Testament is there a reference to a one-pastor congregation. It may be that each elder in the city had an individual group in which he had specific oversight. But the church was seen as one church, and decisions were made by a collective process and in reference to the whole, not the individual parts."),

	                      m("p","In other passages, reference is made to a plurality of elders even though the word presbuteros itself is not used. In the opening greeting of his epistle to the Philippians, Paul refers to the “overseers [plural of episkopos] and deacons” at the church of Philippi (Phil. 1:2). In Acts 20:28, Paul warned the elders of the church of Ephesus, “Be on guard for yourselves and for all the flock, among which God has made you overseers [plural of episkopos]” (Acts 20:28). The writer of Hebrews called his readers to obey and submit to the “leaders” who kept watch over their souls (Heb. 13:17). Paul exhorted his Thessalonian readers to “appreciate those who diligently labor among you, and have charge over you in the Lord and give you instruction” (1 Thess. 5:12)—a clear reference to the overseers in the Thessalonian assembly"),

	                      m("p","Much can be said for the benefits of leadership made up of a plurality of godly men. Their combined counsel and wisdom helps assure that decisions are not self-willed or self-serving to a single individual (cf. Prov. 11:14). If there is division among the elders in making decisions, all the elders should study, pray, and seek the will of God together until consensus is achieved. In this way, the unity and harmony that the Lord desires for the church will begin with those individuals he has appointed to shepherd His flock."),

	                      m("h5",[m("b","The Qualifications of Elders")]),
	                      m("p","The character and effectiveness of any church is directly related to the quality of its leadership. That’s why Scripture stresses the importance of qualified church leadership and delineates specific standards for evaluating those who would serve in that sacred position."),

	                      m("p","The qualifications for elders are found in 1 Timothy 3:2-7 and Titus 1:6-8. According to these passages, an elder must be above reproach, the husband of one wife, temperate, prudent, respectable, hospitable, able to teach, not addicted to wine, not pugnacious, gentle, uncontentious, free from the love of money, not fond of sordid gain, a good manager of his household, one who has his children under control with dignity, not a new convert, one who has a good reputation outside the church, self-controlled, sensible, able to exhort in sound doctrine and to refute those who contradict, above reproach as God’s steward, not self-willed, not quick-tempered, loving what is good, just, and devout. (For an explanation of these qualifications, see pages 215-33 of The Master’s Plan for the Church by John MacArthur.)"),

	                      m("p","The single, overarching qualification of which the rest are supportive is that he is to be “above reproach.” That is, he must be a leader who cannot be accused of anything sinful because he has a sustained reputation for blamelessness. An elder is to be above reproach in his marital life, his social life, his business life, and his spiritual life. In this way, he is to be a model of godliness so he can legitimately call the congregation to follow his example (Phil. 3:17). All the other qualifications, except perhaps teaching and management skills, only amplify that idea."),

	                      m("p","In addition, the office of elder is limited to men. First Timothy 2:11-12 says, “Let a woman quietly receive instruction with entire submissiveness. But I do not allow a woman to teach or exercise authority over a man, but to remain quiet.” In the church, women are to be under the authority of the elders, excluded from teaching men or holding positions of authority over them."),

	                      m("h5",[m("b","The Functions of Elders")]),
	                      m("p","As the apostolic era came to a close, the office of elder emerged as the highest level of local church leadership. Thus, it carried a great amount of responsibility. There was no higher court of appeal and no greater resource to know the mind and heart of God with regard to issues in the church"),
	                      m("p","The primary responsibility of an elder is to serve as a manager and caretaker of the church (1 Tim. 3:5). That involves a number of specific duties. As spiritual overseers of the flock, elders are to determine church policy (Acts 15:22); oversee the church (Acts 20:28); ordain others (1 Tim. 4:4); rule, teach, and preach (1 Tim. 5:17; cf. 1 Thess. 5:12; 1 Tim. 3:2); exhort and refute (Titus 1:9); and act as shepherds, setting an example for all (1 Pet. 5:1-3). Those responsibilities put elders at the core of the New Testament church’s work."),

	                      m("p","Because of its heritage of democratic values and its long history of congregational church government, modern American evangelicalism often views the concept of elder rule with suspicion. The clear teaching of Scripture, however, demonstrates that the biblical norm for church leadership is a plurality of God-ordained elders, and only by following this biblical pattern will the church maximize its fruitfulness to the glory of God."),

	                      m("p","Adapted from John MacArthur, The Master’s Plan for the Church (Chicago: Moody Press, 1991). For a fuller treatment of biblical eldership, consult this resource.")
	                  ])

	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(32);

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

	                  m(".col l9 card-panel",[
	                      m("h1","Divorce & Remarriage"),

	                      m("p","God hates divorce. He hates it because it always involves unfaithfulness to the solemn covenant of marriage that two partners have entered into before Him, and because it brings harmful consequences to those partners and their children (Mal. 2:14-16). Divorce in the Scripture is permitted only because of man’s sin. Since divorce is only a concession to man’s sin and is not part of God’s original plan for marriage, all believers should hate divorce as God does and pursue it only when there is no other recourse. With God’s help a marriage can survive the worst sins."),

	                      m("p","In Matthew 19:3-9, Christ teaches clearly that divorce is an accommodation to man’s sin that violates God’s original purpose for the intimate unity and permanence of the marriage bond (Gen. 2:24). He taught that God’s law allowed divorce only because of “hardness of heart” (Matt. 19:8). Legal divorce was a concession for the faithful partner due to the sexual sin or abandonment by the sinning partner, so that the faithful partner was no longer bound to the marriage (Matt. 5:32; 19:9; 1 Cor. 7:12-15). Although Jesus did say that divorce is permitted in some situations, we must remember that His primary point in this discourse is to correct the Jews’ idea that they could divorce one another “for any cause at all” (Matt. 19:3), and to show them the gravity of pursuing a sinful divorce. Therefore, the believer should never consider divorce except in specific circumstances (see next section), and even in those circumstances it should only be pursued reluctantly because there is no other recourse."),

	                      m("h5","The Grounds for Divorce"),

	                      m("p","The only New Testament grounds for divorce are sexual sin or desertion by an unbeliever. The first is found in Jesus’ use of the Greek word porneia (Matt. 5:32; 19:9). This is a general term that encompasses sexual sin such as adultery, homosexuality, bestiality, and incest. When one partner violates the unity and intimacy of a marriage by sexual sin—and forsakes his or her covenant obligation—the faithful partner is placed in an extremely difficult situation. After all means are exhausted to bring the sinning partner to repentance, the Bible permits release for the faithful partner through divorce (Matt. 5:32; 1 Cor. 7:15)."),

	                      m("p","The second reason for permitting a divorce is in cases where an unbelieving mate does not desire to live with his or her believing spouse (1 Cor. 7:12-15). Because “God has called us to peace” (v. 15), divorce is allowed and may be preferable in such situations. When an unbeliever desires to leave, trying to keep him or her in the marriage may only create greater tension and conflict. Also, if the unbeliever leaves the marital relationship permanently but is not willing to file for divorce, perhaps because of lifestyle, irresponsibility, or to avoid monetary obligations, then the believer is in an impossible situation of having legal and moral obligations that he or she cannot fulfill. Because “the brother or sister is not under bondage in such cases” (1 Cor. 7:15) and is therefore no longer obligated to remain married, the believer may file for divorce without fearing the displeasure of God."),

	                      m("h5","The Possibility of Remarriage"),

	                      m("p","Remarriage is permitted for the faithful partner only when the divorce was on biblical grounds. In fact, the purpose for a biblical divorce is to make clear that the faithful partner is free to remarry, but only in the Lord (Rom. 7:1-3; 1 Cor. 7:39)."),

	                      m("p","Those who divorce on any other grounds have sinned against God and their partners, and for them to marry another is an act of “adultery” (Mark 10:11-12). This is why Paul says that a believing woman who sinfully divorces should “remain unmarried, or else be reconciled to her husband” (1 Cor. 7:10-11). If she repents from her sin of unbiblical divorce, the true fruits of that repentance would be to seek reconciliation with her former husband (Matt. 5:23-24). The same is true for a man who divorces unbiblically (1 Cor. 7:11). The only time such a person could remarry another is if the former spouse remarries, proves to be an unbeliever, or dies, in which cases reconciliation would no longer be possible."),

	                      m("p","The Bible also gives a word of caution to anyone who is considering marriage to a divorcee. If the divorce was not on biblical grounds and there is still a responsibility to reconcile, the person who marries the divorcee is considered an adulterer (Mark 10:12)."),

	                      m("h5","The Role of the Church"),

	                      m("p","Believers who pursue divorce on unbiblical grounds are subject to church discipline because they openly reject the Word of God. The one who obtains an unbiblical divorce and remarries is guilty of adultery since God did not permit the original divorce (Matt. 5:32; Mark 10:11-12). That person is subject to the steps of church discipline as outlined in Matthew 18:15-17. If a professing Christian violates the marriage covenant and refuses to repent during the process of church discipline, Scripture instructs that he or she should be put out of the church and treated as an unbeliever (v. 17). When the discipline results in such a reclassification of the disobedient spouse as an “outcast” or unbeliever, the faithful partner would be free to divorce according to the provision for divorce as in the case of an unbeliever departing, as stated in 1 Corinthians 7:15. Before such a divorce, however, reasonable time should be allowed for the possibility of the unfaithful spouse returning because of the discipline."),

	                      m("p","The leadership in the local church should also help single believers who have been divorced to understand their situation biblically, especially in cases where the appropriate application of biblical teaching does not seem clear. For example, the church leadership may at times need to decide whether one or both of the former partners could be legitimately considered “believers” at the time of their past divorce, because this will affect the application of biblical principles to their current situation (1 Cor. 7:17-24). Also, because people often transfer to or from other churches and many of those churches do not practice church discipline, it might be necessary for the leadership to decide whether a member’s estranged or former spouse should currently be considered a Christian or treated as an unbeliever because of continued disobedience. Again, in some cases this would affect the application of the biblical principles (1 Cor. 7:15; 2 Cor. 6:14)."),

	                      m("h5","Pre-conversion Divorce"),

	                      m("p","According to 1 Corinthians 7:20-27, there is nothing in salvation that demands a particular social or marital status. The Apostle Paul, therefore, instructs believers to recognize that God providentially allows the circumstances they find themselves in when they come to Christ. If they were called while married, then they are not required to seek a divorce (even though divorce may be permitted on biblical grounds). If they were called while divorced, and cannot be reconciled to their former spouse because that spouse is an unbeliever or is remarried, then they are free to either remain single or be remarried to another believer (1 Cor. 7:39; 2 Cor. 6:14)."),

	                      m("h5","Repentance and Forgiveness"),

	                      m("p","In cases where divorce took place on unbiblical grounds and the guilty partner later repents, the grace of God is operative at the point of repentance. A sign of true repentance will be a desire to implement 1 Corinthians 7:10-11, which would involve a willingness to pursue reconciliation with his or her former spouse, if that is possible. If reconciliation is not possible, however, because the former spouse is an unbeliever or is remarried, then the forgiven believer could pursue another relationship under the careful guidance and counsel of church leadership."),

	                      m("p","In cases where a believer obtained a divorce on unbiblical grounds and remarried, he or she is guilty of the sin of adultery until that sin is confessed (Mark 10:11-12). God does forgive that sin immediately when repentance takes place, and there is nothing in Scripture to indicate anything other than that. From that point on the believer should continue in his or her current marriage"),

	                      m("p","For a fuller treatment of divorce and remarriage, see The Biblical Position on Divorce & Remarriage from Gathering Church International’s Elders’ Perspective Series, from which this paper was adapted."),

	                      // m("p",""),
	                  ])

	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(32);

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

	                  m(".col l9 card-panel",[
	                      m("h1","Evangelizing Children"),

	                      m("p","For many believers, fulfilling Christ’s command to make disciples of all nations begins at home—with their children. In fact, few experiences bring greater joy to Christian parents than seeing their children come to faith in Christ."),

	                      m("p","The process of evangelizing one’s children, however, can be a daunting task. For many parents, the questions are as practical as they are disconcerting: How should I present the gospel to my children? What’s the best approach to take? How do I know if I’m doing it right? Pitfalls, both real and imagined, intimidate virtually every parent who contemplates this responsibility. On one hand, there’s the danger of leading children to think they are saved when they are not. On the other, there’s the risk of discouraging children who express a genuine desire to follow Christ."),

	                      m("p","How, then, should we evangelize our children? The answer to this question is not an easy one, but it begins with recognizing and avoiding some of the common pitfalls in child evangelism."),

	                      m("h5",[m("b","Common Pitfalls in Evangelizing Children")]),

	                      m("p","Oversimplifying the Gospel of Christ Because a child’s comprehension is less developed than an adult’s, the temptation for many parents is to oversimplify the message of the gospel when they evangelize their children. Sometimes this stems from canned or programmed approaches to child evangelism, which often abbreviate the gospel, downplay the demands of the gospel, or leave out key aspects of the gospel altogether."),

	                      m("p","Like adults, children must be able to understand the gospel clearly before they can be saved. This involves grasping concepts such as good and evil, sin and punishment, repentance and faith, God’s holiness and wrath against sin, the deity of Christ and His atonement for sin, and the resurrection and lordship of Christ. Certainly parents need to use terminology children can comprehend and be clear in communicating the message, but when Scripture talks about teaching children spiritual truth, the emphasis is on thoroughness (Deuteronomy 6:6–7). Oversimplification is a greater danger than giving too much detail. It is the truth—found in God’s Word—that saves, but that truth must be understood."),

	                      m("h5",[m("b","Coercing a Profession of Faith")]),

	                      m("p","Whether parents present the gospel in an oversimplified or thorough manner, many solicit some kind of active response to that message. It could be a show of hands in a group setting, a rote repetition of “the sinner’s prayer,” or almost anything that may be counted as a positive response. Children will almost always respond in whatever way parents ask—not at all guaranteeing real acts of faith in Christ."),

	                      m("p","Rather than getting their children to pray “the sinner’s prayer” or enticing them into a superficial response, parents must faithfully, patiently, and thoroughly teach them the gospel and diligently pray for their salvation, always bearing in mind that God is the One who saves. There is no need to pressure or coerce a confession from the mouth of a child, for genuine repentance will bring forth its own confession as the Lord opens the heart in response to the gospel. And as time goes by, it is never right to reinforce to the child that a childhood prayer is evidence of salvation."),

	                      m("p","Assuming the Reality of Regeneration The next pitfall is assuming with certainty that a child’s positive response to the gospel is fullfledged saving faith. The temptation here is to regard regeneration as a settled matter because of an outward indication that the child has believed. One cannot assume, however, that every profession of faith reflects a genuine work of God in the heart (Matt. 7:21–23), and this is particularly true of children."),

	                      m("p","Children often respond positively to the gospel for a host of reasons, many of which are unrelated to any awareness of sin or real understanding of spiritual truth. Many children, for example, profess faith because of peer pressure at church or a desire to please their parents."),

	                      m("p","In addition, Scripture indicates that children tend to be immature (1 Cor. 13:11; 14:20), naive (Prov. 1:4), foolish (Prov. 22:15), capricious (Isaiah 3:4), inconsistent and fickle (Matt. 11:16–17), and unstable and easily deceived (Eph. 4:14). Children often think they have understood the ramifications of a given commitment when they have not. Their judgment is shallow and their ability to see the implications of their decisions is very weak. Despite the best of intentions, they seldom have the ability to think far beyond today, nor do they perceive the extent to which their choices will affect tomorrow. This makes children more vulnerable to self-deception, and it makes it more difficult for a parent to discern God’s saving work in their hearts."),

	                      m("p","For this reason, only when a child’s stated convictions and beliefs are tested by circumstances in life as he matures do parents begin to learn more conclusively his spiritual direction. While many people do make a genuine commitment to Christ when young, many others—perhaps most—don’t come to an adequate understanding of the gospel until their teenage years. Others who profess Christ in childhood turn away. It is only appropriate, then, that parents move cautiously in affirming a child’s profession of faith and not be quick to take any show of commitment as decisive proof of conversion."),

	                      m("p","Assuring the Child of Salvation After becoming convinced their child is saved, many parents seek to give that child verbal assurance of his salvation. As a consequence, the church is filled with teenagers and adults whose hearts are devoid of real love for Christ, but who think they are genuine Christians because of something they did as children."),

	                      m("p","It is the role of the Holy Spirit—not the parent—to give assurance of salvation (Rom. 8:15–16). Too many people whose hearts are utterly cold to the things of the Lord believe they are going to heaven simply because they responded positively as children to an evangelistic invitation. Having “asked Jesus to come into their hearts,” they were then given a false assurance and taught never to examine themselves and never to entertain any doubt about their salvation. Parents should commend and rejoice in the evidence of real salvation in the lives of their children only when they know the child understands the gospel, believes it, and manifests the genuine evidence of true salvation—devotion to Christ, obedience to the Word, and love for others."),

	                      m("p","Rushing the Ordinance of Baptism A final pitfall for many parents is having the child baptized immediately after he professes faith. Although Scripture commands that believers be baptized (Matt. 28:19; Acts 2:38), it is best not to rush into the ordinance in the case of a child. As previously stated, it is extremely difficult to recognize genuine salvation in children. Rather than rushing them into baptism after an initial profession, then, it is wiser to take the ongoing opportunity to interact with them and wait for more significant evidence of lasting commitment. Even if a child can say enough in a testimony to make it reasonably clear that he understands and embraces the gospel, baptism should wait until he manifests evidence of regeneration that is independent of parental control."),

	                      m("p","Here at Gathering Church International, our general practice is to wait until a professing child has reached the age of twelve. Because baptism is seen as something clear and final, our primary concern is that when a younger child is baptized he tends to look to that experience as proof that he was saved. Therefore, in the case of an unregenerate child who is baptized—which is not uncommon in the church at large—baptism actually does him a disservice. It is better to wait until the reality to which baptism testifies can be more easily discerned."),

	                      m("p","Foundational Keys to Evangelizing Children It is not enough for parents simply to avoid these common pitfalls—they must also seek to put into practice the following keys to child evangelism."),

	                      m("p","Setting a Consistent Example of Godliness Evangelizing children consists not simply of verbalizing the gospel with one’s mouth, but also of exemplifying it in one’s life. As parents explain the truths of God’s Word, children have the unique opportunity to observe their lives up close and to see whether they seriously believe what they are teaching. When parents are faithful not only to proclaim, but also to live out the gospel, the impact is profound."),

	                      m("p","Because marriage is a picture of Christ’s relationship with the church (Eph. 5:22–33), the relationship between the parents as husband and wife is particularly significant. In fact, aside from the parents’ fundamental commitment to Christ, the single most important foundation for successful parenting is a healthy, Christcentered marriage. Setting a consistent example of godliness is indispensable."),

	                      m("p","Proclaiming the Complete Gospel of Christ The heart of evangelism is the gospel, “for it is the power of God for salvation to everyone who believes” (Rom. 1:16). If a child is to repent and believe in Christ, then, it will be through the proclamation of the message of the cross (1 Cor. 1:18–25; 2 Tim. 3:15; James 1:18; 1 Peter 1:23–25). Children will not be saved apart from the gospel."),

	                      m("p","For this reason, parents need to teach their children the law of God, teach them the gospel of divine grace, show them their need for a Savior, and point them to Jesus Christ as the only One who can save them. It is best to start from the beginning—God, creation, the fall, sin, salvation, and Christ in His life, death, and resurrection."),

	                      m("p","As they teach their children, parents must resist the temptation to downplay or soften the demands of the gospel and must proclaim the message in its fullness. The need to surrender to the lordship of Christ, for example, is not too difficult for children to understand. Any child who is old enough to understand the basic gospel is also able by God’s grace to trust Him completely and respond with the purest, most sincere kind of repentance."),

	                      m("p","The key is to be clear and thorough. Parents more than anyone have ample time and opportunity to explain and illustrate gospel truths, to correct misunderstandings, and to clarify and review the most difficult aspects of the message. The wise parent will be faithful, patient, and persistent, being careful to look at every moment of the child’s life as a teaching opportunity (Deut. 6:6–7)."),

	                      m("p","One such teaching opportunity is found in the parents’ responsibility to discipline and correct their children when they are disobedient (Eph. 6:4). Rather than seeking simply to modify behavior, the wise parent will look at discipline as an opportunity to help his children become aware of their failure and inability to obey, and subsequently, their need for forgiveness in Christ. In this way, discipline and correction are used to bring children to a sober assessment of themselves as sinners and to lead to the cross of Christ where sinners can be forgiven."),

	                      m("p","As parents explain the gospel and exhort their children to respond to the gospel, it is best to avoid an emphasis on external actions, such as praying “the sinner’s prayer.” There is an urgency inherent in the gospel message itself—and it is right for parents to impress that urgency on the child’s heart—but the focus should be kept on the internal response Scripture calls for from sinners: repentance from sin and faith in Christ. As parents diligently teach the gospel and take opportunities each day to instruct their children in the truth of God’s Word, they can begin to look for signs that their children have indeed repented and believed."),



	                      m("h5",[m("b","Understanding the Biblical Evidences of Salvation")]),

	                      m("p","The evidence that someone has genuinely repented of his sin and believed in Christ is the same in a child as it is in an adult—spiritual transformation. According to Scripture, true believers follow Christ (John 10:27), confess their sins (1 John 1:9), love their brothers (1 John 3:14), obey God’s commandments (1 John 2:3; John 15:14), do the will of God (Matt. 12:50), abide in God’s Word (John 8:31), keep God’s Word (John 17:6), and do good works (Eph. 2:10)."),

	                      m("p","Encouraging Possible Signs of Conversion Because of the immaturity and fickleness of children, it is tempting for some parents to write off childlike expressions of faith as trivial, or even meaningless. In contrast, parents should encourage every sign of faith in their children and use the opportunity to teach them even more about Christ and the gospel. When a child expresses a desire to learn about Jesus, parents should feed that desire and encourage the child when they see possible signs of conversion."),

	                      m("p","Even if parents conclude it’s too early to regard their child’s interest in Christ as mature faith, they must not deride a profession of faith as false, for it may be the seed from which mature faith will later emerge. Instead, the parent should continue to point that child toward Christ, teaching the truth of God’s Word with patience and diligence, and always looking to the One who is able to open hearts to respond to the gospel."),

	                      m("p","Trusting the Absolute Sovereignty of God The greatest need of children is to be born again. Regeneration, however, is not something that parents can do for them. Parents may pressure their children into a false profession, but genuine faith and repentance can only be granted by God who regenerates the heart. Put simply, the new birth is the work of the Holy Spirit and Him alone (John 3:8)."),

	                      m("p","The salvation of children, then, cannot be produced by the faithfulness or diligence of parents, but only by the sovereign work of God Himself. Such a realization should bring comfort to parents. In addition, it should motivate them to bathe their evangelistic efforts in prayer to the One who does His work where they cannot—in the child’s heart."),

	                      m("p","Parts of this article were adapted from John MacArthur, What the Bible Says About Parenting (Nashville: W Publishing Group, 2000); John MacArthur, The Gospel According to the Apostles (Nashville: Word Publishing, 2000); Dennis Gundersen, Your Child’s Profession of Faith (Amityville, N.Y.: Calvary Press, 1994); and Tedd Tripp, Shepherding a Child’s Heart (Wapwallopen, Penn.: Shepherd Press, 1995). For a fuller treatment of child evangelism, consult these resources."),


	                  ])

	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var sidebar = __webpack_require__(32);

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
	                    m("h1","The Role of Women"),

	                    m("p","Although women have traditionally fulfilled supportive roles in serving the church and gained their greatest joy and sense of accomplishment from being wives and mothers, the feminist movement has successfully influenced many women to abandon these divinely ordained roles. Unfortunately, this movement has made headway even in the church, creating chaos and confusion regarding the role of women both in ministry and in the home. Only in Scripture can God’s intended design for women be found."),

	                    m("h5","The Old Testament and Women"),

	                    m("p","In the creation account of Genesis 1, God’s first word on the subject of men and women is that they were equally created in the image of God (v. 27). Neither received more of the image of God than the other. So the Bible begins with the equality of the sexes. As persons, as spiritual beings standing before God, men and women are absolutely equal."),

	                    m("p","Despite this equality, there is in Genesis 2 a more detailed account of the creation of the two human beings that reveals differences in their God-given functions and responsibilities. God did not create the man and the woman at the same time, but rather He created Adam first and Eve later for the specific purpose of being Adam’s helper. Eve was equal to Adam, but she was given the role and duty of submitting to him. Although the word “helper” carries very positive connotations—even being used of God Himself as the helper of Israel (Deut. 33:7; Ps. 33:20)—it still describes someone in a relationship of service to another. The responsibility of wives to submit to their husbands, then, was part of the plan from creation, even before the curse. The first books of the Bible establish both the equality of men and women and also the support role of the wife (see Exod. 21:15, 17, 28–31; Num. 5:19–20, 29; 6:2; 30:1–16)."),

	                    m("p","Adam and Eve’s disobedience to God’s command resulted in certain consequences (Gen. 3:16–19). For the woman, God pronounced a curse that included multiplied pain in childbirth and tension in the authority-submission relationship of husband and wife. Genesis 3:16 says the woman’s “desire” will be for her husband but he shall “rule” over her. In Genesis 4:7 the author uses the same word “desire” to mean “excessive control over.” Thus, the curse in Genesis 3:16 refers to a new desire on the part of the woman to exercise control over her husband—but he will in fact oppressively rule and exert authority over her. The result of the Fall on marriage through history has been an ongoing struggle between the sexes, with women seeking control and men seeking dominance."),

	                    m("p","Throughout the Old Testament, women were active in the religious life of Israel, but generally they were not leaders. Women like Deborah (Judges 4) were clearly the exception and not the rule. There was no woman with an ongoing prophetic ministry. No woman was a priest. No queen ever ruled Israel. No woman wrote an Old Testament (or New Testament) book. Isaiah 3:12 indicates that God allowed women to rule as part of His judgment on the sinning nation."),

	                    m("h5","Jesus and Women"),

	                    m("p","In the midst of the Greek, Roman, and Jewish cultures, which viewed women almost on the level of possessions, Jesus showed love and respect for women. Though Jewish rabbis did not teach women and the Jewish Talmud said it was better to burn the Torah than to teach it to a woman, Jesus never took the position that women, by their very nature, could not understand spiritual or theological truth. He not only included them in His audiences but also used illustrations and images that would be familiar to them (Matt. 13:33; 22:1–2; 24:41; Luke 15:8–10) and specifically applied His teaching to them (Matt. 10:34ff.). To the Samaritan woman at the well (John 4), He revealed that He was the Messiah and discussed with her topics such as eternal life and the nature of true worship. He also taught Mary and, when admonished by Martha, pointed out the priority of learning spiritual truth even over “womanly” responsibilities like serving guests in one’s home (Luke 10:38)."),

	                    m("p","Although men in Jesus’ day normally would not allow women to count change into their hands for fear of physical contact, Jesus touched women to heal them and allowed women to touch Him (Luke 13:10ff.; Mark 5:25ff.). Jesus even allowed a small group of women to travel with Him and His disciples (Luke 8:1–3), an unprecedented happening at that time. After His resurrection, Jesus appeared first to Mary Magdalene and sent her to announce His resurrection to the disciples (John 20:1–18), despite the fact that women were not allowed to be witnesses in Jewish courts because they were considered liars."),

	                    m("h5","The Epistles and Women"),

	                    m("p","In the Epistles, the two principles of equality and submission for women exist side by side. Galatians 3:28 points to the equality, indicating that the way of salvation is the same for both men and women and that they are members of equal standing in the body of Christ. It does not, however, eradicate all differences in responsibilities for men and women, for this passage does not cover every aspect of God’s design for male and female. In addition, there are many other passages that make distinctions between what God desires of men and what He desires of women, especially within family and within the church."),

	                    m("h5","The Family"),

	                    m("p","While Christian marriage is to involve mutual love and submission between two believers (Eph. 5:21), four passages in the New Testament expressly give to wives the responsibility to submit to their husbands (Eph. 5:22; Col. 3:18; Titus 2:5; 1 Pet. 3:1). This voluntary submission of one equal to another is an expression of love for God and a desire to follow His design as revealed in His Word. It is never pictured as demeaning or in any way diminishing the wife’s equality. Rather the husband is called to love his wife sacrificially as Christ loved the church (Eph. 5:25) and to serve as the leader in a relationship of two equals."),

	                    m("p","While husbands and fathers have been given the primary responsibility for the leadership of their children (Eph. 6:4; Col. 3:21; 1 Tim. 3:4–5), wives and mothers are urged to be “workers at home” (Titus 2:5), meaning managers of the household. Their home and their children are to be their priority, in contrast to the world’s emphasis today on careers and fulltime jobs for women outside the home."),

	                    m("h5","The Church"),

	                    m("p","From the very beginning, women fulfilled a vital role in the Christian church (Acts 1:12–14; 9:36–42; 16:13–15; 17:1–4, 10–12; 18:1–2, 18, 24–28; Rom. 16; 1 Cor. 16:19; 2 Tim. 1:5; 4:19), but not one of leadership. The apostles were all men; the chief missionary activity was done by men; the writing of the New Testament was the work of men; and leadership in the churches was entrusted to men."),

	                    m("p","Although the Apostle Paul respected women and worked side by side with them for the furtherance of the gospel (Rom. 16; Phil. 4:3), he appointed no female elders or pastors. In his letters, he urged that men were to be the leaders in the church and that women were not to teach or exercise authority over men (1 Tim. 2:12). Therefore, although women are spiritual equals with men and the ministry of women is essential to the body of Christ, women are excluded from leadership over men in the church."),

	                    m("p","Men and women stand as equals before God, both bearing the image of God Himself. However, without making one inferior to the other, God calls upon both men and women to fulfill the roles and responsibilities specifically designed for them, a pattern that can be seen even in the Godhead (1 Cor. 11:3). In fulfilling the divinely given roles taught in the New Testament, women are able to realize their full potential because they are following the plan of their own Creator and Designer. Only in obedience to Him and His design will women truly be able, in the fullest sense, to give glory to God."),

	                  ])

	                ]),
	                m(footer)
	            ]
	        }
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(43)


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

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m(".card hoverable",[
	      m("a",{
	        href:args.cardLink,
	        config:m.route
	      },[
	          m(".card-image waves-effect waves-block waves-light",[
	            m("img",{
	              class:"activator responsive-img valign",
	              src:args.url
	            })
	          ]),

	          args.text ? m(".card-content",[
	            m("span",{class:"card-title activator grey-text text-darken-4"},args.text)
	          ]) : m("span")

	      ]),



	    ])
	  }
	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var MinistryBody = __webpack_require__(45)

	var Config = {
	  head:"Teeneez Ministry",
	  videoUrl:"//www.youtube.com/embed/ZIu_0cg8B6o",
	  cardPicUrl:"/build/assets/img/event21/teneez.jpg",
	  Objective:"To  reach and train children in the way of christ( Proverbs 22:6), and  equip  them with the word",
	  // Verses:[
	  //   {header:"Deutronomy 6:6-9 ",content:"making them models of a transformed society."}
	  // ],
	  // Statement:"Children’s Ministries at Gathering Church exists to encourage Children to worship our Savior and Lord Jesus Christ through the study and application of Scripture and the deepening of relationships with other Children for fellowship and accountability.A new season of ministry just began, and we invite you to be a part of one of the many mens's studies available. As you review the list of opportunities below, you'll see that whatever your circumstances, whether you are single or married, in every season of life, there is a spiritual home and sweet fellowship here for you.For information about any of these ministries, please contact the mens's Ministries Thanks",
	  leaders:[
	    {name:"Pst Martin",position:"Senior Pastor", message:" ",picUrl:"/build/assets/img/icons/worship.jpg"}
	  ]
	  // regularMeetings:[
	  //   {name:"mens Prayer",time:"3.00am",occurencePeriod:"every 2 weeks",picUrl:"/build/assets/img/icons/worship.jpg"}
	  // ]
	}

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m(".body",[
	                  m(MinistryBody,{
	                    ministryConfig:Config
	                  })
	                ]),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var infocard = __webpack_require__(43)
	var sidebarItem = __webpack_require__(46);
	var links = [
	  {text:"Pillars Ministry",url:"/ministries/pillars"},
	  {text:"Teeneez Ministry",url:"/ministries/teneez"},
	  {text:"Ladies Ministry",url:"/ministries/wemen"},
		{text:"Children Ministry",url:"/ministries/children"},
		{text:"Home-Cells Ministry",url:"/ministries/home-cells"},
		{text:"Youth Ministry",url:"/ministries/youth"},

	]

	module.exports = {
		view:function(ctrl,args){
				// console.log(args.ministryConfig)
			    return m(".container",[
	                    m("br"),
	                    // m(".divider"),

	                    // m("h3",{class:"center"},args.ministryConfig.head),

	                    // m(".divider"),
	                    m(".row",[
												m(".col l2 s12",[
														m("ul",{class:"section table-of-contents"},[
											            links.map(function(link){
											              return m(sidebarItem,{
											                text:link.text,
											                link:link.url
											              })
											            })
											      ]),
												]),
	                      m(".col l8",[
	                        // top pic and video promo
	                        m(".row center",[
	                          m(".col l7",[
	                            m(infocard,{
	                              url:args.ministryConfig.cardPicUrl,
	                            })
	                          ]),
	                          m(".col l5",[
	                            m("br"),
	                            m(".video-container",[
	                              m("iframe",{
	                                width:"853",
	                                height:"480",
	                                src:args.ministryConfig.videoUrl,
	                                frameborder:"0",
	                                allowfullscreen:true
	                              })
	                            ])
	                          ]),
	                        ]),

	                        m(".row",[
	                          m("div",args.ministryConfig.Statement),
	                          m("br"),
	                          args.ministryConfig.Objective ?
	                                                          m("p",[

	                                                                m("h6",[
	                                                                    m("b","OBJECTIVE :"),
	                                                                    m("i",args.ministryConfig.Objective)
	                                                                ]),

	                                                          ])
	                                                          :
	                                                      m("span"," "),


	                        args.ministryConfig.Verses ?
	                          args.ministryConfig.Verses.map(function(Verse){
	                            return m("p",[
	                              m("b",Verse.header),
	                              m("span",Verse.content)
	                            ])
	                          }) : m("span"),

													args.ministryConfig.Strategies ? m("h5",{class:"center"},"Strategies to achieve the above objective:") : m("span"),

													args.ministryConfig.Strategies ?

														args.ministryConfig.Strategies.map(function(strategy){ //m("li",strategy.head)
															return m("span",[
																m("li",strategy.head),
																strategy.bullets ?
																	m("ol",[
																		strategy.bullets.map(function(bullet){
																			return m("li",bullet)
																		})
																	])
																: m("span"),
															])
														})
													: m("span")


	                        ])


	                      ]),

						            //sidebar
	                      m(".col l2 s12",[
	                        m("b","Ministry Leadership"),
	                        m(".divider"),

	                        m("ul",{class:"collection"},[
	                          args.ministryConfig.leaders ?
	  	                        args.ministryConfig.leaders.map(function(leader){
	  	                        	return m("li",{class:"collection-item avatar"},[
	  		                            m("img",{
	  		                              src:"/build/assets/img/icons/worship.jpg",
	  		                              class:"responsive-img circle"
	  		                            }),
	  		                            m("span",{class:"title"},leader.name),
	  		                            m("p",leader.position),
	  		                            m("p",leader.message)
	  		                          ])
	  	                        })
	                          :m("span","no leaders have been selected currently fro this ministry")

	                        ]),

	                        //leaders pictures
	                        m(".divider"),
	                        m("b","Regular meetings"),
	                        m(".divider"),

	                        m("ul",{class:"collection 12"},[
	                         args.ministryConfig.regularMeetings ?
		                        args.ministryConfig.regularMeetings.map(function(meeting){
		                            return m("li",{class:"collection-item avatar"},[
			                            m("img",{
			                              src:meeting.picUrl,
			                              class:"responsive-img circle"
			                            }),
			                            m("p",{class:"title"},meeting.name,[
			                              m("a",{class:"secondary-content"},meeting.time)
			                            ]),
			                            m("p",meeting.occurencePeriod  + (meeting.where ? + " - " + meeting.where : " ")),
			                        ])
			                    })
	                          : m("span","No meetings have been scheduled for the " + args.ministryConfig.head )
	                        ])


	                      ])
	                    ])
	                  ])
		}
	}


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("li",[
	        m("a",{
	          class:(args.link === m.route() ? "active" : " "),
	          href:args.link,
	          config:m.route
	        },args.text)
	      ])
	  }
	}


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var MinistryBody = __webpack_require__(45)

	var Config = {
	  head:"Home-Cells Ministry",
	  videoUrl:"//www.youtube.com/embed/ZIu_0cg8B6o",
	  cardPicUrl:"/build/assets/img/icons/worship.jpg",
	  Objective:"To mobolize church members for home fellowship, equip them with the word and engage them in caring, winning, training and sending lay persons for Jesus Christ ",
	  Strategies:[
	    {head:"Capacity building"},
	    {head:"Information management"},
	    {head:"Wining , build ,care."}
	  ],
	  // Verses:[
	  //   {header:"Deutronomy 6:6-9 ",content:"making them models of a transformed society."}
	  // ],
	  // Statement:"Children’s Ministries at Gathering Church exists to encourage Children to worship our Savior and Lord Jesus Christ through the study and application of Scripture and the deepening of relationships with other Children for fellowship and accountability.A new season of ministry just began, and we invite you to be a part of one of the many mens's studies available. As you review the list of opportunities below, you'll see that whatever your circumstances, whether you are single or married, in every season of life, there is a spiritual home and sweet fellowship here for you.For information about any of these ministries, please contact the mens's Ministries Thanks",
	  leaders:[
	    {name:"Pst Martin",position:"Senior Pastor", message:" ",picUrl:"/build/assets/img/icons/worship.jpg"}
	  ]
	  // regularMeetings:[
	  //   {name:"mens Prayer",time:"3.00am",occurencePeriod:"every 2 weeks",picUrl:"/build/assets/img/icons/worship.jpg"}
	  // ]
	}

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m(".body",[
	                  m(MinistryBody,{
	                    ministryConfig:Config
	                  })
	                ]),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var MinistryBody = __webpack_require__(45)

	var Config = {
	  head:"Childrens Ministry",
	  videoUrl:"//www.youtube.com/embed/ZIu_0cg8B6o",
	  cardPicUrl:"/build/assets/img/event21/children.jpg",
	  // Objective:"To  reach and train children in the way of christ( Proverbs 22:6), and  equip  them with the word",
	  Strategies:[
	    {
	      head:"Reaching out and Follow-up for Christ",
	      bullets:[
	        "Creation of take home papers where parents sign an access progress of their children in church.",
	        "Giving the children a snack after class to ensure that they remain consistent in attendance",
	        "Making the annual VBS free and subsidizing the camp fee to a small affordable amount."
	      ]
	    },
	    {
	      head:"Spiritual growth",
	      bullets:[
	        "Vigorous publicity of the VBS and the camp to ensure that children come from far and wide.",
	        "Creation of memory verse stickers where children can go and stick them in the different areas of their homes."
	      ]
	    },
	    {
	      head:"Resource mobilization",
	      bullets:[
	        "Maximum utilization of children week to raise funds.",
	        "Encourage children to be faithful in tithing and giving."
	      ]
	    },
	    {
	      head:"Capacity building",
	      bullets:[
	        "Capacity building of the teachers and volunteers to ensure delivery.",
	        "To  set up and equip Children library",
	        "Formal training for teachers.",
	        "Train adults on children evangelism."
	      ]
	    }

	  ],

	  // Verses:[
	  //   {header:"Deutronomy 6:6-9 ",content:"making them models of a transformed society."}
	  // ],
	  // Statement:"Children’s Ministries at Gathering Church exists to encourage Children to worship our Savior and Lord Jesus Christ through the study and application of Scripture and the deepening of relationships with other Children for fellowship and accountability.A new season of ministry just began, and we invite you to be a part of one of the many mens's studies available. As you review the list of opportunities below, you'll see that whatever your circumstances, whether you are single or married, in every season of life, there is a spiritual home and sweet fellowship here for you.For information about any of these ministries, please contact the mens's Ministries Thanks",
	  leaders:[
	    {name:"Pst Martin",position:"Senior Pastor", message:" ",picUrl:"/build/assets/img/icons/worship.jpg"}
	  ]
	  // regularMeetings:[
	  //   {name:"mens Prayer",time:"3.00am",occurencePeriod:"every 2 weeks",picUrl:"/build/assets/img/icons/worship.jpg"}
	  // ]
	}

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m(".body",[
	                  m(MinistryBody,{
	                    ministryConfig:Config
	                  })
	                ]),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var MinistryBody = __webpack_require__(45)

	var Config = {
	  head:"Ladies Ministry",
	  videoUrl:"//www.youtube.com/embed/ZIu_0cg8B6o",
	  cardPicUrl:"/build/assets/img/event21/ladies.jpg",
	  Objective:"To empower and equip women with the gospel of Jesus Christ, to transform the community for better lives and build their capacity for self-sustainability.",

	  Strategies:[
	    {head:"Capacity building to empower women to exploit their full God given potential preaching Christ, caring for their families and communities"},

	    {head:"Missions- To reach to the unsaved, needy, and destitute and the neglected and rejected with the gospel and love of Christ."},

	    {
	      head:"Poverty alleviation by implementing integrated projects such as:",
	      bullets:['Promote health','Promote income generating activities &  resource mobilization','Promote education']
	    }

	  ],

	  // Verses:[
	  //   {header:"Deutronomy 6:6-9 ",content:"making them models of a transformed society."}
	  // ],
	  // Statement:"Children’s Ministries at Gathering Church exists to encourage Children to worship our Savior and Lord Jesus Christ through the study and application of Scripture and the deepening of relationships with other Children for fellowship and accountability.A new season of ministry just began, and we invite you to be a part of one of the many mens's studies available. As you review the list of opportunities below, you'll see that whatever your circumstances, whether you are single or married, in every season of life, there is a spiritual home and sweet fellowship here for you.For information about any of these ministries, please contact the mens's Ministries Thanks",
	  leaders:[
	    {name:"Pst Martin",position:"Senior Pastor", message:" ",picUrl:"/build/assets/img/icons/worship.jpg"}
	  ]
	  // regularMeetings:[
	  //   {name:"mens Prayer",time:"3.00am",occurencePeriod:"every 2 weeks",picUrl:"/build/assets/img/icons/worship.jpg"}
	  // ]
	}

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m(".body",[
	                  m(MinistryBody,{
	                    ministryConfig:Config
	                  })
	                ]),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var MinistryBody = __webpack_require__(45)

	var Config = {
	  head:"Youth Ministry",
	  videoUrl:"//www.youtube.com/embed/ZIu_0cg8B6o",
	  cardPicUrl:"/build/assets/img/event21/youth.jpg",
	  Objective:"To inform, conform and outreach to all the youths with word of God. Romans 12;1-3",
	  // Verses:[
	  //   {header:"Deutronomy 6:6-9 ",content:"making them models of a transformed society."}
	  // ],

	  Strategies:[
	    {head:"Evangelizing and reach out to the youths"},
	    {head:"Building  youths with word the God"},
	    {head:"Continuous capacity building using youth projects e.g.; concepts, hikes, community services camps and conference",}

	  ],
	  // Statement:"Children’s Ministries at Gathering Church exists to encourage Children to worship our Savior and Lord Jesus Christ through the study and application of Scripture and the deepening of relationships with other Children for fellowship and accountability.A new season of ministry just began, and we invite you to be a part of one of the many mens's studies available. As you review the list of opportunities below, you'll see that whatever your circumstances, whether you are single or married, in every season of life, there is a spiritual home and sweet fellowship here for you.For information about any of these ministries, please contact the mens's Ministries Thanks",
	  leaders:[
	    {name:"Pst Martin",position:"Senior Pastor", message:" ",picUrl:"/build/assets/img/icons/worship.jpg"}
	  ]
	}

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m(".body",[
	                  m(MinistryBody,{
	                    ministryConfig:Config
	                  })
	                ]),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var MinistryBody = __webpack_require__(45)

	var Config = {
	  head:"Pillars Ministry",
	  videoUrl:"//www.youtube.com/embed/ZIu_0cg8B6o",
	  cardPicUrl:"/build/assets/img/event21/pillars.jpg",
	  // Objective:"To  reach and train Men in the way of christ( Proverbs 22:6), and  equip  them with the word",
	  // Verses:[
	  //   {header:"Deutronomy 6:6-9 ",content:"making them models of a transformed society."}
	  // ],
	  Statement:"Men’s Ministries at Gathering Church exists to encourage Men to worship our Savior and Lord Jesus Christ through the study and application of Scripture and the deepening of relationships with other Men for fellowship and accountability.A new season of ministry just began, and we invite you to be a part of one of the many mens's studies available. As you review the list of opportunities below, you'll see that whatever your circumstances, whether you are single or married, in every season of life, there is a spiritual home and sweet fellowship here for you.For information about any of these ministries, please contact the mens's Ministries Thanks",
	  leaders:[
	    {name:"Pst Martin",position:"Senior Pastor", message:" ",picUrl:"/build/assets/img/icons/worship.jpg"},
	  ]
	}

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m(".body",[
	                  m(MinistryBody,{
	                    ministryConfig:Config
	                  })
	                ]),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".card-panel",[
	                  m("h1","online church")
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var responceForm = __webpack_require__(54);

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m(responceForm,{
	                  header:"Complaint"
	                }),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(55);
	var input = __webpack_require__(56);
	// var url = "http://localhost:3000"

	var event = {
	  schema:{
	    sendermail:m.prop(""),
	    location:m.prop(""),
	    sendate:m.prop(""),
	    message:m.prop(""),
	    readstatus:m.prop("")
	  },
	  vm:{
	    sending:m.prop(false)
	  }
	}

	module.exports = {
	  controller:function(){
	    //getting the data
	    var data =  m.request({ method:"GET", url:url + "/messages", background: true, initialValue: [] })
	    data.then(m.redraw) //redraw to render the data gotten from the server
	    return {
	      churches:data,
	      postChurch:function(type){
	      	var data = {
	          sendermail:event.schema.sendermail(),
	          location:event.schema.location(),
	          sendate:new Date(),
	          message:event.schema.message(),
	          type:type
	        }
	        m.request({method:"POST",url:url+"/messages",data:data}).then(function(){ m.route( m.route() ) })
	      },
	      deleteAnEvent:function(id){
	        m.request({method:"POST",url:url+"/messagesDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
	      },
	      event:event.schema,
	      vm:event.vm
	    }
	  },
	  view:function(ctrl,args){
	    return m(".events form",[
	      m("h1",{class:"center"},"Leave us a " + args.header),
	      m("form",{
	        class:"card-panel",
	        onsubmit:function(e){
	          ctrl.postChurch(args.header)
	          e.preventDefault();
	        }
	      },[

	        m(".row",[
	          m(input,{
	            label:"Your Personal Email Or Phone Number",
	            type:"text",
	            value:ctrl.event.sendermail,
	            sizes:"col s12 l6"
	          }),

	          m(input,{
	            label:"Your location",
	            type:"text",
	            value:ctrl.event.location,
	            sizes:"col s12 l6"
	          }),

	          m(input,{
	            label:"Your " + args.header,
	            type:"textarea",
	            value:ctrl.event.message,
	            sizes:"col s12 l12"
	          }),

	        ]),

	        m("button",{class:"btn blue"},"send " + args.header)
	      ]),
	    ])
	  }
	}


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = {
	        view:function(ctrl,args){
	            return m("li",{
	              class:args.direction + " dropdown-button " + (m.route() === args.url ? "active" : ""),
	              "data-activates":args.dropId
	          },[
	                m("a",{
	                  href:args.url,
	                  config:m.route
	                },args.name,[
	                  (args.dropId ? m("i",{class:"mdi-navigation-arrow-drop-down right"})  : m("span"))
	                ])
	            ])
	        }
	    }


/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,attrs){
	    var textarea =  m("div",{class:"input-field validate  col " + attrs.sizes},[
	      attrs.icon ? m("i",{class:attrs.icon}) : m("span"),
	      m("textarea[required]",{
	        id:attrs.label,
	        name:attrs.label,
	        type:attrs.type,
	        class:"materialize-textarea",
	        "aria-required":"true",
	        oninput:m.withAttr("value",attrs.value)
	      }),
	      m("label",{for:attrs.label},attrs.label)
	    ]);

	    var input =  m("div",{class:"input-field col " + attrs.sizes + (attrs.required ? "validate" : " ")},[
	      attrs.icon ? m("i",{class:attrs.icon}) : m("span"),
	      m("input[required]",{
	        id:attrs.label,
	        name:attrs.label,
	        type:attrs.type,
	        "aria-required":"true",
	        oninput:m.withAttr("value",attrs.value)
	      }),
	      m("label",{for:attrs.label},attrs.label)
	    ]);

	    // return what is asked for
	    if(attrs.type === "textarea"){
	      return textarea
	    }else{
	      return input
	    }
	  }
	}


	// (m.route() === attrs.link.url ? 'active': '')


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var responceForm = __webpack_require__(54);

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m(responceForm,{
	                  header:"Complement"
	                }),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var responceForm = __webpack_require__(54);

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m(responceForm,{
	                  header:"Suggestion"
	                }),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m("h3",{class:"center"},"blog comming soon"),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m("h3",{class:"center"},"Sermon Archive comming soon"),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)

	module.exports = {
	        view:function(){
	            return [
	              m(topbar,{
	                fixed:true
	              }),
	                m("h3",{class:"center"},"gallery comming soon"),
	                m(footer)
	            ]
	        }
	  }


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(43)


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
	                      m("h3","Fellowship")
	                    ]),

	                    m(".col s12 l3",[
	                      m(infocard,{
	                         text:"Children Fellowship",
	                         url:"http://graceinbuckeye.com/wp-content/uploads/childrens-ministry.jpg"
	                        })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Youth Fellowship",
	                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSok6mZbuzGCUwnzJF9H-pLDYameDi6CRGuLbyBnFzCqXRbvT6K"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Mens Fellowship",
	                        url:"http://www.rccgcityofjoy.org/images/men.jpg"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Ladies Fellowship",
	                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8LbluqFescxCvH-RE8gUXQFFiIAztAyfIsB41IlU8cNsYRI8"
	                       })
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(43)


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


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(43)


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


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var login = __webpack_require__(66)


	module.exports = {
	        view:function(ctrl){
	            return m(".app",[
	              m(login,{
	                backgroundColor:"blue",
	                holderPic:"/build/assets/img/orgface/gathering_logo.png",
	                btnColor:"orange",

	                headerText:"Online Church Login",
	                registerLink:"/onlineChurch/register",
	                forgotPasswordLink: "/onlineChurch/inputPassword",
	                passwordLink:"/onlineChurch/inputPassword"
	              }),
	            ])
	        }
	    }


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var input = __webpack_require__(56)
	var JD = __webpack_require__(10);


	/*
	*since this component is shered acros all apps. it has no attrs of its own and hence all should be passed at runtime
	*
	*im using one backend, so therez no need to keep making links for where to send the login req, but that is possible
	*
	*
	*Args supported are :
	*args.backgroundColor
	*args.holderPic
	*args.btnColor
	*
	*/

	module.exports = {
	        controller:function(args){
	    			return {
	            // all related to a sinle collections here
	    				user:{
	    					name:"user",
	    					schema:{
	    						identifier:m.prop(""),
	    					},
	              vm:{
	                sending:m.prop(false),
	                error:m.prop(false),
	                errorMessage:m.prop(""),
	                loggedIn:m.prop(false)
	              },
	    					mutate:function(MutationType,success,err){
	                // console.log(args.domain);
	                //null the secont identifier arg if you dont want it to be included
	                JD.sendQuery(this,MutationType,success,err,null,args.domain)
	    					}
	    				},

	            //other controller functions here
	            onunload: function() {
	                $( "body" ).removeClass(args.backgroundColor + " centered" );
	                $( "html" ).removeClass( "centered" );
	            }

	    			}

	    		},

	        view:function(ctrl,args){
	            return m(".login",[
	                m(".app row",{
	                  id:"login-page",
	                  config:function(){
	                    $( "body" ).addClass(args.backgroundColor + " centered" );
	                    $( "html" ).addClass("centered" );
	                  }
	                },[
	                    m(".col s12 z-depth-5 hoverable card-panel",[
	                      m("form",{
	                        class:"login-form",
	                        onsubmit:function(event){
	                          //remove any errors that were previously shown
	                          ctrl.user.vm.error(false)

	                          //show any loading buttons
	                          ctrl.user.vm.sending(true)

	                          //wait 1 millisecond for ui to update..that owuldnt hurt perf ;-)
	                          setTimeout(function(){
	                            m.startComputation(); //tell mithril to pause
	                            ctrl.user.mutate("checkIdentifier",function(res){
	                              m.endComputation();
	                              console.log(res)
	                              m.route(args.passwordLink + "/" + ctrl.user.schema.identifier());
	                            },function(err){
	                              console.log(err.data);
	                              //show the "error panel"
	                              ctrl.user.vm.error(true)

	                              ctrl.user.vm.sending(false)
	                              //display the error message from the server
	                              ctrl.user.vm.errorMessage(err.data)
	                              m.endComputation();
	                            })
	                          },1)

	              						event.preventDefault()
	              					}
	                      },[
	                        // logo on top
	                        m(".row",[
	                          m(".input-field col s12 l12 center",[
	                            m("img",{src:args.holderPic, class:"responsive-img valign profile-image-login"}),
	                            (args.headerText ? m("p",{class:"center login-form-text"},args.headerText) : m("span")),
	                          ])
	                        ]),

	                        // input
	                        m(".row margin",[
	                          m(input,{
	                            value: ctrl.user.schema.identifier,
	                            label:"Your Registered Email",
	                            type:"email",
	                            sizes:"s12 m12 l12",
	                            icon:"mdi-social-person-outline prefix",
	                            oninput:function(){
	                              console.log("i just changed");
	                            }
	                          })
	                        ]),

	                        // message area
	                        m(".row",[
	                          m(".input-field col s12 m12 l12",[
	                            m("p",{class:"margin medium-small red-text"},[
	                              (ctrl.user.vm.error() ? m("h6",{class:"center"},ctrl.user.vm.errorMessage()) : m("span")),
	                            ])
	                          ]),

	                          //chenging button true false (componentize)------------------------
	                          ctrl.user.vm.sending() ?

	                            m(".input-field col s12",[
	                              m("button",{
	                                class: "btn-flat  waves-effect waves-light col s12 disabled"
	                              },"Sending...")
	                            ])

	                            :

	                            m(".input-field col s12",[
	                              m("button",{
	                                class: ctrl.user.vm.error() ? "btn  waves-effect waves-light col s12 red" : "btn  waves-effect waves-light col s12 " + args.btnColor,
	                                type:"submit"
	                              },"Next")
	                            ])

	                            //----------------------------------------------------------------

	                        ]),

	                        // other links
	                        m(".row",[

	                          m(".input-field col s6 m6 l6",[
	                            m("p",{class:"margin medium-small l"},[
	                              m("a",{
	                                href:args.forgotPasswordLink,
	                                onclick:function(){
	                                  window.history.back()
	                                }
	                              },"Cancel")
	                            ])
	                          ]),

	                          m(".input-field col s6 m6 l6",[
	                            m("p",{class:"margin medium-small right"},[
	                              m("a",{
	                                href:args.registerLink,
	                                config:m.route
	                              },"Register Now")
	                            ])
	                          ])


	                        ])
	                      ])
	                    ])
	                ])
	            ])
	        }
	    }


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var register = __webpack_require__(68)


	module.exports = {
	        view:function(ctrl){
	            return m(".app",[
	              m(register,{
	                backgroundColor:"blue",
	                holderPic:"/build/assets/img/orgface/gathering_logo.png",
	                btnColor:"orange",

	                headerText:"Pastorial",
	                registerLink:"/onlineChurch/register",
	                verifyLink:"/onlineChurch/verifyCode"
	              }),
	            ])
	        }
	    }


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var input = __webpack_require__(56)
	var memberForm = __webpack_require__(69);
	module.exports = {
	        controller: function(args) {
	            return {
	                onunload: function() {
	                    $( "body" ).removeClass( args.backgroundColor + " centered" );
	                    $( "html" ).removeClass( "centered" );
	                }
	              }
	            },

	        view:function(ctrl,args){
	            return m(".login",[
	                m(".app row",{
	                  id:"login-page",
	                  config:function(){
	                    $( "body" ).addClass( args.backgroundColor + " centered" );
	                    $( "html" ).addClass( "centered" );
	                  }
	                },[
	                    m(".col s12 z-depth-5 hoverable card-panel",[
	                      m(memberForm)
	                    ])
	                ])
	            ])
	        }
	    }


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(55);
	var input = __webpack_require__(56);
	// var url = "http://localhost:3000"

	var event = {
	  schema:{
	    surname:m.prop(""),
	    othernames:m.prop(""),
	    dob:m.prop(""),
	    gender:m.prop(""),
	    nationality:m.prop(""),
	    id_Passport:m.prop(""),
	    maritalStatus:m.prop(""),
	    email:m.prop(""),
	    postalAddress:m.prop("")
	  },
	  vm:{
	    sending:m.prop(false)
	  }
	}

	module.exports = {
	  controller:function(){
	    //getting the data
	    var data =  m.request({ method:"GET", url:url + "/members", background: true, initialValue: [] })
	    data.then(m.redraw) //redraw to render the data gotten from the server
	    return {
	      churches:data,
	      postChurch:function(){
	      	var data = {
	          surname:event.schema.surname(),
	          othernames:event.schema.othernames(),
	          dob:event.schema.dob(),
	          gender:event.schema.gender(),
	          nationality:event.schema.nationality(),
	          id_Passport:event.schema.id_Passport(),
	          maritalStatus:event.schema.maritalStatus(),
	          email:event.schema.email(),
	          postalAddress:event.schema.postalAddress()
	        }
	        console.log(data);
	        m.request({method:"POST",url:url+"/members",data:data}).then(function(){ m.route( m.route() ) })
	      },
	      deleteAnEvent:function(id){
	        m.request({method:"POST",url:url+"/memberDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
	      },
	      event:event.schema,
	      vm:event.vm
	    }
	  },
	  view:function(ctrl,args){
	    return m(".app",[
	      m("form",{
	        class:"card-panelx",
	        onsubmit:function(e){
	          ctrl.postChurch()
	          e.preventDefault();
	        }
	      },[

	        m(".row",[
	          m(".row",[
	            m(".input-field col s12 l12 center",[
	              m("img",{src:"/picture", class:"responsive-img valign profile-image-login"}),
	              m("p",{class:"center login-form-text"},"Gathering registration Form"),
	            ])
	          ]),
	          // m("h5",{class:"header center"},"Registration Form"),
	          m(".row",[

	            m(input,{
	              label:"Your Surname",
	              type:"text",
	              value:ctrl.event.surname,
	              icon:"mdi-social-person-outline prefix",
	              sizes:"col s12 l6"
	            }),

	            m(input,{
	              label:"Other Names",
	              type:"text",
	              value:ctrl.event.othernames,
	              icon:"mdi-action-account-circle prefix",
	              sizes:"col s12 l6"
	            })
	          ]),

	        m(".row",[
	          m(input,{
	            label:"Date Of Birth",
	            type:"text",
	            value:ctrl.event.dob,
	            icon:"mdi-action-event prefix",
	            sizes:"col s12 l6"
	          }),

	          m(input,{
	            label:"Gender",
	            type:"text",
	            value:ctrl.event.gender,
	            icon:"mdi-action-picture-in-picture prefix",
	            sizes:"col s12 l6"
	          })
	        ]),

	        m(".row",[
	          m(input,{
	            label:"Nationality",
	            type:"text",
	            value:ctrl.event.nationality,
	            icon:"mdi-content-flag prefix",
	            sizes:"col s12 l6"
	          }),

	          m(input,{
	            label:"ID / Passport number",
	            type:"text",
	            value:ctrl.event.id_passport,
	            icon:"mdi-action-wallet-membership prefix",
	            sizes:"col s12 l6"
	          })
	        ]),

	        m(".row",[
	          m(input,{
	            label:"Email you use frequently",
	            type:"text",
	            value:ctrl.event.email,
	            icon:"mdi-communication-email prefix",
	            sizes:"col s12 l6"
	          }),

	          m(input,{
	            label:"Postal Address",
	            type:"text",
	            value:ctrl.event.postalAddress,
	            icon:"mdi-communication-quick-contacts-mail prefix",
	            sizes:"col s12 l6"
	          })
	        ]),

	        m("button",{class:"btn blue right"},"next")
	        ])
	      ])
	    ])
	  }
	}


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(9);
	var input = __webpack_require__(56);
	// var url = "http://localhost:3000"

	var event = {
	  schema:{
	    title:m.prop(""),
	    date:m.prop("")
	  },
	  vm:{
	    sending:m.prop(false)
	  }
	}

	module.exports = {
	  controller:function(){
	    //getting the data
	    var data =  m.request({ method:"GET", url:url + "/events", background: true, initialValue: [] })
	    data.then(m.redraw) //redraw to render the data gotten from the server
	    return {
	      churches:data,
	      postChurch:function(){
	      	var data = { title:event.schema.title(), date:event.schema.date() }
	        m.request({method:"POST",url:url+"/events",data:data}).then(function(){ m.route( m.route() ) })
	      },
	      deleteAnEvent:function(id){
	        m.request({method:"POST",url:url+"/eventDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
	      },
	      event:event.schema,
	      vm:event.vm
	    }
	  },
	  view:function(ctrl,args){
	    return m(".events form",[
	      m("form",{
	        class:"card-panel",
	        onsubmit:function(e){
	          ctrl.postChurch()
	          e.preventDefault();
	        }
	      },[

	        m(".row",[
	          m(input,{
	            label:"title",
	            type:"text",
	            value:ctrl.event.title,
	            sizes:"col s12 l6"
	          }),

	          m(input,{
	            label:"date",
	            type:"text",
	            value:ctrl.event.date,
	            sizes:"col s12 l6"
	          }),

	        ]),

	        m("button",{class:"btn red"},"create")
	      ]),

	      m("h5",{class:"header center"},"Church events"),
	      m("table",{class:"bordered responsive-table"},[
	        m("thead",[
	          m("tr",[
	            m("th","Event name"),
	            m("th","Event Date")
	          ])
	        ]),
	        m("tbody",[
	            ctrl.churches().map(function(item){
	              return m("tr",[
	                m("td",item.title),
	                m("td",item.date),
	                m("td",[
	                  m("button",{
	                    onclick:function(){
	                      ctrl.deleteAnEvent(item.id)
	                    }
	                  },"remove")
	                ])
	              ])
	            })

	        ])
	      ])
	    ])
	  }
	}


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(9);
	// var url = "http://localhost:3000"

	var event = {
	  schema:{
	    author:m.prop(""),
	    content:m.prop("")
	  },
	  vm:{
	    sending:m.prop(false)
	  }
	}

	module.exports = {
	  controller:function(){
	    //getting the data
	    var data =  m.request({ method:"GET", url:url + "/sermons", background: true, initialValue: [] })
	    data.then(m.redraw) //redraw to render the data gotten from the server
	    return {
	      churches:data,
	      postSermon:function(){
	      	var data = { author:event.schema.author(), content:event.schema.content() }
	        m.request({method:"POST",url:url+"/sermons",data:data}).then(function(){ m.route( m.route() ) })
	      },
	      deleteAnEvent:function(id){
	        m.request({method:"POST",url:url+"/sermonDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
	      },
	      event:event.schema,
	      vm:event.vm
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",[
	      // console.log(ctrl.data.responseJSON),
	      // m("h1","mithril"),
	      //navbar
	      //  m("div",[
	      //     // ctrl.sessionIdentifier(),
	      //     m("nav",{
	      //         class:"blue"
	      //     },[
	      //         m(".containerx",[
	      //             m(".nav-wrapper",[
	      //               m("ul",[
	      //                 m(navItem,{ name:"Upcoming events",url:"/onlineChurch/admin" }),
	      //                 m(navItem,{ name:"Sermons",url:"/onlineChurch/admin/sermons" }),
	      //                 m(navItem,{ name:"layout",url:"/onlineChurch/admin/layout" })
	      //               ])
	      //             ])
	      //           ])
	      //         ])
	      //       ]),
	      // m("a",{href:"/onlineChurch/admin",config:m.route},"upcomming events"),
	      // m("a",{href:"/onlineChurch/admin/sermons",config:m.route},"sermons"),
	      //navbar

	      // m("br"),
	      // // m("b","i am the admin Sermons editor"),
	      // console.log("draw"),
	      // m("form",{
	      //   onsubmit:function(e){
	      //     ctrl.postSermon()
	      //     e.preventDefault();
	      //   },
	      //   config:function(){
	      //     tinymce.init({
	      //       selector: '#mytextarea',
	      //       theme: 'modern',
	      //       setup : function(editor) {
	      //           editor.on('change', function(e) {
	      //             console.log(editor.getContent());
	      //             ctrl.event.content(editor.getContent())
	      //           });
	      //       },
	      //     });
	      //   }
	      // },[
	      //   // m("input",{
	      //   //   oninput: m.withAttr("value", ctrl.event.author),
	      //   //   placeholder:"author"
	      //   // }),
	      //   m("input",{
	      //     oninput: m.withAttr("value", ctrl.event.content),
	      //     id:"mytextarea",
	      //     placeholder:"sermon-text"
	      //   }),
	      //   m("button","create")
	      // ]),
	            ctrl.churches().map(function(item){
	              return m(".card-panel",[
	                m("span",m.trust(item.content)),
	                m("span",[
	                  m("button",{
	                    class:"btn red",
	                    onclick:function(){
	                      ctrl.deleteAnEvent(item.id)
	                    }
	                  },"remove")
	                ])
	              ])
	            }),

	      //make a create floating action button
	      // <div class="fixed-action-btn">
	      //   <a class="btn-floating btn-large red">
	      //     <i class="large mdi-editor-mode-edit"></i>
	      //   </a>
	      // </div>
	      m(".fixed-action-btn",[
	        m("a",{
	          href:"/onlineChurch/admin/newSermon",
	          class:"btn-floating btn-large red",
	          config:m.route
	        },[
	          m("i",{class:"mdi-editor-mode-edit"})
	        ])
	      ])
	    ])
	  }
	}


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(9);
	var input = __webpack_require__(56);

	// var url = "http://localhost:3000"

	var event = {
	  schema:{
	    title:m.prop(""),
	    snippet:m.prop(""),
	    author:m.prop(""),
	    content:m.prop("")
	  },
	  vm:{
	    sending:m.prop(false)
	  }
	}

	module.exports = {
	  controller:function(){
	    //getting the data
	    var data =  m.request({ method:"GET", url:url + "/sermons", background: true, initialValue: [] })
	    data.then(m.redraw) //redraw to render the data gotten from the server
	    return {
	      churches:data,
	      postSermon:function(){
	      	var data = {
	          title:event.schema.author(),
	          snippet:event.schema.author(),
	          author:event.schema.author(),
	          content:event.schema.content()
	        }
	        m.request({method:"POST",url:url+"/sermons",data:data}).then(function(){ m.route( m.route() ) })
	      },
	      deleteAnEvent:function(id){
	        m.request({method:"POST",url:url+"/sermonDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
	      },
	      event:event.schema,
	      vm:event.vm,
	      onunload: function() {
	        if(tinymce){
	          tinymce.remove("#mytextarea");
	        }
	      }
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",[
	      m("br"),
	      console.log("draw"),
	      m("form",{
	        class:"card-panel",
	        onsubmit:function(e){
	          ctrl.postSermon()
	          e.preventDefault();
	        },
	        config:function(){
	          if(tinymce){
	            tinymce.init({
	              selector: '#mytextarea',
	              theme: 'modern',
	              height : "400",
	              setup : function(editor) {
	                  editor.on('change', function(e) {
	                    console.log(editor.getContent());
	                    ctrl.event.content(editor.getContent())
	                  });
	              },
	            });
	          }else{
	            console.log("tiny mce is not loaded hence cannot be inistialized");
	          }
	        }
	      },[
	        m("h5",{class:"center"},"New Sermon"),

	        m(input,{
	          label:"Sermon title",
	          type:"text",
	          value:ctrl.event.title,
	          icon:"mdi-maps-rate-review prefix",
	          sizes:"col s12 l6"
	        }),

	        m(input,{
	          label:"Sermon snippet",
	          type:"textarea",
	          value:ctrl.event.snippet,
	          icon:"mdi-communication-stay-primary-landscape prefix",
	          sizes:"col s12 l6"
	        }),
	          m("textarea",{
	            oninput: m.withAttr("value", ctrl.event.content),
	            id:"mytextarea",
	            placeholder:"sermon-text"
	          }),
	          // m("br"),

	          // m("button",{
	          //
	          //   class:"btn red"
	          // },"create"),

	          m(".fixed-action-btn",[
	            m("a",{
	              type:"submit",
	              class:"btn-floating btn-large red",
	              onclick:function(){
	                ctrl.postSermon()
	              }
	            },[
	              m("i",{class:"mdi-content-save"})
	            ])
	          ])
	        ])


	      ])
	  }
	}


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(9);
	var input = __webpack_require__(56);
	// var url = "http://localhost:3000"

	var event = {
	  schema:{
	    sendermail:m.prop(""),
	    location:m.prop(""),
	    sendate:m.prop(""),
	    message:m.prop(""),
	    readstatus:m.prop("")
	  },
	  vm:{
	    sending:m.prop(false)
	  }
	}

	module.exports = {
	  controller:function(){
	    //getting the data
	    var data =  m.request({ method:"GET", url:url + "/messages", background: true, initialValue: [] })
	    data.then(m.redraw) //redraw to render the data gotten from the server
	    return {
	      churches:data,
	      postChurch:function(){
	      	var data = {
	          sendermail:event.schema.sendermail(),
	          location:event.schema.location(),
	          sendate:new Date(),
	          message:event.schema.message()
	        }
	        m.request({method:"POST",url:url+"/messages",data:data}).then(function(){ m.route( m.route() ) })
	      },
	      deleteAnEvent:function(id){
	        m.request({method:"POST",url:url+"/messagesDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
	      },
	      event:event.schema,
	      vm:event.vm
	    }
	  },
	  view:function(ctrl,args){
	    return m(".row",[
	      m("h5",{class:"center"},"Church messages sent from website"),

	            ctrl.churches().map(function(item){
	              return m(".card-panel",[
	                m(".col l6",[
	                  m("i","From "+item.sendermail)
	                ]),

	                m(".col l6",[
	                  m("i",{class:"right"},item.type + " (" + "Posted " + moment.duration(moment(item.sendate).diff(moment(new Date())),'milliseconds').humanize() + " ago"  + ")")
	                ]),

	                m(".col l12 card-panelx",[
	                  m(".divider"),
	                  m("p",m.trust(item.message)),
	                  // m(".divider"),
	                ]),

	                m("br"),

	                m(".row",[
	                  // m(".col l6",[
	                  //   // var birthday = moment(item.sendate);
	                  //   // var inputDate = moment(new Date);
	                  //   // var diff = birthday.diff(inputDate, 'days');
	                  //   m("i",{class:"left"},)
	                  // ]),


	                  // m("td",item.readstatus),

	                  m(".col l12",[
	                    m("a",{
	                      class:"btn-flat waves-effect waves-light right",
	                      onclick:function(){
	                        ctrl.deleteAnEvent(item.id)
	                      }
	                    },"delete message")
	                  ])
	                ])

	              ])
	            })

	    ])
	  }
	}


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(9);
	var input = __webpack_require__(56);
	// var url = "http://localhost:3000"

	var event = {
	  schema:{
	    surname:m.prop(""),
	    othernames:m.prop(""),
	    dob:m.prop(""),
	    gender:m.prop(""),
	    nationality:m.prop(""),
	    id_Passport:m.prop(""),
	    maritalStatus:m.prop(""),
	    email:m.prop(""),
	    postalAddress:m.prop("")
	  },
	  vm:{
	    sending:m.prop(false)
	  }
	}

	module.exports = {
	  controller:function(){
	    //getting the data
	    var data =  m.request({ method:"GET", url:url + "/members", background: true, initialValue: [] })
	    data.then(m.redraw) //redraw to render the data gotten from the server
	    return {
	      churches:data,
	      postChurch:function(){
	      	var data = {
	          surname:event.schema.surname(),
	          othernames:event.schema.othernames(),
	          dob:event.schema.dob(),
	          gender:event.schema.gender(),
	          nationality:event.schema.nationality(),
	          id_Passport:event.schema.id_Passport(),
	          maritalStatus:event.schema.maritalStatus(),
	          email:event.schema.email(),
	          postalAddress:event.schema.postalAddress()
	        }
	        console.log(data);
	        m.request({method:"POST",url:url+"/members",data:data}).then(function(){ m.route( m.route() ) })
	      },
	      deleteAnEvent:function(id){
	        m.request({method:"POST",url:url+"/memberDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
	      },
	      event:event.schema,
	      vm:event.vm
	    }
	  },
	  view:function(ctrl,args){
	    return m(".events form",[

	      m("h5",{class:"header center"},"Registered Church members"),
	      m("table",{class:"bordered responsive-table"},[
	        m("thead",[
	          m("tr",[
	            m("th","surname"),
	            m("th","othernames"),
	            m("th","dob"),
	            m("th","gender"),
	            m("th","nationality"),
	            m("th","id/passport"),
	            m("th","email"),
	            m("th","postalAddress")
	          ])
	        ]),
	        m("tbody",[
	            ctrl.churches().map(function(item){
	              return m("tr",[
	                m("td",item.surname),
	                m("td",item.othernames),
	                m("td",item.dob),
	                m("td",item.gender),
	                m("td",item.nationality),
	                m("td",item.id_passport),
	                m("td",item.email),
	                m("td",item.postalAddress),
	                m("td",[
	                  m("button",{
	                    onclick:function(){
	                      ctrl.deleteAnEvent(item.id)
	                    }
	                  },"remove")
	                ])
	              ])
	            })

	        ])
	      ])
	    ])
	  }
	}


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var forgot = __webpack_require__(76)


	module.exports = {
	        view:function(ctrl){
	            return m(".app",[
	              m(forgot,{
	                headerText:"Pastorial",
	                registerLink:"/login/register"
	              }),
	            ])
	        }
	    }


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var input = __webpack_require__(56)

	module.exports = {
	        controller: function() {
	            return {
	                onunload: function() {
	                    $( "body" ).removeClass( color + " centered" );
	                    $( "html" ).removeClass( "centered" );
	                }
	            }
	        },
	        view:function(ctrl,args){
	            return m(".login",[
	                m(".app row",{
	                  id:"login-page",
	                  config:function(){
	                    $( "body" ).addClass( color + " centered" );
	                    $( "html" ).addClass( "centered" );
	                  }
	                },[
	                    m(".col s12 z-depth-5 hoverable card-panel",[
	                      m("form",{
	                        class:"login-form"
	                      },[
	                        // logo on top
	                        m(".row",[
	                          m(".input-field col s12 l12 center",[
	                            m("h4", "Forgot your password?"),
	                            m("p",{class:"center"},"We will send you an email or sms code to confirm this is your account")

	                          ])
	                        ]),

	                        // input
	                        m(".row margin",[
	                          m(input,{
	                            value:"awesones",
	                            label:"Email or Phone Number",
	                            type:"text",
	                            sizes:"s12 m12 l12",
	                            icon:"mdi-hardware-phonelink prefix"
	                          })
	                        ]),

	                        // submit button
	                        m(".row",[
	                          m(".input-field col s12",[
	                            m("button",{class:"btn orange waves-effect waves-light col s12", type:"submit"},"submit")
	                          ])
	                        ]),

	                        // other links
	                        m(".row",[

	                          m(".input-field col s6 m6 l6",[
	                            m("p",{class:"margin medium-small"},[
	                              m("a",{
	                                onclick:function(){
	                                  window.history.back()
	                                }
	                              },"Cancel")
	                            ])
	                          ])
	                        ])
	                      ])
	                    ])
	                ])
	            ])
	        }
	    }



	// (m.route() === attrs.link.url ? 'active': '')


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var forgot = __webpack_require__(78)


	module.exports = {
	        view:function(ctrl){
	            return m(".app",[
	              m(forgot,{
	                backgroundColor:"blue",
	                holderPic:"/build/assets/img/orgface/gathering_logo.png",
	                btnColor:"orange",
	                
	                headerText:"Pastorial",
	                registerLink:"/login/register",
	                forgotPasswordLink: "/login/forgotPassword"
	              }),
	            ])
	        }
	    }


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var input = __webpack_require__(56)
	const JD = __webpack_require__(10);


	module.exports = {
	        controller:function(args){
	    			return {
	            // all related to a sinle collections here
	    				user:{
	    					name:"user",
	    					schema:{
	    						// username:m.route.param("identifier"),
	    						password:m.prop("")
	    					},
	              vm:{
	                sending:m.prop(false),
	                error:m.prop(false),
	                errorMessage:m.prop(""),
	                loggedIn:m.prop(false)
	              },
	    					mutate:function(MutationType,success,err,authIdentifier){
	                if(!JSON.parse(localStorage.getItem("GRIDsession"))){
	                    JD.sendQuery(this,MutationType,success,err,authIdentifier)
	                }else{
	                  console.log("you are already logged in,still sending though")
	                  JD.sendQuery(this,MutationType,success,err,authIdentifier)
	                }

	    					}
	    				},

	            //other controller functions here
	            onunload: function() {
	                $( "body" ).removeClass( args.backgroundColor + " centered" );
	                $( "html" ).removeClass( "centered" );
	            }

	    			}

	    		},

	        view:function(ctrl,args){
	            return m(".login",[
	                m(".app row",{
	                  id:"login-page",
	                  config:function(){
	                    $( "body" ).addClass( args.backgroundColor + " centered" );
	                    $( "html" ).addClass( "centered" );
	                  }
	                },[
	                    m(".col s12 z-depth-5 hoverable card-panel",[
	                      m("form",{
	                        class:"login-form",
	                        onsubmit:function(event){
	                          //remove any errors that were previously shown
	                          ctrl.user.vm.error(false)

	                          //show any loading buttons
	                          ctrl.user.vm.sending(true)


	                          setTimeout(function(){
	                            m.startComputation(); //tell mithril to pause
	                            ctrl.user.mutate("login",function(session){
	                              m.endComputation();
	                              console.log(session);


	                              //---------------------------------------------------------------
	                              //localstorage session store

	                              //store based on remember me, or keep logged in option

	                              //store the password in session key to storage
	                              if(typeof(Storage) !== "undefined") {
	                                // console.log(session);
	                                  localStorage.setItem("GRIDsession", JSON.stringify(session.data));

	                              } else {
	                                  // Sorry! No Web Storage support..
	                                  //attempt to store it in cookie
	                                  //if no cookie, store in app memory so that it expires with moving out of the app
	                              }
	                              //---------------------------------------------------------------

	                              m.route("/");
	                            },function(err){
	                              console.log(err);
	                              //show the "error panel"
	                              ctrl.user.vm.error(true)

	                              ctrl.user.vm.sending(false)
	                              //display the error message from the server
	                              ctrl.user.vm.errorMessage(err.data)
	                              m.endComputation();
	                            },m.route.param("identifier"))

	                          },1)

	              						event.preventDefault()
	              					}
	                      },[
	                        m(".row",[
	                          m(".input-field col s12 l12 center",[
	                            m("img",{src:args.holderPic, class:"responsive-img circle hoverable valign profile-image-login"}),
	                            m("p",{class:"center"},[
	                              m("b",m.route.param("identifier"))
	                            ])
	                          ])
	                        ]),



	                        // input
	                        m(".row margin",[
	                          m(input,{
	                            value: ctrl.user.schema.password,
	                            label:"Enter Password",
	                            type:"password",
	                            sizes:"s12 m12 l12",
	                            icon:"mdi-action-lock-outline prefix"
	                          })
	                        ]),



	                        // submit button
	                        m(".row",[
	                          m(".input-field col s12 m12 l12",[
	                            m("p",{class:"margin medium-small red-text"},[
	                              (ctrl.user.vm.error() ? m("h6",{class:"center"},ctrl.user.vm.errorMessage()) : m("span")),
	                            ])
	                          ]),

	                          ctrl.user.vm.sending() ?

	                            m(".input-field col s12",[
	                              m("button",{
	                                class: "btn-flat  waves-effect waves-light col s12 disabled"
	                              },"Sending...")
	                            ])

	                            :

	                            m(".input-field col s12",[
	                              m("button",{
	                                class: ctrl.user.vm.error() ? "btn  waves-effect waves-light col s12 red" : "btn  waves-effect waves-light col s12 " + args.btnColor,
	                                type:"submit"
	                              },"sign in")
	                            ]),

	                            // //bug with not being focussable
	                            // m(".row margin",[
	                            //   m(input,{
	                            //     value: ctrl.user.schema.keepLoggedIn,
	                            //     label:"Keep me logged in",
	                            //     type:"checkbox",
	                            //     sizes:"s12 m12 l12"
	                            //   })
	                            // ]),

	                            m(".input-field col s6 m6 l6",[
	                              m("p",{class:"margin medium-small"},[
	                                m("a",{
	                                  href:args.forgotPasswordLink,
	                                  onclick:function(){
	                                    window.history.back()
	                                  }
	                                },"Cancel")
	                              ])
	                            ]),

	                            m(".input-field col s6 m6 l6",[
	                              m("p",{class:"margin medium-small"},[
	                                m("a",{
	                                  href:args.forgotLink + m.route.param("identifier"),
	                                  config:m.route
	                                },"Forgot password ?")
	                              ])
	                            ])


	                        ]),

	                      ])
	                    ])
	                ])
	            ])
	        }
	    }



	// (m.route() === attrs.link.url ? 'active': '')


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var verify = __webpack_require__(80)


	module.exports = {
	        view:function(ctrl){
	            return m(".app",[
	              m(verify,{
	                headerText:"Pastorial",
	                registerLink:"/login/register"
	              }),
	            ])
	        }
	    }


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var input = __webpack_require__(56)
	var JD = __webpack_require__(10);

	module.exports = {
	        controller: function() {
	            return {
	                onunload: function() {
	                    $( "body" ).removeClass( color + " centered" );
	                    $( "html" ).removeClass( "centered" );
	                },
	                user:{
	          					url:apiUrl,
	          					name:"user",
	          					schema:{
	          						verifyCode:m.prop("")
	          					},
	                    vm:{
	                      sending:m.prop(false),
	                      error:m.prop(false),
	                      errorMessage:m.prop(""),
	                      loggedIn:m.prop(false)
	                    },
	                    mutate:function(MutationType,success,err,identifier){
	                      JD.sendQuery(this,MutationType,success,err,identifier)
	                    }

	                }
	            }
	        },
	        view:function(ctrl,args){
	            return m(".login",[
	                m(".app row",{
	                  id:"login-page",
	                  config:function(){
	                    $( "body" ).addClass( color + " centered" );
	                    $( "html" ).addClass( "centered" );
	                  }
	                },[
	                    m(".col s12 z-depth-5 hoverable card-panel",[
	                      m("form",{
	                        class:"login-form",
	                        onsubmit:function(event){
	                          //remove any errors that were previously shown
	                          ctrl.user.vm.error(false)

	                          //show any loading buttons
	                          ctrl.user.vm.sending(true)

	                          //wait 1 millisecond for ui to update..that owuldnt hurt perf ;-)

	                          setTimeout(function(){
	              						    // ctrl.user.mutate("register")
	                              console.log("sending")

	                              ctrl.user.mutate("verify",function(){
	                                console.log("the code was verified correct");
	                                m.route("/")
	                              },function(err){
	                                //show the "error panel"
	                                ctrl.user.vm.error(true)

	                                console.log("err");

	                                ctrl.user.vm.sending(false)
	                                //display the error message from the server
	                                ctrl.user.vm.errorMessage(err.data)
	                              },m.route.param("identifier"))

	                          },1)

	              						event.preventDefault()
	              					}
	                      },[
	                        // logo on top
	                        m(".row",[
	                          m(".input-field col s12 l12 center",[
	                            // m("h4", "Finally, Verify email belongs to you"),
	                            m("i",{class:"center"},"We sent you a code at ",[
	                              m("b",m.route.param("identifier")),
	                              m("i"," enter it here to complete the process")
	                            ])

	                          ])
	                        ]),

	                        // input
	                        m(".row margin",[
	                          m(input,{
	                            value:ctrl.user.schema.verifyCode,
	                            label:"Verification Code",
	                            type:"text",
	                            sizes:"s12 m12 l12",
	                            icon:"mdi-hardware-phonelink prefix"
	                          })
	                        ]),

	                        // message area
	                        m(".input-field col s12 m12 l12",[
	                          m("p",{class:"margin medium-small red-text"},[
	                            (ctrl.user.vm.error() ? m("h6",{class:"center"},ctrl.user.vm.errorMessage()) : m("span")),
	                          ])
	                        ]),

	                        //smart button
	                        m(".row",[
	                          //chenging button true false (componentize)------------------------
	                          ctrl.user.vm.sending() ?

	                            m(".input-field col s12",[
	                              m("button",{
	                                class: "btn  waves-effect waves-light col s12 grey"
	                              },"Sending...")
	                            ])

	                            :

	                            m(".input-field col s12",[
	                              m("button",{
	                                class: ctrl.user.vm.error() ? "btn  waves-effect waves-light col s12 red" : "btn  waves-effect waves-light col s12 orange",
	                                type:"submit"
	                              },"Submit")
	                            ]),

	                            //----------------------------------------------------------------


	                          m(".input-field col s12 m12 l12",[
	                            m("p",{class:"margin medium-small"},[
	                              m("a",{class:"margin medium-small"},[
	                                m("h6",{class:"center"},"I didnt recieve an email")
	                              ])
	                            ]),
	                          ])
	                        ]),

	                        // other links
	                        m(".row",[

	                          m(".input-field col s6 m6 l6",[
	                            m("p",{class:"margin medium-small"},[
	                              m("a",{
	                                href:"/",
	                                config:m.route
	                              },"skip")
	                            ]),
	                          ])
	                        ])
	                      ])
	                    ])
	                ])
	            ])
	        }
	    }



	// (m.route() === attrs.link.url ? 'active': '')


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(43)


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


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Offering")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","thanksgiving")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)

	module.exports = {
	        view:function(){


	            return [
	                // console.log(tokenize(queryString)),
	                console.log(root(tokenize(queryString))),
	                // console.log(queryString.match(/\S+/g)),
	                // console.log("i am parrrrsring"),
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","tithe")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	      }


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","loveoffering")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","firstfruits")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(7)


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
	                      m("h3","development")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// var input = require("../forminput")
	var input = __webpack_require__(56)

	var JD = __webpack_require__(10);

	var navItem = __webpack_require__(89)

	var church = {};
	module.exports = {

	        controller: function(args){

	            return {
	                church:{
	          					name:"church",
	          					schema:{
	                      //add what church to be added to
	                      id:m.prop(config.profile.institutionId),
	                      name:m.prop("")
	          					},
	                    vm:{
	                      sending:m.prop(false),
	                      error:m.prop(false),
	                      errorMessage:m.prop(""),
	                      loggedIn:m.prop(false)
	                    },
	                    mutate:function(MutationType,success,err){
	                      JD.sendQuery(this,MutationType,success,err)
	                    },
	                    data:m.prop(""),
	                    thing:function(){
	                      // console.log(this.mutate)
	                      m.startComputation();
	                       this.mutate("getAllChurches",function(res){
	                         // alert("success")
	                         console.log(res)
	                        //  ctrl.church.data(res)
	                         // console.log(ctrl.church.data())
	                         m.redrew
	                         m.endComputation();
	                       },function(err){
	                         alert(err)
	                         m.endComputation();
	                       })
	                    },
	                }
	              }
	            },

	        view:function(ctrl,args){
	          // ctrl.church.thing()
	             return m(".app",{
	               config:function(){
	                 function getdata(){
	                   m.startComputation();
	                   ctrl.church.mutate("getAllChurches",function(res){
	                     // alert("success")
	                     ctrl.church.data(res)
	                     console.log(res)
	                     m.redrew
	                     m.endComputation();
	                   },function(err){
	                     alert(err)
	                     m.endComputation();
	                   })
	                 }
	                 ctrl.church.data().data ? console.log("data exists") : getdata()

	               }
	             },[
	              //  add navbar here with gathering logo
	              m(".navbar-fixed",[
	                m("nav",{class:color},[
	                  m(".nav-wrapper",{
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
	                    }
	                  },[
	                    m("ul",[
	                      m(navItem,{ name:"Online Registration",url:"/onlineChurch/admin"}),
	                      m(navItem,{ name:"Feedback", dropId:"Feedback"}),
	                      m("ul",{ //dropdown list
	                        class:"dropdown-content",
	                        id:"Feedback"
	                      },[
	                        m(navItem,{ name:"Complements",url:"/AboutUs/whatWeTeach/thegospel"}),
	                        m(navItem,{ name:"Complaints",url:"/AboutUs/whatWeTeach/history"}),
	                        m(navItem,{ name:"Suggestions",url:"/AboutUs/whatWeTeach/leadership"})
	                      ]),

	                      m(navItem,{ name:"Sermons"}),
	                      m(navItem,{ name:"Upcomming Events"}),
	                      m(navItem,{ name:"Churches",url:"/mainAdmin/makeChurch"})
	                    ])
	                  ])
	                ])
	              ]),
	              //add sidebar where all links will go, simple links
	              //keep the data here, and other features will be added as we move on, but first this :-)
	              m("br"),
	              // m("h3",{class:"center"},"register new church"),
	              m("form",{
	                onsubmit:function(event){
	                  ctrl.church.mutate("createNewChurch",function(res){
	                    // alert("success")
	                    //----------------------------------------------
	                    //trigger another mutation to ger the data
	                    m.startComputation();
	                    ctrl.church.mutate("getAllChurches",function(res){
	                      // alert("success")
	                      ctrl.church.data(res)
	                      console.log(res)
	                      m.redrew
	                      m.endComputation();
	                    },function(err){
	                      alert(err)
	                      m.endComputation();
	                    })
	                    //---------------------------------
	                    m.redraw
	                    console.log(res)
	                    // event.preventDefault();
	                    m.endComputation();
	                  },function(err){
	                    alert(err)
	                    m.redraw
	                    // event.preventDefault();
	                    m.endComputation();
	                  })
	                  //prevent the refresh
	                  event.preventDefault();
	                }
	              },[
	                m(".row",[
	                  m(input,{
	                    value:ctrl.church.schema.name,
	                    label:"Name of the new church (One word,)",
	                    type:"text",
	                    sizes:"s12 m10 l10",
	                    icon:"mdi-social-person-outline prefix"
	                  }),
	                  m(".col l2",[
	                    m("button",{
	                      type:"submit",
	                      class:"btn large"
	                    },"submit")
	                  ])
	                ])



	              ]),
	              // m("h1",{class:"center"},"churches existing"),
	              m("table",{class:"centered"},[
	                m("thead",[
	                  m("tr",[
	                    m("th","id"),
	                    m("th","name"),
	                    m("th","admins"),
	                    m("th","congregation members")
	                    // m("th","pay status")
	                  ])
	                ]),
	                m("tbody",[
	                  // console.log(ctrl.church.data().data),
	                  ctrl.church.data().data ?
	                  ctrl.church.data().data.map(function(item){
	                    return m("tr",[
	                      m("td",item.id),
	                      m("td",item.name),
	                      m("td",item.admins.length),
	                      m("td",item.congregation.length),
	                      m("td",[
	                        m("button",{
	                          onclick:function(){
	                            var mutationObject = {
	                              name:"church",
	                              mutationType:"deleteChurch",
	                              schema:{
	                                id:m.prop(item.id)
	                              }
	                            }
	                            m.startComputation();
	                            JD.sendQuery(mutationObject,"deleteChurch",function(res){
	                              // alert("success")
	                              // ctrl.church.data(res)

	                              m.startComputation();
	                              ctrl.church.mutate("getAllChurches",function(res){
	                                // alert("success")
	                                ctrl.church.data(res)
	                                console.log(res)
	                                m.redrew
	                                m.endComputation();
	                              },function(err){
	                                alert(err)
	                                m.endComputation();
	                              })
	                              //---------------------------------

	                              //trigger a data refresh
	                              console.log(res)
	                              m.redrew
	                              m.endComputation();
	                            },function(err){
	                              alert(err)
	                              m.endComputation();
	                            })
	                          }
	                        },"delete"),

	                        m("button","disable"),
	                        m("button","edit details")
	                      ])
	                    ])
	                  })
	                  : m("span",{class:"progress"},[
	                    m("div",{class:"indeterminate"})
	                  ])
	                ]),

	              ]),
	              ctrl.church.data().data ? m("span","") : m("h6",{class:"center"},"refresh")

	            ])


	        }
	    }


/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = {
	        view:function(ctrl,args){
	            return m("li",{
	              class:args.direction + " dropdown-button " + (m.route() === args.url ? "active" : ""),
	              "data-activates":args.dropId
	          },[
	                m("a",{
	                  href:args.url,
	                  config:m.route
	                },args.name,[
	                  (args.dropId ? m("i",{class:"mdi-navigation-arrow-drop-down right"})  : m("span"))
	                ])
	            ])
	        }
	    }


/***/ }
]);