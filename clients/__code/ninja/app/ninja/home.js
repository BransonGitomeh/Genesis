var item = require('./todo-list/item');

module.exports = {
  view:function(controller,atrrs){
    return m(".row",[
      m("div",{class:"col l4 white-text"},[
        m("ul",{class:"collection with-header"},[
          m("li",{class:"collection-header purple"},[
            m("h4",{class:"task-card-title"},"Premier tasks"),
            m("p",{class:"task-card-date"},"University/school management thing"),
          ]),
          m(item,{
            text:"Collect premmier peices back to genesis",
            type:"webpack",
            complete:m.prop(true)
          }),
          m(item,{
            text:"Noticeboard code for prem",
            type:"mithril",
            complete:m.prop(false)
          }),
          m(item,{
            text:"Deploy",
            type:"heroku",
            complete:m.prop(false)
          })
        ])
      ]),
      m("div",{class:"col l4 white-text"},[
        m("ul",{class:"collection with-header"},[
          m("li",{class:"collection-header brown"},[
            m("h4",{class:"task-card-title"},"Churchia tasks"),
            m("p",{class:"task-card-date"},"Church management thing"),
          ]),
          m(item,{
            text:"make server endpoints for churchia",
            type:"webpack",
            complete:m.prop(false)
          })
        ])
      ]),
      m("div",{class:"col l4 white-text"},[
        m("ul",{class:"collection with-header"},[
          m("li",{class:"collection-header black"},[
            m("h4",{class:"task-card-title"},"Dedash tasks"),
            m("p",{class:"task-card-date"},"Some other management thing :-)"),
          ]),
          m(item,{
            text:"Import into genesis",
            type:"webpack",
            complete:m.prop(false)
          }),
          m(item,{
            text:"start public ui",
            type:"mithril",
            complete:m.prop(false)
          })
        ])
      ])
    ])
  }
}
