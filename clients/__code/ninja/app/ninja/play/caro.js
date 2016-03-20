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
      m("li",uni.name)
        })
      ]),
      m(card),
      //m("div",{class:"card-panel"},[
        m("div",{class:"divider"}),
        m("div",{class:"row"},[
          m("div",{class:"col l6"},[
            m("div",{class:"card-panel"},"column 1")
          ]),
          m("div",{class:"col l6"},[
            m("div",{class:"card-panel"},"column 2")
        ]),
      ]),

      //]),

      //m("div",{class:"card-panel"},[
        m("div",{class:"divider"}),
        m("div",{class:"row"},[
          m("div",{class:"col l6"},[
            m("div",{class:"card-panel"},"column 1")
          ]),
          m("div",{class:"col l6"},[
            m("div",{class:"card-panel"},"columnl 2")
          ])
        ]),
      //]),

      //m("div",{class:"card-panel"},[
        m("div",{class:"divider"}),
        m("div",{class:"row"},[
          m("div",{class:"col l4"},[
            m("div",{class:"card-panel"},"column 1")
          ]),
          m("div",{class:"col l4"},[
            m("div",{class:"card-panel"},"column 2")
          ]),
          m("div",{class:"col l4"},[
            m("div",{class:"card-panel"},"column 3")
          ]),

      //]),

      m("div",{class:"divider"}),
      m("div",{class:"row"},[
        m("div",{class:"col l4"},[
          m("div",{class:"card-panel"},"column 1")
        ]),
        m("div",{class:"col l4"},[
          m("div",{class:"card-panel"},"column 2")
        ]),
        m("div",{class:"col l4"},[
          m("div",{class:"card-panel"},"column 3")
        ]),
        m("div",{class:"col l4"},[
          m("div",{class:"card-panel"},"column 4")
        ]),
        ])
      ]),
    ])
  }
}
