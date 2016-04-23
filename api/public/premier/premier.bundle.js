/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __components = __webpack_require__(1);
	var adminUi = __components.adminLayout
	var layout = __webpack_require__(90)

	var adminConfig = __webpack_require__(9)

	m.route.mode = "hash";

	m.route(document.body, '/', {
	  "/": __webpack_require__(98),
	  "/noticeboard/:uniId": m(layout, {
	    body: __webpack_require__(100)
	  }),
	  
	  "/contactus": __webpack_require__(101),
	  //academics
	  "/academics/ecd": __webpack_require__(102),
	  "/academics/calender": __webpack_require__(103),
	  "/academics/admissions": __webpack_require__(104),
	  "/academics/examinations": __webpack_require__(105),
	  "/academics/liblary": __webpack_require__(106),

	  //operations
	  "/operations/service_charter": __webpack_require__(107),
	  "/operations/governance": __webpack_require__(108),
	  "/operations/HR": __webpack_require__(109),
	  "/operations/finance": __webpack_require__(110),
	  "/operations/downloads": __webpack_require__(111),

	  //proffessional_development
	  "/proffessional_development/ctdc": __webpack_require__(112),
	  "/proffessional_development/shortcourses": __webpack_require__(113),
	  "/proffessional_development/bronchure": __webpack_require__(114),
	  "/proffessional_development/productinformation": __webpack_require__(115),

	  // "/register/student":require('./app/pages/student-register'),
	  // "/verify/student/:identifier":require('./app/pages/student-verify'),
	  // "/login/student":require('./app/pages/student'),
	  // "/login/student-pass/:identifier":require('./app/pages/student-pass'),
	  // "/login/student-forgot/:identifier":require('./app/pages/student-forgot'),

	  //Authentifucation routes for the domains that are supported or should be publicly shown
	  //Student
	  // "/auth/Student/register/":require("./app/pages/auth/student/register"), //register
	  // "/auth/Student/pass-1/":require("./app/pages/auth/student/pass-1"), //give identifier ----
	  // "/auth/Student/pass-2/:identifier":require("./app/pages/auth/student/pass-2"),
	  // "/auth/Student/verify/:identifier":require("./app/pages/auth/student/verify"),
	  // "/auth/Student/forgot/:identifier":require("./app/pages/auth/student/forgot"),

	  //Admin
	  // "/auth/Admin/register/":require("./app/pages/auth/Admin/register"), //register
	  // "/auth/Admin/pass-1/":require("./app/pages/auth/Admin/pass-1"), //give identifier ----
	  // "/auth/Admin/pass-2/:identifier":require("./app/pages/auth/Admin/pass-2"),
	  // "/auth/Admin/verify/:identifier":require("./app/pages/auth/Admin/verify"),
	  // "/auth/Admin/forgot/:identifier":require("./app/pages/auth/Admin/forgot"),

	  //Staff
	  // "/auth/Staff/register/":require("./app/pages/auth/Staff/register"), //register
	  // "/auth/Staff/pass-1/":require("./app/pages/auth/Staff/pass-1"), //give identifier ----
	  // "/auth/Staff/pass-2/:identifier":require("./app/pages/auth/Staff/pass-2"),
	  // "/auth/Staff/verify/:identifier":require("./app/pages/auth/Staff/verify"),
	  // "/auth/Staff/forgot/:identifier":require("./app/pages/auth/Staff/forgot")


	  "/uniadmin/:uniName/:uniId": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(28)
	  }),
	  "/uni/:uniName/:uniId/noticeboard": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(37)
	  }),
	  "/uni/admins/:uniId": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(37)
	  }),
	  // view admins
	  "/uni/admins/:uniName/:uniId": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(41)
	  }),

	  // add admin
	  "/uni/admins/:uniName/:uniId/add": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(42)
	  }),

	  "/uniLogin/:uniName/:uniId": __webpack_require__(45),

	  "/uni/:uniName/:uniId/Students/search": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(36)
	  }),

	  "/uni/admin/:uniName/:uniId/schools": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(46),
	  }),

	  "/uni/admin/:uniName/:uniId/departments/:school_id": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(56),
	  }),

	  //view all units a department offers, and add
	  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(58),
	  }),

	  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(49),
	  }),

	  //viewing all the levels of a certain course ie diploma etc
	  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(60),
	  }),

	  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(51),
	  }),

	  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id/stages/:stage_id/units": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(54),
	  }),

	  //a selected department is there
	  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id/stages/:stage_id/units/:selectedDepartment": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(61),
	  }),
	  //view its units
	  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/units": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(63),
	  }),
	  //view prices of a unit
	  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/units/:unit_id/prices": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(65),
	  }),

	  //other settings
	  "/uni/admin/:uniName/:uniId/study_modes": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(67),
	  }),
	  //view all units a department offers, and add
	  "/uni/admin/:uniName/:uniId/tri_sems": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(69),
	  }),

	  "/uni/admin/:uniName/:uniId/payment-methods": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(71),
	  }),

	  //register student to all that stuff
	  "/uni/admin/:uniName/:uniId/Students/index": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(73),
	  }),

	  "/uni/admin/:uniName/:uniId/Students/config/:student_id": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(116),
	  }),

	  "/uni/admin/:uniName/:uniId/Students/config/:student_id/units/:semester_id/:tri_sem_id": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(74),
	  }),

	  "/uni/admin/:uniName/:uniId/Students/viewpayments/:student_id": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(25),
	  }),

	  "/uni/admin/:uniName/:uniId/Students/config/:student_id": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(116),
	  }),

	  "/uni/admin/:uniName/:uniId/Students/payments/:student_id": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(80),
	  }),

	  "/uni/admin/:uniName/:uniId/Students": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(81),
	  }),

	  "/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(83),
	  }),

	  "/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(85),
	  }),

	  "/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages/:stage_id/study_mode": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(87),
	  }),

	  "/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages/:stage_id/study_mode/:study_mode": m(adminUi, {
	    config: adminConfig,
	    body: __webpack_require__(89),
	  }),


	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  adminLayout:__webpack_require__(2),
	  studentLayout:__webpack_require__(6),
	  churchAdminLayout:__webpack_require__(7),
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *logoText {@param} - has text of the logo, on the left of the top bar
	 *sideBarItems {@array} - objects that will be used to create the sidebar
	 *
	 */

	var userCard = __webpack_require__(3);
	var sideNavItem = __webpack_require__(4);
	var topNavItem = __webpack_require__(5);

	module.exports = {
	  controller: () => {
	    m.redraw.strategy("all")
	  },
	  view: function(ctrl, args) {
	    return m(".app", [
	      //header, the nav bar
	      m("header", {
	        id: "header",
	        class: "page-topbar"
	      }, [
	        m("div", {
	          class: "navbar-fixed"
	        }, [
	          m("nav", {
	            class: args.config().color
	          }, [
	            m("div", {
	              class: "nav-wrapper"
	            }, [

	              m("h1", {
	                class: "logo-wrapper"
	              }, [
	                m("a", {
	                  class: "brand-logo"
	                }, args.config().logoText ? args.config().logoText : "logoText here")
	              ]),

	              m("ul", {
	                class: "right hide-on-med-and-down"
	              }, [
	                args.config().topBarItems.map(function(item) {
	                  return m(topNavItem, {
	                    url: item.url,
	                    icon: item.icon,
	                    text: item.text,
	                    drops: item.drops
	                  })
	                }),
	                m(topNavItem, {
	                  url: "#",
	                  icon: "mdi-hardware-keyboard-backspace",
	                  onClick: ()=>{
	                    window.history.back()
	                  }
	                })

	              ]),

	            ])
	          ])
	        ])
	      ]),

	      //the main part of the body
	      m("#main", [
	        //sidebar-
	        m(".wrapper", [
	          //left side-nav
	          m("aside", {
	            id: "left-sidebar-nav"
	          }, [

	            m("ul", {
	              id: "slide-out",
	              class: "side-nav fixed leftside-navigation",
	              style: "width: 240px"
	            }, [
	              m(userCard, {
	                color: args.config().color
	              }),

	              m("li", {
	                class: "li-hover"
	              }, [
	                m("p", {
	                  class: "ultra-small margin more-text"
	                }, "Welcome")
	              ]),

	              args.config().sideBarItems.map(function(item) {
	                return m(sideNavItem, {
	                  link: item.url,
	                  icon: item.icon,
	                  text: item.text,
	                  drops: item.drops,
	                  color: args.config().color
	                })
	              })
	            ]),

	            m("a",{
	                href:"#",
	                "data-activates":"slide-out",
	                class:"sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only purple",
	                config:()=>{
	                   $(".sidebar-collapse").sideNav();
	                }
	              
	              },[
	                m("i",{
	                  class:"mdi-navigation-menu"
	                })
	              ])

	          ]),
	          //rest of the body
	          m("section", {
	            id: "content"
	          }, [
	            args.body ? m(args.body) : m("h1", "body here")
	          ])


	  

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
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  controller:function(){
	    return {
	      active:m.prop(false)
	    }
	  },
	  view:function(ctrl,args){
	    return m("li",[
	      args.drops ? m("ul",{
	        class:"collapsible collapsible-accordion",
	        "data-collapsible":"accordion",
	        config:function(){
	          $('.collapsible').collapsible()
	        }
	      },[
	        m("li",{class:"bold waves-effect waves-block waves-light"},[
	          // header
	          m("a",{class:"collapsible-header" + (ctrl.active() === true ? "active" : "")},[
	            m("i",{class:args.icon})
	          ],args.text),
	          //body
	          m("div",{class:"collapsible-body"},[
	            m("ul",[

	                args.drops.map(function(drop){

	                  return m("li",{class:"waves-effect waves-block waves-blue"},[
	                    //implememntation to keep a sidebar dropdown dropped if a link inside it is active
	                    // (drop.url === m.route() ? ctrl.active(true) : ""),
	                    // (drop.url === m.route() ? m.redraw : ""),
	                    m("a",{ //render a normal link
	                      href:drop.url,
	                      config:m.route,
	                      class:(drop.url === m.route() ? " lighten-4" : "")
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
	        class:(args.link === m.route() ? args.color + " lighten-5" : " " )
	      },[
	        m("i",{class:args.icon}),
	        m("div",args.text)
	      ]),
	      ///////////////////
	    ])
	  }
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("li",{class:args.url === m.route() ? "active" : " "},[
	      m("a",{
	        class:"waves-effect waves-block waves-light dropdown-button",
	        href:args.url,
	        config:m.route,
	        "data-activates":args.text,
	        onclick:()=>{
	          // alert("backing")
	          (typeof(args.onClick) === "function" ? args.onClick() : "")
	        }
	      },[
	        args.icon ? m("i",{class:args.icon}) : ""
	      ],args.text ? args.text : ""),


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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *logoText {@param} - has text of the logo, on the left of the top bar
	 *sideBarItems {@array} - objects that will be used to create the sidebar
	 *
	 */

	var userCard = __webpack_require__(3);
	var sideNavItem = __webpack_require__(4);
	var topNavItem = __webpack_require__(5);

	module.exports = {
	  controller: () => {
	    m.redraw.strategy("all")
	  },
	  view: function(ctrl, args) {
	    return m(".app", [
	      //header, the nav bar
	      m("header", {
	        id: "header",
	        class: "page-topbar"
	      }, [
	        m("div", {
	          class: "navbar-fixed"
	        }, [
	          m("nav", {
	            class: args.config().color
	          }, [
	            m("div", {
	              class: "nav-wrapper"
	            }, [

	              m("h1", {
	                class: "logo-wrapper"
	              }, [
	                m("a", {
	                  class: "brand-logo"
	                }, args.config().logoText ? args.config().logoText : "logoText here")
	              ]),



	              m("ul", {
	                class: "right"
	              }, [
	                args.config().topBarItems.map(function(item) {
	                  return m(topNavItem, {
	                    url: item.url,
	                    icon: item.icon,
	                    text: item.text,
	                    drops: item.drops
	                  })
	                }),
	                m(topNavItem, {
	                  url: "#",
	                  icon: "mdi-hardware-keyboard-backspace",
	                  onClick: () => {
	                    window.history.back()
	                  }
	                })

	              ]),

	            ])
	          ])
	        ])
	      ]),

	      //the main part of the body
	      m("#main", [
	        //sidebar-
	        m(".wrapper", [
	          //left side-nav
	          m("aside", {
	            id: "left-sidebar-nav"
	          }, [

	            m("ul", {
	              id: "slide-out",
	              class: "side-nav fixed leftside-navigation",
	              style: "width: 240px"
	            }, [
	              m(userCard, {
	                color: args.config().color
	              }),

	              m("li", {
	                class: "li-hover"
	              }, [
	                m("p", {
	                  class: "ultra-small margin more-text"
	                }, "Welcome")
	              ]),

	              args.config().sideBarItems.map(function(item) {
	                return m(sideNavItem, {
	                  link: item.url,
	                  icon: item.icon,
	                  text: item.text,
	                  drops: item.drops,
	                  color: args.config().color
	                })
	              })
	            ])

	          ]),
	          //rest of the body
	          m("section", {
	            id: "content"
	          }, [
	            args.body ? m(args.body) : m("h1", "body here")
	          ])

	        ])

	      ])


	    ])
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *logoText {@param} - has text of the logo, on the left of the top bar
	 *sideBarItems {@array} - objects that will be used to create the sidebar
	 *
	 */

	var userCard = __webpack_require__(3);
	var sideNavItem = __webpack_require__(4);
	var topNavItem = __webpack_require__(5);

	module.exports = {
	  controller: () => {
	    m.redraw.strategy("all")
	  },
	  view: function(ctrl, args) {
	    return m(".app", [
	      //header, the nav bar
	      m("header", {
	        id: "header",
	        class: "page-topbar"
	      }, [
	        m("div", {
	          class: "navbar-fixed"
	        }, [
	          m("nav", {
	            class: args.config().color
	          }, [
	            m("div", {
	              class: "nav-wrapper"
	            }, [

	              m("h1", {
	                class: "logo-wrapper"
	              }, [
	                m("a", {
	                  class: "brand-logo"
	                }, args.config().logoText ? args.config().logoText : "logoText here")
	              ]),



	              m("ul", {
	                class: "right"
	              }, [
	                args.config().topBarItems.map(function(item) {
	                  return m(topNavItem, {
	                    url: item.url,
	                    icon: item.icon,
	                    text: item.text,
	                    drops: item.drops
	                  })
	                }),
	                m(topNavItem, {
	                  url: "#",
	                  icon: "mdi-hardware-keyboard-backspace",
	                  onClick: () => {
	                    window.history.back()
	                  }
	                })

	              ]),

	            ])
	          ])
	        ])
	      ]),

	      //the main part of the body
	      m("#main", [
	        //sidebar-
	        m(".wrapper", [
	          //left side-nav
	          m("aside", {
	            id: "left-sidebar-nav"
	          }, [

	            m("ul", {
	              id: "slide-out",
	              class: "side-nav fixed leftside-navigation",
	              style: "width: 240px"
	            }, [
	              m(userCard, {
	                color: args.config().color
	              }),

	              m("li", {
	                class: "li-hover"
	              }, [
	                m("p", {
	                  class: "ultra-small margin more-text"
	                }, "Welcome")
	              ]),

	              args.config().sideBarItems.map(function(item) {
	                return m(sideNavItem, {
	                  link: item.url,
	                  icon: item.icon,
	                  text: item.text,
	                  drops: item.drops,
	                  color: args.config().color
	                })
	              })
	            ])

	          ]),
	          //rest of the body
	          m("section", {
	            id: "content"
	          }, [
	            args.body ? m(args.body) : m("h1", "body here")
	          ])

	        ])

	      ])


	    ])
	  }
	}

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// uniAdminUiConfig

	module.exports = function() {
	  var config = {
	    logoText: m.route.param("uniName") + " Admin",
	    color: "blue",
	    topBarItems: [{
	        url: "/",
	        text: "Home",
	        icon: "mdi-action-view-carousel right"
	      },
	      // {url:"/Ninja",text:"Ninja"},
	      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Churches",drops:[
	      // {url:"/test1",icon:"mdi-notification-event-note left",text:"test1"},

	      // {url:"/test3",icon:"mdi-notification-event-note left",text:"test3"},
	      // ]},
	      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Schools"}
	    ],
	    sideBarItems: [{
	        text: "Dashboard",
	        url: "/uniadmin/" + m.route.param("uniName") + "/" + m.route.param("uniId"),
	        icon: "mdi-action-view-carousel"
	      }, {
	        text: "Noticeboard",
	        url: "/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard",
	        icon: "mdi-action-assignment"
	      }, {
	        text: "Students",
	        url: "/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/search?q=''",
	        icon: "mdi-action-perm-identity"
	      }, {
	        text: "System Users",
	        icon: "mdi-av-my-library-books",
	        drops: [{
	          text: "Registrars",
	          url: "/uni/registrars/" + m.route.param("uniName") + "/" + m.route.param("uniId")
	        }, {
	          text: "Admins",
	          url: "/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId")
	        }, ]
	      },{
	        text: "Configuration",
	        icon: "mdi-action-settings",
	        drops: [{
	            text: "Schools",
	            url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/schools"
	          },
	          // {text:"Departments",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments"},
	          {
	            text: "Study modes",
	            url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/study_modes"
	          }, {
	            text: "Tri-Semesters",
	            url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/tri_sems"
	          }, {
	            text: "Payment-methods",
	            url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/payment-methods"
	          }
	        ]
	      }
	    ]
	  }

	  return config
	}

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  controller: () => {
	    var id = Math.random();
	    return {
	      uniqId: () => {
	        return id
	      }
	    }
	  },
	  view: function(ctrl, attrs) {
	    var textarea = m("div", {
	      class: "input-field validate  col " + attrs.sizes
	    }, [
	      attrs.icon ? m("i", {
	        class: attrs.icon
	      }) : m("span"),
	      m("textarea[required]", {
	        id: attrs.label + ctrl.uniqId(),
	        // value:attrs.value(),
	        name: attrs.label,
	        type: attrs.type,
	        class: "materialize-textarea",
	        "aria-required": "true",
	        oninput: m.withAttr("value", attrs.value)
	      }),
	      m("label", {
	        for: attrs.label + ctrl.uniqId()
	      }, attrs.label)
	    ]);

	    var input = m("div", {
	      class: "input-field col " + attrs.sizes + (attrs.required ? "validate" : " ")
	    }, [
	      attrs.icon ? m("i", {
	        class: attrs.icon
	      }) : m("span"),
	      m("input[required]", {
	        id: attrs.label + ctrl.uniqId(),
	        // value:attrs.value(),
	        name: attrs.label,
	        type: attrs.type,
	        "aria-required": "true",
	        oninput: m.withAttr("value", attrs.value),
	        class:(attrs.type === "date" ? "datepicker" : ""),
	        config: () => {
	          if (attrs.type === "date") {
	            $('.datepicker').pickadate({
	              selectMonths: attrs.selectableMonths, // Creates a dropdown to control month
	              selectYears: attrs.years // Creates a dropdown of 15 years to control year
	            });
	          }
	        }
	      }),
	      m("label", {
	        for: attrs.label + ctrl.uniqId()
	      }, attrs.label)
	    ]);

	    var select = m(".input-field col s12",
	      m("select", {
	          config: function() {
	            $('select').material_select();
	            console.log(attrs)
	          },
	          onchange: function(e) {
	            ctrl.schema.selectedCourse(e.target.value),
	              alert(ctrl.schema.selectedCourse())
	          }
	        },

	        m("option", {
	          value: "",
	          disabled: true,
	          selected: true,
	        }, "Course for student")
	        // console.log(typeof(attrs.data))
	        // attrs.data.map((item)=>console.log(item))
	        // attrs.data.map((drop)=>{
	        //   return m("option",{
	        //     value:drop.id,
	        //     selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
	        //   },drop.name)
	        // })

	      )
	    );

	    // return what is asked for
	    if (attrs.type === "textarea") {
	      return textarea
	    } else if (attrs.type === "select") {
	      return select
	    } else {
	      return input
	    }
	  }
	}


	// (m.route() === attrs.link.url ? 'active': '')

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var paymentCard = __webpack_require__(26)
	var studentInfo = __webpack_require__(27)

	var model = {
		payments: () => {
			return m.request({
				method: "GET",
				url: apiUrl + "/basic/getMyPayments/" + m.route.param("student_id")
			})
		}
	}
	module.exports = {
		controller: (args) => {
			return {
				payments: model.payments()
			}
		},
		view: (ctrl, args) => {
			return m(".container row", [
				args ? "" : m(studentInfo),
				m(".invoice-header card-panel", [
					m(".row", [

						// the totals area
						m(".col s12 m3 l12", [
							m(".row", [
								m(".col s12 m3 l3 blue white-text right", [
									// m("h4",{class:"header"},"Total Paid: " + ctrl.payments().payments_log.totalPayments)
								])
							])
						]),

						m("h5", "Charges"),
						m("table", {
							class: "striped"
						}, [
							m("thead", [
								m("tr", [
									m("th", "Semester"),
									m("th", "Course"),
									m("th", "Level"),
									m("th", "Semester"),
									m("th", "Unit"),
									m("th", "Date of registration"),
									m("th", "Cost")
								])
							]),
							m("tbody", [

								ctrl.payments().units_log.unitsRegistered.map((unit) => {
									return m("tr", [
										m("td", unit.tri_semester),
										m("td", unit.course),
										m("td", unit.level),
										m("td", unit.stage),
										m("td", unit.unit),
										m("td", moment(unit.date).format('MM/DD/YYYY')),
										m("td", unit.cost)
									])
								})
							])
						]),

						m(".col s12 m3 l12", [
							m(".row", [
								m(".col s12 m3 l3 blue white-text right", [
									m("h6", {
										class: "header"
									}, "Total Charges: " + ctrl.payments().units_log.totalCost)
								])
							])
						]),

						m("h5", "Payments"),
						m("table", {
							class: "striped"
						}, [
							m("thead", [
								m("tr", [
									m("th", "Semester"),
									m("th", "Course"),
									m("th", "Level"),
									m("th", "Reciept issued"),
									m("th", "Payment record date"),
									m("th", "Channel"),
									m("th", "Payment Ammount"),
								])
							]),
							m("tbody", [

								ctrl.payments().payments_log.payments.map((payment) => {
									return m("tr", [
										m("td", payment.trimester),
										m("td", payment.course),
										m("td", payment.level),
										m("td", payment.receipt),
										m("td", moment(payment.date).format('MM/DD/YYYY')),
										m("td", payment.channel + " - " + payment.location),
										m("td", payment.ammount)

									])
								})
							])
						]),
						m(".col s12 m3 l12", [
							m(".row", [
								m(".col s12 m3 l3 blue white-text right", [
									m("h6", {
										class: "header"
									}, "Total payments: " + ctrl.payments().payments_log.totalPayments)
								])
							])
						]),

						m("br"),
						m("br"),
						m(".col s12 m3 l3 blue white-text right", [
							m("h6", "Current Balance: " + ctrl.payments().balance)
						])
					])
				])
			])
		}
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);
	var model = {
		payment:(args)=>{
			return m.request({
					method:"GET",
					url:apiUrl + "/basic/getInstallments/" + args.payment_id,
					background: true, 
					initialValue: {
						trisem:{},
						installments:[]
					}
			})
		}
	}
	module.exports = {

		controller:(args)=>{
			var payment = model.payment(args);
			payment.then(m.redraw)
			return {
				payment:payment,
				schema:{
					ammount:m.prop(""),
					receiptNo:m.prop("")
				}
			}
		},
		view:(ctrl,args)=>{
			return m(".row",[
						m("div",{class:"col s12 m12 l12"},[
							// m("h5",ctrl.payment().trisem.name ),

							// m("form",{
							// 	class:"row",
							// 	onsubmit:(e)=>{
							// 		e.preventDefault();
							// 		m.request({
							// 			method:"POST",
							// 			url:apiUrl + "/basic/addInstalment/" + args.payment_id,
							// 			data:{
							// 				ammount:ctrl.schema.ammount(),
							// 				receipt:ctrl.schema.receiptNo()
							// 			}
							// 		}).then((res)=>m.route( m.route( ) ))
							// 	}
							// },[
							// 	// m("div",{class:"col l3"},[
							// 	// 	m("b",ctrl.payment().trisem.name)
							// 	// ]),

				   //              m(inputComponent,{
				   //                value:ctrl.schema.ammount,
				   //                label:"Installment ammount",
				   //                icon:"mdi-editor-attach-money prefix",
				   //                type:"text",
				   //                sizes:"s12 m12 l3"
				   //              }),

				   //              m(inputComponent,{
				   //                value:ctrl.schema.receiptNo,
				   //                label:"Receipt Number",
				   //                icon:"mdi-editor-insert-drive-file prefix",
				   //                type:"text",
				   //                sizes:"s12 m12 l3"
				   //              }),

				   //              m("div",{class:"s12 m12 l3"},[
				   //              	m("br"),
				   //              	m("button",{class:"btn blue col l3 waves-effect waves-block waves-light"},"submit")
				   //              ])
				   //          ]),
				   m("table",{class:"col s12 m12 l12 stripped"},[
								m("thead",[
									m("tr",[
										// m("th","ID"),
										m("th",{class:"grey white-text"},ctrl.payment().trisem.name)
									])
								])
					]),

				            m("table",{class:"col s12 m12 l12 stripped"},[
								m("thead",[
									m("tr",[
										// m("th","ID"),
										m("th","Date"),
										m("th","Ammount"),
										m("th","Receipt")
									])
								]),
								m("tbody",[
									ctrl.payment().installments.map((installment)=>{
										return m("tr",[
											// m("td",installment.id),
											m("td",installment.createdAt),
											m("td",installment.ammount),
											m("td",installment.receipt)
										])
									})
								]),

								m("tr",[
										m("td",{colspan:2,class:"right"},m("b","Total:")),
										m("td",m("b",ctrl.payment().sum))
								])						
							])
						]),

						// m(".col l12",[
						// 	m("tr",[
						// 			m("td",{colspan:3}),
						// 			m("td",ctrl.payment().sum)
						// 	])
						// ]),

						m("br"),
						m("br"),
						m("br"),
						m("br")
			])
											
					
		 }

	}


/***/ },
/* 27 */
/***/ function(module, exports) {

	var links = function(student) {
		return [{
			url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/viewpayments/" + student.id,
			text: "Payments"
		}, {
			url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/payments/" + student.id,
			text: "Add Payment"
		}, {
			url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/config/" + student.id + "/units/" + student.stage.id + "/" + student.active_trisemester.id,
			text: "Select units"
		}, {
			url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Student/" + student.id,
			text: "Portal",
			direction: "right"
		}]
	}

	module.exports = {
		controller: function() {
			return {
				student: m.request({
					method: "Post",
					url: apiUrl + "/services",
					data: {
						role: "student_management",
						cmd: "get_student_details",
						student_id: m.route.param("student_id")
					}
				})
			}
		},
		view: function(ctrl, args) {
			var student = ctrl.student().studentInfo
			return m(".", [
				m("." + (args ? args.css : "card"), [
					m(".col l3", m("b", "Name: "), student.name),
					m(".col l3", m("b", "Study_mode: "), student.study_mode.name),
					m(".col l2", m("b", "Course: "), student.course.name),
					m(".col l2", m("b", "Level: "), student.level.name),
					m(".col l2", m("b", "Semester: "), student.stage.name)
				]),
				m("nav", [
					m(".nav-wrapper blue", [
						m("ul", [
							links(student).map((link) => {
								return m("li", {
									class: (link.url === m.route() ? "active " : "") + link.direction + " waves-effect waves-light waves-block",
								}, m("a", {
									href: link.url,
									config: m.route
								}, link.text))
							}),
						])
					])
				])
			])
		}
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var card = __webpack_require__(29)

	var inputComponent = __webpack_require__(13);
	module.exports = {
		controller: () => {
			return {
				uniStats: m.request({
					method: "post",
					url: apiUrl + "/services",
					data: {
						role: "university",
						cmd: "get_stats",
						university_id: m.route.param("uniId")
					}
				})
			}
		},
		view: (ctrl, atrrs) => {
			return m(".card-panelx", [
				m(".card-stats", [
					m(".row", [
						m(card, {
							title: "Students",
							number: ctrl.uniStats().result.students,
							color: "blue"
						}),
						m(card, {
							title: "Total Cash paid in",
							number: ctrl.uniStats().result.totalFinance + " Rw.f",
							color: "blue darken-1"
						})
					])
				])
			])
		}
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
		view:(ctrl,args)=>{
			return 	m(".col s12 m6 l3",[
						m(".card hoverable",[
		      				m(".card-content white-text " + args.color,[
		      					m("h5",{class:"center card-stats-title"},[
		      						// m("i",{class:"mdi-social-group-add"})
		      					],args.title),
		      					m("h5",{class:"center card-stats-number"},args.number)
		      				]),
		      				m(".card-action darken-2 " + args.color,[

		      				])
		    			])
		    	])
		}
	}

/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	module.exports = {
		controller: () => {
			var results = m.request({
				method: "POST",
				url: apiUrl + "/saerchStudent/" + m.route.param("uniId"),
				data: {
					searchTerm: m.route.param("q")
				}
			})

			return {
				results: results,
				schema: {
					searchTerm: m.prop("")
				}
			}
		},
		view: (ctrl, args) => {
			return m("span", [
				m("form", {
					class: "row margin container",
					onsubmit: (e) => {
						e.preventDefault();
						m.route(m.route(), {
							q: ctrl.schema.searchTerm()
						})
					}
				}, [
					m(inputComponent, {
						value: ctrl.schema.searchTerm,
						label: "Student ADM.no / Name",
						icon: "mdi-action-search prefix",
						type: "text",
						sizes: "s12 m12 l8",
					}),
					m(".searchButton", [
						m("br"),
						m("div", {
							class: "btn blue col l2",
							type: "submit"
						}, "Search")
					]),
					m("a", {
						class: "btn right blue",
						href: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students",
						config: m.route
					}, "New Student")
				]),

				m("table", {
					class: "bordered stripped container"
				}, [
					m("thead", [
						m("tr", [
							m("th", "Adm"),
							m("th", "Names"),
							m("th", "Course"),
							m("th", "Level"),
							m("th", "Stage"),
							m("th", "Study Mode")
						])
					]),
					m("tbody", [
						ctrl.results().map((result) => {
							return m("tr", [
								m("td", result.adm),
								m("td", result.name),
								m("td", result.course.name),
								m("td", result.level.name),
								m("td", result.stage.name),
								m("td", result.study_mode.name),
								m("td", [
									m("a", {
										href: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/viewpayments/" + result.id,
										config: m.route
									}, "more details...")
								]),
							])
						})

					])
				])
			])
		}
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	  var noticeItem = __webpack_require__(38)
	  var oldNotices = __webpack_require__(39)
	  var inputComponent = __webpack_require__(13);
	  module.exports = {
	    controller: function() {
	      return {
	        noticeboardItems: m.request({
	          url: apiUrl + "/basic/getNoticeboard/" + m.route.param("uniId"),
	          method: "GET"
	        }),
	        schema: {
	          title: m.prop(""),
	          content: m.prop("")
	        }
	      }
	    },
	    view: function(controller, atrrs) {
	      return m("div", [
	        m("nav", [
	          m(".nav-wrapper blue", [
	            m(".col s6", [
	              m("a", {
	                class: "breadcrumb"
	              }, "Dashboard"),
	              m("a", {
	                class: "breadcrumb"
	              }, "Noticeboard")
	            ])
	          ])
	        ]),

	        m(".row", [
	          m(".col l12", [
	            m("br"),
	            m(".flow-text left", "Current Noticeboard Items"),

	            m("button", {
	              onclick: () => {
	                m.route("/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard/add")
	              },
	              type: "submit",
	              class: "btn waves-effect waves-block waves-light blue right"
	            }, "Create New Notice")
	          ])
	        ]),


	        m(".row", [
	          m(".col l8", [
	            m(".divider"),
	            controller.noticeboardItems().noticeboard_items.map(function(item) {
	              return m(noticeItem, {
	                id: item.id,
	                title: item.title,
	                content: item.content,
	                args: item.createdAt,
	                deleteBtn: true
	              })
	            }),
	            // m("div","branson")
	          ]),

	          m(".col l4",
	            m(".divider"),
	            m(oldNotices)
	            // m("div","awesome")
	          )
	        ])
	      ])
	    }
	  }

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {
	  view: function(ctrl, args) {
	    return m("div", {
	      class: "card-panel row"
	    }, [
	      m("div", {
	        class: "col l6"
	      }, [
	        m("h5", {
	          class: "left"
	        }, args.title),
	      ]),
	      m("div", {
	        class: "col l6"
	      }, [
	        m("br"),
	        m("div", {
	          class: "right"
	        }, "( shared " + moment.duration(moment(args.createdAt).diff(moment(new Date())), 'milliseconds').humanize() + " ago" + " )")
	      ]),

	      m("div", {
	        class: "divider col l12"
	      }),

	      m("div", {
	        class: "col l12"
	      }, [
	        m("p", args.content)
	      ]),

	      m("div", {
	        class: "divider"
	      }),
	      m("br"),
	      m("div", [
	        m("div", {
	          class: "col l12"
	        }, [
	          args.deleteBtn === true ?
	          m("span", [
	            //remove
	            m("button", {
	              class: "btn red right",
	              onclick: function() {
	                m.request({
	                  method: "GET",
	                  url: apiUrl + "/basic/removeFromNoticeboard/" + args.id
	                }).then(m.route(m.route()))
	              }
	            }, "remove"),
	            //make old
	            m("button", {
	              class: "btn-flat right",
	              onclick: function() {
	                m.request({
	                  method: "GET",
	                  url: apiUrl + "/basic/makeNoticeOld/" + args.id
	                }).then(m.route(m.route()))
	              }
	            }, "move to old"),
	          ]) : ""

	          // m("div",{class:"right"},"weird text")
	        ]),
	      ])
	    ])
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = {
	  controller: function() {
	    return {
	      notices: m.request({
	        method: "GET",
	        url: apiUrl + "/basic/getNoticeboardOld/" + m.route.param("uniId")
	      })
	    }
	  },
	  view: function(controller) {
	    return m("div", [
	      controller.notices().old_noticeboard_items.length > 0 ? m("ul", {
	        class: "collection with-header"
	      }, [
	        m("li", {
	          class: "collection-header blue white-text"
	        }, m("h4", "Past notices")),
	        controller.notices().old_noticeboard_items.map(function(notice) {
	          return m("li", {
	            class: "collection-item"
	          }, notice.title, [
	            m("a", {
	              class: "secondary-content btn-floating blue",
	              onclick() {
	                m.request({
	                  method: "GET",
	                  url: apiUrl + "/basic/returnOldNotice/" + notice.id
	                }).then(m.route(m.route()))
	              }
	            }, [
	              m("i", {
	                class: "mdi-hardware-keyboard-arrow-left"
	              })
	            ]),
	            m("br"),
	            m("span", "( shared " + moment.duration(moment(notice.createdAt).diff(moment(new Date())), 'milliseconds').humanize() + " ago" + " )")
	          ])
	        })

	      ]) : ""
	    ])

	  }
	}

/***/ },
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// var myComponent = require("./noticeItem")

	var inputComponent = __webpack_require__(13);
	module.exports = {
	  controller: function() {
	    return {
	      admins: m.request({
	        url: apiUrl + "/basic/getAdmins/" + m.route.param("uniId"),
	        method: "GET"
	      }),
	      revokedAdmins: m.request({
	        url: apiUrl + "/basic/getRevokedAdmins/" + m.route.param("uniId"),
	        method: "GET"
	      }),
	      schema: {
	        userIdentifier: m.prop(""),
	        userUsername: m.prop(""),
	        userPassword: m.prop(""),
	        confirmPassword: m.prop("")
	      }
	    }
	  },
	  view: function(controller, atrrs) {
	    return m(".row", [
	      m(".col l12", [
	        m("br"),
	        //all admins
	        // m("h1", "Current Admins"),
	        m("a", {
	          class: "btn blue right",
	          href: "/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/add",
	          config: m.route
	        }, "add admin"),
	        m("table", [

	          m("thead", [
	            m("tr", [
	              m("th", "email"),
	              // m("td","createdAt")
	            ])
	          ]),

	          m("tbody", [
	            controller.admins().map(function(admin) {
	              return m("tr", [
	                m("td", admin.identifier),
	                // m("td",admin.createdAt),
	                m("td", [
	                  m("button", {
	                    class: "btn-flat waves-effect waves-cyan waves-block hoverable",
	                    onclick: function() {
	                      m.request({
	                        url: apiUrl + "/basic/revokeAdmin/" + m.route.param("uniId"),
	                        method: "POST",
	                        data: {
	                          userId: admin.id
	                        }
	                      }).then(function() {
	                        m.route(m.route())
	                      })
	                    }
	                  }, "revoke admin rights")
	                ]),
	                m("td", [
	                  m("button", {
	                    class: "btn-flat waves-effect waves-cyan waves-block hoverable"
	                  }, "View activity")
	                ])
	              ])
	            })
	          ])
	        ]),

	        // revoked admins
	        m("h1", "Access Revoked Admins"),
	        m("table", [

	          m("thead", [
	            m("tr", [
	              m("th", "email"),
	              // m("td","createdAt")
	            ])
	          ]),

	          m("tbody", [
	            controller.revokedAdmins().map(function(admin) {
	              return m("tr", [
	                console.log(admin),
	                m("td", admin.identifier),
	                // m("td",admin.createdAt),
	                m("td", [
	                  // restore admin rights
	                  m("button", {
	                    class: "btn-flat waves-effect waves-blue waves-block hoverable",
	                    onclick: function() {
	                      m.request({
	                        url: apiUrl + "/basic/restoreAdmin/" + m.route.param("uniId"),
	                        method: "POST",
	                        data: {
	                          userId: admin.id
	                        }
	                      }).then(function() {
	                        m.route(m.route())
	                      })
	                    }
	                  }, "Restore admin rights")
	                ]),
	                m("td", [
	                  //remove from admin completely
	                  m("button", {
	                    class: "btn-flat waves-effect waves-cyan waves-block waves-red hoverable",
	                    onclick: function() {
	                      var confirmation = confirm("Are you sure you want to remove him from your admins permanently?")

	                      if (confirmation == true) {
	                        m.request({
	                          url: apiUrl + "/basic/removeAdmin/" + m.route.param("uniId"),
	                          method: "POST",
	                          data: {
	                            userId: admin.id
	                          }
	                        }).then(function() {
	                          m.route(m.route())
	                        })
	                      }
	                    }
	                  }, "Remove as admin completely")
	                ]),
	                m("td", [
	                  m("button", {
	                    class: "btn-flat waves-effect waves-cyan waves-block hoverable"
	                  }, "View activity")
	                ])
	              ])
	            })
	          ])
	        ])
	      ])
	    ])
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// var myComponent = require("./noticeItem")

	var inputComponent = __webpack_require__(13);
	module.exports = {
	  controller:function(){
	    return {
	      admins:m.request({
	        url:apiUrl + "/basic/getAdmins/" + m.route.param("uniId"),
	        method:"GET"
	      }),
	      schema:{
	        userIdentifier:m.prop(""),
	        userUsername:m.prop(""),
	        userPassword:m.prop(""),
	        confirmPassword:m.prop(""),
	        //for the search existing user form
	        existingUserIdentifier:m.prop(""),
	      }
	    }
	  },
	  view:function(controller,atrrs){
	    return m(".row",[
	        m("div",{class:"col l8"},[

	        m("form",{
	          class:"card-panel",
	          onsubmit:function(e){
	            m.request({
	              url:apiUrl + "/basic/addNewAdminToUniversity/" + m.route.param("uniId"),
	              method:"POST",
	              data:{
	                userIdentifier:controller.schema.userIdentifier(),
	                userUsername:controller.schema.userUsername(),
	                userPassword:controller.schema.userPassword()
	              }
	            }).then(m.route("/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId") )) //back to view all admins
	            e.preventDefault();
	          }
	        },[
	          m("h1",{class:"center"},"Enter new admin user account"),

	          m(inputComponent,{
	            label:"Email",
	            type:"text",
	            sizes:"col l6",
	            value:controller.schema.userIdentifier
	          }),

	          m(inputComponent,{
	            label:"Surname",
	            type:"text",
	            sizes:"col l6",
	            value:controller.schema.userUsername
	          }),

	          m(inputComponent,{
	            label:"Password",
	            type:"password",
	            sizes:"col l6",
	            value:controller.schema.userPassword
	          }),

	          m(inputComponent,{
	            label:"Confirm Password",
	            type:"password",
	            sizes:"col l6",
	            value:controller.schema.confirmPassword
	          }),

	            m("button",{
	                type:"submit",
	                class:"btn waves-effect waves-block waves-light cyan"
	            },"Create User")
	        ])
	      ]),

	      m("div",{class:"col l4"},[
	        m("form",{
	          class:"card-panel",
	          onsubmit:function(e){
	            e.preventDefault();
	            // var move = 
	            m.request({
	              url:apiUrl + "/basic/addExistingUserToAdmin/" + m.route.param("uniId"),
	              method:"POST",
	              data:{
	                identifier:controller.schema.existingUserIdentifier(),
	              }
	            }).then(function(res){
	              console.log(res)
	              //back to view all admins
	              if(res.result === false){
	                alert("no user with that email was found")
	              }else{
	                m.route("/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId") )
	              }
	            }) 
	            
	          }
	        },[
	          m("h1",{class:"center"},"Search existing user"),
	          m(inputComponent,{
	            label:"Registered email",
	            type:"text",
	            sizes:"col l12 center",
	            value:controller.schema.existingUserIdentifier
	          }),
	            m("button",{
	                type:"submit",
	                dissabled:"true",
	                class:"btn waves-effect waves-block waves-light cyan"
	            },"Search User")
	        ])
	      ])
	    ])
	  }
	}


/***/ },
/* 43 */,
/* 44 */,
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	module.exports = {
	  controller: function() {
	    return {
	      schema: {
	        identifier: m.prop(""),
	        password: m.prop(""),
	        userType: m.prop("")
	      },
	      //other controller functions here
	      onunload: function() {
	        $("body").removeClass("blue centered");
	        $("html").removeClass("centered");
	      }
	    }
	  },
	  view: function(ctrl, args) {
	    return m("div", {
	      id: "login-page",
	      class: "row"
	    }, [

	      m(".col s12 z-depth-5 hoverable card-panel", {
	        id: "login-page",
	        config: function() {
	          $("body").addClass("blue centered");
	          $("html").addClass("centered");
	        }
	      }, [
	        m("form", {
	          onsubmit: function(e) {
	            e.preventDefault();
	            console.log("clicked")
	            m.request({
	              url: apiUrl + "/services",
	              method: "POST",
	              data: {
	                role: "university",
	                cmd: "auth",
	                userType: ctrl.schema.userType(),
	                uni_id: m.route.param("uniId"),
	                username: ctrl.schema.identifier(),
	                password: ctrl.schema.password(),
	              }
	            }).then(function(res) {
	              console.log(res)
	              if(res.eraro == true){
	                alert(res.orig.code)
	              }else{
	                m.route("/uniadmin/" + m.route.param("uniName") + "/" + m.route.param("uniId"))
	              }
	            })

	          }
	        }, [
	          m(".row", [
	            m(".input-field col s12 l12 center", [
	              m("img", {
	                src: "http://premiercollege.ac.rw/images/default/logo.png",
	                class: "responsive-img valign profile-image-login"
	              }),
	              // m("p", {
	              //   class: "center login-form-text"
	              // }, "login"),

	              m(".row margin", [

	                m(".input-field col s12", [
	                  // <i class="material-icons prefix">mode_edit</i>

	                  m("select", {
	                    config: () => {
	                      $('select').material_select();
	                    },
	                    onchange: (e) => {
	                      console.log(e.target.value)
	                      ctrl.schema.userType(e.target.value)
	                    }
	                  }, [

	                    m("option", {
	                      value: "",
	                      disabled: true,
	                      selected: true
	                    }, "Login as?"),

	                    m("option", {
	                      value: "admin",
	                    }, "Admin"),

	                    m("option", {
	                      value: "registra",
	                    }, "Registra"),

	                    m("option", {
	                      value: "student",
	                    }, "Student")

	                  ]),
	                  m("label", "Select user type")
	                ])

	              ]),

	            ])
	          ]),
	          m(".row margin", [
	            m(inputComponent, {
	              value: ctrl.schema.identifier,
	              label: "Email or Phone",
	              icon: "mdi-hardware-phonelink prefix",
	              type: "text",
	              sizes: "s12 m12 l12",
	            })
	          ]),


	          m(".row margin", [
	            m(inputComponent, {
	              value: ctrl.schema.password,
	              label: "Password",
	              icon: "mdi-action-lock prefix",
	              type: "password",
	              sizes: "s12 m12 l12 active",
	            })
	          ]),

	          m(".row", [
	            m(".input-field col s12", [
	              m("button", {
	                class: "btn  waves-effect waves-light col s12 blue",
	                type: "submit"
	              }, "authenticate me")
	            ])
	          ])
	        ])
	      ])
	    ])
	  }
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(47);

	var breadcrumb = __webpack_require__(48);

	var crumps = function(){
		return [
			{
	      text:"Schools",
	      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
	    },
		]
	}

	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	    	m(schools)
	    	// m(schools),
	    	// m(schools)
	    )
	  }
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var schools = [
	  {id:"1",text:"School of It"},
	  {id:"2",text:"School of law"}
	]

	module.exports = {
	  controller:function(){
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      schools:m.request({
	        url:apiUrl + "/basic/getSchools/" + m.route.param("uniId"),
	        method:"GET"
	      }),
	      schema:{
	        name:m.prop()
	      }
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",{class:"col l4"},[
	            m("form",{
	              class:"row",
	              onsubmit:function(e){
	                e.preventDefault()
	                m.request({
	                  url:apiUrl + "/basic/makeSchool/" + m.route.param("uniId"),
	                  method:"POST",
	                  data:{
	                    name:ctrl.schema.name()
	                  }
	                }).then(m.route( m.route( ) ))
	              }
	            },
	               m(inputComponent,{
	                        value:ctrl.schema.name,
	                        label:"Name of new School",
	                        icon:"mdi-image-exposure-plus-1 prefix",
	                        type:"text",
	                        sizes:"s12 m12 l10",
	                  }),
	                  m(".col l2",
	                    m("br"),
	                    m(".btn-floating waves-effect waves-light ",
	                      m("i",{class:"mdi-content-send blue"})
	                    )
	                  )
	            ),

	            m("ul",{class:"collection with-header"},[
	              m("li",{class:"collection-header blue white-text"},[
	                m("h4",{class:"task-card-title"},"Schools"),
	                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
	              ]),
	              ctrl.schools().proschools.map(function(school){
	                return m("a",{
	                  class:"collection-item waves-effect waves-dark " + (m.route.param("school_id") == school.id ? "grey lighten-2" : ""),
	                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + school.id,
	                  config:m.route
	                },school.name)
	              })
	        ])
	    ])
	  }
	}
	// "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + school.id + "/courses",
	// /uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "departments"


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(controller,attrs){
	    return m("div",
	    	// m("br"),
	    	m(".row",[
		     	m("nav",{class:"blue"},
		     		m(".nav-wrapper",
		     			m(".col s12",
		     				attrs.crumps.map(function(crump){
		     					return m("a",{
		     						config:m.route, 
		     						class:"breadcrumb",
		     						href:(crump.url ? crump.url :"")
		     					},crump.text)
		     				})
		     			)
		     		)
		     	)
		    ])
	    )
	  }
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(47);
	var courses = __webpack_require__(50);

	var breadcrumb = __webpack_require__(48);

	var crumps = function(){
		return [
			{
				text:"Schools",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
			},
			{
				text:"Departments",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id"),
			},
			{
				text:"Choice",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id"),
			},
			{
				text:"Courses",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses"
			},
		]
	}



	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	    	m(courses)
	    	// m(schools)
	    )
	  }
	}


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var courses = [
	   {id:"1",text:"IT"},
	   {id:"2",text:"BBIT"}
	]

	module.exports = {
	  controller:function(){
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      courses:m.request({
	        url:apiUrl + "/basic/getCourses/" + m.route.param("department_id"),
	        method:"GET"
	      }),
	      schema:{
	        name:m.prop()
	      }
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",{class:"col l4"},[
	            m("form",{
	              class:"row",
	              onsubmit:function(e){
	                e.preventDefault()
	                m.request({
	                  url:apiUrl + "/basic/makeCourse/" + m.route.param("department_id"),
	                  method:"POST",
	                  data:{
	                    name:ctrl.schema.name()
	                  }
	                }).then(m.route( m.route( ) ))
	              }
	            },
	               m(inputComponent,{
	                        value:ctrl.schema.name,
	                        label:"Name of new Course",
	                        icon:"mdi-image-exposure-plus-1 prefix",
	                        type:"text",
	                        sizes:"s12 m12 l10",
	                  }),
	                  m(".col l2",
	                    m("br"),
	                    m(".btn-floating waves-effect waves-light ",
	                      m("i",{class:"mdi-content-send blue"})
	                    )
	                  )
	            ),

	            m("ul",{class:"collection with-header"},[
	              m("li",{class:"collection-header blue white-text"},[
	                m("h4",{class:"task-card-title"},"Courses"),
	                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
	              ]),
	              ctrl.courses().courses.map(function(course){
	                return m("a",{
	                  class:"collection-item waves-effect waves-dark " + (m.route.param("course_id") == course.id ? "grey lighten-2" : ""),
	                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + course.id + "/levels",
	                  config:m.route
	                },course.name)
	              })
	        ])
	    ])
	  }
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var courses = __webpack_require__(50);
	var levels = __webpack_require__(52);
	var stages = __webpack_require__(53);


	var breadcrumb = __webpack_require__(48);

	var crumps = function(){
		return [
				{
					text:"Schools",
					url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
				},
				{
					text:"Departments",
					url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id"),
				},
				{
					text:"Choice",
					url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id"),
				},
				{
					text:"Courses",
					url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses"
				},
				{
					text:"Levels",
					url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels"
				},
				{
					text:"Stages",
					url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id"),

				},
		]
	}

	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
				m(courses),
				m(levels),
	    	m(stages)
	    	// m(stages)
	    	// m(schools)
	    )
	  }
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var levels = [
	  {id:"1",text:"diploma"},
	  {id:"2",text:"digree"}
	]

	module.exports = {
	  controller:function(){
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      levels:m.request({
	        url:apiUrl + "/basic/getLevels/" + m.route.param("course_id"),
	        method:"GET"
	      }),
	      schema:{
	        name:m.prop()
	      }
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",{class:"col l4"},[
	            m("form",{
	              class:"row",
	              onsubmit:function(e){
	                e.preventDefault()
	                m.request({
	                  url:apiUrl + "/basic/makeLevel/" + m.route.param("course_id"),
	                  method:"POST",
	                  data:{
	                    name:ctrl.schema.name()
	                  }
	                }).then(m.route( m.route( ) ))
	              }
	            },
	               m(inputComponent,{
	                        value:ctrl.schema.name,
	                        label:"Name of new Stage",
	                        icon:"mdi-image-exposure-plus-1 prefix",
	                        type:"text",
	                        sizes:"s12 m12 l10",
	                  }),
	                  m(".col l2",
	                    m("br"),
	                    m(".btn-floating waves-effect waves-light ",
	                      m("i",{class:"mdi-content-send blue"})
	                    )
	                  )
	            ),

	            m("ul",{class:"collection with-header"},[
	              m("li",{class:"collection-header blue white-text"},[
	                m("h4",{class:"task-card-title"},"Level"),
	                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
	              ]),
	              ctrl.levels().levels.map(function(level){
	                return m("a",{
	                  class:"collection-item waves-effect waves-dark " + (m.route.param("level_id") == level.id ? "grey lighten-2" : ""),
	                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + level.id,
	                  config:m.route
	                },level.name)
	              })
	        ])
	    ])
	  }
	}


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var stages = [
	  {id:"1",text:"semester 1"},
	  {id:"2",text:"semester 1"},
	  {id:"3",text:"stage 1"}
	]

	module.exports = {
	  controller:function(){
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      stages:m.request({
	        url:apiUrl + "/basic/getStages/" + m.route.param("level_id"),
	        method:"GET"
	      }),
	      schema:{
	        name:m.prop()
	      }
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",{class:"col l4"},[
	            m("form",{
	              class:"row",
	              onsubmit:function(e){
	                e.preventDefault()
	                m.request({
	                  url:apiUrl + "/basic/makeStage/" + m.route.param("level_id"),
	                  method:"POST",
	                  data:{
	                    name:ctrl.schema.name()
	                  }
	                }).then(m.route( m.route( ) ))
	              }
	            },
	               m(inputComponent,{
	                        value:ctrl.schema.name,
	                        label:"Name of new Semester",
	                        icon:"mdi-image-exposure-plus-1 prefix",
	                        type:"text",
	                        sizes:"s12 m12 l10",
	                  }),
	                  m(".col l2",
	                    m("br"),
	                    m(".btn-floating waves-effect waves-light ",
	                      m("i",{class:"mdi-content-send blue"})
	                    )
	                  )
	            ),

	            m("ul",{class:"collection with-header"},[
	              m("li",{class:"collection-header blue white-text"},[
	                m("h4",{class:"task-card-title"},"Semesters/Terms"),
	                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
	              ]),
	              ctrl.stages().stages.map(function(stage){
	                return m("a",{
	                  class:"collection-item waves-effect waves-dark " + (m.route.param("stage_id") == stage.id ? "grey lighten-2" : ""),
	                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + + m.route.param("level_id") + "/stages/" + stage.id + "/units",
	                  config:m.route
	                },stage.name)
	              })
	        ])
	    ])
	  }
	}


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(47);
	var stages = __webpack_require__(53);
	var units_selected = __webpack_require__(55);


	var breadcrumb = __webpack_require__(48);

	var crumps = function(){
		return [
			{
				text:"Schools",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
			},
			{
				text:"Departments",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id"),
			},
			{
				text:"Choice",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id"),
			},
			{
				text:"Courses",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses"
			},
			{
				text:"Levels",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels"
			},
			{
				text:"Stages",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id"),
			},
			{
				text:"Available Units",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + + m.route.param("level_id") + "/stages/" + m.route.param("stage_id") + "/units",
			}
		]
	}



	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	    	m(units_selected)
	    	// m(schools)
	    )
	  }
	}


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var selectedUnits = [
	  {id:"2",text:"bbb"},
	  {id:"3",text:"bbc"}
	]

	var units = [
	  {id:"1",text:"bbb"},
	  {id:"2",text:"bba"},
	  {id:"3",text:"bbc"}
	]

	var drops = [
	  {id:"1",text:"Dep of ECDE"},
	  {id:"2",text:"Dep of Environment"},
	]

	module.exports = {
	  controller:function(){
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      units_selected:m.request({
	        url:apiUrl + "/basic/getUnitsOffered/" + m.route.param("stage_id"),
	        method:"GET"
	      }),
	      // units_available:m.request({
	      //   url:apiUrl + "/basic/getUnitsOffered/" + m.route.param("selectedDepartment"),
	      //   method:"GET"
	      // }),
	      departments:m.request({
	        url:apiUrl + "/basic/getDepartments/" + m.route.param("school_id"),
	        method:"GET"
	      }),
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",
	        m("div",{class:"col l4"},[
	              m("form",{class:"row"},
	                 // m(inputComponent,{
	                 //          label:"Name of new Level",
	                 //          icon:"mdi-image-exposure-plus-1 prefix",
	                 //          type:"text",
	                 //          sizes:"s12 m12 l10",
	                 //    }),
	                 //    m(".col l2",
	                 //      m("br"),
	                 //      m(".btn-floating waves-effect waves-light ",
	                 //        m("i",{class:"mdi-content-send blue"})
	                 //      )
	                 //    )
	                m(".input-field col s12",
	                  m("select",{
	                    config:function(){
	                      $('select').material_select();
	                    },
	                    onchange:function(e){
	                      // console.log(e)
	                      // alert(e.target.value)

	                      m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + + m.route.param("level_id") + "/stages/" + m.route.param("stage_id") + "/units/" + e.target.value)
	                    }
	                  },

	                    m("option",{
	                      value:"",
	                      disabled:true,
	                      selected:true,
	                    },"Select department for units"),

	                    ctrl.departments().departments.map(function(drop){
	                      return m("option",{
	                        value:drop.id
	                      },drop.name)
	                    })

	                  )
	                )
	              ),


	              m("ul",{class:"collection with-header"},[
	                m("li",{class:"collection-header blue white-text"},[
	                  m("h4",{class:"task-card-title"},"Available Units"),
	                  // m("p",{class:"task-card-date"},"Click to select add the unit to the semester"),
	                ]),
	                // ctrl.units_selected().units_i_offer.map(function(unit){
	                //   return m("a",{
	                //     class:"collection-item waves-effect waves-dark",
	                //     href:"javaScript:void(0);"
	                //   },unit.name)
	                // })

	          ]),
	          m("h6",{class:"center"},"Please select a department above")
	      ]),
	        m("div",{class:"col l4"},[
	              m("ul",{class:"collection with-header"},[
	                m("li",{class:"collection-header blue white-text"},[
	                  m("h4",{class:"task-card-title"},"Selected Units"),
	                  // m("p",{class:"task-card-date"},"Some other management thing :-)"),
	                ]),
	                ctrl.units_selected().units_i_offer.map(function(unit){
	                  return m("a",{
	                    class:"collection-item waves-effect waves-dark",
	                    href:"javaScript:void(0);"
	                  },unit.name)
	                })
	          ])
	      ])
	    )
	  }
	}


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var departments = __webpack_require__(57);

	var breadcrumb = __webpack_require__(48);
	var schools = __webpack_require__(47);

	var crumps = function(){
		return [
			{
	      text:"Schools",
	      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
	    },
			{
	      text:"Departments",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id"),
	    },
		]
	}

	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	      m(schools),
	    	m(departments)
	    	// m(schools)
	    )
	  }
	}


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var schools = [
	  {id:"1",text:"School of It"},
	  {id:"2",text:"School of law"}
	]

	module.exports = {
	  controller:function(){
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      schools:m.request({
	        url:apiUrl + "/basic/getDepartments/" + m.route.param("school_id"),
	        method:"GET"
	      }),
	      schema:{
	        name:m.prop()
	      }
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",{class:"col l4"},[
	            m("form",{
	              class:"row",
	              onsubmit:function(e){
	                e.preventDefault()
	                m.request({
	                  url:apiUrl + "/basic/makeDepartments/" + m.route.param("school_id"),
	                  method:"POST",
	                  data:{
	                    name:ctrl.schema.name()
	                  }
	                }).then(m.route( m.route( ) ))
	              }
	            },
	               m(inputComponent,{
	                        value:ctrl.schema.name,
	                        label:"Name of new Department",
	                        icon:"mdi-image-exposure-plus-1 prefix",
	                        type:"text",
	                        sizes:"s12 m12 l10",
	                  }),
	                  m(".col l2",
	                    m("br"),
	                    m(".btn-floating waves-effect waves-light ",
	                      m("i",{class:"mdi-content-send blue"})
	                    )
	                  )
	            ),

	            m("ul",{class:"collection with-header"},[
	              m("li",{class:"collection-header blue white-text"},[
	                m("h4",{class:"task-card-title"},"Departments"),
	                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
	              ]),
	              ctrl.schools().departments.map(function(department){
	                return m("a",{
	                  class:"collection-item waves-effect waves-dark " + (m.route.param("department_id") == department.id ? "grey lighten-2" : ""),
	                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + department.id,
	                  config:m.route
	                },department.name)
	              })
	        ])
	    ])
	  }
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var departments = __webpack_require__(57);
	var choices = __webpack_require__(59);


	var breadcrumb = __webpack_require__(48);

	var schools = __webpack_require__(47);

	var crumps = function(){
		return [
			{
				text:"Schools",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
			},
			{
				text:"Departments",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id"),
			},
			{
				text:"Choice",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id"),
			},
		]
	}

	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	      m(schools),
	    	m(departments),
	      m(choices)
	    	// m(schools)
	    )
	  }
	}


