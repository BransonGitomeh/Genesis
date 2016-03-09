// var input = require("../forminput")
var input = require("../../../../__components/forminput")

var JD = require('../../../../__components/libs/jollyData');

var navItem = require("../../../../__components/auth/navItem")

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
