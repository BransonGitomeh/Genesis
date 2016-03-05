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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	m.route.mode = "hash";

	m.route(document.body,'/',{
	  "/":__webpack_require__(2),
	  "/contactus":__webpack_require__(10),
	  // //academics
	  "/academics/ecd":__webpack_require__(13),
	  "/academics/calender":__webpack_require__(15),
	  "/academics/admissions":__webpack_require__(16),
	  "/academics/examinations":__webpack_require__(17),
	  "/academics/liblary":__webpack_require__(18),

	  //operations
	  "/operations/service_charter":__webpack_require__(19),
	  "/operations/governance":__webpack_require__(20),
	  "/operations/HR":__webpack_require__(21),
	  "/operations/finance":__webpack_require__(22),
	  "/operations/downloads":__webpack_require__(23),

	  //proffessional_development
	  "/proffessional_development/ctdc":__webpack_require__(24),
	  "/proffessional_development/shortcourses":__webpack_require__(25),
	  "/proffessional_development/bronchure":__webpack_require__(26),
	  "/proffessional_development/productinformation":__webpack_require__(27),

	  // "/register/student":require('./pages/student-register'),
	  // "/verify/student/:identifier":require('./pages/student-verify'),
	  // "/login/student":require('./pages/student'),
	  // "/login/student-pass/:identifier":require('./pages/student-pass'),
	  // "/login/student-forgot/:identifier":require('./pages/student-forgot'),

	  //Authentifucation routes for the domains that are supported or should be publicly shown
	  //Student
	  "/auth/Student/register/":__webpack_require__(28), //register
	  "/auth/Student/pass-1/":__webpack_require__(30), //give identifier ----
	  "/auth/Student/pass-2/:identifier":__webpack_require__(32),
	  "/auth/Student/verify/:identifier":__webpack_require__(34),
	  "/auth/Student/forgot/:identifier":__webpack_require__(36),

	  //Admin
	  "/auth/Admin/register/":__webpack_require__(38), //register
	  "/auth/Admin/pass-1/":__webpack_require__(39), //give identifier ----
	  "/auth/Admin/pass-2/:identifier":__webpack_require__(40),
	  "/auth/Admin/verify/:identifier":__webpack_require__(41),
	  "/auth/Admin/forgot/:identifier":__webpack_require__(42),

	  //Staff
	  "/auth/Staff/register/":__webpack_require__(43), //register
	  "/auth/Staff/pass-1/":__webpack_require__(44), //give identifier ----
	  "/auth/Staff/pass-2/:identifier":__webpack_require__(45),
	  "/auth/Staff/verify/:identifier":__webpack_require__(46),
	  "/auth/Staff/forgot/:identifier":__webpack_require__(47)



	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3)
	var sidebar = __webpack_require__(6)
	var nivoslider = __webpack_require__(8)
	var footer = __webpack_require__(9)

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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var navitem = __webpack_require__(4)
	var JD = __webpack_require__(5);

	module.exports = {
	  view: function(args){
	    // settings for the nav-bar
	    var navColor = "blue";
	    dropIcon="material-icons right"
	    //dynamic data
	    var dropdowns = [{
	      "Academics":[{
	                "links":[
	                  { title:"Department of Early Childhood Development", url:"/academics/ecd",direction:'left' },
	                  { title:"Department of Examinations", url:"/academics/examinations",direction:'left' },
	                  { title:"Academic Calender", url:"/academics/calender",direction:'left' },
	                  { title:"Library", url:"/academics/liblary",direction:'left' },
	                  { title:"Admissions", url:"/academics/admissions",direction:'left' },

	                ],
	                "settings":{
	                  direction:"left"
	                }
	          }],
	      "Operations":[{
	                    "links":[
	                      { title:"Governance", url:"/operations/governance",direction:'left' },
	                      { title:"Service Charter", url:"/operations/service_charter",direction:'left' },
	                      { title:"Human Resource Department", url:"/operations/HR",direction:'left' },
	                      { title:"Finance Department", url:"/operations/finance",direction:'left' },
	                      { title:"Downloads", url:"/operations/downloads",direction:'left' }
	                    ],
	                    "settings":{
	                      direction:"left"
	                    }
	          }],

	      "Proffessional_Development":[{
	                        "links":[
	                          { title:"Continuous Teacher Development Courses", url:"/proffessional_development/ctdc",direction:'left' },
	                          { title:"Short Courses", url:"/proffessional_development/shortcourses",direction:'left' },
	                          { title:"Bronchure", url:"/proffessional_development/bronchure",direction:'left' }

	                        ],
	                        "settings":{
	                          direction:"left"
	                        }
	          }],

	      "Portals":[{
	                          "links":[
	                              { title:"Student", url:"/auth/Student/pass-1/",direction:'left' },
	                              { title:"Staff", url:"/auth/Staff/pass-1/",direction:'left' },
	                              { title:"Admin", url:"/auth/Admin/pass-1/",direction:'left' }
	                           ],
	                            "settings":{
	                              direction:"right"
	                            }
	          }],

	    }]


	    var navItems = [];
	    var sideItems = [];
	    return m("header",[
	        m('nav',[
	          m("div",{class:"nav-wrapper " + navColor},[ //where settings of the nav-bar go


	            m("ul",[
	              m("a",{class: "brand-logo hide-on-large-only"},"Premier ECDE Teachers college"),
	              // <a class="button-collapse waves-effect waves-light" data-activates="ember337">
	              //   <i class="small mdi-navigation-menu"></i>
	              // </a>
	              m("a",{
	                class:"button-collapse waves-effect waves-light",
	                "data-activates":"side-nav",
	                alt:"menu",
	                config:function(){
	                  $(".button-collapse").sideNav();
	                }
	              },[
	                m("i",{
	                  class:"small mdi-navigation-menu",
	                  alt:"menu"
	                })
	              ]),
	              //------------------------------------------------------------------------------------
	              JD.loggedIn() ? //only sho if logged in
	              m("span",[


	              m("li",{class:"right"},[
	                m("a",{
	                   class:'dropdown-button',
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
	                   "data-activates":"usercontrolls"
	                 },[
	                   m("i",{class:"mdi-navigation-arrow-drop-down right"}),
	                   m("span",JD.session().user.identifier)
	                 ])
	              ]),

	              m("ul",{ //wrapper arround the li links
	                class:"dropdown-content",
	                id:"usercontrolls"
	              },[
	                m("span",{
	                  onclick:function(){
	                    JD.invalidateSession();
	                  }
	                },[
	                  m("li",[
	                      m("a",{
	                        href:"/logout",
	                        config:m.route
	                      }, "Log Out")
	                    ])
	                ]),


	                    m("li",[
	                      m("a",{
	                        href:"/verify",
	                        config:m.route
	                      }, "My Fee Statement"),
	                    ]),

	                      m("li",[
	                        m("a",{
	                          href:"/verify",
	                          config:m.route
	                        }, "Verify Account")
	                    ])
	              ])
	            ])

	              : m("span"),

	              //-------------------------------------------------------------------------------------


	              m("ul",{class:"hide-on-med-and-down"},[

	                  m.component(navitem,{link:{
	                    title:"Welcome",
	                    direction:"left",
	                    url:"/"
	                  }}),

	                  //create all the links on the navbar using the object on the top
	                   dropdowns.map(function(newdropTitles){
	                     for(dropTitle in newdropTitles){

	                      //push the m(links) generated into an array that will be returned later
	                     navItems.push(
	                       m("li",{class:newdropTitles[dropTitle][0].settings.direction},[
	                         m("a",{
	                            class:'dropdown-button',
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
	                            "data-activates":dropTitle
	                          },[
	                            m("i",{class:"mdi-navigation-arrow-drop-down right"}),
	                            m("span",dropTitle)
	                          ])
	                       ]),

	                       m("ul",{ //wrapper arround the li links
	                         class:"dropdown-content",
	                         id:dropTitle
	                       },[
	                         newdropTitles[dropTitle][0].links.map(function(droplink){ //dynamic links with a's inside
	                        //  console.log(droplink.url);
	                             return m("li",{
	                               class:(m.route() === droplink.url ? 'active': '')
	                             },[
	                               m("a",{
	                                 class:(m.route() === droplink.url ? 'active': ''),
	                                 href:droplink.url,
	                                 config:m.route
	                               }, droplink.title)
	                             ]);
	                           })
	                       ])
	                       );

	                     }
	                     //return the array containing all the links in the dom
	                     return navItems
	                   }),


	                  console.log(JD.session()),
	                   m.component(navitem,{link:{
	                     title:"Contact Us",
	                     direction:"right",
	                     url:"/contactus"
	                   }}),

	                 ])
	             ]),

	             m("ul",{class:"side-nav",id:"side-nav"},[
	                m.component(navitem,{link:{
	                  title:"Welcome",
	                  url:"/"
	                }}),

	               dropdowns.map(function(newdropTitles){
	                 for(dropTitle in newdropTitles){
	                   newdropTitles[dropTitle][0].links.map(function(droplink){

	                      sideItems.push(
	                        m.component(navitem,{link:{
	                          title:droplink.title,
	                          url:droplink.url
	                        }})
	                      )
	                   })
	                 }

	                 return sideItems
	               }),


	              //  m.component(navitem,{link:{
	              //    title:"home",
	              //    url:"/"
	              //  }}),
	             ]),
	           ])
	         ])
	       ])
	  }
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,attrs){
	    // console.log(attrs.link.title);
	    return m("li",{
	      class:'waves-effect waves-block waves-blue ' + attrs.link.direction + " " + (m.route() === attrs.link.url ? 'active': '')
	    },[
	        m("a",{
	                href:attrs.link.url,
	                config:m.route
	              }, attrs.link.title)
	    ])

	  }
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports =  {
	    makeQuery:function(collectionName,schema,MutationType,authIdentifier){
	      var QueryHead = collectionName + '[' + MutationType +']{'
	      var QueryTail = '}'

	      var QueryBody = " "
	      for(item in schema){
	        var QueryItem = item + ":" + schema[item]()
	        console.log(schema[item]())
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
	          Query:this.makeQuery(collection.name,collection.schema,MutationType,authIdentifier),
	          institution:"myinstitution",
	          domain:"student",
	          applicationId:"571213hgyhgj123hvhj",
	          sid:"sdfghjkl"
	      }

	      $.ajax({
	        method:"POST",
	        url:"http://localhost:4200/v1",
	        data:myObject
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var JD = __webpack_require__(5);
	var fbPage = __webpack_require__(7);

	module.exports = {
	  view:function(ctrl,attrs){
	    // console.log(attrs.link.title);
	    var links = [
	      {title:"Welcome",url:"/"},
	      {title:"Academic Calender", url:"/academics/calender"},
	      {title:"Downloads", url:"/operations/downloads"},
	      {title:"Library",url:"/academics/liblary"},
	      {title:"Bronchure",url:"/proffessional_development/bronchure"},
	      // {title:"NoticeBoard",url:"/NoticeBoard"},
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

	        //--------------------------------------------------------------
	        //NOTICE BOAD IS ONLY AVAILABLE TO THOSE logged in
	        JD.loggedIn() ?
	        m("li",[
	          m("a",{
	            class:(m.route() === "/login/NoticeBoard" ? 'active blue-text': ''),
	            href:"/login/StudentBoard", //use JD to decide what link to show based on who has logged in
	            config:m.route
	          },"Notice board")
	        ]):
	        m("span")
	        //----------------------------------------------------------------
	      ]),
	      //fb container
	      m(".container",[
	        m(fbPage,{
	          height:"250px",
	          width:"380px",
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var fbPage = __webpack_require__(7);

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
	        m("span",{class:"right"},"< SSU: 0.2.3 />")
	      ])
	    ])
	  }
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);

	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
	// var pdfobject = require("../peices/pdfobject");

	var contactForm = __webpack_require__(11)

	var contactus={
	  getData:function(){
	    return{
	      name : m.prop(""),
	      age : m.prop(""),
	      email : m.prop(""),
	      location : m.prop(""),
	      phonenumber : m.prop(""),
	      message : m.prop("")
	    }
	  },
	  setData:function(data){
	    // console.log("asked to save");
	    // console.log(data);
	  }
	};



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

	            m(contactForm)

	           ])

	         ]),

	         m.component(footer)
	       ])

	    }
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var forminput = __webpack_require__(12)

	var contactus={
	    getData:function(){
	      return{
	        name : m.prop(""),
	        age : m.prop(""),
	        email : m.prop(""),
	        location : m.prop(""),
	        phonenumber : m.prop(""),
	        message : m.prop("")
	      }
	    },
	    setData:function(data){
	        // console.log("asked to save");
	        // console.log(data);
	    }
	  };


	module.exports = {
	  

	  controller:function(){
	    var self = this;
	    this.data = contactus.getData();

	    this.save = function(errs){
	      contactus.setData(this.data);
	      console.log(self.data.email());
	    }.bind(this)
	  },

	  view: function(ctrl,args){
	    // return ("div","footer")
	    return  m("form",{
	              id:"form",
	              class:"card-panel row",
	              config:function(){
	                // Extension materialize.css
	                  $.validator.setDefaults({
	                      errorClass: 'invalid',
	                      validClass: "valid",
	                      errorPlacement: function (error, element) {
	                        // alert("form has an err, cant save")
	                        // console.log(error[0].id);
	                          $(element)
	                              .closest("form")
	                              .find("label[for='" + element.attr("id") + "']")
	                              .attr('data-error', error.text());
	                      },
	                      submitHandler: function (form) {
	                        // alert("form is ok saving")
	                          console.log('form ok');
	                          ctrl.save()
	                      }
	                  });

	                  $("#form").validate({
	                      rules: {
	                          dateField: {
	                              date: true
	                          }
	                      }
	                  });
	              },
	            },[
	              m("p",{class:"flow-text center"},"Leave us a Message"),

	              //form inputs
	              // single form input --can be extracted as a component

	              // m("div",ctrl.data.name()),

	              m(forminput,{
	                value:ctrl.data.name,
	                label:"Your Name",
	                type:"text",
	                sizes:"s12 m6 l6"
	              }),

	              m(forminput,{
	                value:ctrl.data.email,
	                label:"Your Email",
	                type:"email",
	                sizes:"s12 m6 l6"
	              }),


	              m(forminput,{
	                value:ctrl.data.location,
	                label:"Your Location",
	                type:"text",
	                sizes:"s12 m6 l6"
	              }),

	              m(forminput,{
	                value:ctrl.data.phonenumber,
	                label:"Your Phone Number",
	                type:"text",
	                sizes:"s12 m6 l6"
	              }),
	              // singe textarea at the end

	              m(forminput,{
	                value:ctrl.data.message,
	                label:"Your message",
	                type:"textarea",
	                sizes:"s12 m6 l12"
	              }),

	              // submit button
	              m(".row",[
	                m(".input-field col s12",[
	                  m("button",{
	                    class:"btn blue waves-effect waves-light right",
	                    type:"submit",
	                    "bubles":false
	                    // onclick:ctrl.save
	                  },"Send",[
	                    m("i",{class:'mdi-content-send right'})
	                  ])
	                ])
	              ])


	            ])
			}
	}



