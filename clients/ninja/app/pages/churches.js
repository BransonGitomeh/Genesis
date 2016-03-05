// var input = require("../forminput")
var input = require("../../../shared_components/forminput")

var navItem = require("../../../shared_components/auth/navItem")

var deleteButton = require("./components/deleteButton")

var church  = {
   name:"church",
   schema:{
     name:m.prop()
   },
   fetchAll:function(){
     return m.request({method: "GET", url: "http://localhost:4200/churches/all"});
   },
   deleteSingle:function(id){
     return m.request({method: "GET", url: "http://localhost:4200/allchurches"});
   }
}

module.exports = {

        controller: function(args){
            return {
                allchurches:church.fetchAll()
              }
            },

        view:function(ctrl,args){

             return m(".app",[
              //  add navbar here with gathering logo
              m(".navbar-fixed",[
                m("nav",{class:color},[
                  m(".nav-wrapper",{
                    config:function(){
                      $('.dropdown-button').dropdown({
                         inDuration: 300,
                         outDuration: 225,
                         constrain_width: false, // Does not change width of dropdown to that of the activator
                         alignment: 'left',
                         hover: true, // Activate on hover
                         gutter: 0, // Spacing from edge
                         belowOrigin: true // Displays dropdown below the button
                       });
                    }
                  },[
                    // <a href="#" class="brand-logo">Logo</a>
                    m("a",{class:"brand-logo left"},"Genesis Ninja"),
                    m("ul",[
                      m(navItem,{ name:"Higher Education Institutions",url:"/higher",direction:"right"}),
                      m(navItem,{ name:"High Schools",url:"/high",direction:"right"}),
                      m(navItem,{ name:"Churches",url:"/",direction:"right"})

                    ])
                  ])
                ])
              ]),
              //add sidebar where all links will go, simple links
              //keep the data here, and other features will be added as we move on, but first this :-)
              m("br"),
              // m("h3",{class:"center"},"register new church"),
              m("form",[
                m(".row",[
                  m(input,{
                    value:church.schema.name,
                    label:"Name of the new church (One word,)",
                    type:"text",
                    sizes:"s12 m10 l10",
                    icon:"mdi-social-person-outline prefix"
                  }),
                  m(".col l2",[
                    m("button",{
                      type:"submit",
                      class:"btn waves-effect waves-light waves-block " + color
                    },"submit")
                  ])
                ])
                
              ]),
              m("table",{class:"centered"},[
                m("thead",[
                  m("tr",[
                    m("th","id"),
                    m("th","name"),
                    m("th","admins"),
                    m("th","congregation members"),
                    m("th"," actions "),
                    m("th"," "),
                    m("th"," "),
                    m("th","payment plan"),
                    m("th","payment status(this month)")
                  ])
                ]),
                m("tbody",[

                  ctrl.allchurches().map(function(church){
                    return m("tr",[
                      m("td",church.id),
                      m("td",church.name),
                      m("td",church.admins.length),
                      m("td",church.congregation.length),
                      m("td",[
                        m(deleteButton,{
                          item:church,
                          refresh:function(){
                            console.log("i am refreshing")
                          }
                        }),
                        m("button","disable"),
                        m("button","edit details")
                      ])
                    ])
                  })
                ]),

              ])
            ])
        }
    }
