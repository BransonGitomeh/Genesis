var input = require("../forminput")

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