/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,attrs){
	    var textarea =  m("div",{class:"input-field validate  col " + attrs.sizes},[
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
	var pdfobject = __webpack_require__(14);



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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
	var pdfobject = __webpack_require__(14);



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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
	var pdfobject = __webpack_require__(14);



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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
	var pdfobject = __webpack_require__(14);



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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
	var pdfobject = __webpack_require__(14);

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
	              m("h3",{class:"center blue-text"},"Online Library"),
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
	         ])

	       ]),

	       m.component(footer)

	     ])

	  }
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
	var pdfobject = __webpack_require__(14);



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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// TODO make a nice table with b=versioning and cute download buttons and last updated list

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
	var pdfobject = __webpack_require__(14);



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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var footer = __webpack_require__(9);
	var sidebar = __webpack_require__(6);
	var pdfobject = __webpack_require__(14);



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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var register = __webpack_require__(29);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(register,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            verifyLink:"/auth/Student/verify"
	          })
	       ])
	    }
	}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var input = __webpack_require__(12)
	var JD = __webpack_require__(5);

	module.exports = {
	        controller: function(args) {
	            return {
	                onunload: function() {
	                    $( "body" ).removeClass( args.backgroundColor + " centered" );
	                    $( "html" ).removeClass( "centered" );
	                },

	                user:{
	          					name:"user",
	          					schema:{
	          						surname:m.prop(""),
	                      lastname:m.prop(""),
	          						identifier:m.prop(""),
	                      gender:m.prop(""),
	          						password:m.prop(""),
	                      confirmPass:m.prop(""),
	                      //add what church to be added to
	                      churchId:m.prop(config.profile.id),
	          					},
	                    vm:{
	                      sending:m.prop(false),
	                      error:m.prop(false),
	                      errorMessage:m.prop(""),
	                      loggedIn:m.prop(false)
	                    },
	                    mutate:function(MutationType,success,err){
	                      JD.sendQuery(this,MutationType,success,err)
	                    }

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

	                          console.log("seetting " + ctrl.user.vm.sending());

	                          //wait 1 millisecond for ui to update..that owuldnt hurt perf ;-)
	                          setTimeout(function(){
	                            m.startComputation();
	              						    // ctrl.user.mutate("register")
	                              console.log("sending")

	                              ctrl.user.mutate("create",function(res){
	                                m.endComputation();
	                                console.log(args.verifyLink);
	                                console.log(res)
	                                m.route(args.verifyLink + "/" + ctrl.user.schema.username());
	                              },function(err){
	                                //show the "error panel"
	                                ctrl.user.vm.error(true)

	                                console.log("err");

	                                ctrl.user.vm.sending(false)
	                                //display the error message from the server
	                                ctrl.user.vm.errorMessage(err.data)
	                                m.endComputation();
	                              })

	                          },5)

	              						event.preventDefault()
	              					}
	                      },[
	                        // logo on top
	                        m(".row",[
	                          m(".input-field col s12 l12 center",[
	                            m("h4","Register"),
	                            m("p",{class:"center"},"Join Our Online Community now!")

	                          ])
	                        ]),

	                        // input
	                        m(".row margin",[
	                          m(input,{
	                            value:ctrl.user.schema.surnmae,
	                            label:"Surname",
	                            type:"text",
	                            sizes:"s12 m12 l12",
	                            icon:"mdi-social-person-outline prefix"
	                          })
	                        ]),

	                        // input
	                        m(".row margin",[
	                          m(input,{
	                            value:ctrl.user.schema.Lastname,
	                            label:"Lastname",
	                            type:"text",
	                            sizes:"s12 m12 l12",
	                            icon:"mdi-social-person prefix"
	                          })
	                        ]),

	                        // input
	                        m(".row margin",[
	                          m(input,{
	                            value:ctrl.user.schema.identifier,
	                            label:"Personal Email Address",
	                            type:"text",
	                            sizes:"s12 m12 l12 datepicker",
	                            icon:"mdi-hardware-phonelink prefix"
	                          })
	                        ]),

	                        // input
	                        m(".row margin",[
	                          m(input,{
	                            value:ctrl.user.schema.password,
	                            label:"Your Password",
	                            type:"email",
	                            sizes:"s12 m12 l12",
	                            icon:"mdi-action-lock-outline prefix"
	                          })
	                        ]),

	                        // input
	                        m(".row margin",[
	                          m(input,{
	                            value:ctrl.user.schema.confirmPass,
	                            label:"Confirm Password!",
	                            type:"password",
	                            sizes:"s12 m12 l12",
	                            icon:"mdi-action-lock-outline prefix"
	                          })
	                        ]),



	                        // message area
	                        m(".input-field col s12 m12 l12",[
	                          m("p",{class:"margin medium-small red-text"},[
	                            (ctrl.user.vm.error() ? m("h6",{class:"center"},ctrl.user.vm.errorMessage()) : m("span")),
	                          ])
	                        ]),

	                        //chenging button true false (componentize)------------------------
	                        // console.log(ctrl.user.vm.sending()),
	                        ctrl.user.vm.sending() ?

	                          m(".input-field col s12",[
	                            m("button",{
	                              class: "btn-flat  waves-effect waves-light col s12"
	                            },"Registering...")
	                          ])

	                          :

	                          m(".input-field col s12",[
	                            m("button",{
	                              class: ctrl.user.vm.error() ? "btn  waves-effect waves-light col s12 red" : "btn  waves-effect waves-light col s12 " + args.btnColor,
	                              type:"submit"
	                            },"Register")
	                          ]),

	                          //----------------------------------------------------------------

	                        // other links
	                        m(".row",[

	                          m(".input-field col s6 m6 l6",[
	                            m("p",{class:"margin medium-small"},[
	                              m("a[href='/back']",{
	                                onclick:function(){
	                                  window.history.back()
	                                }
	                              },"Back")
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var login = __webpack_require__(31);

	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(login,{
	            headerText:"student Login(comming soon...)",
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            registerLink:"/auth/Student/register/",
	            passwordLink:"/auth/Student/pass-2/",
	            domain:"student"
	          })
	       ])
	    }
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var input = __webpack_require__(12)
	var JD = __webpack_require__(5);


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
	                            ctrl.user.mutate("checkIdentifier",function(){
	                              m.endComputation();
	                              m.route(args.passwordLink + ctrl.user.schema.identifier());
	                            },function(err){
	                              console.log(err);
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var password = __webpack_require__(33);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(password,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/tempImage.png",
	            forgotLink:"/auth/Student/forgot"
	          })
	       ])
	    }
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var input = __webpack_require__(12)
	const JD = __webpack_require__(5);


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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var verify = __webpack_require__(35);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(verify,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            registerLink:"/register/student"
	          })
	       ])
	    }
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var input = __webpack_require__(12)
	var JD = __webpack_require__(5);

	module.exports = {
	        controller: function(args) {
	            return {
	                onunload: function() {
	                    $( "body" ).removeClass( args.backgroundColor + " centered" );
	                    $( "html" ).removeClass( "centered" );
	                },
	                user:{
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

	                          //wait 1 millisecond for ui to update..that owuldnt hurt perf ;-)

	                          setTimeout(function(){
	                            m.startComputation()
	              						    // ctrl.user.mutate("register")
	                              console.log("sending")

	                              ctrl.user.mutate("verify",function(){
	                                m.endComputation();
	                                console.log("the code was verified correct");
	                                m.route("/")
	                              },function(err){
	                                //show the "error panel"
	                                ctrl.user.vm.error(true)

	                                console.log("err");

	                                ctrl.user.vm.sending(false)
	                                //display the error message from the server
	                                ctrl.user.vm.errorMessage(err.data)
	                                m.endComputation()
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
	                                class: "btn-flat  waves-effect waves-light col s12"
	                              },"verifying...")
	                            ])

	                            :

	                            m(".input-field col s12",[
	                              m("button",{
	                                class: ctrl.user.vm.error() ? "btn  waves-effect waves-light col s12 red" : "btn  waves-effect waves-light col s12 " + args.btnColor,
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
	                                onclick:function(){
	                                  window.history.back()
	                                }
	                              },"Cancel")
	                            ]),
	                          ]),

	                           m(".input-field col s6 m6 l6",[
	                            m("p",{class:"margin medium-small"},[
	                              m("a",{
	                                onclick:function(){
	                                  window.history.back()
	                                }
	                              },"Cancel")
	                            ]),
	                          ]),




	                        ])
	                      ])
	                    ])
	                ])
	            ])
	        }
	    }



	// (m.route() === attrs.link.url ? 'active': '')


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var forgot = __webpack_require__(37);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(forgot,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            verifyLink:"/verify/student/"
	          })
	       ])
	    }
	}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var input = __webpack_require__(12)

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
	                      m("form",{
	                        class:"login-form"
	                      },[
	                        // logo on top
	                        m(".row",[
	                          m(".input-field col s12 l12 center",[
	                            m("h4", "Forgot your password?"),
	                            m("i",{class:"center"},"We sent you an email at "),
	                            m("b",m.route.param("identifier")),
	                            m("i"," with a code to confirm that this is your account")

	                          ])
	                        ]),

	                        // input
	                        m(".row margin",[
	                          m(input,{
	                            value:"awesones",
	                            label:"Enter Confirmation Code here",
	                            type:"text",
	                            sizes:"s12 m12 l12",
	                            icon:"mdi-hardware-phonelink prefix"
	                          })
	                        ]),

	                        // submit button
	                        m(".row",[
	                          m(".input-field col s12",[
	                            m("button",{class:"btn waves-effect waves-light col s12 " + args.btnColor, type:"submit"},"submit")
	                          ])
	                        ]),

	                        // other links
	                        m(".row",[

	                          m(".input-field col s6 m6 l6",[
	                            m("p",{class:"margin medium-small"},[
	                              m("a[href='/back']",{
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var register = __webpack_require__(29);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(register,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            verifyLink:"/auth/Student/verify"
	          })
	       ])
	    }
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var login = __webpack_require__(31);

	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(login,{
	            headerText:"Admin Login (alpha)",
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            registerLink:"/auth/Admin/register/",
	            passwordLink:"/auth/Admin/pass-2/",
	            domain:"student"
	          })
	       ])
	    }
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var password = __webpack_require__(33);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(password,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/tempImage.png",
	            forgotLink:"/auth/Student/forgot"
	          })
	       ])
	    }
	}


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var verify = __webpack_require__(35);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(verify,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            registerLink:"/register/student"
	          })
	       ])
	    }
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var forgot = __webpack_require__(37);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(forgot,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            verifyLink:"/verify/student/"
	          })
	       ])
	    }
	}


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var register = __webpack_require__(29);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(register,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            verifyLink:"/auth/Student/verify"
	          })
	       ])
	    }
	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var login = __webpack_require__(31);

	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(login,{
	            headerText:"Staff Login(comming soon...)",
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            registerLink:"/auth/Student/register/",
	            passwordLink:"/auth/Student/pass-2/",
	            domain:"student"
	          })
	       ])
	    }
	}


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var password = __webpack_require__(33);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(password,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/tempImage.png",
	            forgotLink:"/auth/Student/forgot"
	          })
	       ])
	    }
	}


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var verify = __webpack_require__(35);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(verify,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            registerLink:"/register/student"
	          })
	       ])
	    }
	}


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var forgot = __webpack_require__(37);
	module.exports = {
	  view:function(ctrl){
	      return m(".app",[
	          m.component(forgot,{
	            backgroundColor:"blue",
	            btnColor:"blue",
	            holderPic:"/images/default/logo.png",
	            verifyLink:"/verify/student/"
	          })
	       ])
	    }
	}


/***/ }
/******/ ]);