webpackJsonp([1,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __components = __webpack_require__(90);
	var adminUi = __components.adminLayout

	var ninjaUIConfig = __webpack_require__(95)
	var churchUiConfig = __webpack_require__(96)

	m.route.mode = "hash";

	m.route(document.body,"/",{
			"/":m(adminUi,{ config:ninjaUIConfig, body:__webpack_require__(97) }),

			"/churchia/new":m(adminUi,{ config:ninjaUIConfig, body:__webpack_require__(98) }),
			"/churchia/all":m(adminUi,{ config:ninjaUIConfig, body:__webpack_require__(99) }),

			"/uni/new":m(adminUi,{ config:ninjaUIConfig, body:__webpack_require__(100) }),
			"/uni/all":m(adminUi,{ config:ninjaUIConfig, body:__webpack_require__(101) }),

	})


/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  adminLayout:__webpack_require__(91)
	}


/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	/*
	*logoText {@param} - has text of the logo, on the left of the top bar
	*sideBarItems {@array} - objects that will be used to create the sidebar
	*
	*/

	var userCard = __webpack_require__(92);
	var sideNavItem = __webpack_require__(93);
	var topNavItem = __webpack_require__(94);

	module.exports = {
	  view:function(ctrl,args){
	    console.log(args.config.logoText);
	    return m(".app",[
	      //header, the nav bar
	      m("header",{id:"header",class:"page-topbar"},[
	        m("div",{class:"navbar-fixed"},[
	          m("nav",{class:args.config.color},[
	            m("div",{class:"nav-wrapper"},[

	              m("h1",{class:"logo-wrapper"},[
	                m("a",{class:"brand-logo"},args.config.logoText ? args.config.logoText : "logoText here")
	              ]),

	              m("ul",{class:"right"},[

	                args.config.topBarItems.map(function(item){
	                  return m(topNavItem,{
	                    url:item.url,
	                    icon:item.icon,
	                    text:item.text,
	                    drops:item.drops
	                  })
	                })

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
	              m(userCard,{
	                color:args.config.color
	              }),

	              // m("li",{class:"li-hover"},[
	              //   m("p",{class:"ultra-small margin more-text"},"Welcome")
	              // ]),

	              args.config.sideBarItems.map(function(item){
	                console.log(item.url)
	                return m(sideNavItem,{
	                  link:item.url,
	                  icon:item.icon,
	                  text:item.text,
	                  drops:item.drops,
	                  color:args.config.color
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


/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("li",{class:"user-details " + args.color + " darken-3"},[
	      m(".row",[
	        //pic image
	        m(".col col s4 m4 l4",[
	          m("img",{src:"http://www.imran.com/xyper_images/icon-user-default.png", class:"circle responsive-img profile-image"})
	        ]),
	        //dropdown and roal
	        m(".col col s8 m8 l8 black-text",[
	          m("a",{
	            class:"btn-flat profile-dropdown-button waves-effect waves-light white-text profile-btn",
	            config:function(){
	              $('.profile-dropdown-button').dropdown({
	                  inDuration: 300,
	                  outDuration: 225,
	                  constrain_width: false, // Does not change width of dropdown to that of the activator
	                  hover: true, // Activate on hover
	                  gutter: 0, // Spacing from edge
	                  belowOrigin: true, // Displays dropdown below the button
	                  alignment: 'left' // Displays dropdown with edge aligned to the left of button
	              });
	            },
	            "data-activates":"profile-dropdown"
	          },"Branie",[
	            m("i",{class:"mdi-navigation-arrow-drop-down right"})
	          ]),

	          m("ul",{
	            id:"profile-dropdown",
	            class:"dropdown-content",
	            style:"width: 128px; position: absolute; top: 57px; left: 101.234px; opacity: 1; display: none;"
	          },[
	            m("li",[
	              m("a",[
	                m("i",{class:"mdi-action-face-unlock"})
	              ],"Profile")
	            ]),
	            m("li",[
	              m("a",[
	                m("i",{class:"mdi-action-settings"})
	              ],"Settings")
	            ]),

	            m("li",{class:"divider"}),

	            m("li",[
	              m("a",[
	                m("i",{class:"mdi-hardware-keyboard-tab"})
	              ],"Log out")
	            ]),

	          ]),

	          //roal
	          m("p",{class:"user-roal white-text"},"Administrator")
	        ])
	      ])
	    ])
	  }
	}


/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("li",[
	      args.drops ? m("ul",{
	        class:"collapsible collapsible-accordion",
	        "data-collapsible":"accordion",
	        config:function(){
	          $('.collapsible').collapsible()
	        }
	      },[
	        m("li",{class:"bold"},[
	          // header
	          m("a",{class:"collapsible-header waves-effect waves-cyan"},[
	            m("i",{class:args.icon})
	          ],args.text),
	          //body
	          m("div",{class:"collapsible-body"},[
	            m("ul",[

	                args.drops.map(function(drop){

	                  return m("li",{class:"waves-effect waves-block waves-blue"},[
	                    m("a",{ //render a normal link
	                      href:drop.url,
	                      config:m.route,
	                      class:(drop.url === m.route() ? "grey lighten-4" : "")
	                    },[
	                      m("i",{class:drop.icon}),
	                      m("div",drop.text)
	                    ])
	                  ])

	                })


	            ])
	          ])
	        ])
	      ]) : m("a",{ //render a normal link
	        href:args.link,
	        config:m.route,
	        class:(args.link === m.route() ? args.color + "-grey lighten-5" : " " )
	      },[
	        m("i",{class:args.icon}),
	        m("div",args.text)
	      ]),
	      ///////////////////
	    ])
	  }
	}


/***/ },

/***/ 94:
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("li",{class:args.url === m.route() ? "active" : " "},[
	      m("a",{
	        class:"waves-effect waves-block waves-light dropdown-button",
	        href:args.url,
	        config:m.route,
	        "data-activates":args.text
	      },[
	        args.icon ? m("i",{class:args.icon}) : ""
	      ],args.text ? args.text : ""),

	      console.log(args.drops),

	      args.drops ? m("ul",{
	        id:args.text,
	        class:"dropdown-content",
	        config:function(){
	          $('.dropdown-button').dropdown({
	              inDuration: 300,
	              outDuration: 225,
	              constrain_width: false, // Does not change width of dropdown to that of the activator
	              hover: true, // Activate on hover
	              gutter: 0, // Spacing from edge
	              belowOrigin: true, // Displays dropdown below the button
	              alignment: 'left' // Displays dropdown with edge aligned to the left of button
	            }
	          );
	        }
	      },[
	        args.drops.map(function(drop){
	          return m("li",{
	            class:drop.url === m.route() ? " active " : ""
	          },[
	            m("a",{
	              class:"waves-effect waves-block waves-light",
	              href:drop.url,
	              config:m.route,
	            },[
	              m("i",{class:drop.icon})
	            ],drop.text ? drop.text : "")
	          ])
	        })
	      ]) : ""
	    ])
	  }
	}


/***/ },

/***/ 95:
/***/ function(module, exports) {

	module.exports = {
	  logoText:"Ninja admin Ui",
		color:"purple",
		topBarItems:[
	    {url:"/",text:"Dashboard",icon:"mdi-action-view-carousel right"},
			// {url:"/Ninja",text:"Ninja"},
			// {url:"/Church",icon:"mdi-notification-network-locked left",text:"Churches",drops:[
	      // {url:"/test1",icon:"mdi-notification-event-note left",text:"test1"},

	      // {url:"/test3",icon:"mdi-notification-event-note left",text:"test3"},
	    // ]},
	    // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Schools"}
		],
		sideBarItems:[
	    {text:"Churches",icon:"mdi-image-style",drops:[
	      {url:"/churchia/new",text:"New"},
	      {url:"/churchia/all",text:"View all"}
	    ]},
	    {text:"Universities",icon:"mdi-image-movie-creation",drops:[
	      {url:"/uni/new",text:"New"},
	      {url:"/uni/all",text:"View all"}
	    ]},
	    // {text:"Colleges",url:"/onlineChurch/admin/sermons",icon:"mdi-av-my-library-books"},
	    // {text:"844 Primary Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-communication-business"},
	    // {text:"844 High Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-image-texture"}
		]
	}


/***/ },

/***/ 96:
/***/ function(module, exports) {

	module.exports = {
	  logoText:"church Ui",
		color:"red",
		topBarItems:[
	    {url:"/Ninja",icon:"mdi-notification-event-note"},
			{url:"/Church",icon:"mdi-notification-network-locked"}
		],
		sideBarItems:[
	    {text:"sermons",url:"/onlineChurch/admin/sermons",icon:"mdi-image-style"},
	    {text:"upcomming events",url:"/onlineChurch/admin/sermons",icon:"mdi-image-movie-creation"},
	    {text:"messages",url:"/onlineChurch/admin/sermons",icon:"mdi-av-my-library-books"},
	    {text:"members",url:"/onlineChurch/admin/sermons",icon:"mdi-communication-business"}
		]
	}


/***/ },

/***/ 97:
/***/ function(module, exports) {

	module.exports = {
	  view:function(){
	    return m("div",[
	      m("div",{class:"card-panel"},[
	        m("h1","welcome to ninja homepage"),
	        m("h5","todo-list"),
	        m("ul",[
	          m("li","make everyone farmiliar with wtf is happening")
	        ])
	      ])
	    ])
	  }
	}


/***/ },

/***/ 98:
/***/ function(module, exports) {

	module.exports = {
	  view:function(){
	    return m("div",[
	      m("div",{class:"card-panel"},[
	        m("h1","view all churches")
	      ])
	    ])
	  }
	}


/***/ },

/***/ 99:
/***/ function(module, exports) {

	module.exports = {
	  view:function(){
	    return m("div",[
	      m("div",{class:"card-panel"},[
	        m("h1","view all churches here")
	      ])
	    ])
	  }
	}


/***/ },

/***/ 100:
/***/ function(module, exports) {

	module.exports = {
	  view:function(){
	    return m("div",[
	      m("div",{class:"card-panel"},[
	        m("h1","make new uni here")
	      ])
	    ])
	  }
	}


/***/ },

/***/ 101:
/***/ function(module, exports) {

	module.exports = {
	  view:function(){
	    return m("div",[
	      m("div",{class:"card-panel"},[
	        m("h1","view all uni's here")
	      ])
	    ])
	  }
	}


/***/ }

});