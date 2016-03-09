module.exports = {
  view:function(){
    return m("div",[
      m("div",{class:"card-panel"},[
        m("h1","welcome to ninja homepage"),
        m("h5","todo-list"),
        m("ul",[
          m("li","make everyone farmiliar with wtf is happening")
        ])
      ])
    ])
  }
}
