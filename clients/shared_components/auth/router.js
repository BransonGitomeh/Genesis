const JD = require("../libs/jollyData");
var login = require("./login");
var loggedIn = require('./loggedIn');
// var suspended = require('./suspended');

module.exports = {
  view:function(ctrl,args){
    return m(".login-page",[
            //check if logged in before actually logging in screen...
            //if logged in, delete key and ask to loggin again
            JD.loggedIn() ?

            m(loggedIn,{
              headerText:args.headerText,
              registerLink:args.registerLink,
              forgotPasswordLink: args.forgotPasswordLink
            })

            :

            m(login,{
              headerText:args.headerText,
              registerLink:args.registerLink,
              forgotPasswordLink: args.forgotPasswordLink
            })
    ])
  }
}
