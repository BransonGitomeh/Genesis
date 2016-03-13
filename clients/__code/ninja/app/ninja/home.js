module.exports = {
  controller:function(){
    return {
      universities:m.request({url:"http://localhost:3000/basic/getUniversities",method:"GET"})
    }
  },
  view:function(controller,atrrs){
    return m("div",[
      m("div",{class:"card-panel"},[
        m("h1","welcome to ninja homepage"),
        m("h5","todo-list"),
        m("ul",[
          m("li","make everyone farmiliar with wtf is happening")
        ]),
        m("table",[
          m("thead",[
            m("tr",[
              m("th","id"),
              m("th","name"),
              m("th","createdAt"),
              m("th","updatedAt")
            ])
          ]),
          m("tbody",[
              controller.universities().map(function(university){
                return m("tr",[
                  m("td",university.id),
                  m("td",university.name),
                  m("td",university.createdAt),
                  m("td",university.updatedAt)
                ])
              })
          ])
        ])
      ])
    ])
  }
}
