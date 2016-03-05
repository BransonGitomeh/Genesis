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

	m.route(document.body,"/",{
			"/":__webpack_require__(2)
	})


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// var input = require("../forminput")
	var input = __webpack_require__(3)

	var navItem = __webpack_require__(4)

	var deleteButton = __webpack_require__(5)

	var church  = {
	   name:"church",
	   schema:{
	     name:m.prop()
	   },
	   fetchAll:function(){
	     return m.request({method: "GET", url: "http://localhost:4200/churches/all"});
	   },
	   deleteSingle:function(id){
	     return m.request({method: "GET", url: "http://localhost:4200/allchurches"});
	   }
	}

	module.exports = {

	        controller: function(args){
	            return {
	                allchurches:church.fetchAll()
	              }
	            },

	        view:function(ctrl,args){

	             return m(".app",[
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
	                    // <a href="#" class="brand-logo">Logo</a>
	                    m("a",{class:"brand-logo left"},"Genesis Ninja"),
	                    m("ul",[
	                      m(navItem,{ name:"Higher Education Institutions",url:"/higher",direction:"right"}),
	                      m(navItem,{ name:"High Schools",url:"/high",direction:"right"}),
	                      m(navItem,{ name:"Churches",url:"/",direction:"right"})

	                    ])
	                  ])
	                ])
	              ]),
	              //add sidebar where all links will go, simple links
	              //keep the data here, and other features will be added as we move on, but first this :-)
	              m("br"),
	              // m("h3",{class:"center"},"register new church"),
	              m("form",[
	                m(".row",[
	                  m(input,{
	                    value:church.schema.name,
	                    label:"Name of the new church (One word,)",
	                    type:"text",
	                    sizes:"s12 m10 l10",
	                    icon:"mdi-social-person-outline prefix"
	                  }),
	                  m(".col l2",[
	                    m("button",{
	                      type:"submit",
	                      class:"btn waves-effect waves-light waves-block " + color
	                    },"submit")
	                  ])
	                ])
	                
	              ]),
	              m("table",{class:"centered"},[
	                m("thead",[
	                  m("tr",[
	                    m("th","id"),
	                    m("th","name"),
	                    m("th","admins"),
	                    m("th","congregation members"),
	                    m("th"," actions "),
	                    m("th"," "),
	                    m("th"," "),
	                    m("th","payment plan"),
	                    m("th","payment status(this month)")
	                  ])
	                ]),
	                m("tbody",[

	                  ctrl.allchurches().map(function(church){
	                    return m("tr",[
	                      m("td",church.id),
	                      m("td",church.name),
	                      m("td",church.admins.length),
	                      m("td",church.congregation.length),
	                      m("td",[
	                        m(deleteButton,{
	                          item:church,
	                          refresh:function(){
	                            console.log("i am refreshing")
	                          }
	                        }),
	                        m("button","disable"),
	                        m("button","edit details")
	                      ])
	                    ])
	                  })
	                ]),

	              ])
	            ])
	        }
	    }


/***/ },
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var JD = __webpack_require__(6);

	module.exports = {
	  view:function(ctrl,args){
	    return m("button",{
	      onclick:function(){
	        args.refresh()
	      }
	    },"delete")
	  }
	}


/***/ },
/* 6 */
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


/***/ }
/******/ ]);