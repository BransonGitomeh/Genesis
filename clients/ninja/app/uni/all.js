module.exports = {
  controller:function(){
    return {
      universities:m.request({url:apiUrl + "/basic/getUniversities",method:"GET"})
    }
  },
  view:function(controller,atrrs){
    return m(".container",[
      m("div",{class:"card-panel"},[
          m("br"),
          m("span",{class:"flow-text"},"Registered Universities"),
          m("a",{
            class:"btn blue right",
            href:"/uni/new",
            config:m.route
          },"create new"),
          m("br"),
          m("table",[
            m("thead",[
              m("tr",[
                // m("th","id"),
                m("th","name"),
                m("th","admins"),
                m("th","registras"),
                m("th","students"),
                m("th","age")
              ])
            ]),
            m("tbody",[
                controller.universities().map(function(university){
                  return m("tr",[
                    // m("td",university.id),
                    m("td",university.name),
                    m("td",university.admins),
                    m("td",university.registras),
                    m("td",university.students),
                    m("td",university.age),
                    m("td",[
                      m("a",{
                        href:"/uniadmin/" + (university.uniName  || university.name )+ "/" + university.id,
                        config:m.route,
                        target:"_blank"
                      },"Admin Ui")
                    ]),
                    m("td",[
                      m("a",{
                        href:"/uniLogin/" + (university.uniName  || university.name )+ "/" + university.id,
                        config:m.route,
                        rel:"external",
                      },"Login Screens")
                    ])
                  ])
                })
            ])
          ])
      ])
    ])
  }
}
