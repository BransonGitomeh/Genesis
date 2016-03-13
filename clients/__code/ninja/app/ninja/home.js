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
        m("ol",[
          m("li","Add ability to pull all existing universities to home.js"),
          m("li","Add ability to add a university from the home.js"),
          m("li","Add link to each university, to take you to their admin Ui")
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
