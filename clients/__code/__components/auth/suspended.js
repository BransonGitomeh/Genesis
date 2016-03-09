var input = require("../forminput")

// console.log(JSON.parse(localStorage.getItem("GRIDsession"))


module.exports = {
        controller:function(){
    			return {
            // all related to a sinle collections here
    				user:{
    					url:apiUrl,
    					name:"user",
    					schema:{
    						username:m.prop("Alfonso.Considine@hotmail.com"),
    						password:m.prop("vgne5Ko6SH0SB9h")
    					},
              vm:{
                requesting:m.prop(false),
                error:m.prop(false),
                errorMessage:m.prop(""),
                loggedIn:m.prop(false)
              },
    					mutate:function(MutationType){
                if(!JSON.parse(localStorage.getItem("GRIDsession"))){
                    JD.sendQuery(this,MutationType,function(res){
       							console.log(res.data)

                     if(typeof(Storage) !== "undefined") {
                         localStorage.setItem("GRIDsession", JSON.stringify(res.data));
                     } else {
                         // Sorry! No Web Storage support..
                     }

                     var session = JSON.parse(localStorage.getItem("GRIDsession"));
                     console.log(session)
       						 })
                }else{
                  console.log("you are already logged in")
                }

    					}
    				},

            //other controller functions here
            onunload: function() {
                $( "body" ).removeClass( color + " centered" );
                $( "html" ).removeClass( "centered" );
            }

    			}

    		},

        view:function(ctrl,args){
            return m(".login",[
                m(".app row",{
                  id:"login-page",
                  config:function(){
                    $( "body" ).addClass( color + " centered" );
                    $( "html" ).addClass( "centered" );
                  }
                },[
                    m(".col s12 z-depth-5 hoverable card-panel",[
                      m("form",{
                        class:"login-form",
                        onsubmit:function(event){
              						ctrl.user.mutate("login"),
              						event.preventDefault()
              					}
                      },[
                        // logo on top
                        m("h1",[

                          (JD.loggedIn() ? "status : logged In" : "status :Not Logged In")
                        ]),
                        m(".row",[
                          m(".input-field col s12 l12 center",[
                            m("img",{src:"/build/assets/img/orgFace/gathering_logo.png", class:"responsive-img valign profile-image-login"}),
                            (args.headerText ? m("p",{class:"center login-form-text"},args.headerText) : m("span"))

                          ])
                        ]),

                        // input
                        m(".row margin",[
                          m(input,{
                            value: ctrl.user.schema.username,
                            label:"Email or Phone Number",
                            type:"text",
                            sizes:"s12 m12 l12",
                            icon:"mdi-social-person-outline prefix"
                          })
                        ]),

                        m(".row margin",[
                          m(input,{
                            value:ctrl.user.schema.password,
                            label:"Password",
                            type:"password",
                            sizes:"s12 m12 l12",
                            icon:"mdi-action-lock-outline prefix"
                          })
                        ]),

                        // submit button
                        m(".row",[
                          m(".input-field col s12",[
                            m("button",{class:"btn orange waves-effect waves-light col s12", type:"submit"},"login")
                          ])
                        ]),

                        // other links
                        m(".row",[

                          m(".input-field col s6 m6 l6",[
                            m("p",{class:"margin medium-small"},[
                              m("a",{
                                href:args.registerLink,
                                config:m.route
                              },"Register Now")
                            ])
                          ]),

                          m(".input-field col s6 m6 l6",[
                            m("p",{class:"margin medium-small"},[
                              m("a",{
                                href:args.forgotPasswordLink,
                                config:m.route
                              },"Forgot password ?")
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
