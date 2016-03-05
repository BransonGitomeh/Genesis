var JD = require('../../../../shared_components/libs/jollyData');

module.exports = {
  view:function(ctrl,args){
    return m("button",{
      onclick:function(){
        args.refresh()
      }
    },"delete")
  }
}
