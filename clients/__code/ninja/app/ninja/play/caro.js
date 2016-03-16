var card = require('./caro_components/card');
module.exports = {
  controller:function(){
    return {
      universities:m.request({url:apiUrl + "/basic/getUniversities",method:"GET"})
    }
  },
  view:function(ctrl,args){
    return m("div",[
      m("h4","i am awesome"),
      m("ul",[
        ctrl.universities().map(function(uni){
          return m("li",uni.name)
        })
      ]),
      m(card)
    ])
  }
}