/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m(".row",[
	              m("br"),
	              m("br"),
	              m("br"),
	              m("br"),
	      m("ul",{class:"collection with-header col l3"},[
	              m("a",{
	                  class:"collection-item waves-effect waves-dark ",
	                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses",
	                  config:m.route
	              },"Manage Courses"),
	      ]),

	      m("ul",{class:"collection with-header col l3"},[
	              m("a",{
	                  class:"collection-item waves-effect waves-dark ",
	                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/units", 
	                  config:m.route
	              },"Manage Units")
	        ])
	    ])
	  }
	}


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(47);
	var courses = __webpack_require__(50);
	var levels = __webpack_require__(52);


	var breadcrumb = __webpack_require__(48);

	var crumps = function(){
		return [
			{
				text:"Schools",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
			},
			{
				text:"Departments",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id"),
			},
			{
				text:"Choice",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id"),
			},
			{
				text:"Courses",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses"
			},
			{
				text:"Levels",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels"
			},
		]
	}

	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	    	m(courses),
	    	m(levels)
	    )
	  }
	}


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(47);
	var stages = __webpack_require__(53);
	var units_available = __webpack_require__(62);


	var breadcrumb = __webpack_require__(48);

	var crumps = function(){
		return [
			{
				text:"Schools",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
			},
			{
				text:"Departments",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id"),
			},
			{
				text:"Choice",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id"),
			},
			{
				text:"Courses",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses"
			},
			{
				text:"Levels",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels"
			},
			{
				text:"Stages",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id"),
			},

			{
				text:"Add Units",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + + m.route.param("level_id") + "/stages/" + m.route.param("stage_id") + "/units/" + m.route.param("selectedDepartment"),
			}
		]
	}

	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	    	m(units_available)
	    	// m(schools)
	    )
	  }
	}


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var selectedUnits = [
	  {id:"2",text:"bbb"},
	  {id:"3",text:"bbc"}
	]

	var units = [
	  {id:"1",text:"bbb"},
	  {id:"2",text:"bba"},
	  {id:"3",text:"bbc"}
	]

	var drops = [
	  {id:"1",text:"Dep of ECDE"},
	  {id:"2",text:"Dep of Environment"},
	]

	module.exports = {
	  controller:function(){
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      units_selected:m.request({
	        url:apiUrl + "/basic/getUnitsOffered/" + m.route.param("stage_id"),
	        method:"GET"
	      }),
	      units_available:m.request({
	        url:apiUrl + "/basic/getUnitsAvailable/" + m.route.param("selectedDepartment"),
	        method:"GET"
	      }),
	      departments:m.request({
	        url:apiUrl + "/basic/getDepartments/" + m.route.param("school_id"),
	        method:"GET"
	      }),
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",
	        m("div",{class:"col l4"},[
	              m("form",{class:"row"},
	                 // m(inputComponent,{
	                 //          label:"Name of new Level",
	                 //          icon:"mdi-image-exposure-plus-1 prefix",
	                 //          type:"text",
	                 //          sizes:"s12 m12 l10",
	                 //    }),
	                 //    m(".col l2",
	                 //      m("br"),
	                 //      m(".btn-floating waves-effect waves-light ",
	                 //        m("i",{class:"mdi-content-send blue"})
	                 //      )
	                 //    )
	                m(".input-field col s12",
	                  m("select",{
	                    config:function(){
	                      $('select').material_select();
	                    },
	                    onchange:function(e){
	                      // console.log(e)
	                      // alert(e.target.value)
	                      m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages/" + m.route.param("stage_id")  + "/units/" + e.target.value)
	                    }
	                  },

	                    m("option",{
	                      value:"",
	                      disabled:true,
	                      selected:true,
	                    },"Select department for units"),

	                    ctrl.departments().departments.map(function(drop){
	                      return m("option",{
	                        value:drop.id,
	                        selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
	                      },drop.name)
	                    })

	                  )
	                )
	              ),


	              m("ul",{class:"collection with-header"},[
	                m("li",{class:"collection-header blue white-text"},[
	                  m("h4",{class:"task-card-title"},"Available Units"),
	                  // m("p",{class:"task-card-date"},"Click to select add the unit to the semester"),
	                ]),
	                ctrl.units_available().units.map(function(unit){
	                  return m("a",{
	                    class:"collection-item waves-effect waves-dark",
	                    href:"javaScript:void(0);",
	                    onclick:() => {
	                      // alert("adding")
	                      m.request({
	                        url:apiUrl + "/basic/addUnitToStage/" + m.route.param("stage_id"),
	                        method:"POST",
	                        data:{
	                          unit_id:unit.id
	                        }
	                      }).then(m.route( m.route( ) ))
	                    }
	                  },unit.name)
	                })
	          ])
	      ]),
	        m("div",{class:"col l4"},[
	              m("ul",{class:"collection with-header"},[
	                m("li",{class:"collection-header blue white-text"},[
	                  m("h4",{class:"task-card-title"},"Selected Units"),
	                  // m("p",{class:"task-card-date"},"Some other management thing :-)"),
	                ]),
	                ctrl.units_selected().units_i_offer.map(function(unit){
	                  return m("a",{
	                    class:"collection-item waves-effect waves-dark",
	                    href:"javaScript:void(0);"
	                  },unit.name)
	                })
	          ])
	      ])
	    )
	  }
	}


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(47);
	var departments = __webpack_require__(57);
	var units = __webpack_require__(64);


	var breadcrumb = __webpack_require__(48);

	var crumps = function(){
		return [
			{
				text:"Departments",
				url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id"),
			},
	    {
	      text:"Manage Units",
	      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/units",
				config:m.route
	    }
		]
	}

	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	      m(units)
	    	// m(schools)
	    )
	  }
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var schools = [{
	  id: "1",
	  text: "School of It"
	}, {
	  id: "2",
	  text: "School of law"
	}]

	module.exports = {
	  controller: function() {
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      schools: m.request({
	        url: apiUrl + "/basic/getUnitsAvailable/" + m.route.param("department_id"),
	        method: "GET"
	      }),
	      schema: {
	        name: m.prop(),
	        cost: m.prop()
	      }
	    }
	  },
	  view: function(ctrl, args) {
	    return m("div", {
	      class: "col l4"
	    }, [
	      m("form", {
	          class: "row",
	          onsubmit: function(e) {
	            e.preventDefault()
	            m.request({
	              url: apiUrl + "/basic/makeUnits/" + m.route.param("department_id"),
	              method: "POST",
	              data: {
	                name: ctrl.schema.name(),
	                cost: ctrl.schema.cost()
	              }
	            }).then(m.route(m.route()))
	          }
	        },
	        m(inputComponent, {
	          value: ctrl.schema.name,
	          label: "Name of new Unit",
	          type: "text",
	          sizes: "s12 m12 l10",
	        }),
	        m(".col l2",
	          m("br"),
	          m("button", {
	              type: "submit",
	              class: "btn-floating waves-effect waves-light"
	            },
	            m("i", {
	              class: "mdi-content-send blue"
	            })
	          )
	        )
	      ),

	      m("ul", {
	        class: "collection with-header"
	      }, [
	        m("li", {
	          class: "collection-header blue white-text"
	        }, [
	          m("h4", {
	            class: "task-card-title"
	          }, "Units"),
	          // m("p",{class:"task-card-date"},"Some other management thing :-)"),
	        ]),
	        ctrl.schools().units.map(function(school) {
	          return m("a", {
	            class: "collection-item waves-effect waves-dark waves-block " + (m.route.param("unit_id") == school.id ? "grey lighten-2" : ""),
	            id: school.id + "parent",
	            href: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/units/" + school.id + "/prices",
	            config: m.route
	          }, school.name)
	        })
	      ])
	    ])
	  }
	}



