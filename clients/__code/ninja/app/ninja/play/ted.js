module.exports = {
  controller:function(){
    return {
      universities:m.request({url:apiUrl + "/basic/getUniversities",method:"GET"})
    }
  },
  view:function(controller,atrrs){
    return m("div",[
      m("div",{class:"card-panel"},[
        m("h1","welcome to ninja homepage motherfucker"),
        m("h5","todo-list"),
        m("ol",[
          m("strike","Add ability to pull all existing universities to home.js"),
          m("br"),
          m("li","Add ability to add a university from the home.js"),
          m("li","Add link to each university, to take you to their admin Ui"),
          m("li","ted comes to fuck up exponentially")
        ]),

        m("div",{class:"card-panel"},[
          m("blockquote","fuck you bitches")
          ]),

m("nav",{class:"nav-wrapper green"},[
        m("a",{class:"brand-logo left"},"LOGO"),
        m("ul",{class:"nav-mobile right hide-on-med-and-down"},[

          m("li",[
            m("a","branie")
          ]),

          m("li",[
            m("a","caroline")
          ]),

          m("li",[
            m("a","ted")
          ]),

          m("li",[
            m("a","awesome")
        ])
          ])
        ]),
        //nice cute card hehe
        m("div",{class:"row"},[
          m("div",{class:"col s12 m7"},[
            m("div",{class:"card yellow darken-3"},[
              m("div",{class:"card-content white-text"},[
                m("span",{class:"card-title"},"fuck off"),
                m("p",{class:"flow-text"},"this is supposed to be the content")
              ])
            ])
          ])
        ]),
        //other cute card
        m("row",[
          m(".col s12 m6 l6",[
            m(".card blue-grey darken-1",[
              m(".card-content white-text",[
                m("span",{class:"card-title"},"i am a card title"),
                m("p","I am a very simple card. I am good at containing small bits of information.I am convenient because I require litt"),
                m(".card-action",[
                  m("a","link 1"),
                  m("a","link-2")
                ])
              ])
            ])
          ])
        ]),

        m("div",{
          class:"btn waves-effect waves-block waves-light purple center",
          onclick:function(){
            m.request({url:apiUrl + "/test2/users",method:"GET"}).then(m.route( m.route() ))
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
