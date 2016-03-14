var myComponent = require("./noticeItem")

var inputComponent = require('../../../__components/forminput');
module.exports = {
  view:function(controller,atrrs){
    return m(".card-panel",[
      m("h1","welcome to " + m.route.param("uniName") + "'s Admin Ui"),
      m(myComponent)
    ])
  }
}
