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
          m("strike","Add ability to pull all existing universities to home.js"),
          m("li","Add ability to add a university from the home.js"),
          m("li","Add link to each university, to take you to their admin Ui")
        ]),

        m("div",{
          class:"btn waves-effect waves-block waves-light purple center",
          onclick:function(){
            m.request({url:"http://localhost:3000/test2/users",method:"GET"}).then(m.route( m.route() ))
          }
        },"initialize server with fake data"),

        m("br"),

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
                  m("td",university.updatedAt),
                  m("td",[
                    m("a",{
                      href:"/uniadmin/" + university.id,
                      config:m.route
                    },"go to admin ui")
                  ])
                ])
              })
          ])
        ])
      ])
    ])
  }
}
