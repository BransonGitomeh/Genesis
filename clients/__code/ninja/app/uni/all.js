module.exports = {
  controller:function(){
    return {
      universities:m.request({url:apiUrl + "/basic/getUniversities",method:"GET"})
    }
  },
  view:function(controller,atrrs){
    return m("div",[
      m("div",{class:"card-panel"},[
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
                    m("td",university.uniName  || university.name),
                    m("td",university.createdAt),
                    m("td",university.updatedAt),
                    m("td",[
                      m("a",{
                        href:"/uniadmin/" + university.name + "/" + university.id,
                        config:m.route
                      },"Admin")
                    ])
                  ])
                })
            ])
          ])
      ])
    ])
  }
}
