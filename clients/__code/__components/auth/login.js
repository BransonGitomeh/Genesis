var input = require("../forminput")
var JD = require('../libs/jollyData');


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
                            ctrl.user.mutate("checkIdentifier",function(res){
                              m.endComputation();
                              console.log(res)
                              m.route(args.passwordLink + "/" + ctrl.user.schema.identifier());
                            },function(err){
                              console.log(err.data);
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
