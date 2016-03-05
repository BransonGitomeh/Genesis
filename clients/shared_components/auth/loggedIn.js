// var input = require("../forminput")
const JD = require("../libs/jollyData");

module.exports = {
        controller:function(){
    			return {
            // all related to a sinle collections here
    				user:{
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
                         //go back to website..now logged In
                         m.route("/")
                     } else {
                         // Sorry! No Web Storage support..
                     }

                    //  var session = JSON.parse(localStorage.getItem("GRIDsession"));
                    //  console.log(session)
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
                        m(".row",[
                          m(".input-field col s12 l12 center",[
                            m("img",{src:"/build/assets/img/icons/worship.jpg", class:"responsive-img circle hoverable valign profile-image-login"}),
                            m("p",{class:"center"},m.route.param("identifier"))
                          ])
                        ]),


                        // submit button
                        m(".row",[
                          m(".input-field col s12",[
                            m("button",{
                              class:"btn orange waves-effect waves-light col s12",
                              onclick:function(){
                                localStorage.removeItem("GRIDsession");
                                m.redraw()
                              }
                             },"Log Out")
                          ])
                        ]),

                      ])
                    ])
                ])
            ])
        }
    }



// (m.route() === attrs.link.url ? 'active': '')
