var input = require("../forminput")
const JD = require("../libs/jollyData");


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
