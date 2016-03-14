module.exports = {
  view:function(){
    return m("div",{class:"card-panel"},[
      m("h4",{class:"center"},"she awesome"),
      m("div",{class:"divider"}),
      m("p","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
      m("div",{class:"divider"}),
      m("div",{class:"row"},[
        m("div",{class:"col l6"},[
          m("div","weird text"),
          m("button",{class:"btn green"},"save")
        ]),
        m("div",{class:"col l6"},[
          m("div",{class:"right"},"weird text")
        ]),
      ])
    ])
  }
}
