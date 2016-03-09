var navbar = require("../peices/navbar");
var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
// var pdfobject = require("../peices/pdfobject");



module.exports = {
  view:function(ctrl){
    var titles = ["board","senate","Management_Team"]

    var management_team_members = [
      {name:"Kuria S. Gitome",position:"Ag Principal "},
      {name:"Mrs. Christine Achieng",position:"Deputy Principal"},
      {name:" ",position:"Deputy Principal (Operations)"},
      {name:" ",position:"Administrator - Finance"},
      {name:"Patience Connie Namudeche",position:"HOD - Early Childhood Education Department"},
      {name:" ",position:"HOD - Guidance and Counseling "},
      {name:"Miss Kirabo Jocelyn",position:"Ag. Registrar "}
    ]

    var senate_members = [
      "The Principal who is the chairperson.",
      "Deputy Principal (Academic Affairs) responsible for academic affairs who is the Secretary (DP-AA).",
      "Deputy Principal (Operations).(DP-O).",
      "Directors of constituent centres",
      "Deans of student.",
      "Deans of student.",
      "Heads of departments",
      "Librarian",
      "Marketing officer",
      "Two student representatives"
    ]
    return m(".app",[
      m.component(navbar),

      m(".row",[
        //collumn 1 , the sidebar
        m(".col l3 hide-on-med-and-down",[
          m.component(sidebar)
        ]),
        //the sider and everything else
        m(".col l9",[

          m(".col l6",[
            m("h4",{class:"center blue-text"},"Governance"),
            m("p","We have very well defined organisation structure that ensures that everything inside the college is decidedin a very organised manner and everyone is accountablefor everything that happens under his docket")
          ]),

          m(".col l6 center",[
            m("img",{
              class:"materialboxed responsive-img",
              src:"images/default/organogram.jpg",
              config:function(){
                $('.materialboxed').materialbox();
              }
            })
          ]),

          m(".col l12",[
            m(".row",[
              m(".col s12",[
                // tabs header
                m("ul",{
                  class:"tabs blue",
                  config:function(){
                    $('ul.tabs').tabs();
                  }
                },[
                  //make each tab you can

                  titles.map(function(title){
                    return m("li",{class:"tab col s3 l4 blue white-text waves-effect waves-blue"},[
                      m("a",{ href:"#" + title, class:"white-text" },title)
                    ])
                  }),


                  m(".indicator white-text waves-effect waves-light")
                ])
              ]),
              // tabs body, simple divs
              titles.map(function(title){
                if(title === "board"){
                  return  m(".col l12",{id:title},[
                    m("h5","Our Board Of Directors comprises of the following People"),
                    m("h6","*To be updated later")
                  ])
                }

                if(title === "senate"){
                  return  m(".col l12",{id:title},[
                    m("h5","Our senate comprises of the following People"),
                    m("ol",[
                      senate_members.map(function(member){
                        return m("li",[
                          m("div",member)
                        ])
                      })
                    ])

                  ])
                }

                if(title === "Management_Team"){
                  return  m(".col l12",{id:title},[
                    m("h5","Our Management Team comprises of the following People"),
                    m("ol",[
                      management_team_members.map(function(member){
                        return m("li",[
                          m("div",member.position + " - ",[
                            m("b",member.name)
                          ])
                        ])
                      })
                    ])

                  ])
                }
              })
            ])
          ])
        ])
     ]),

     m.component(footer)
   ])

  }
}
