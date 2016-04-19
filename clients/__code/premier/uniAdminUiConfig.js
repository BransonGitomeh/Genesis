module.exports = function() {
  var config = {
    logoText: m.route.param("uniName") + " Admin",
    color: "blue",
    topBarItems: [{
        url: "/",
        text: "Home",
        icon: "mdi-action-view-carousel right"
      },
      // {url:"/Ninja",text:"Ninja"},
      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Churches",drops:[
      // {url:"/test1",icon:"mdi-notification-event-note left",text:"test1"},

      // {url:"/test3",icon:"mdi-notification-event-note left",text:"test3"},
      // ]},
      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Schools"}
    ],
    sideBarItems: [{
        text: "Dashboard",
        url: "/uniadmin/" + m.route.param("uniName") + "/" + m.route.param("uniId"),
        icon: "mdi-action-view-carousel"
      }, {
        text: "Noticeboard",
        url: "/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard",
        icon: "mdi-action-assignment"
      }, {
        text: "Students",
        url: "/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/search?q=''",
        icon: "mdi-action-perm-identity"
      }, {
        text: "System Users",
        icon: "mdi-av-my-library-books",
        drops: [{
          text: "Registrars",
          url: "/uni/registrars/" + m.route.param("uniName") + "/" + m.route.param("uniId")
        }, {
          text: "Admins",
          url: "/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId")
        }, ]
      },{
        text: "Configuration",
        icon: "mdi-action-settings",
        drops: [{
            text: "Schools",
            url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/schools"
          },
          // {text:"Departments",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments"},
          {
            text: "Study modes",
            url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/study_modes"
          }, {
            text: "Tri-Semesters",
            url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/tri_sems"
          }, {
            text: "Payment-methods",
            url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/payment-methods"
          }
        ]
      }
    ]
  }

  return config
}