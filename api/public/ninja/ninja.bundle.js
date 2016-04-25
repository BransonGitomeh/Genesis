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
	var studentUi = __components.studentLayout
	var churchUi = __components.churchAdminLayout


	var ninjaUIConfig = __webpack_require__(8)
	var uniAdminUiConfig = __webpack_require__(9)
	var churchiaAdminUiConfig = __webpack_require__(10)
	var uniStudentUiConfig = __webpack_require__(11)
	var uniRegistraUiConfig = __webpack_require__(12)


	m.route.mode = "hash";

	m.route(document.body, "/", {

		"/": __webpack_require__(13),

		"/home": m(adminUi, {
			config: ninjaUIConfig,
			body: __webpack_require__(15)
		}),

		"/churchia/new": m(adminUi, {
			config: ninjaUIConfig,
			body: __webpack_require__(18)
		}),
		"/churchia/all": m(adminUi, {
			config: ninjaUIConfig,
			body: __webpack_require__(19)
		}),

		"/uni/new": m(adminUi, {
			config: ninjaUIConfig,
			body: __webpack_require__(20)
		}),
		"/uni/all": m(adminUi, {
			config: ninjaUIConfig,
			body: __webpack_require__(21)
		}),

		//playground
		"/ninja/play/ted": m(adminUi, {
			config: ninjaUIConfig,
			body: __webpack_require__(22)
		}),

		"/ninja/play/caro": m(adminUi, {
			config: ninjaUIConfig,
			body: __webpack_require__(23)
		}),

		// student portal routes
		"/uni/admin/:uniName/:uniId/Student/:student_id": m(studentUi, {
			config: uniStudentUiConfig,
		}),

		"/uni/admin/:uniName/:uniId/Student/:student_id/finance": m(studentUi, {
			config: uniStudentUiConfig,
			body: __webpack_require__(25)
		}),

		// registra portal routes
		"/uni/admin/:uniName/:uniId/Registra": m(studentUi, {
			config: uniRegistraUiConfig,
			body: __webpack_require__(29)
		}),

		"/uni/admin/:uniName/:uniId/Registra/:student_id/finance": m(studentUi, {
			config: uniRegistraUiConfig,
			body: __webpack_require__(31)
		}),
		//------

		"/uniadmin/:uniName/:uniId": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(29)
		}),

		"/churchAdmin/:churchName/:churchId": m(churchUi, {
			config: churchiaAdminUiConfig,
			body: __webpack_require__(32)
		}),

		"/churchAdmin/:churchName/:churchId/Noticeboard": m(churchUi, {
			config: churchiaAdminUiConfig,
			body: __webpack_require__(34)
		}),

		"/churchAdmin/:churchName/:churchId/Noticeboard/new": m(churchUi, {
			config: churchiaAdminUiConfig,
			body: __webpack_require__(37)
		}),

		//finance search page
		"/uni/:uniName/:uniId/Students/search": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(31)
		}),

		//view noticeboard
		"/uni/:uniName/:uniId/noticeboard": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(38)
		}),

		"/uni/:uniName/:uniId/noticeboard/add": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(41)
		}),

		// view admins
		"/uni/admins/:uniName/:uniId": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(42)
		}),
		// add admin
		"/uni/admins/:uniName/:uniId/add": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(43)
		}),

		// view registras
		"/uni/registrars/:uniName/:uniId": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(44)
		}),
		// add registras
		"/uni/registra/:uniName/:uniId/add": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(45)
		}),

		//login for admin
		"/uniLogin/:uniName/:uniId": __webpack_require__(46),

		//configuration for the university

		//-----proffessional schools

		//view all proffessional schools
		"/uni/admin/:uniName/:uniId/schools": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(47),
		}),

		//viewing courses offered in a school ie IT
		//**"/courses" in the end since this route can offer other things, maybe
		"/uni/admin/:uniName/:uniId/schools/:school_id/courses": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(50),
		}),

		//viewing all the stages to be passed through in a level ie sem1 sem2 or in stages etc
		"/uni/admin/:uniName/:uniId/schools/:school_id/courses/:course_id/levels/:level_id/stages": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(52),
		}),
		//viewing all the units offered in a certain level...will ask for department to be selected
		"/uni/admin/:uniName/:uniId/schools/:school_id/courses/:course_id/levels/:level_id/stages/:stage_id/units": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(55),
		}),



		//-----departments

		//view all departments
		//view all proffessional schools
		"/uni/admin/:uniName/:uniId/departments/:school_id": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(57),
		}),

		//view all units a department offers, and add
		"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(59),
		}),

		//view its courses
		"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(50),
		}),

		//viewing all the levels of a certain course ie diploma etc
		"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(61),
		}),

		"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(52),
		}),

		"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id/stages/:stage_id/units": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(55),
		}),

		//a selected department is there
		"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id/stages/:stage_id/units/:selectedDepartment": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(62),
		}),
		//view its units
		"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/units": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(64),
		}),
		//view prices of a unit
		"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/units/:unit_id/prices": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(66),
		}),

		//other settings
		"/uni/admin/:uniName/:uniId/study_modes": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(68),
		}),
		//view all units a department offers, and add
		"/uni/admin/:uniName/:uniId/tri_sems": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(70),
		}),

		"/uni/admin/:uniName/:uniId/payment-methods": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(72),
		}),

		//register student to all that stuff
		"/uni/admin/:uniName/:uniId/Students/index": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(74),
		}),

		// "/uni/admin/:uniName/:uniId/Students/config/:student_id": m(adminUi, {
		// 	config: uniAdminUiConfig,
		// 	body: require("./app/uni/students/config"),
		// }),

		"/uni/admin/:uniName/:uniId/Students/config/:student_id/units/:semester_id/:tri_sem_id": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(75),
		}),

		"/uni/admin/:uniName/:uniId/Students/viewpayments/:student_id": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(26),
		}),

		"/uni/admin/:uniName/:uniId/Registra/viewpayments/:student_id": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(26),
		}),

		// "/uni/admin/:uniName/:uniId/Students/config/:student_id": m(adminUi, {
		// 	config: uniAdminUiConfig,
		// 	body: require("./app/uni/students/config"),
		// }),

		"/uni/admin/:uniName/:uniId/Students/payments/:student_id": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(81),
		}),

		"/uni/admin/:uniName/:uniId/Students": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(82),
		}),

		"/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(84),
		}),

		"/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(86),
		}),

		"/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages/:stage_id/study_mode": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(88),
		}),

		"/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages/:stage_id/study_mode/:study_mode": m(adminUi, {
			config: uniAdminUiConfig,
			body: __webpack_require__(90),
		}),
	})

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
/* 8 */
/***/ function(module, exports) {

	module.exports = function() {
	  var config = {
	    logoText: "Ninja admin Ui",
	    color: "purple",
	    topBarItems: [{
	        url: "/",
	        text: "Dashboard",
	        icon: "mdi-action-view-carousel right"
	      },
	      // {url:"/Ninja",text:"Ninja"},
	      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Churches",drops:[
	      // {url:"/test1",icon:"mdi-notification-event-note left",text:"test1"},

	      // {url:"/test3",icon:"mdi-notification-event-note left",text:"test3"},
	      // ]},
	      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Schools"}
	    ],
	    sideBarItems: [
	      // {text:"Churches",icon:"mdi-image-style",drops:[
	      //   {url:"/churchia/new",text:"New"},
	      //   {url:"/churchia/all",text:"View all"}
	      // ]},
	      {
	        url: "/home",
	        text: "Dashboard",
	        icon: "mdi-action-view-carousel"
	      },
	      {
	        text: "Universities",
	        url: "/uni/all",
	        icon: "mdi-image-movie-creation"
	      }, {
	        text: "Churches",
	        url: "/churchia/all",
	        icon: "mdi-av-my-library-books"
	      }

	      // {text:"Secondary schools",icon:"mdi-image-movie-creation",drops:[
	      //   {url:"/uni/new",text:"New"},
	      //   {url:"/uni/all",text:"View all"}
	      // ]},
	      // {text:"Play Ground",icon:"mdi-content-gesture",drops:[
	      //   {url:"/ninja/play/ted",text:"Ted"},
	      //   {url:"/ninja/play/caro",text:"Caro"}
	      // ]},
	      // {text:"Colleges",url:"/onlineChurch/admin/sermons",icon:"mdi-av-my-library-books"},
	      // {text:"844 Primary Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-communication-business"},
	      // {text:"844 High Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-image-texture"}
	    ]
	  }

	  return config
	}

/***/ },
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
/* 10 */
/***/ function(module, exports) {

	module.exports = function() {
	  var config = {
	    logoText: m.route.param("churchName") + " Admin Ui",
	    color: "orange",
	    topBarItems: [{
	        url: "/",
	        text: "Dashboard",
	        icon: "mdi-action-view-carousel right"
	      },
	      // {url:"/Ninja",text:"Ninja"},
	      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Churches",drops:[
	      // {url:"/test1",icon:"mdi-notification-event-note left",text:"test1"},

	      // {url:"/test3",icon:"mdi-notification-event-note left",text:"test3"},
	      // ]},
	      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Schools"}
	    ],
	    sideBarItems: [
	      // {text:"Churches",icon:"mdi-image-style",drops:[
	      //   {url:"/churchia/new",text:"New"},
	      //   {url:"/churchia/all",text:"View all"}
	      // ]},
	      {
	        text: "Dashboard",
	        url: "/churchAdmin/" + m.route.param("churchName") + "/" + m.route.param("churchId"),
	        icon: "mdi-action-view-carousel"
	      }, {
	        text: "Noticeboard",
	        url: "/churchAdmin/" + m.route.param("churchName") + "/" + m.route.param("churchId") + "/Noticeboard",
	        icon: "mdi-action-assignment"
	      }, {
	        text: "Sermons",
	        url: "/churchia/all",
	        icon: "mdi-av-my-library-books"
	      }, {
	        text: "Church members",
	        url: "/churchia/all",
	        icon: "mdi-action-perm-identity"
	      }, {
	        text: "Admins",
	        url: "/churchia/all",
	        icon: "mdi-communication-business"
	      }, {
	        text: "Site configuration",
	        url: "/churchia/all",
	        icon: "mdi-action-settings"
	      }

	      // {text:"Secondary schools",icon:"mdi-image-movie-creation",drops:[
	      //   {url:"/uni/new",text:"New"},
	      //   {url:"/uni/all",text:"View all"}
	      // ]},
	      // {text:"Play Ground",icon:"mdi-content-gesture",drops:[
	      //   {url:"/ninja/play/ted",text:"Ted"},
	      //   {url:"/ninja/play/caro",text:"Caro"}
	      // ]},
	      // {text:"Colleges",url:"/onlineChurch/admin/sermons",icon:"mdi-av-my-library-books"},
	      // {text:"844 Primary Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-communication-business"},
	      // {text:"844 High Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-image-texture"}
	    ]
	  }

	  return config
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(){
	  var config = {
	    logoText:m.route.param("uniName") + " Student Portal",
	  	color:"blue",
	  	topBarItems:[
	      {url:"/",text:"Home",icon:"mdi-action-view-carousel right"},
	  		// {url:"/Ninja",text:"Ninja"},
	  		// {url:"/Church",icon:"mdi-notification-network-locked left",text:"Churches",drops:[
	        // {url:"/test1",icon:"mdi-notification-event-note left",text:"test1"},

	        // {url:"/test3",icon:"mdi-notification-event-note left",text:"test3"},
	      // ]},
	      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Schools"}
	  	],
	  	sideBarItems:[
	      // {
	      //   text:"Dashboard",
	      //   url:"/uniadmin/" + m.route.param("uniName") + "/" + m.route.param("uniId"),
	      //   icon:"mdi-action-view-carousel"
	      // },
	      // {
	      //   text:"Noticeboard",
	      //   url:"/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard",
	      //   icon:"mdi-action-assignment"
	      // },
	      {
	        text:"Finance",
	        url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Student/" + m.route.param("student_id") + "/finance",
	        icon:"mdi-editor-attach-money"
	      },

	      // {
	      //   text:"Students",
	      //   url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/index",
	      //   icon:"mdi-action-perm-identity"
	      // },

	      // {
	      //   text:"Admins",
	      //   url:"/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId"),
	      //   icon:"mdi-action-assignment-ind"
	      // },
	      // {text:"System Users",icon:"mdi-av-my-library-books",drops:[
	      //   {text:"Registrars",url:"/uni/registrars/" + m.route.param("uniName") + "/" + m.route.param("uniId")},
	      // ]},


	      // {text:"Configuration",icon:"mdi-action-settings",drops:[
	      //   {text:"Schools",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/schools"},
	      //   // {text:"Departments",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments"},
	      //   {text:"Study modes",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/study_modes"},
	      //   {text:"Tri-Semesters",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/tri_sems"}

	      // ]}
	  	]
	  }

	  // m.request({
	  //   url:apiUrl + "/basic/getUniversity/" + m.route.param("uniId"),
	  //   method:"GET",
	  // }).then(function(res){
	  //   console.log(res);
	  //
	  // })

	  return config
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(){
	  var config = {
	    logoText:m.route.param("uniName") + " Registra Portal",
	  	color:"blue",
	  	topBarItems:[
	      {url:"/",text:"Home",icon:"mdi-action-view-carousel right"},
	  		// {url:"/Ninja",text:"Ninja"},
	  		// {url:"/Church",icon:"mdi-notification-network-locked left",text:"Churches",drops:[
	        // {url:"/test1",icon:"mdi-notification-event-note left",text:"test1"},

	        // {url:"/test3",icon:"mdi-notification-event-note left",text:"test3"},
	      // ]},
	      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Schools"}
	  	],
	  	sideBarItems:[
	      {
	        text:"Dashboard",
	        url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Registra/",
	        icon:"mdi-action-view-carousel"
	      },
	      // {
	      //   text:"Noticeboard",
	      //   url:"/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard",
	      //   icon:"mdi-action-assignment"
	      // },
	      {
	        text:"Finance",
	        url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Registra/" + m.route.param("student_id") + "/finance",
	        icon:"mdi-editor-attach-money"
	      },

	      // {
	      //   text:"Students",
	      //   url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/index",
	      //   icon:"mdi-action-perm-identity"
	      // },

	      // {
	      //   text:"Admins",
	      //   url:"/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId"),
	      //   icon:"mdi-action-assignment-ind"
	      // },
	      // {text:"System Users",icon:"mdi-av-my-library-books",drops:[
	      //   {text:"Registrars",url:"/uni/registrars/" + m.route.param("uniName") + "/" + m.route.param("uniId")},
	      // ]},


	      // {text:"Configuration",icon:"mdi-action-settings",drops:[
	      //   {text:"Schools",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/schools"},
	      //   // {text:"Departments",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments"},
	      //   {text:"Study modes",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/study_modes"},
	      //   {text:"Tri-Semesters",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/tri_sems"}

	      // ]}
	  	]
	  }

	  // m.request({
	  //   url:apiUrl + "/basic/getUniversity/" + m.route.param("uniId"),
	  //   method:"GET",
	  // }).then(function(res){
	  //   console.log(res);
	  //
	  // })

	  return config
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

	module.exports = {
	  controller: function() {
	    return {
	      schema: {
	        identifier: m.prop(""),
	        password: m.prop("")
	      },
	      //other controller functions here
	      onunload: function() {
	        $("body").removeClass("purple centered");
	        $("html").removeClass("centered");
	      }
	    }
	  },
	  view: function(ctrl, args) {
	    return m("div",{
	      id:"login-page",
	      class:"row"
	    },[

	    m(".col s12 z-depth-5 hoverable card-panel", {
	      id: "login-page",
	      config: function() {
	        $("body").addClass("purple centered");
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
	              role:"core",
	              cmd:"auth",
	              identifier: ctrl.schema.identifier(),
	              password: ctrl.schema.password(),
	            }
	          }).then(function(res) {
	            if(res){
	              m.route("/home")
	            }
	          })

	        }
	      }, [
	      
	        m(".row", [
	          m(".input-field col s12 l12 center", [
	            args ?
	            m("img", {
	              src: args ? args.holderPic : "",
	              class: "responsive-img valign profile-image-login"
	            })
	            :"",
	            m("p", {
	              class: "center login-form-text"
	            }, "login")
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
	            sizes: "s12 m12 l12",
	          })
	        ]),

	        m(".row", [
	          m(".input-field col s12", [
	            m("button", {
	              class: "btn  waves-effect waves-light col s12 purple",
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var item = __webpack_require__(16);
	var card = __webpack_require__(17)

	module.exports = {
	      controller: () => {
	            return {
	                  stats: m.request({
	                        method: "post",
	                        url: apiUrl + "/services",
	                        data: {
	                              role: "app",
	                              cmd: "get_stats"
	                        }
	                  }),
	                  data_grapgh: m.request({
	                        method: "post",
	                        url: apiUrl + "/services",
	                        data: {
	                              role: "app",
	                              cmd: "get_requests"
	                        }
	                  })
	            }
	      },
	      view: (ctrl, args) => {
	            var stats = ctrl.stats()
	            return m(".row", [

	                  m("div", {
	                        class: "row"
	                  }, [
	                        m("div", {
	                              id: "column_chart_lined",
	                              class: "col l6 s12",
	                              config: () => {
	                                    var chart1 = new Highcharts.Chart({
	                                          chart: {
	                                                renderTo: "column_chart_lined",
	                                                type: 'column'
	                                          },
	                                          title: {
	                                                text: 'Perf gragh'
	                                          },
	                                          xAxis: {
	                                                type: "datetime",
	                                                categories: ctrl.data_grapgh().creaedAts,
	                                                labels: {
	                                                      enabled: false
	                                                }
	                                          },
	                                          yAxis: {
	                                                title: {
	                                                      text: 'Process duration'
	                                                }
	                                          },
	                                          series: [{
	                                                name: 'Requests (' + ctrl.data_grapgh().durations.length + ' - time-ascending)',
	                                                data: ctrl.data_grapgh().durations
	                                          }]
	                                    })
	                              }
	                        }),
	                        m(card, {
	                              title: "Universities",
	                              number: stats.universities,
	                              color: "purple darken-2"
	                        }),

	                        m(card, {
	                              title: "Churches",
	                              number: stats.churches,
	                              color: "purple darken-3"
	                        })
	                  ]),
	                  m(".card-stats", [

	                        m(".row", [
	                              // m(card, {
	                              //       title: "All requests",
	                              //       number: stats.requests,
	                              //       color: "purple"
	                              // }),

	                              // m(card, {
	                              //       title: "Universities",
	                              //       number: stats.universities,
	                              //       color: "purple darken-2"
	                              // }),

	                              // m(card, {
	                              //       title: "Churches",
	                              //       number: stats.churches,
	                              //       color: "purple darken-3"
	                              // })
	                        ])
	                  ]),

	            ])
	      }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	var vm = {
	  logstuff:function(stuff){
	    console.log(stuff);
	  }
	}
	module.exports = {
	  controller:function(args){
	    return {
	      runthing:vm.logstuff(args)
	    }
	  },
	  view:function(ctrl,args){
	    return m("li",{class:"collection-item dismissable"},[
	      m("input",{
	        type:"checkbox",
	        disabled:"disabled",
	        id:args.text ? args.text : "",
	        onclick: function(e) {
	            args.complete(e.target["checked"]);
	        },
	        checked:args.complete()
	      }),
	      console.log(args.complete()),
	      m("label",{for:args.text,style:(args.complete() ? "text-decoration: line-through;" : "")},args.text),
	      m("br"),
	      m("span",{class:"task-cat teal"},args.type ? args.type : ""),
	      m("span",{class:"pink-text right"},args.due ? args.due : "")
	    ])
	  }
	}


/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);
	module.exports = {
		controller: function() {
			return {
				schema: {
					name: m.prop("")
				}
			}
		},
		view: function(controller, atrrs) {
			return m("form", {
				class: "card-panel",
				onsubmit: function(e) {
					m.request({
						url: apiUrl + "/services",
						method: "POST",
						data: {
							role: "church",
							cmd: "new",
							church_name: controller.schema.name()
						}
					}).then(m.route("/churchia/all"))
					e.preventDefault();
				}
			}, [
				m(inputComponent, {
					label: "Name of new Church",
					icon: "mdi-communication-business prefix",
					type: "text",
					value: controller.schema.name
				}),
				m("button", {
					type: "submit",
					class: "btn waves-effect waves-block waves-light purple center"
				}, "Create new Church")
			])
		}
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
		controller: function() {
			return {
				churches: m.request({
					url: apiUrl + "/services",
					method: "post",
					data: {
						role: "church",
						cmd: "get_details",
						scope: "all"
					}
				})
			}
		},
		view: function(controller, atrrs) {
			return m(".container", [
				m("div", {
					class: "card-panel"
				}, [
					m("br"),
					m("span", {
						class: "flow-text"
					}, "Registered Churches"),
					m("a", {
						class: "btn blue right",
						href: "/churchia/new",
						config: m.route
					}, "create new"),
					m("br"),
					m("table", [
						m("thead", [
							m("tr", [
								// m("th","id"),
								m("th", "name"),
								m("th", "createdAt")
							])
						]),
						m("tbody", [
							console.log(controller.churches()),
							controller.churches().result.map(function(church) {
								return m("tr", [
									// m("td",university.id),
									m("td", church.name),
									m("td", church.createdAt),
									m("td", [
										m("a", {
											href: "/churchAdmin/" + church.name + "/" + church.id,
											config: m.route
										}, "Admin Ui")
									]),
									m("td", [
										m("a", {
											href: "/uniLogin/" + church.name + "/" + church.id,
											config: m.route,
											rel: "external",
										}, "Login Screens")
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);
	module.exports = {
	  controller:function(){
	    return {
	      schema:{
	        name:m.prop("")
	      }
	    }
	  },
	  view:function(controller,atrrs){
	    return m("form",{
	      class:"card-panel",
	      onsubmit:function(e){
	        m.request({
	          url:apiUrl + "/basic/makeUniversity",
	          method:"POST",
	          data:{
	            name:controller.schema.name()
	          }
	        }).then(m.route("/uni/all"))
	        e.preventDefault();
	      }
	    },[
	      m(inputComponent,{
	        label:"Name of new uni",
	        icon:"mdi-communication-business prefix",
	        type:"text",
	        value:controller.schema.name
	      }),
	        m("button",{
	            type:"submit",
	            class:"btn waves-effect waves-block waves-light purple center"
	        },"create school")
	    ])
	  }
	}


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
	  controller:function(){
	    return {
	      universities:m.request({url:apiUrl + "/basic/getUniversities",method:"GET"})
	    }
	  },
	  view:function(controller,atrrs){
	    return m(".container",[
	      m("div",{class:"card-panel"},[
	          m("br"),
	          m("span",{class:"flow-text"},"Registered Universities"),
	          m("a",{
	            class:"btn blue right",
	            href:"/uni/new",
	            config:m.route
	          },"create new"),
	          m("br"),
	          m("table",[
	            m("thead",[
	              m("tr",[
	                // m("th","id"),
	                m("th","name"),
	                m("th","admins"),
	                m("th","registras"),
	                m("th","students"),
	                m("th","age")
	              ])
	            ]),
	            m("tbody",[
	                controller.universities().map(function(university){
	                  return m("tr",[
	                    // m("td",university.id),
	                    m("td",university.name),
	                    m("td",university.admins),
	                    m("td",university.registras),
	                    m("td",university.students),
	                    m("td",university.age),
	                    m("td",[
	                      m("a",{
	                        href:"/uniadmin/" + (university.uniName  || university.name )+ "/" + university.id,
	                        config:m.route,
	                        target:"_blank"
	                      },"Admin Ui")
	                    ]),
	                    m("td",[
	                      m("a",{
	                        href:"/uniLogin/" + (university.uniName  || university.name )+ "/" + university.id,
	                        config:m.route,
	                        rel:"external",
	                      },"Login Screens")
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
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  controller:function(){
	    return {
	      universities:m.request({url:apiUrl + "/basic/getUniversities",method:"GET"})
	    }
	  },
	  view:function(controller,atrrs){
	    return m("div",[
	      m("div",{class:"card-panel"},[
	        m("h1","welcome to ninja homepage motherfucker"),
	        m("h5","todo-list"),
	        m("ol",[
	          m("strike","Add ability to pull all existing universities to home.js"),
	          m("br"),
	          m("li","Add ability to add a university from the home.js"),
	          m("li","Add link to each university, to take you to their admin Ui"),
	          m("li","ted comes to fuck up exponentially")
	        ]),

	        m("div",{class:"card-panel"},[
	          m("blockquote","fuck you bitches")
	          ]),

	m("nav",{class:"nav-wrapper green"},[
	        m("a",{class:"brand-logo left"},"LOGO"),
	        m("ul",{class:"nav-mobile right hide-on-med-and-down"},[

	          m("li",[
	            m("a","branie")
	          ]),

	          m("li",[
	            m("a","caroline")
	          ]),

	          m("li",[
	            m("a","ted")
	          ]),

	          m("li",[
	            m("a","awesome")
	        ])
	          ])
	        ]),
	        //nice cute card hehe
	        m("div",{class:"row"},[
	          m("div",{class:"col s12 m7"},[
	            m("div",{class:"card yellow darken-3"},[
	              m("div",{class:"card-content white-text"},[
	                m("span",{class:"card-title"},"fuck off"),
	                m("p",{class:"flow-text"},"this is supposed to be the content")
	              ])
	            ])
	          ])
	        ]),
	        //other cute card
	        m("row",[
	          m(".col s12 m6 l6",[
	            m(".card blue-grey darken-1",[
	              m(".card-content white-text",[
	                m("span",{class:"card-title"},"i am a card title"),
	                m("p","I am a very simple card. I am good at containing small bits of information.I am convenient because I require litt"),
	                m(".card-action",[
	                  m("a","link 1"),
	                  m("a","link-2")
	                ])
	              ])
	            ])
	          ])
	        ]),

	        m("div",{
	          class:"btn waves-effect waves-block waves-light purple center",
	          onclick:function(){
	            m.request({url:apiUrl + "/test2/users",method:"GET"}).then(m.route( m.route() ))
	          }
	        },"initialize server with fake data"),

	        m("br"),

	        m("table",[
	          m("thead",[
	            m("tr",[
	              m("th","id"),
	              m("th","name"),
	              m("th","createdAt"),
	              m("th","updatedAt")
	            ])
	          ]),
	          m("tbody",[
	              controller.universities().map(function(university){
	                return m("tr",[
	                  m("td",university.id),
	                  m("td",university.name),
	                  m("td",university.createdAt),
	                  m("td",university.updatedAt),
	                  m("td",[
	                    m("a",{
	                      href:"/uniadmin/" + university.id,
	                      config:m.route
	                    },"go to admin ui")
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var card = __webpack_require__(24);
	module.exports = {
	  controller:function(){
	    return {
	      universities:m.request({url:apiUrl + "/basic/getUniversities",method:"GET"})
	    }
	  },
	  view:function(ctrl,args){
	      return m("div",[
	      m("h4","i am awesome"),
	      m("ul",[
	        ctrl.universities().map(function(uni){
	      m("li",uni.name)
	        })
	      ]),
	      m(card),
	      //m("div",{class:"card-panel"},[
	        m("div",{class:"divider"}),
	        m("div",{class:"row"},[
	          m("div",{class:"col l6"},[
	            m("div",{class:"card-panel"},"column 1")
	          ]),
	          m("div",{class:"col l6"},[
	            m("div",{class:"card-panel"},"column 2")
	        ]),
	      ]),

	      //]),

	      //m("div",{class:"card-panel"},[
	        m("div",{class:"divider"}),
	        m("div",{class:"row"},[
	          m("div",{class:"col l6"},[
	            m("div",{class:"card-panel"},"column 1")
	          ]),
	          m("div",{class:"col l6"},[
	            m("div",{class:"card-panel"},"columnl 2")
	          ])
	        ]),
	      //]),

	      //m("div",{class:"card-panel"},[
	        m("div",{class:"divider"}),
	        m("div",{class:"row"},[
	          m("div",{class:"col l4"},[
	            m("div",{class:"card-panel"},"column 1")
	          ]),
	          m("div",{class:"col l4"},[
	            m("div",{class:"card-panel"},"column 2")
	          ]),
	          m("div",{class:"col l4"},[
	            m("div",{class:"card-panel"},"column 3")
	          ]),

	      //]),

	      m("div",{class:"divider"}),
	      m("div",{class:"row"},[
	        m("div",{class:"col l4"},[
	          m("div",{class:"card-panel"},"column 1")
	        ]),
	        m("div",{class:"col l4"},[
	          m("div",{class:"card-panel"},"column 2")
	        ]),
	        m("div",{class:"col l4"},[
	          m("div",{class:"card-panel"},"column 3")
	        ]),
	        m("div",{class:"col l4"},[
	          m("div",{class:"card-panel"},"column 4")
	        ]),
	        ])
	      ]),
	    ])
	  }
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
	  controller:function(){
	    return {
	      talk:function(){
	        alert("my name is caro")
	      },
	      talkSomethingElse:function(){
	        alert("my name is caro another")
	      }
	    }
	  },
	  view:function(ctrl,args){
	    return  m("div",{class:"card-panel"},[
	      m("h1",{class:"center"},"my card component")
	      ,m("div",{class:"divider"})
	      ,m("div","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
	      ,m("button",{
	        onclick:function(){
	          ctrl.talkSomethingElse();
	          m("div",{class:"divider"})
	        }
	      },"caro's button")
	    ])
	  }
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var financeReport = __webpack_require__(26)

	module.exports = {
		view:(ctrl,args)=>{
			return m(financeReport,{
				noBar:true
			})
		}
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var paymentCard = __webpack_require__(27)
	var studentInfo = __webpack_require__(28)

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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var card = __webpack_require__(30)

	var inputComponent = __webpack_require__(14);
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var card = __webpack_require__(33)

	var inputComponent = __webpack_require__(14);
	module.exports = {
		controller: () => {
			return {
				ChurchStats: m.request({
					method: "post",
					url: apiUrl + "/services",
					data: {
						role: "church",
						cmd: "get_stats",
						church_id: m.route.param("churchId")
					}
				})
			}
		},
		view: (ctrl, atrs) => {
			var stats = ctrl.ChurchStats().result
			console.log(stats)
			return m(".card-panelx", [
				m(".card-stats", [

					m(".row", [
						m(card, {
							title: "Admins",
							number: stats.admins,
							color: "orange"
						}),

						m(card, {
							title: "Users",
							number: stats.users,
							color: "orange darken-2"
						}),

						m(card, {
							title: "Messages",
							number: stats.messages,
							color: "orange darken-3"
						}),

						m(card, {
							title: "Unique visitors",
							number: stats.uniqueVisitors,
							color: "orange darken-4"
						})
					])
				])

			])
		}
	}

/***/ },
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	  var noticeItem = __webpack_require__(35)
	  var oldNotices = __webpack_require__(36)
	  var inputComponent = __webpack_require__(14);
	  module.exports = {
	    controller: function() {
	      return {
	        noticeboardItems: m.request({
	          url: apiUrl + "/services",
	          method: "Post",
	          data:{
	            role:"church",
	            cmd:"get_notices",
	            church_id:m.route.param("churchId")
	          }
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
	                m.route( m.route() + "/new" )
	              },
	              type: "submit",
	              class: "btn waves-effect waves-block waves-light blue right"
	            }, "Create New Notice")
	          ])
	        ]),


	        m(".row", [
	          m(".col l8", [
	            m(".divider"),
	            controller.noticeboardItems().result.map(function(item) {
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
/* 35 */
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
	                        url: apiUrl + "/services",
	                        method: "POST",
	                        data: {
	                          role: "church",
	                          cmd: "remove_notice",
	                          notice_id: args.id
	                        }
	                      }).then(m.route(m.route()))
	                    }
	                  }, "remove"),
	                  //make old
	                  m("button", {
	              class: "btn-flat right",
	              onclick: function() {
	                m.request({
	                  url: apiUrl + "/services",
	                  method: "POST",
	                  data: {
	                    role: "church",
	                    cmd: "make_notice_old",
	                    notice_id:args.id 
	                  }
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
/* 36 */
/***/ function(module, exports) {

	module.exports = {
	  controller: function() {
	    return {
	      notices: m.request({
	        method: "post",
	        url: apiUrl + "/services",
	        data:{
	          role:"church",
	          cmd:"get_old_notices",
	          church_id:m.route.param("churchId")
	        }
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var myComponent = __webpack_require__(35)
	var inputComponent = __webpack_require__(14);
	module.exports = {
	  controller:function(){
	    return {
	      schema:{
	        title:m.prop(""),
	        content:m.prop("")
	      }
	    }
	  },
	  view:function(controller,atrrs){
	    return m("span",[
	       m("nav",[
	            m(".nav-wrapper blue",[
	            m(".col s6",[
	              m("a",{class:"breadcrumb"},"Dashboard"),
	              m("a",{class:"breadcrumb"},"Noticeboard"),
	              m("a",{class:"breadcrumb"},"New")
	            ])
	          ])
	        ]),
	        m("form",{
	          class:"container",
	          onsubmit:function(e){
	            m.request({
	              url:apiUrl + "/services",
	              method:"POST",
	              data:{
	                role:"church",
	                cmd:"add_notice",
	                church_id:m.route.param("churchId"),
	                title:controller.schema.title(),
	                content:controller.schema.content()
	              }
	            }).then(m.route( "/churchAdmin/" + m.route.param("churchName") + "/" + m.route.param("churchId") + "/Noticeboard" ))
	            e.preventDefault();
	          }
	        },[
	          // m("h1",{class:"center"},"New Noticeboard Item"),
	          m(inputComponent,{
	            label:"New Notice Header",
	            icon:"mdi-communication-business prefix",
	            type:"text",
	            value:controller.schema.title
	          }),

	          m(inputComponent,{
	            label:"New Notice Body",
	            icon:"mdi-communication-business prefix",
	            type:"textarea",
	            value:controller.schema.content
	          }),
	            m("button",{
	                type:"submit",
	                class:"btn waves-effect waves-block waves-light green center"
	            },"Create Notice")
	        ])
	      ])
	  }
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	  var noticeItem = __webpack_require__(39)
	  var oldNotices = __webpack_require__(40)
	  var inputComponent = __webpack_require__(14);
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var myComponent = __webpack_require__(39)
	var oldNotices = __webpack_require__(40)
	var inputComponent = __webpack_require__(14);
	module.exports = {
	  controller:function(){
	    return {
	      schema:{
	        title:m.prop(""),
	        content:m.prop("")
	      }
	    }
	  },
	  view:function(controller,atrrs){
	    return m("span",[
	       m("nav",[
	            m(".nav-wrapper blue",[
	            m(".col s6",[
	              m("a",{class:"breadcrumb"},"Dashboard"),
	              m("a",{class:"breadcrumb"},"Noticeboard"),
	              m("a",{class:"breadcrumb"},"New")
	            ])
	          ])
	        ]),
	        m("form",{
	          class:"container",
	          onsubmit:function(e){
	            m.request({
	              url:apiUrl + "/basic/addToNoticeboard/" + m.route.param("uniId"),
	              method:"POST",
	              data:{
	                title:controller.schema.title(),
	                content:controller.schema.content()
	              }
	            }).then(m.route( "/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard" ))
	            e.preventDefault();
	          }
	        },[
	          // m("h1",{class:"center"},"New Noticeboard Item"),
	          m(inputComponent,{
	            label:"New Notice Header",
	            icon:"mdi-communication-business prefix",
	            type:"text",
	            value:controller.schema.title
	          }),

	          m(inputComponent,{
	            label:"New Notice Body",
	            icon:"mdi-communication-business prefix",
	            type:"textarea",
	            value:controller.schema.content
	          }),
	            m("button",{
	                type:"submit",
	                class:"btn waves-effect waves-block waves-light green center"
	            },"Create Notice")
	        ])
	      ])
	  }
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// var myComponent = require("./noticeItem")

	var inputComponent = __webpack_require__(14);
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// var myComponent = require("./noticeItem")

	var inputComponent = __webpack_require__(14);
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// var myComponent = require("./noticeItem")

	var inputComponent = __webpack_require__(14);
	module.exports = {
	  controller: function() {
	    return {
	      registras: m.request({
	        url: apiUrl + "/services",
	        method: "POST",
	        data:{
	          role:"registra",
	          cmd:"get_all",
	          uni_id:m.route.param("uniId")
	        }
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
	        // m("div", "Current Registra's"),
	        m("a", {
	          class: "btn blue right",
	          href: "/uni/registra/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/add",
	          config: m.route
	        }, "add registra"),
	        m("table", [

	          m("thead", [
	            m("tr", [
	              m("th", "email"),
	              // m("td","createdAt")
	            ])
	          ]),
	          // console.log(controller.registras().res.registras)
	          m("tbody", [
	            controller.registras().res.registras.map(function(admin) {
	              return m("tr", [
	                m("td", admin.identifier),
	                // m("td",admin.createdAt),
	                m("td", [
	                  m("a",{
	                    href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Registra/",
	                    config:m.route,
	                  },"more details")
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// var myComponent = require("./noticeItem")

	var inputComponent = __webpack_require__(14);
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
	              url:apiUrl + "/services",
	              method:"POST",
	              data:{
	                role:"registra",
	                cmd:"add_new",
	                uni_id:m.route.param("uniId"),
	                userIdentifier:controller.schema.userIdentifier(),
	                userUsername:controller.schema.userUsername(),
	                userPassword:controller.schema.userPassword()
	              }
	            }).then(m.route("/uni/registrars/" + m.route.param("uniName") + "/" + m.route.param("uniId") )) //back to view all admins
	            e.preventDefault();
	          }
	        },[
	          m("h1",{class:"center"},"Enter new registra account"),

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
	            },"Create Userx")
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(48);

	var breadcrumb = __webpack_require__(49);

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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 49 */
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(48);
	var courses = __webpack_require__(51);

	var breadcrumb = __webpack_require__(49);

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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var courses = __webpack_require__(51);
	var levels = __webpack_require__(53);
	var stages = __webpack_require__(54);


	var breadcrumb = __webpack_require__(49);

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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(48);
	var stages = __webpack_require__(54);
	var units_selected = __webpack_require__(56);


	var breadcrumb = __webpack_require__(49);

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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var departments = __webpack_require__(58);

	var breadcrumb = __webpack_require__(49);
	var schools = __webpack_require__(48);

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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var departments = __webpack_require__(58);
	var choices = __webpack_require__(60);


	var breadcrumb = __webpack_require__(49);

	var schools = __webpack_require__(48);

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
/* 60 */
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(48);
	var courses = __webpack_require__(51);
	var levels = __webpack_require__(53);


	var breadcrumb = __webpack_require__(49);

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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(48);
	var stages = __webpack_require__(54);
	var units_available = __webpack_require__(63);


	var breadcrumb = __webpack_require__(49);

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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var schools = __webpack_require__(48);
	var departments = __webpack_require__(58);
	var units = __webpack_require__(65);


	var breadcrumb = __webpack_require__(49);

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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var prices = __webpack_require__(67);
	var units = __webpack_require__(65)
	var breadcrumb = __webpack_require__(49);

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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var study_modes = __webpack_require__(69);

	var breadcrumb = __webpack_require__(49);

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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var tri_sems = __webpack_require__(71);

	var breadcrumb = __webpack_require__(49);

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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var payments = __webpack_require__(73);

	var breadcrumb = __webpack_require__(49);

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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

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
/* 74 */
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var toogle = __webpack_require__(76);
	var courses = __webpack_require__(77)
	var stages = __webpack_require__(78)
	var semesters = __webpack_require__(79)
	var units = __webpack_require__(80)
	var studentInfo = __webpack_require__(28)

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
/* 76 */
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
/* 80 */
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var paymentCard = __webpack_require__(27)
	var inputComponent = __webpack_require__(14);
	var studentInfo = __webpack_require__(28)

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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);
	var selectCourse = __webpack_require__(83)

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
/* 83 */
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

	var selectCourse = __webpack_require__(83)
	var selectLevel = __webpack_require__(85)


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
/* 85 */
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

	var selectCourse = __webpack_require__(83)
	var selectLevel = __webpack_require__(85)
	var selectSemester = __webpack_require__(87)

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
/* 87 */
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);

	var selectCourse = __webpack_require__(83)
	var selectLevel = __webpack_require__(85)
	var selectSemester = __webpack_require__(87)
	var selectStudyMode = __webpack_require__(89)

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
/* 89 */
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var inputComponent = __webpack_require__(14);
	var selectCourse = __webpack_require__(83)
	var selectLevel = __webpack_require__(85)
	var selectSemester = __webpack_require__(87)
	var selectStudyMode = __webpack_require__(89)

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

/***/ }
/******/ ]);