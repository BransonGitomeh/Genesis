var input = require("../forminput")
var JD = require('../libs/jollyData');

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
