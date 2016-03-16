webpackJsonp([2,3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var layout = __webpack_require__(133)
	m.route.mode = "hash";

	m.route(document.body,'/',{
	  "/":__webpack_require__(110),
	  "/noticeboard/:id":m(layout,{body:__webpack_require__(132)}),
	  "/contactus":__webpack_require__(116),
	  // //academics
	  "/academics/ecd":__webpack_require__(117),
	  "/academics/calender":__webpack_require__(119),
	  "/academics/admissions":__webpack_require__(120),
	  "/academics/examinations":__webpack_require__(121),
	  "/academics/liblary":__webpack_require__(122),

	  //operations
	  "/operations/service_charter":__webpack_require__(123),
	  "/operations/governance":__webpack_require__(124),
	  "/operations/HR":__webpack_require__(125),
	  "/operations/finance":__webpack_require__(126),
	  "/operations/downloads":__webpack_require__(127),

	  //proffessional_development
	  "/proffessional_development/ctdc":__webpack_require__(128),
	  "/proffessional_development/shortcourses":__webpack_require__(129),
	  "/proffessional_development/bronchure":__webpack_require__(130),
	  "/proffessional_development/productinformation":__webpack_require__(131),

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



	});


/***/ },

/***/ 108:
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("div",{class:"card-panel"},[
	      m("h4",{class:"center"},args.title),
	      m("div",{class:"divider"}),
	      m("p",args.content),
	      m("div",{class:"divider"}),
	      m("br"),
	      m("div",{class:"row"},[
	        m("div",{class:"col l6"},[
	          // m("div","weird text"),
	          m("div","( " + moment.duration(moment(args.createdAt).diff(moment(new Date())),'milliseconds').humanize() + " ago"  + " )")
	        ]),
	        m("div",{class:"col l6"},[
	          args.deleteBtn === true ? 
	          m("button",{
	            class:"btn red right",
	            onclick:function(){
	              m.request({
	                method:"GET",
	                url:"http://localhost:3000/basic/removeFromNoticeboard/" + args.id
	              }).then(m.route(m.route()))
	            }
	          },"remove") :""

	          // m("div",{class:"right"},"weird text")
	        ]),
	      ])
	    ])
	  }
	}


/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111)
	var sidebar = __webpack_require__(113)
	var nivoslider = __webpack_require__(114)
	var footer = __webpack_require__(115)

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

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	var navitem = __webpack_require__(112)
	// var JD = require('../../../../../__components/libs/jollyData');

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


	                  // console.log(JD.session()),
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

/***/ 112:
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

/***/ 113:
/***/ function(module, exports) {

	// var JD = require('../../../../__components/libs/jollyData');
	// var fbPage = require('../../../../__components/plugins/fbPage');

	module.exports = {
	  view:function(ctrl,attrs){
	    // console.log(attrs.link.title);
	    var links = [
	      {title:"Welcome",url:"/"},
	      {title:"Academic Calender", url:"/academics/calender"},
	      {title:"Downloads", url:"/operations/downloads"},
	      {title:"Library",url:"/academics/liblary"},
	      {title:"Bronchure",url:"/proffessional_development/bronchure"},
	      {title:"NoticeBoard",url:"/noticeboard/1"},
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
	        // m(fbPage,{
	        //   height:"250px",
	        //   width:"380px",
	        //   page:"https://web.facebook.com/Premier-ECDE-Teachers-College-1439285166325335/?fref=ts",
	        //   tabs:"timeline, events, messages",
	        //   smallHeader:"true",
	        //   adaptWidth:"true",
	        //   hideCover:"false",
	        //   showPosts:"false",
	        //   facePile:"true"
	        // })
	      ])
	    ])
	  ])
	  }
	}


/***/ },

/***/ 114:
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

/***/ 115:
/***/ function(module, exports) {

	// var fbPage = require('../../../../__components/plugins/fbPage');

	module.exports = {
	  view: function(args){
	    // return ("div","footer")
	    return m("footer",{class:"page-footer blue"},[
	      m(".hide-on-med-and-up",[
	        m("br"),
	        m(".container",[
	          // m(fbPage,{
	          //   height:"250px",
	          //   width:"100%",
	          //   page:"https://web.facebook.com/Premier-ECDE-Teachers-College-1439285166325335/?fref=ts",
	          //   tabs:"timeline, events, messages",
	          //   smallHeader:"true",
	          //   adaptWidth:"true",
	          //   hideCover:"false",
	          //   showPosts:"false",
	          //   facePile:"true"
	          // })
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

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);

	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
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

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
	var pdfobject = __webpack_require__(118);



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

/***/ 118:
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

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
	var pdfobject = __webpack_require__(118);



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

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
	var pdfobject = __webpack_require__(118);



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

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
	var pdfobject = __webpack_require__(118);



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

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
	var pdfobject = __webpack_require__(118);

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

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
	var pdfobject = __webpack_require__(118);



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

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
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

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
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

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
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

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	// TODO make a nice table with b=versioning and cute download buttons and last updated list

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
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

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
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

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
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

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
	var pdfobject = __webpack_require__(118);



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

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
	var pdfobject = __webpack_require__(118);



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

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	var noticeboard_item = __webpack_require__(108)
	module.exports = {
		controller:function(){
			return {
				items:m.request({
					method:"GET",
					url:"http://localhost:3000/basic/getNoticeboard/" + m.route.param("id")
				})
			}
		},
		view:function(ctrl,args){
			return m(".noticeboard",[
	          m(".row",[
	            m(".col l12",[
	              ctrl.items().noticeboard_items.map(function(item){
				     return m(noticeboard_item,{
		                  id:item.id,
		                  title:item.title,
		                  content:item.content,
		                  args:item.createdAt,
		                  deleteBtn:false
		                })
				   })
	            ])
	          ])
	        ])
		}
	}




	           

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(111);
	var footer = __webpack_require__(115);
	var sidebar = __webpack_require__(113);
	var pdfobject = __webpack_require__(118);

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


/***/ }

});