var input = require("../forminput")
var navItem = require("./navItem")
var JD = require('../libs/jollyData');

var church = {};
module.exports = {

        controller: function(args){

            return {
                church:{
          					name:"church",
          					schema:{
                      //add what church to be added to
                      id:m.prop(config.profile.institutionId),
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
                       this.mutate("getAllChurchDetails",function(res){
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
             return m(".row center",{
               config:function(){
                 function getdata(){
                   m.startComputation();
                   ctrl.church.mutate("getAllChurchDetails",function(res){
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
                    ])
                  ])
                ])
              ]),
              //add sidebar where all links will go, simple links
              //keep the data here, and other features will be added as we move on, but first this :-)
              m("br"),
              m("h3",{class:"center"},"Online Registered Members"),
              m("table",[
                m("thead",[
                  m("th","surname"),
                  m("th","othernames")
                  // m("th","lastname"),
                  // m("th","contact")
                ]),
                m("tbody",[
                  // console.log(ctrl.church.data().data),
                  ctrl.church.data().data ?
                  ctrl.church.data().data.congregation.map(function(item){
                    return m("tr",[
                      m("td",item.surname),
                      m("td",item.othernames),
                      m("td",[
                        m("button",{
                          onclick:function(){
                            prompt("making " + item.surname + " an admin")
                          }
                        },"Make admin")
                      ]),
                      m("td",[
                        m("button","Remove From Church")
                      ]),
                      // m("td",item.contact)
                    ])
                  })
                  : m("span",{class:"progress"},[
                    m("div",{class:"indeterminate"})
                  ])
                ]),

              ]),
              ctrl.church.data().data ? m("span","") : m("h6",{class:"center"},"refresh"),

              m("h3",{class:"center"},"Admins"),
              m("table",[
                m("thead",[
                  m("th","surname"),
                  m("th","othernames")
                  // m("th","lastname"),
                  // m("th","dob")
                ]),
                m("tbody",[
                  // console.log(ctrl.church.data().data),
                  ctrl.church.data().data ?
                  ctrl.church.data().data.admins.map(function(item){
                    return m("tr",[
                      m("td",item.surname),
                      m("td",item.othernames),
                      m("td",[
                        m("button","Revoke admin rights")
                      ]),
                      m("td",[
                        m("button","Remove from church")
                      ])
                      // m("td",item.dob)
                    ])
                  })
                  : m("div","fetch")
                ])
              ])
            ])


        }
    }