/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var prices = __webpack_require__(66);
	var units = __webpack_require__(64)
	var breadcrumb = __webpack_require__(48);

	var crumps = function(){
		return [
			{
	      text:"Departments",
	      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "departments"
	    },
		]
	}

	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	      m(units),
	    	m(prices)
	    	// m(schools),
	    	// m(schools)
	    )
	  }
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var prices = [{
	  id: "1",
	  text: "price of It"
	}, {
	  id: "2",
	  text: "price of law"
	}]

	module.exports = {
	  controller: function() {
	    return {
	      // prices:m.request({method:"GET","url:"}),
	      unit: m.request({
	        url: apiUrl + "/services",
	        method: "POST",
	        data: {
	          role: "unit",
	          cmd: "get_prices",
	          unit_id: m.route.param("unit_id")
	        }
	      }),
	      schema: {
	        price: m.prop()
	      }
	    }
	  },
	  view: function(ctrl, args) {
	    return m("div", {
	      class: "col l4"
	    }, [
	      m("form", {
	          class: "row",
	          onsubmit: function(e) {
	            e.preventDefault()
	            m.request({
	              url: apiUrl + "/services",
	              method: "POST",
	              data: {
	                role: "unit",
	                cmd: "add_price",
	                unit_id: m.route.param("unit_id"),
	                ammount: ctrl.schema.price()
	              }
	            }).then(m.route(m.route()))
	          }
	        },
	        m(inputComponent, {
	          value: ctrl.schema.price,
	          label: "Name of new tri-semester",
	          icon: "mdi-image-exposure-plus-1 prefix",
	          type: "text",
	          sizes: "s12 m12 l10",
	        }),
	        m(".col l2",
	          m("br"),
	          m(".btn-floating waves-effect waves-light ",
	            m("i", {
	              class: "mdi-content-send blue"
	            })
	          )
	        )
	      ),

	      m("ul", {
	        class: "collection with-header"
	      }, [
	        m("li", {
	          class: "collection-header blue white-text"
	        }, [
	          m("h4", {
	            class: "task-card-title"
	          }, "Prices"),
	          // m("p", {
	          //   class: "task-card-date"
	          // }, "Active price is ", m("u", (ctrl.prices().active_tri_semester ? ctrl.prices().active_tri_semester.name : ""))),
	        ]),
	        ctrl.unit().result.other_prices.map(function(price) {
	          console.log(ctrl.unit().result)
	          console.log(price.id + " - " + ctrl.unit().result.price)
	          return m("li", {
	            class: "collection-item " + (price.id === ctrl.unit().result.price ? "grey lighten-2" : ""),
	          }, price.ammount, [

	            m("a", {
	                class: "secondary-content waves-effect waves-light waves-block"
	              },
	              m("i", {
	                class: "mdi-action-trending-up hoverable",
	                onclick: () => {
	                  m.request({
	                    url: apiUrl + "/services",
	                    method: "POST",
	                    data: {
	                      role: "unit",
	                      cmd: "make_price_active",
	                      unit_id: m.route.param("unit_id"),
	                      price_id: price.id
	                    }
	                  }).then(m.route(m.route()))
	                }
	              }),

	              m("i", {
	                class: "mdi-navigation-close hoverable",
	                onclick: () => {
	                  var q = confirm("are you sure you want to remove this price?... accounts may go off balance for payments made for this price")

	                  if (q) {
	                    m.request({
	                      url: apiUrl + "/services",
	                      method: "POST",
	                      data: {
	                        role: "unit",
	                        cmd: "destroy_price",
	                        price_id: price.id
	                      }
	                    }).then(m.route(m.route()))
	                  }

	                }
	              })
	            )
	          ])
	        })
	      ])
	    ])
	  }
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var study_modes = __webpack_require__(68);

	var breadcrumb = __webpack_require__(48);

	var crumps = function(){
		return [
			{
	      text:"Departments",
	      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "departments"
	    },
		]
	}

	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	    	m(study_modes)
	    	// m(schools),
	    	// m(schools)
	    )
	  }
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var schools = [
	  {id:"1",text:"School of It"},
	  {id:"2",text:"School of law"}
	]

	module.exports = {
	  controller:function(){
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      schools:m.request({
	        url:apiUrl + "/basic/getStudy_sessions/" + m.route.param("uniId"),
	        method:"GET"
	      }),
	      schema:{
	        name:m.prop()
	      }
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",{class:"col l4"},[
	            m("form",{
	              class:"row",
	              onsubmit:function(e){
	                e.preventDefault()
	                m.request({
	                  url:apiUrl + "/basic/makeStudy_session/" + m.route.param("uniId"),
	                  method:"POST",
	                  data:{
	                    name:ctrl.schema.name()
	                  }
	                }).then(m.route( m.route( ) ))
	              }
	            },
	               m(inputComponent,{
	                        value:ctrl.schema.name,
	                        label:"Name of new study Session",
	                        icon:"mdi-image-exposure-plus-1 prefix",
	                        type:"text",
	                        sizes:"s12 m12 l10",
	                  }),
	                  m(".col l2",
	                    m("br"),
	                    m(".btn-floating waves-effect waves-light ",
	                      m("i",{class:"mdi-content-send blue"})
	                    )
	                  )
	            ),

	            m("ul",{class:"collection with-header"},[
	              m("li",{class:"collection-header blue white-text"},[
	                m("h4",{class:"task-card-title"},"Study Modes"),
	                // m("p",{class:"task-card-date"},"Some other management thing :-)"),
	              ]),
	              ctrl.schools().study_sessions.map(function(school){
	                return m("a",{
	                  class:"collection-item waves-effect waves-dark " + (m.route.param("department_id") == school.id ? "grey lighten-2" : ""),
	                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "departments/" + school.id + "/units",
	                  config:m.route
	                },school.name)
	              })
	        ])
	    ])
	  }
	}


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var tri_sems = __webpack_require__(70);

	var breadcrumb = __webpack_require__(48);

	var crumps = function(){
		return [
			{
	      text:"Departments",
	      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "departments"
	    },
		]
	}

	module.exports = {
	  view:function(controller,atrrs){
	    return m(".row",
	    	m(breadcrumb,{crumps:crumps()}),
	    	m(tri_sems)
	    	// m(schools),
	    	// m(schools)
	    )
	  }
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var schools = [
	  {id:"1",text:"School of It"},
	  {id:"2",text:"School of law"}
	]

	module.exports = {
	  controller:function(){
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      schools:m.request({
	        url:apiUrl + "/basic/getTri_semesters/" + m.route.param("uniId"),
	        method:"GET"
	      }),
	      schema:{
	        name:m.prop()
	      }
	    }
	  },
	  view:function(ctrl,args){
	    return m("div",{class:"col l4"},[
	            m("form",{
	              class:"row",
	              onsubmit:function(e){
	                e.preventDefault()
	                m.request({
	                  url:apiUrl + "/basic/makeTri_semester/" + m.route.param("uniId"),
	                  method:"POST",
	                  data:{
	                    name:ctrl.schema.name()
	                  }
	                }).then(m.route( m.route( ) ))
	              }
	            },
	               m(inputComponent,{
	                        value:ctrl.schema.name,
	                        label:"Name of new tri-semester",
	                        icon:"mdi-image-exposure-plus-1 prefix",
	                        type:"text",
	                        sizes:"s12 m12 l10",
	                  }),
	                  m(".col l2",
	                    m("br"),
	                    m(".btn-floating waves-effect waves-light ",
	                      m("i",{class:"mdi-content-send blue"})
	                    )
	                  )
	            ),

	            m("ul",{class:"collection with-header"},[
	              m("li",{class:"collection-header blue white-text"},[
	                m("h4",{class:"task-card-title"},"Tri-Semesters"),
	                m("p",{class:"task-card-date"},"Active tri_semester is ",m("u",(ctrl.schools().active_tri_semester ? ctrl.schools().active_tri_semester.name : ""))),
	              ]),
	              ctrl.schools().tri_semesters.map(function(school){
	                return m("li",{
	                  class:"collection-item " + ( ctrl.schools().active_tri_semester ? (ctrl.schools().active_tri_semester.id == school.id ? "grey lighten-2" : "") : ""),
	                },school.name,[
	                  // <a href="#!" class="secondary-content"><i class="material-icons">send</i></a>
	                  m("a",{
	                    class:"secondary-content waves-effect waves-light waves-block"
	                  },
	                    m("i",{
	                      class:"mdi-action-trending-up hoverable",
	                      onclick:()=>{
	                        m.request({
	                          url:apiUrl + "/basic/makeTri_semesterActive/" + m.route.param("uniId"),
	                          method:"POST",
	                          data:{
	                            tri_semester_id:school.id
	                          }
	                        }).then(m.route( m.route( ) ))
	                      }
	                    }),

	                    m("i",{
	                      class:"mdi-navigation-close hoverable",
	                      onclick:()=>{
	                        m.request({
	                          url:apiUrl + "/basic/makeTri_semesterDead/" + school.id,
	                          method:"GET",
	                        }).then(m.route( m.route( ) ))
	                        // alert("aweosmness")
	                      }
	                    })
	                  )
	                ])
	              })
	        ])
	    ])
	  }
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var payments = __webpack_require__(72);

	var breadcrumb = __webpack_require__(48);

	var crumps = function() {
		return [{
			text: "Payment options",
			url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
		}]
	}

	module.exports = {
		view: function(controller, atrrs) {
			return m(".row",
				m(breadcrumb, {
					crumps: crumps()
				}),
				m(payments)
			)
		}
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var levels = [{
	  id: "1",
	  text: "diploma"
	}, {
	  id: "2",
	  text: "digree"
	}]

	module.exports = {
	  controller: function() {
	    return {
	      // schools:m.request({method:"GET","url:"}),
	      pay_channels: m.request({
	        url: apiUrl + "/services",
	        method: "POST",
	        data: {
	          role: "finance",
	          cmd: "get_payment_channels_in_a_uni",
	          uni_id: m.route.param("uniId")
	        }
	      }),
	      schema: {
	        channel_name: m.prop(),
	        channel_number: m.prop(),
	        location: m.prop()
	      }
	    }
	  },
	  view: function(ctrl, args) {
	    return m("div", {
	      class: "col l4"
	    }, [
	      m("form", {
	          class: "row",
	          onsubmit: function(e) {
	            e.preventDefault()
	            m.request({
	              url: apiUrl + "/services",
	              method: "POST",
	              data: {
	                role: "finance",
	                cmd: "create_payment_chanel",
	                channel_name: ctrl.schema.channel_name(),
	                uni_id: m.route.param("uniId"),
	                channel_number: ctrl.schema.channel_number(),
	                location: ctrl.schema.location()
	              }
	            }).then(m.route(m.route()))
	          }
	        },
	        m(inputComponent, {
	          value: ctrl.schema.channel_name,
	          label: "Name of new Channel",
	          type: "text",
	          sizes: "s12 m12 l12",
	        }),

	        m(inputComponent, {
	          value: ctrl.schema.channel_number,
	          label: "Unique Number ie. bank account number",
	          type: "text",
	          sizes: "s12 m12 l12",
	        }),

	        m(inputComponent, {
	          value: ctrl.schema.location,
	          label: "location of payment, mobile/stateName",
	          type: "text",
	          sizes: "s12 m12 l10",
	        }),

	        m(".col l2",
	          m("br"),
	          m("button", {
	              type: "submit",
	              class: "btn-floating waves-effect waves-light "
	            },
	            m("i", {
	              class: "mdi-content-send blue"
	            })
	          )
	        )
	      ),

	      m("ul", {
	        class: "collection with-header"
	      }, [
	        m("li", {
	          class: "collection-header blue white-text"
	        }, [
	          m("h4", {
	            class: "task-card-title"
	          }, "Payment channels")
	        ]),
	        ctrl.pay_channels().result.map(function(channel) {
	          return m("a", {
	            class: "collection-item",
	          }, channel.name + " - " + channel.channel_number + " - " + channel.location)
	        })

	      ])
	    ])
	  }
	}

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = {
		controller: (args) => {
			var getTri_semesters = m.request({
				method: "GET",
				url: apiUrl + "/basic/getTri_semesters/" + m.route.param("uniId")
			})
			return {
				students: m.request({
					method: "GET",
					url: apiUrl + "/basic/getAllStudents/" + m.route.param("uniId")
				}),
				getTri_semesters: getTri_semesters
			}
		},
		view: (ctrl, args) => {
			return m("span", [
				m("nav", [
					m(".nav-wrapper blue", [
						m(".col s6", [
							m("a", {
								class: "breadcrumb"
							}, "Dashboard"),
							m("a", {
								class: "breadcrumb"
							}, "All Students"),
						])
					])
				]),
				m("br"),

				m("div", {
					class: "container"
				}, [
					m("a", {
						class: "btn right blue",
						href: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students",
						config: m.route
					}, "New Student"),
					m("br"),

					m("table", [

						m("thead", [
							m("tr", [
								// m("th","id"),
								m("th", "name"),
								m("th", "adm"),
								m("th", "course"),
								m("th", "level"),
								m("th", "stage"),
								m("th", "study_mode")
							])
						]),
						m("tbody", [
							ctrl.students().map((student) => {
								return m("tr", [
									// m("td",student.id),
									m("td", student.adm),
									m("td", student.name),
									m("td", student.course ? student.course.name : ""),
									m("td", student.level ? student.level.name : ""),
									m("td", student.stage ? student.stage.name : ""),
									m("td", student.study_mode ? student.study_mode.name : ""),
									
									m("td", [
										m("a", {
											href: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/viewpayments/" + student.id,
											config: m.route
										}, "View payments")
									]),
									
								])
							})
						])
					])
				])
			])
		}
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var toogle = __webpack_require__(75);
	var courses = __webpack_require__(76)
	var stages = __webpack_require__(77)
	var semesters = __webpack_require__(78)
	var units = __webpack_require__(79)
	var studentInfo = __webpack_require__(27)

	module.exports = {
		controller: () => {
			// http://localhost:3000/basic/getTri_semesters/570a8fd2b1a9b99a0d2fc9a6
			var availableTrisemesters = m.request({
				method: "GET",
				url: apiUrl + "/student/getDepartmentsAndCourses/" + m.route.param("student_id")
			})
			var getTri_semesters = m.request({
				method: "GET",
				url: apiUrl + "/basic/getTri_semesters/" + m.route.param("uniId")
			})
			var availableUnits = m.request({
				method: "GET",
				url: apiUrl + "/basic/getUnitsOfferedVersusStudent/" + m.route.param("semester_id") + "/" + m.route.param("student_id") + "/" + m.route.param("tri_sem_id")
			})

			var selectedUnits = m.request({
				method: "GET",
				url: apiUrl + "/student/getMyUnits/" + m.route.param("student_id")
			})

			return {
				selected: m.prop(false),
				results: availableTrisemesters,
				units: availableUnits,
				selectedUnits: selectedUnits,
				getTri_semesters: getTri_semesters,
				selectedTrisem: m.prop("")
			}
		},
		view: (ctrl, args) => {
			return m(".container row", [
				m(studentInfo),
				m(".card-panel", [
					m(".input-field col s12 l4", [
						m("select", {
								config: function() {
									$('select').material_select();
								},
								onchange: function(e) {
									// ctrl.schema.trisem(e.target.value)
									ctrl.selectedTrisem(e.target.value)
									m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/config/" + m.route.param("student_id") + "/units/" + m.route.param("semester_id") + "/" + e.target.value)
								}
							},

							m("option", {
								value: "",
								// disabled: true,
								selected: true,
							}, "Select trimester"),

							ctrl.getTri_semesters().tri_semesters.map(function(stage) {
								console.log(stage.id + " " + m.route.param("tri_sem_id"))
								return m("option", {
									value: stage.id,
									// disabled:true,
									selected: (stage.id == m.route.param("tri_sem_id") ? true : false)
								}, stage.name)
							})

						)
					]),
					m(".input-field col s12 l8", [
						m("select", {
								config: function() {
									$('select').material_select();
								},
								onchange: function(e) {
									m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/config/" + m.route.param("student_id") + "/units/" + e.target.value + "/" + m.route.param("tri_sem_id"))
								}
							},

							m("option", {
								value: "",
								// disabled: true,
								selected: true,
							}, "Select Semester to register to"),

							ctrl.results().availableStages.map(function(stage) {
								return m("option", {
									value: stage.id,
									// disabled:true,
									selected: (stage.id == m.route.param("semester_id") ? true : false)
								}, stage.level.course.name + " - " + stage.level.name + " - " + stage.name)
							})

						)
					]),
					m(".row container", [
						// console.log(ctrl.units()),
						ctrl.units().units_i_offer.map(function(unit) {
							var random = Math.random()
							return m("p", [
								m("input", {
									type: "checkbox",
									class: "filled-in",
									id: "filled-in-box" + random,
									checked: unit.selected,
									onchange: (e) => {
										// alert("changed " + e.target.checked)
										//send request to add this unit to the list that this student has done
										if (unit.selected === false) {
											m.request({
												method: "GET",
												url: apiUrl + "/student/AddUnitToMyself/" + m.route.param("student_id") + "/" + unit.id + "/" + m.route.param("semester_id") + "/" + m.route.param("tri_sem_id")
											}).then(m.route(m.route()))
										} else {
											m.request({
												method: "GET",
												url: apiUrl + "/student/RemoveUnitFromMyself/" + m.route.param("student_id") + "/" + unit.id + "/" + m.route.param("semester_id") + "/" + m.route.param("tri_sem_id")
											}).then(m.route(m.route()))
										}

									}
								}),
								m("label", {
									for: "filled-in-box" + random
								}, unit.name)
							])
						})
					])
				])
			])
		}
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {
		view:(ctrl,args)=>{
			return m(".switch",[
					m("label",
						args.beforeTxt ? args.beforeTxt : args.beforeTxt,
						m("input[type=checkbox]", {
	                        onclick: m.withAttr("checked", args.value), 
	                        checked: args.value(),
	                        onchange:(e)=>{
								args.onChange ? args.onChange(args.value()) :""
							}
	                    }),
						m("span",{class:"lever"}),
						args.afterTxt ? args.afterTxt : args.afterTxt
					)
				])
		}
	}



/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = {
		controller(){
			return {
				departments:m.request({
					method:"GET",
					url:apiUrl + "/student/getDepartmentsAndCourses/" + m.route.param("student_id")
				})
			}
		},
		view(ctrl,args){
			return m("div",[
				m("h5","Courses Available"),
				ctrl.departments().availableCourses.map((course)=>{
					return ("ul",[
						m("li",course.name,[
							m("button",{
								onclick:(e)=>{
									m.request({
										method:"GET",
										url:apiUrl + "/student/addCourseToMyself/" + m.route.param("student_id") + "/" + course.id
									}).then(m.route( m.route( ) ))
								}
							},"select")
						])
					])
				}),
				m("h5","Courses registered to"),
				ctrl.departments().selectedCourses.map((course)=>{
					return m("li",course.name,[
						m("button",{
								onclick:(e)=>{
									m.request({
										method:"GET",
										url:apiUrl + "/student/RemoveCourseFromMyself/" + m.route.param("student_id") + "/" + course.id
									}).then(m.route( m.route( ) ))
								}
							},"remove")
					])
				})
			])

		}
	}


/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = {
	  controller(){
	    return {
	      departments:m.request({
	        method:"GET",
	        url:apiUrl + "/student/getDepartmentsAndCourses/" + m.route.param("student_id")
	      })
	    }
	  },
	  view(ctrl,args){
	    return m("div",[
	      m("h5","Available Stages"),
	      ctrl.departments().availableLevels.map((course)=>{
	        return ("ul",[
	          m("li",course.name,[
	            m("button",{
	              onclick:(e)=>{
	                m.request({
	                  method:"GET",
	                  url:apiUrl + "/student/addLevelToMyself/" + m.route.param("student_id") + "/" + course.id
	                }).then(m.route( m.route( ) ))
	              }
	            },"select")
	          ])
	        ])
	      }),
	      m("h5","Registered Stages"),
	      ctrl.departments().selectedLevels.map((course)=>{
	        return m("li",course.name,[
	          m("button",{
	              onclick:(e)=>{
	                m.request({
	                  method:"GET",
	                  url:apiUrl + "/student/RemoveLevelFromMyself/" + m.route.param("student_id") + "/" + course.id
	                }).then(m.route( m.route( ) ))
	              }
	            },"remove")
	        ])
	      })
	    ])

	  }
	}


/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = {
	  controller(){
	    return {
	      departments:m.request({
	        method:"GET",
	        url:apiUrl + "/student/getDepartmentsAndCourses/" + m.route.param("student_id")
	      })
	    }
	  },
	  view(ctrl,args){
	    return m("div",[
	      m("h5","Semesters available"),
	      ctrl.departments().availableStages.map((course)=>{
	        return ("ul",[
	          m("li",course.name,[
	            m("button",{
	              onclick:(e)=>{
	                m.request({
	                  method:"GET",
	                  url:apiUrl + "/student/addStageToMyself/" + m.route.param("student_id") + "/" + course.id
	                }).then(m.route( m.route( ) ))
	              }
	            },"select")
	          ])
	        ])
	      }),
	      m("h5","Semesters registered to"),
	      ctrl.departments().selectedStages.map((course)=>{
	        return m("li",course.name,[
	          m("button",{
	              onclick:(e)=>{
	                m.request({
	                  method:"GET",
	                  url:apiUrl + "/student/RemoveStageFromMyself/" + m.route.param("student_id") + "/" + course.id
	                }).then(m.route( m.route( ) ))
	              }
	            },"remove")
	        ])
	      })
	    ])

	  }
	}


/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = {
	  controller(){
	    return {
	      departments:m.request({
	        method:"GET",
	        url:apiUrl + "/student/getDepartmentsAndCourses/" + m.route.param("student_id")
	      })
	    }
	  },
	  view(ctrl,args){
	    return m("div",[
	      m("h5","Available Units"),
	      ctrl.departments().availableUnits.map((course)=>{
	        return ("ul",[
	          m("li",course.name,[
	            m("button",{
	              onclick:(e)=>{
	                m.request({
	                  method:"GET",
	                  url:apiUrl + "/student/addUnitToMyself/" + m.route.param("student_id") + "/" + course.id
	                }).then(m.route( m.route( ) ))
	              }
	            },"select")
	          ])
	        ])
	      }),
	      m("h5","Selected Units"),
	      ctrl.departments().selectedUnits.map((course)=>{
	        return m("li",course.name,[
	          m("button",{
	              onclick:(e)=>{
	                m.request({
	                  method:"GET",
	                  url:apiUrl + "/student/RemoveUnitFromMyself/" + m.route.param("student_id") + "/" + course.id
	                }).then(m.route( m.route( ) ))
	              }
	            },"remove")
	        ])
	      })
	    ])

	  }
	}


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var paymentCard = __webpack_require__(26)
	var inputComponent = __webpack_require__(13);
	var studentInfo = __webpack_require__(27)

	var model = {
		student: () => {
			return m.request({
				method: "GET",
				url: apiUrl + "/basic/getMyTriSems/" + m.route.param("student_id")
			})
		}

	}
	module.exports = {
		controller: (args) => {
			return {
				trisemesters: m.request({
					method: "POST",
					url: apiUrl + "/services",
					data: {
						role: "university",
						cmd: "get_trisemesters",
						id: m.route.param("uniId"),
						mode: "simple"
					}
				}),
				payable_semesters: m.request({
					method: "POST",
					url: apiUrl + "/services",
					data: {
						role: "studentInfo",
						cmd: "get_semesters_payable_to",
						studentId: m.route.param("student_id")
					}
				}),
				pay_channels: m.request({
					url: apiUrl + "/services",
					method: "POST",
					data: {
						role: "finance",
						cmd: "get_payment_channels_in_a_uni",
						uni_id: m.route.param("uniId")
					}
				}),
				student: model.student(),
				schema: {
					trisem: m.prop(""),
					course: m.prop(""),
					level: m.prop(""),
					stage: m.prop(""),
					payment_channel: m.prop(""),

					ammount: m.prop(""),
					receiptNo: m.prop("")
				}
			}
		},
		view: (ctrl, args) => {
			return m(".container row", [

				m(studentInfo),

				m("form", {
					class: ".row"
				}, [

					m(".card-panel", [

						m("form", {
							onsubmit: (e) => {
								e.preventDefault();
								m.request({
									method: "POST",
									url: apiUrl + "/services",
									data: {
										role: "finance",
										cmd: "pick_payment_for_student",
										student_id: m.route.param("student_id"),
										tri_sem_id: ctrl.schema.trisem(),
										stage_id: ctrl.schema.stage(),
										course_id: ctrl.schema.course(),
										level_id: ctrl.schema.level(),
										payment_channel: ctrl.schema.payment_channel(),

										paymentAmmount: ctrl.schema.ammount(),
										receiptNo: ctrl.schema.receiptNo()
									}
								}).then((res) => m.route(m.route()))
							}
						}, [
							m(".row", [

								m(".input-field col s12 l4", [

									m("select", {

											config: function() {
												$('select').material_select();
											},
											onchange: function(e) {
												ctrl.schema.trisem(e.target.value)
											}
										},

										m("option", {
											value: "",
											disabled: true,
											selected: true,
										}, "Select Tri-semester"),

										ctrl.trisemesters().tri_semesters.map(function(drop) {
											return m("option", {
												value: drop.id,
												selected: (m.route.param("selectedDepartment") == drop.id ? true : false)
											}, drop.name)
										})

									)
								]),



								m(".input-field col s12 l4", [

									m("select", {

											config: function() {
												$('select').material_select();
											},
											onchange: function(e) {
												// console.log(ctrl.student().levels_ive_done_before)

												ctrl.payable_semesters().map((sem) => {
													// console.log(sem.id  + " === " + e.target.value)
													// console.log(ctrl.payable_semesters())
													console.log(sem.id)
													console.log(e.target.value)
													if (sem.id == e.target.value) {
														// console.log(sem)
														ctrl.schema.course(sem.level.course.id);
														ctrl.schema.level(sem.level.id);
														ctrl.schema.stage(sem.id);
													}

												})

												// alert(ctrl.schema.trisem() + ctrl.schema.course() + ctrl.schema.level())
											}
										},

										m("option", {
											value: "",
											disabled: true,
											selected: true,
										}, "Select semester to pay to"),

										ctrl.payable_semesters().map(function(stage) {
											return m("option", {
												value: stage.id,
												selected: (m.route.param("selectedDepartment") == stage.id ? true : false)
											}, stage.level.course.name + " - " + stage.level.name + " - " + stage.name)
										})

									)
								]),

								m(".input-field col s12 l4", [

									m("select", {

											config: function() {
												$('select').material_select();
											},
											onchange: function(e) {
												// console.log(ctrl.student().levels_ive_done_before)
												ctrl.schema.payment_channel(e.target.value)
													// alert(ctrl.schema.trisem() + ctrl.schema.course() + ctrl.schema.level())
											}
										},

										m("option", {
											value: "",
											disabled: true,
											selected: true,
										}, "Select Payment Channel"),

										ctrl.pay_channels().result.map(function(stage) {
											return m("option", {
												value: stage.id,
												selected: (m.route.param("selectedDepartment") == stage.id ? true : false)
											}, stage.name)
										})

									)
								]),

								m(inputComponent, {
									value: ctrl.schema.ammount,
									label: "Installment ammount",
									// icon:"mdi-editor-attach-money prefix",
									type: "text",
									sizes: "s12 m12 l4"
								}),

								m(inputComponent, {
									value: ctrl.schema.receiptNo,
									label: "Receipt Number",
									// icon:"mdi-editor-insert-drive-file prefix",
									type: "text",
									sizes: "s12 m12 l4"
								}),

								m(inputComponent, {
									value: ctrl.schema.receiptNo,
									label: "Date",
									// icon:"mdi-editor-insert-drive-file prefix",
									type: "date",
									selectableMonths: true,
									years: 15,
									sizes: "s12 m12 l4"
								}),

								m("div", {
									class: "s12 m12 l4"
								}, [
									m("br"),
									m("br"),
									m("button", {
										class: "btn blue col l3 waves-effect waves-block waves-light"
									}, "submit")
								])
							])
						])
					])
				])

			])
		}
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);
	var selectCourse = __webpack_require__(82)

	module.exports = {
	  controller: (args) => {
	    return {
	      courses: m.request({
	        method: "GET",
	        url: apiUrl + "/basic/getUniCourses/" + m.route.param("uniId")
	      }),
	      schema: {
	        selectedCourse: m.prop("string")
	      }
	    }
	  },
	  view: (ctrl, args) => {
	    return m(".app row",

	      m(".input-field col s12 l3",
	        m(selectCourse)
	      )
	    )
	  }
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = {
		controller: () => {
			return {
				courses: m.request({
					method: "GET",
					url: apiUrl + "/basic/getUniCourses/" + m.route.param("uniId")
				})
			}
		},
		view: (ctrl, args) => {
			return m("select", {
					config: function() {
						$('select').material_select();
					},
					onchange: function(e) {
						m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + e.target.value + "/selectLevel")
					}
				},

				m("option", {
					value: "",
					disabled: true,
					selected: true,
				}, "Course for student"),

				ctrl.courses().map(function(drop) {
					return m("option", {
						value: drop.id,
						selected: (m.route.param("course_id") == drop.id ? true : false)
					}, drop.name)
				})

			)
		}
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var selectCourse = __webpack_require__(82)
	var selectLevel = __webpack_require__(84)


	module.exports = {
	  controller: (args) => {
	    return {
	      courses: m.request({
	        method: "GET",
	        url: apiUrl + "/basic/getUniCourses/" + m.route.param("uniId")
	      }),
	      selectedCourse: m.request({
	        method: "GET",
	        url: apiUrl + "/basic/getLevels/" + m.route.param("course_id")
	      }),

	      schema: {
	        selectedCourse: m.prop("string")
	      }
	    }
	  },
	  view: (ctrl, args) => {
	    return m(".app row",

	      m(".input-field col s12 l3",
	        m(selectCourse),
	        m(selectLevel)
	      )
	    )
	  }
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = {
		controller: () => {
			return {
				selectedCourse: m.request({
					method: "GET",
					url: apiUrl + "/basic/getLevels/" + m.route.param("course_id")
				})
			}
		},
		view: (ctrl, args) => {
			return m("select", {
					config: function() {
						$('select').material_select();
					},
					onchange: function(e) {
						m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + e.target.value + "/stages")
					}
				},

				m("option", {
					value: "",
					disabled: true,
					selected: true,
				}, "Level of the course"),
				ctrl.selectedCourse().levels.map(function(drop) {
					return m("option", {
						value: drop.id,
						selected: (m.route.param("level_id") == drop.id ? true : false)
					}, drop.name)
				})

			)
		}
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var selectCourse = __webpack_require__(82)
	var selectLevel = __webpack_require__(84)
	var selectSemester = __webpack_require__(86)

	module.exports = {
		controller: (args) => {
			return {
				courses: m.request({
					method: "GET",
					url: apiUrl + "/basic/getUniCourses/" + m.route.param("uniId")
				}),
				selectedCourse: m.request({
					method: "GET",
					url: apiUrl + "/basic/getLevels/" + m.route.param("course_id")
				}),
				selectedLevel: m.request({
					method: "GET",
					url: apiUrl + "/basic/getStages/" + m.route.param("level_id")
				}),

				schema: {
					selectedCourse: m.prop("string")
				}
			}
		},
		view: (ctrl, args) => {
			return m(".app row",
				m(".input-field col s12 l3",
					m(selectCourse),
					m(selectLevel),
					m(selectSemester)
				)
			)
		}
	}

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = {
		controller: () => {
			return {
				selectedLevel: m.request({
					method: "GET",
					url: apiUrl + "/basic/getStages/" + m.route.param("level_id")
				})
			}
		},
		view: (ctrl, args) => {
			return m("select", {
					config: function() {
						$('select').material_select();
					},
					onchange: function(e) {
						m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + m.route.param("level_id") + "/stages/" + e.target.value + "/study_mode")
					}
				},

				m("option", {
					value: "",
					disabled: true,
					selected: true,
				}, "Semester to join"),
				ctrl.selectedLevel().stages.map(function(drop) {
					return m("option", {
						value: drop.id,
						selected: (m.route.param("stage_id") == drop.id ? true : false)
					}, drop.name)
				})

			)
		}
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);

	var selectCourse = __webpack_require__(82)
	var selectLevel = __webpack_require__(84)
	var selectSemester = __webpack_require__(86)
	var selectStudyMode = __webpack_require__(88)

	module.exports = {
	  controller: (args) => {
	    return {
	      courses: m.request({
	        method: "GET",
	        url: apiUrl + "/basic/getUniCourses/" + m.route.param("uniId")
	      }),
	      selectedCourse: m.request({
	        method: "GET",
	        url: apiUrl + "/basic/getLevels/" + m.route.param("course_id")
	      }),
	      selectedLevel: m.request({
	        method: "GET",
	        url: apiUrl + "/basic/getStages/" + m.route.param("level_id")
	      }),
	      studySessions: m.request({
	        method: "GET",
	        url: apiUrl + "/basic/getStudy_sessions/" + m.route.param("uniId")
	      }),

	      schema: {
	        selectedCourse: m.prop("string")
	      }
	    }
	  },
	  view: (ctrl, args) => {
	    return m(".app row",

	      m(".input-field col s12 l3",
	        m(selectCourse),
	        m(selectLevel),
	        m(selectSemester),
	        m(selectStudyMode)
	      )
	    )
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = {
		controller: () => {
			return {
				studySessions: m.request({
					method: "GET",
					url: apiUrl + "/basic/getStudy_sessions/" + m.route.param("uniId")
				})
			}
		},
		view: (ctrl, args) => {
			return m("select", {
					config: function() {
						$('select').material_select();
					},
					onchange: function(e) {
						m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/" + m.route.param("course_id") + "/selectLevel/" + m.route.param("level_id") + "/stages/" + m.route.param("stage_id") + "/study_mode/" + e.target.value)
					}
				},

				m("option", {
					value: "",
					disabled: true,
					selected: true,
				}, "Select Study mode"),
				ctrl.studySessions().study_sessions.map(function(drop) {
					return m("option", {
						value: drop.id,
						selected: (m.route.param("study_mode") == drop.id ? true : false)
					}, drop.name)
				})

			)
		}
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(13);
	var selectCourse = __webpack_require__(82)
	var selectLevel = __webpack_require__(84)
	var selectSemester = __webpack_require__(86)
	var selectStudyMode = __webpack_require__(88)

	module.exports = {
	  controller: (args) => {
	    return {
	      schema: {
	        adm: m.prop(""),
	        name: m.prop(""),
	        selectedCourse: m.prop("")
	      }
	    }
	  },
	  view: (ctrl, args) => {
	    return m(".app row",

	      m(".input-field col s12 l3",
	        m(selectCourse),

	        m(selectLevel),

	        m(selectSemester),

	        m(selectStudyMode)

	      ),
	      m("div", {
	        class: "col s12 l9"
	      }, [
	        m("form", {
	          class: "row card-panel",
	          onsubmit: (e) => {
	            e.preventDefault()

	            var data = {
	              adm: ctrl.schema.adm,
	              names: ctrl.schema.name(),

	              course: m.route.param("course_id"), //it
	              level: m.route.param("level_id"), //diploma
	              stage: m.route.param("stage_id"), //stage 5
	              study_mode: m.route.param("study_mode"), //holidays
	            }

	            m.request({
	              method: "POST",
	              url: apiUrl + "/basic/makeStudent/" + m.route.param("uniId"),
	              data: data
	            }).then((res) => {
	              m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/index")
	            })


	            // alert(data)
	            // console.log(data)
	            // alert("sending data")
	          }
	        }, [

	          m(inputComponent, {
	            value: ctrl.schema.adm,
	            label: "Admission Number",
	            type: "text",
	            sizes: "s12 m12 l12"
	          }),

	          m(inputComponent, {
	            value: ctrl.schema.name,
	            label: "Names",
	            type: "text",
	            sizes: "s12 m12 l12"
	          }),

	          m("button", {
	            class: "btn blue",
	            type: "submit"
	          }, "submit")
	        ])
	      ])


	    )
	  }
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	var pdfobject = __webpack_require__(97);

	module.exports = {
	  view:function(ctrl,args){
	    return m(".app",[
	       m.component(navbar),

	       m(".row",[
	         //collumn 1 , the sidebar
	         m(".col l3 hide-on-med-and-down",[
	           m.component(sidebar)
	         ]),
	         //the sider and everything else
	         m(".col l9",[
	         	args.body ? m(args.body) : ""
	         ])
	         
	       ]),

	       m.component(footer)

	     ])

	  }
	}


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var navitem = __webpack_require__(92)
	var navdrop = __webpack_require__(93)

	module.exports = {
	  view: function(args) {
	    // settings for the nav-bar
	    var navColor = "blue";
	    var dropIcon = "material-icons right"
	      //dynamic data
	    var navbar = [{
	      "title": "Academics",
	      direction: "left",
	      drops: [{
	        title: "Department of Early Childhood Development",
	        url: "/academics/ecd"
	      }, {
	        title: "Department of Examinations",
	        url: "/academics/examinations"
	      }, {
	        title: "Academic Calender",
	        url: "/academics/calender"
	      }, {
	        title: "Library",
	        url: "/academics/liblary"
	      }, {
	        title: "Admissions",
	        url: "/academics/admissions"
	      }]
	    }, {
	      title: "Operations",
	      direction: "left",
	      drops: [{
	        title: "Governance",
	        url: "/operations/governance"
	      }, {
	        title: "Service Charter",
	        url: "/operations/service_charter"
	      }, {
	        title: "Human Resource Department",
	        url: "/operations/HR"
	      }, {
	        title: "Finance Department",
	        url: "/operations/finance"
	      }, {
	        title: "Downloads",
	        url: "/operations/downloads"
	      }]
	    }, {
	      title: "Proffessional_Development",
	      direction: "left",
	      drops: [{
	        title: "Continuous Teacher Development Courses",
	        url: "/proffessional_development/ctdc"
	      }, {
	        title: "Short Courses",
	        url: "/proffessional_development/shortcourses"
	      }, {
	        title: "Bronchure",
	        url: "/proffessional_development/bronchure"
	      }]
	    }, {
	      title: "Portals",
	      direction: "right",
	      drops: [{
	        title: "Student",
	        url: "/auth/Student/pass-1/",
	      }, {
	        title: "Staff",
	        url: "/auth/Staff/pass-1/",
	      }, {
	        title: "Admin",
	        url: "/uniLogin/" + appName + "/" + appId,
	      }]
	    }]

	    var navItems = [];
	    var sideItems = [];
	    return m("header", [
	      m('nav', [
	        m("div", {
	          class: "nav-wrapper " + navColor
	        }, [ //where settings of the nav-bar go


	          m("ul", [
	            m("a", {
	              class: "brand-logo hide-on-large-only"
	            }, "Premier ECDE Teachers college"),

	            m("a", {
	              class: "button-collapse waves-effect waves-light",
	              "data-activates": "side-nav",
	              alt: "menu",
	              config: function() {
	                $(".button-collapse").sideNav();
	              }
	            }, [
	              m("i", {
	                class: "small mdi-navigation-menu",
	                alt: "menu"
	              })
	            ]),


	            m("ul", {
	              class: "hide-on-med-and-down"
	            }, [

	              m(navitem, {
	                link: {
	                  title: "Home",
	                  direction: "left",
	                  url: "/"
	                }
	              }),

	              navbar.map((item) => {
	                return m(navdrop, {
	                  title: item.title,
	                  direction: item.direction,
	                  url: item.url,
	                  drops: item.drops
	                })
	              }),

	              m(navitem, {
	                link: {
	                  title: "Contact Us",
	                  direction: "right",
	                  url: "/contactus"
	                }
	              }),

	              m(navitem, {
	                link: {
	                  title: "Noticeboard",
	                  direction: "right",
	                  url: "/noticeboard/" + appId
	                }
	              })

	            ])
	          ]),

	          m("ul", {
	            class: "side-nav",
	            id: "side-nav"
	          }, [
	            m.component(navitem, {
	              link: {
	                title: "Welcome",
	                url: "/"
	              }
	            })
	          ])
	        ])
	      ])
	    ])
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = {
	  view: function(ctrl, attrs) {
	    // console.log(attrs.link.title);
	    return m("li", {
	      class: 'waves-effect waves-block waves-blue ' + attrs.link.direction + " " + (m.route() === attrs.link.url ? 'active' : '')
	    }, [
	      m("a", {
	        href: attrs.link.url,
	        class: "left truncate",
	        config: m.route
	      }, attrs.link.title)
	    ])

	  }
	}

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = {
	  view: function(ctrl, args) {
	    var random = Math.random()
	    return m("span", [
	      m("li", {
	        clasS:args.direction
	        // class: 'waves-effect waves-block waves-blue ' + args.direction + " " + (m.route() === args.url ? 'active' : '')
	      }, [
	        m("a", {
	          class: 'dropdown-button',
	          "data-activates": args.title,
	          config: function() {
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

	        }, [
	          args.drops ?
	          m("i", {
	            class: "mdi-navigation-arrow-drop-down right"
	          }) : "",
	        ], args.title)


	      ]),
	      m("ul", {
	        id: args.title,
	        class: "dropdown-content",
	      }, [
	        args.drops ?
	        args.drops.map((drop) => {
	          return m("li", [
	            m("a", {
	              href: drop.url,
	              config: m.route
	            }, drop.title)
	          ])
	        }) : ""
	      ])
	    ])
	  }
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var fbPage = __webpack_require__(95);

	module.exports = {
	  view: function(args){
	    // return ("div","footer")
	    return m("footer",{class:"page-footer blue"},[
	      m(".hide-on-med-and-up",[
	        m("br"),
	        m(".container",[
	          m(fbPage,{
	            height:"250px",
	            width:"100%",
	            page:"https://web.facebook.com/Premier-ECDE-Teachers-College-1439285166325335/?fref=ts",
	            tabs:"timeline, events, messages",
	            smallHeader:"true",
	            adaptWidth:"true",
	            hideCover:"false",
	            showPosts:"false",
	            facePile:"true"
	          })
	        ]),
	        m("br")
	      ]),

	      m("div",{class:"footer-copyright"},"Copyright 2015. Premier ECDE Teachers College. P.O. BOX 3279 Kigali, Rwanda",[
	        m("span",{class:"right"},"< SSU: 0.3.0 />")
	      ])
	    ])
	  }
	}


/***/ },
/* 95 */
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// var JD = require('../../../../__components/libs/jollyData');
	var fbPage = __webpack_require__(95);

	module.exports = {
	  view:function(ctrl,attrs){
	    // console.log(attrs.link.title);
	    var links = [
	      {title:"Welcome",url:"/"},
	      {title:"Academic Calender", url:"/academics/calender"},
	      {title:"Downloads", url:"/operations/downloads"},
	      {title:"Library",url:"/academics/liblary"},
	      {title:"Bronchure",url:"/proffessional_development/bronchure"},
	      {title:"NoticeBoard",url:"/noticeboard/" + appId},
	      {title:"Service Charter",url:"/operations/service_charter"},
	    ]


	  return m("div",[
	    m("div",[
	      //responsive image holder
	      m(".col l12",[
	        m("img[src='images/default/logo.png']",{
	          class:"responsive-img"
	        })
	      ]),
	      //latest news header
	      // m("h5",{class:"center"},"Latest News"),
	      //all the links on the sidebar
	      m("ul",{class:"section table-of-contents"},[
	        links.map(function(link){
	          return m("li",[
	            m("a",{
	              class:(m.route() === link.url ? 'active blue-text': ''),
	              href:link.url,
	              config:m.route
	            },link.title)
	          ])
	        }),
	      ]),
	      //fb container
	      m(".container",[
	        m(fbPage,{
	          height:"250px",
	          width:"300px",
	          page:"https://web.facebook.com/Premier-ECDE-Teachers-College-1439285166325335/?fref=ts",
	          tabs:"timeline, events, messages",
	          smallHeader:"true",
	          adaptWidth:"true",
	          hideCover:"false",
	          showPosts:"false",
	          facePile:"true"
	        })
	      ])
	    ])
	  ])
	  }
	}


/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    var link = "documents/" + args.name;

	    var customHeight;
	    if(args.height){
	      customHeight = args.height
	    }else{
	      customHeight="700px";
	    }

	    return m("div[id='PDFObject']",{
	      config:function(){
	        var myParams = {
	          url: link,
	          height:customHeight,
	          pdfOpenParams: {
	             navpanes: 0,
	             statusbar: 1,
	             view: "FitV",
	             pagemode: "thumbs"
	          }
	        };

	       PDFObject(myParams).embed('PDFObject');
	      }
	    },[
	      m("p","It appears you dont have Adobe Reader or PDF support in this web browser. download the document ",[
	        m("a",{href:link},"here")
	      ])
	    ])

	  }
	}


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91)
	var sidebar = __webpack_require__(96)
	var nivoslider = __webpack_require__(99)
	var footer = __webpack_require__(94)

	var objectives = [
	  {text:"To provide education geared toward development of the childs mental, physical and spiritual growth."},
	  {text:" To provide accessible, affordable and quality childhood education to teachers"},
	  {text:" To promote the national goals and objectives of Early Childhood Development Education to Rwanda."}


	];

	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	       m.component(navbar),

	       m(".row",[
	         //collumn 1 , the sidebar
	         m(".col l3 s3 m3  hide-on-med-and-down",[
	           m.component(sidebar)
	         ]),
	         //the sider and everything else
	         m(".col l9 s12 m12",[
	           m.component(nivoslider),

	           // m("h4",{class:"center blue-text"},"Welcome"),
	           m(".card-panel",[
	             m("p","Premier ECDE teachers college is an accredited Institution of high learning by the Rwanda government. It started in 2013 with 3 objectives:"),

	             m("ol",[
	               objectives.map(function(objective){
	                return m("li",objective.text)
	               })
	             ]),

	             m(".card-panels",[
	                m("p","View a detailed product information on what we offer ",[
	                  m("a",{
	                    href:"/proffessional_development/productinformation",
	                    config:m.route
	                  },"here")
	                ])
	             ]),

	             m(".row",[
	                m(".col l6",[
	                  m('h4',{class:"center"},"Mission"),
	                  m("p","A model institution providing quality early childhood teacher education for africa and beyond.")
	                ]),

	                m(".col l6",[
	                  m('h4',{class:"center"},"Vision"),
	                  m("p","To attain world class standard in Early childhood teacher Education training, research and innovation for sustainable individual holistic growth.")
	               ])
	             ])

	           ]),


	         ]),




	       ]),

	       m.component(footer)
	     ])

	  }
	}


/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl){
	    var images = ["0","1","2","3","4"]
	    return m("div",{
	      class:"slider",
	      config:function(){
	        $('.slider').nivoSlider({
	    			effect: 'random',
	    			slices: 15,
	    			boxCols: 8,
	    			boxRows: 4,
	    			animSpeed: 500,
	    			pauseTime: 3000,
	    			startSlide: 0,
	    			directionNav: false,
	    			controlNav: false,
	    			controlNavThumbs: false,
	    			pauseOnHover: true,
	    			manualAdvance: false,
	    			prevText: 'Prev',
	    			nextText: 'Next',
	    			randomStart: false,
	    			beforeChange: function(){},
	    			afterChange: function(){},
	    			slideshowEnd: function(){},
	    		    lastSlide: function(){},
	    		    afterLoad: function(){}
	          });
	      }
	    },[
	      images.map(function(image){
	        // console.log(image);
	        return m("img",{
	          src:"images/nivoslider/" + image + ".jpg"
	        })
	      })
	    ])

	  }
	}


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var noticeboard_item = __webpack_require__(38)
	var oldNotices = __webpack_require__(39)
	module.exports = {
	    controller: function() {
	        var items = m.request({
	            method: "GET",
	            url: apiUrl + "/basic/getNoticeboard/" + m.route.param("uniId"),
	            background: true,
	            initialValue: {
	                noticeboard_items: []
	            }
	        });
	        items.then(m.redraw);
	        return {
	            items: items
	        }
	    },
	    view: function(ctrl, args) {
	        return m(".noticeboard", [
	            m(".row", [
	                ctrl.items().noticeboard_items.length > 0 ?
	                m(".col l8", [
	                    ctrl.items().noticeboard_items.reverse().map(function(item) {
	                        return m(noticeboard_item, {
	                            id: item.id,
	                            title: item.title,
	                            content: item.content,
	                            createdAt: item.createdAt,
	                            deleteBtn: false
	                        })
	                    })
	                ])

	                : m(".loading center", [
	                    m("br"),
	                    m("br"),
	                    m("br"),
	                    m("br"),
	                    m("br"),
	                    m("br"),
	                    m("br"),
	                    m("br"),
	                    m("br"),

	                    m(".preloader-wrapper big active", [
	                        m(".spinner-layer spinner-blue-only", [
	                            m(".circle-clipper left", [
	                                m(".circle")
	                            ]),
	                            m(".gap-patch", [
	                                m(".circle")
	                            ]),
	                            m(".circle-clipper right", [
	                                m(".circle")
	                            ])
	                        ])
	                    ])

	                ]),

	                m(".col l4", [
	                    m.component(oldNotices),
	                ])
	            ])
	        ])
	    }
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);

	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	// var pdfobject = require("../peices/pdfobject");


	module.exports = {

	  controller:function(){
	    var self = this;
	    this.data = contactus.getData();

	    this.save = function(errs){
	      contactus.setData(this.data);
	      console.log(self.data.email());
	    }.bind(this)
	  },

	  view:function(ctrl){
	      var items = [
	        {icon:"medium mdi-action-home",text:"P.O. BOX 3279 Kigali, Rwanda"},
	        {icon:"medium mdi-communication-ring-volume",text:"+250 735 156 902"},
	        {icon:"medium mdi-communication-stay-current-portrait",text:"+250 783 000 101"}
	      ]
	      // var entered_values = []
	      return m(".app",[
	         m.component(navbar),

	         m(".row",[
	           //collumn 1 , the sidebar
	           m(".col l3 hide-on-med-and-down",[
	             m.component(sidebar)
	           ]),
	           //the sider and everything else
	           m(".col l9",[
	             m("h3",{class:"center"},"Contact Us"),

	            //  contact links
	             m(".row center",[
	               items.map(function(item){
	                 return m(".col l4",[
	                  //  item with logo and info
	                   m(".col l3",[
	                     m("i",{class:item.icon})
	                   ]),
	                  //  text
	                   m(".col l9",[
	                     m("p",{class:"flow-text"},item.text)
	                   ])
	                 ])
	               })


	             ]),

	            //  send message form inputs

	            // contactForm here

	            // m(contactForm)

	           ])

	         ]),

	         m.component(footer)
	       ])

	    }
	}


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	var pdfobject = __webpack_require__(97);



	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	      m.component(navbar),

	      m(".row",[
	        //collumn 1 , the sidebar
	        m(".col l3 hide-on-med-and-down",[
	          m.component(sidebar)
	        ]),
	        //the sider and everything else
	        m(".col l9",[
	          m("h4",{class:"center blue-text"},"Department of Early Childhood Development"),

	          m("h5",{class:"center"},"Document on product Information"),

	          m.component(pdfobject,{
	            name:"Product_Information.pdf"
	          }),
	        ])
	     ]),

	     m.component(footer)
	   ])

	  }
	}


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	var pdfobject = __webpack_require__(97);



	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	       m.component(navbar),

	       m(".row",[
	         //collumn 1 , the sidebar
	         m(".col l3 hide-on-med-and-down",[
	           m.component(sidebar)
	         ]),
	         //the sider and everything else
	         m(".col l9",[
	           m("h3",{class:"center blue-text"},"Academic calender"),
	           m("h5",{class:"center"},"The following is the calender we are using for 2015/2016"),
	           m("h6",{class:"center"},"Download and feel free to peruce through at your own time"),

	           m.component(pdfobject,{
	             name:"Academic_Calender_2015.pdf"
	           }),
	         ])

	       ]),

	       m.component(footer)
	     ])

	  }
	}


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	var pdfobject = __webpack_require__(97);



	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	       m.component(navbar),

	       m(".row",[
	         //collumn 1 , the sidebar
	         m(".col l3 hide-on-med-and-down",[
	           m.component(sidebar)
	         ]),
	         //the sider and everything else
	         m(".col l9",[
	           m("h3",{class:"center blue-text"},"Student Admissions"),
	           m("h5",{class:"center"},"Admissions are open to school based proggrammes"),
	           m("h6",{class:"center"},"Download and Fill in the following admmision form,then submit to the school administration admisions center"),

	           m.component(pdfobject,{
	             name:"Student_application_form__.pdf"
	           }),
	         ])

	       ]),

	       m.component(footer)

	     ])

	  }
	}


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	var pdfobject = __webpack_require__(97);



	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	       m.component(navbar),

	       m(".row",[
	         //collumn 1 , the sidebar
	         m(".col l3 hide-on-med-and-down",[
	           m.component(sidebar)
	         ]),
	         //the sider and everything else
	         m(".col l9",[
	           m("h3",{class:"center blue-text"},"Department Of Examinations"),

	           m("h5",{class:"center"},"Our General Examination Policies"),

	           m.component(pdfobject,{
	             name:"GENERAL_EXAMINATION_POLICY.pdf"
	           }),
	         ])

	       ]),

	       m.component(footer)
	     ])

	  }
	}


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	var pdfobject = __webpack_require__(97);

	var working_hours = [
	      {timeName:"Weekdays",duration:"8am-9pm"},
	      {timeName:"Saturdays",duration:"8am-4pm"},
	      {timeName:"Sundays and Public Holidays",duration:"Closed"}
	];

	var e_journal_sourses = [
	      {
	        url:"http://www.jstor.org/",
	        name:"Jstor",
	        explanation:"JSTOR is a digital library of academic journals, books, and primary sources."
	      },
	      {
	        url:"http://www.emeraldinsight.com/",
	        name:"Emerald Insight",
	        explanation:"Journals in management and library and information services, engineering, applied science and technology."
	      },
	      {
	        url:"http://www.ebscohost.com/",
	        name:"EBS.co host",
	        explanation:"Online Research Database"
	      },
	       {
	        url:"http://www.sciencedirect.com/",
	        name:"Science Direct",
	        explanation:"ScienceDirect is the world's leading source for scientific, technical, and medical research. Explore journals, books and articles."
	      }

	];


	module.exports = {


	  view:function(ctrl){
	    return m(".app",[
	       m.component(navbar),

	       m(".row",[
	         //collumn 1 , the sidebar
	         m(".col l3 hide-on-med-and-down",[
	           m.component(sidebar)
	         ]),
	         //the sider and everything else
	         m(".col l9",[
	          //sections in the lib page
	          m("section",[
	              m("h3",{class:"center blue-text"},"Library"),
	              m("p","Welcome to our Library, the Library is accessable to users who can freely sample books from the shelves for the purpose of providing accurate, up to date information, sources and resources which support teaching, training, learning and research activities in the college.")
	          ]),

	          m(".divider"),

	          m("section",[
	              m("h5",{class:"center"},"Working Hours"),
	              console.log(working_hours),

	              m("table",{class:"striped"},[
	                m("thead",[
	                  m("th","TIME"),
	                  m("th","DURATION")
	                ]),

	                m("tbody",[
	                  working_hours.map(function(hour){
	                    return m("tr",[
	                      m("td",hour.timeName),
	                      m("td",hour.duration)
	                    ])
	                  })
	                ])
	              ]),
	          ]),

	          m(".divider"),

	          // online books
	          m("section",[
	              m("h5",{class:"center"},"EBOOKS"),
	              m("p","E-books Resources, Access over 2 million Electronic books online from ",[
	                m("a[href='http://en.bookfi.net/']","Bookfi.net")
	              ])
	          ]),

	          m(".divider"),

	          // E-Journals
	          m(".col l6",[
	              m("section",[
	                m("h5",{class:"center"},"E-Journals"),
	               m("table",{class:"striped"},[
	                  m("thead",[
	                    m("th","Source"),
	                    m("th","Reason For Recomendation")
	                  ]),

	                  m("tbody",[
	                    e_journal_sourses.map(function(source){
	                      return m("tr",[
	                        m("td",[
	                          m("a", {href:source.url}, source.name)
	                        ]),
	                        m("td",source.explanation)
	                      ])
	                    })
	                  ])
	                ]),
	            ]),

	            m(".divider"),

	            // online books
	            m("section",[
	                m("h5",{class:"center"},"External Links"),
	                m("p","External Links to other E-content will also be uploaded soon.")
	            ]),

	            m(".divider"),

	           // online books
	            m("section",[
	                m("h5",{class:"center"},"Our Library Rules and Regulations"),
	                m("p","The Library's prime purpose is to provide information services and materials to the PECDETC community. These library rules and regulations have been formulated to promote fair access and use of library resources and facilities. They shall apply to all library users including PECDETC staff.")
	            ]),

	            m(".divider"),

	           m.component(pdfobject,{
	               name:"Library_Rules_and_Regulations.pdf"
	           }),

	          ]),
	          m(".col l6",[

	          ])
	           
	          
	         ])

	       ]),

	       m.component(footer)

	     ])

	  }
	}


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	var pdfobject = __webpack_require__(97);



	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	       m.component(navbar),

	       m(".row",[
	         //collumn 1 , the sidebar
	         m(".col l3 hide-on-med-and-down",[
	           m.component(sidebar)
	         ]),
	         //the sider and everything else
	         m(".col s12 m9 l9",[
	           m("h3",{class:"center blue-text"},"Service Charter"),

	           m("h5",{class:"center"},"we are proud to present our service charter"),

	           m.component(pdfobject,{
	             name:"COLLEGE_SERVICE_CHARTER.pdf"
	           }),
	         ])

	       ]),

	       m.component(footer)
	     ])

	  }
	}


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	// var pdfobject = require("../peices/pdfobject");



	module.exports = {
	  view:function(ctrl){
	    var titles = ["board","senate","Management_Team"]

	    var management_team_members = [
	      {name:"Kuria S. Gitome",position:"Ag Principal "},
	      {name:"Mrs. Christine Achieng",position:"Deputy Principal"},
	      {name:" ",position:"Deputy Principal (Operations)"},
	      {name:" ",position:"Administrator - Finance"},
	      {name:"Patience Connie Namudeche",position:"HOD - Early Childhood Education Department"},
	      {name:" ",position:"HOD - Guidance and Counseling "},
	      {name:"Miss Kirabo Jocelyn",position:"Ag. Registrar "}
	    ]

	    var senate_members = [
	      "The Principal who is the chairperson.",
	      "Deputy Principal (Academic Affairs) responsible for academic affairs who is the Secretary (DP-AA).",
	      "Deputy Principal (Operations).(DP-O).",
	      "Directors of constituent centres",
	      "Deans of student.",
	      "Deans of student.",
	      "Heads of departments",
	      "Librarian",
	      "Marketing officer",
	      "Two student representatives"
	    ]
	    return m(".app",[
	      m.component(navbar),

	      m(".row",[
	        //collumn 1 , the sidebar
	        m(".col l3 hide-on-med-and-down",[
	          m.component(sidebar)
	        ]),
	        //the sider and everything else
	        m(".col l9",[

	          m(".col l6",[
	            m("h4",{class:"center blue-text"},"Governance"),
	            m("p","We have very well defined organisation structure that ensures that everything inside the college is decidedin a very organised manner and everyone is accountablefor everything that happens under his docket")
	          ]),

	          m(".col l6 center",[
	            m("img",{
	              class:"materialboxed responsive-img",
	              src:"images/default/organogram.jpg",
	              config:function(){
	                $('.materialboxed').materialbox();
	              }
	            })
	          ]),

	          m(".col l12",[
	            m(".row",[
	              m(".col s12",[
	                // tabs header
	                m("ul",{
	                  class:"tabs blue",
	                  config:function(){
	                    $('ul.tabs').tabs();
	                  }
	                },[
	                  //make each tab you can

	                  titles.map(function(title){
	                    return m("li",{class:"tab col s3 l4 blue white-text waves-effect waves-blue"},[
	                      m("a",{ href:"#" + title, class:"white-text" },title)
	                    ])
	                  }),


	                  m(".indicator white-text waves-effect waves-light")
	                ])
	              ]),
	              // tabs body, simple divs
	              titles.map(function(title){
	                if(title === "board"){
	                  return  m(".col l12",{id:title},[
	                    m("h5","Our Board Of Directors comprises of the following People"),
	                    m("h6","*To be updated later")
	                  ])
	                }

	                if(title === "senate"){
	                  return  m(".col l12",{id:title},[
	                    m("h5","Our senate comprises of the following People"),
	                    m("ol",[
	                      senate_members.map(function(member){
	                        return m("li",[
	                          m("div",member)
	                        ])
	                      })
	                    ])

	                  ])
	                }

	                if(title === "Management_Team"){
	                  return  m(".col l12",{id:title},[
	                    m("h5","Our Management Team comprises of the following People"),
	                    m("ol",[
	                      management_team_members.map(function(member){
	                        return m("li",[
	                          m("div",member.position + " - ",[
	                            m("b",member.name)
	                          ])
	                        ])
	                      })
	                    ])

	                  ])
	                }
	              })
	            ])
	          ])
	        ])
	     ]),

	     m.component(footer)
	   ])

	  }
	}


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	// var pdfobject = require("../peices/pdfobject");



	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	      m.component(navbar),

	      m(".row",[
	        //collumn 1 , the sidebar
	        m(".col l3 hide-on-med-and-down",[
	          m.component(sidebar)
	        ]),
	        //the sider and everything else
	        m(".col l9",[
	          m("h3",{class:"center blue-text"},"HR"),

	          // m("h5",{class:"center"},"Our General Examination Policies"),
	          //
	          // m.component(pdfobject,{
	          //   link:"/documents/Student_application_form__.pdf"
	          // }),
	        ])
	     ]),

	     m.component(footer)
	   ])

	  }
	}


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	// var pdfobject = require("../peices/pdfobject");



	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	      m.component(navbar),

	      m(".row",[
	        //collumn 1 , the sidebar
	        m(".col l3 hide-on-med-and-down",[
	          m.component(sidebar)
	        ]),
	        //the sider and everything else
	        m(".col l9",[
	          m("h3",{class:"center blue-text"},"Finance"),

	          // m("h5",{class:"center"},"Our General Examination Policies"),
	          //
	          // m.component(pdfobject,{
	          //   link:"/documents/Student_application_form__.pdf"
	          // }),
	        ])
	     ]),

	     m.component(footer)
	   ])

	  }
	}


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// TODO make a nice table with b=versioning and cute download buttons and last updated list

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	// var pdfobject = require("../peices/pdfobject");



	module.exports = {
	  view:function(ctrl){

	    return m(".app",[
	      m.component(navbar),

	      m(".row",[
	        //collumn 1 , the sidebar
	        m(".col l3 hide-on-med-and-down",[
	          m.component(sidebar)
	        ]),
	        //the sider and everything else
	        m(".col l9",[
	          m("h3",{class:"center blue-text"},"Downloads"),

	          m("h5",{class:"center"},"the following files are available for download"),

	          m("table",{class:"striped centered"},[
	            m("tbody",[

	              m("tr",[

	                m("td",[
	                  m("a",{href:'http://premiercollege.ac.rw/documents/Student_application_form__.pdf'},"Application Form")
	                ]),

	                m("td",[
	                  m("a",{href:'http://premiercollege.ac.rw/documents/Academic_Calender_2015.pdf'},"Academic calender 2015/2016")
	                ]),

	              ]),

	              m("tr",[

	                m("td",[
	                  m("a",{href:'http://premiercollege.ac.rw/documents/COLLEGE_SERVICE_CHARTER.pdf'},"College Service charter")
	                ]),

	                m("td",[
	                  m("a",{href:'http://premiercollege.ac.rw/documents/Student_Handbook.pdf'},"Student Hand Book")
	                ]),

	              ]),

	              m("tr",[

	                m("td",[
	                  m("a",{href:'http://premiercollege.ac.rw/documents/GENERAL_EXAMINATION_POLICY.pdf'},"General Examination Policy")
	                ]),

	                m("td",[
	                  m("a",{href:'http://premiercollege.ac.rw/documents/Library_Rules_and_Regulations.pdf'},"Library Rules and Regulations")
	                ]),

	              ]),

	              m("tr",[

	                m("td",[
	                  m("a",{href:'http://premiercollege.ac.rw/documents/bronchure.pdf'},"College Bronchure")
	                ]),

	                m("td",[
	                  m("a",{href:'http://premiercollege.ac.rw/documents/Product_Information.pdf'},"Our services and Products")
	                ]),

	              ]),

	            ])
	          ])
	        ])
	     ]),

	     m.component(footer)
	   ])

	  }
	}


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	// var pdfobject = require("../peices/pdfobject");



	module.exports = {
	  view:function(ctrl){
	    var courses = [
	      {
	        name:"English",
	        aim:"To provide trainees with spoken, written and listening skills",
	        target:"Parents ,teachers and general public",
	        duration:"90hrs",
	        cost:"9,000Rwf"
	      },
	      {
	        name:"Parenting",
	        aim:"To provide parents with skills to nurture, mentor, care the children",
	        target:"All parents",
	        duration:"60 hrs",
	        cost:"150000 Rwf"
	      },
	      {
	        name:"mentoring guidance and support for teachers and trainers",
	        aim:"To provide teachers with necessary skills and expertise to give guidance and support to learners",
	        target:"ECDE, Primary and secondary teachers. Departmental officials who mentor, guide and support teachers",
	        duration:"5 days or 3 hrs. per week for 3 months",
	        cost:"200,000 Rwf"
	      },

	      {
	        name:"proffessional certificate in advances teaching and Administration Of ECDE",
	        aim:"To provide aspiring ECDE teachers with skills, knowledge and expertise on ECDE",
	        target:"Holders of Teaching diploma and degree interested in ECDE",
	        duration:"One Trimester",
	        cost:"450,000 Rwf"
	      },

	      {
	        name:"Certificate in young children guidance and counselling",
	        aim:"To provide skills and knowledge in guidance and counselling in young children",
	        target:"Teachers, community workers and parents",
	        duration:"One Trimester",
	        cost:"450,000 Rwf"
	      },

	      {
	        name:"Certificate in general career guidance",
	        aim:"To provide skills and knowledge in career.",
	        target:"A level holders interested with guidance career",
	        duration:"A level holders interested with guidance career",
	        cost:"250,000 per trimester"
	      },

	      {
	        name:"Training of Trainers (TOT)",
	        aim:"To provide training skills to already trainers and aspiring trainers",
	        target:"Trainers",
	        duration:"One week",
	        cost:"200,000 Rwf"
	      },

	      {
	        name:"TOT in mentoring and coaching",
	        aim:"To provide skills of training and management of mentorship and coaching programme",
	        target:"Mentors and coaches",
	        duration:"One week",
	        cost:"200,000 Rwf"
	      },
	      {
	        name:"Curriculum vitae writing skills and interviews",
	        aim:"To provide skills to job seekers",
	        target:"A level and college graduates",
	        duration:"2 days",
	        cost:"100,000 Rwf"
	      },
	      {
	        name:"Project monitoring and evaluation",
	        aim:"To provide skills ,knowledge and expertise on project management",
	        target:"Project practitioners",
	        duration:"One week",
	        cost:"200,000 Rwf"
	      }
	    ]
	    return m(".app",[
	      m.component(navbar),

	      m(".row",[
	        //collumn 1 , the sidebar
	        m(".col l3 hide-on-med-and-down",[
	          m.component(sidebar)
	        ]),
	        //the sider and everything else
	        m(".col l9",[
	          m("h4",{class:"center blue-text"},"Proffessional development Programme"),
	          m("h6",{class:"center"},"CONTINOUS PROFESSIONAL TEACHER AND COMMUNITY EDUCATION COURSES"),

	          m("table",{class:"striped"},[
	            //table Head
	            m("thead",[
	              m("tr",[
	                m("th","Course"),
	                m("th","Aim"),
	                m("th","Target Group"),
	                m("th","Duration"),
	                m("th","Cost")
	              ])
	            ]),

	            m("tbody",[

	                courses.map(function(course){
	                  return m("tr",[
	                    m("td",course.name),
	                    m("td",course.aim),
	                    m("td",course.target),
	                    m("td",course.duration),
	                    m("td",course.cost)
	                  ])
	                })
	            ])
	          ])
	        ])
	     ]),

	     m.component(footer)
	   ])

	  }
	}


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	// var pdfobject = require("../peices/pdfobject");



	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	      m.component(navbar),

	      m(".row",[
	        //collumn 1 , the sidebar
	        m(".col l3 hide-on-med-and-down",[
	          m.component(sidebar)
	        ]),
	        //the sider and everything else
	        m(".col l9",[
	          m("h3",{class:"center blue-text"},"shortcourses"),

	          // m("h5",{class:"center"},"Our General Examination Policies"),
	          //
	          // m.component(pdfobject,{
	          //   link:"/documents/Student_application_form__.pdf"
	          // }),
	        ])
	     ]),

	     m.component(footer)
	   ])

	  }
	}


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	var pdfobject = __webpack_require__(97);



	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	       m.component(navbar),

	       m(".row",[
	         //collumn 1 , the sidebar
	         m(".col l3 hide-on-med-and-down",[
	           m.component(sidebar)
	         ]),
	         //the sider and everything else
	         m(".col l9",[
	           m("h3",{class:"center blue-text"},"Bronchure"),

	           m("h5",{class:"center"},"We are proud to present our bronchure,"),

	           m("h6",{class:"center"},"Feel free to download and go through at any time, any enqueries should be posted through ",[
	            m("a",{
	              href:"/contactus",
	              config:m.route
	            },"here")
	           ]),

	           m.component(pdfobject,{
	             name:"bronchure.pdf"
	           }),
	         ])

	       ]),

	       m.component(footer)
	     ])

	  }
	}


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(91);
	var footer = __webpack_require__(94);
	var sidebar = __webpack_require__(96);
	var pdfobject = __webpack_require__(97);



	module.exports = {
	  view:function(ctrl){
	    return m(".app",[
	       m.component(navbar),

	       m(".row",[
	         //collumn 1 , the sidebar
	         m(".col l3 hide-on-med-and-down",[
	           m.component(sidebar)
	         ]),
	         //the sider and everything else
	         m(".col l9",[
	           m("h3",{class:"center blue-text"},"Product Information"),

	           // m("h5",{class:"center"},"We are proud to present our bronchure,"),

	           m("h6",{class:"center"},"Feel free to download and go through the document at any time, any enqueries should be posted through ",[
	            m("a",{
	              href:"/contactus",
	              config:m.route
	            },"here")
	           ]),

	           m.component(pdfobject,{
	             name:"Product_Information.pdf"
	           }),
	         ])

	       ]),

	       m.component(footer)
	     ])

	  }
	}


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var toogle = __webpack_require__(75);
	var courses = __webpack_require__(76)
	var stages = __webpack_require__(77)
	var semesters = __webpack_require__(78)
	var units = __webpack_require__(79)
	var studentInfo = __webpack_require__(27)

	module.exports = {
		controller: () => {
			var availableTrisemesters = m.request({
				method: "GET",
				url: apiUrl + "/student/getDepartmentsAndCourses/" + m.route.param("student_id")
			})
			var getTri_semesters = m.request({
				method: "GET",
				url: apiUrl + "/basic/getTri_semesters/" + m.route.param("uniId")
			})
			return {
				selected: m.prop(false),
				results: availableTrisemesters,
				getTri_semesters: getTri_semesters
			}
		},
		view(ctrl, args) {
			return m(".app row container", [
				m(studentInfo),
				m(".input-field col s12 l12", [
					m("select", {
							config: function() {
								$('select').material_select();
							},
							onchange: function(e) {
								// ctrl.schema.trisem(e.target.value)
								console.log(ctrl.getTri_semesters().active_tri_semester.id)
								m.route("/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/config/" + m.route.param("student_id") + "/units/" + e.target.value + "/" + ctrl.getTri_semesters().active_tri_semester.id)
							}
						},

						m("option", {
							value: "",
							disabled: true,
							selected: true,
						}, "Select Semester to register to"),

						ctrl.results().availableStages.map(function(stage) {
							return m("option", {
								value: stage.id,
							}, stage.level.course.name + " - " + stage.level.name + " - " + stage.name)
						})

					)
				]),
				m(".row container", [
					// m(".col l3", [
					// 	// m(".center","thing 1"),
					// 	m(courses)
					// ]),
					// m(".col l3", [
					// 	m(stages)
					// ]),
					// m(".col l3", [
					// 	m(semesters)
					// ]),
					// m(".col l3", [
					// 	m(units)
					// ])
				])
			])
		}
	}

/***/ }
/******/ ]);