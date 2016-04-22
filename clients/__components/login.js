var router = require('./auth/router');

module.exports = {
  view:function(ctrl,args){
    return m(router,{
      headerText:args.headerText,
      registerLink:args.registerLink,
      forgotPasswordLink: args.forgotPasswordLink
    })
  }
}
