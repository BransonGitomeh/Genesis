module.exports = {
  view:function(ctrl,args){
    return m(".row",[
              m("br"),
              m("br"),
              m("br"),
              m("br"),
      m("ul",{class:"collection with-header col l3"},[
              m("a",{
                  class:"collection-item waves-effect waves-dark ",
                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses",
                  config:m.route
              },"Manage Courses"),
      ]),

      m("ul",{class:"collection with-header col l3"},[
              m("a",{
                  class:"collection-item waves-effect waves-dark ",
                  href:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/units", 
                  config:m.route
              },"Manage Units")
        ])
    ])
  }
}
