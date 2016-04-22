var input = require("../forminput")
var memberForm = require('./memberForm');
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
                      m(memberForm)
                    ])
                ])
            ])
        }
    }
