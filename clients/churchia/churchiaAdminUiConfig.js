module.exports = function() {
  var config = {
    logoText: m.route.param("churchName") + " Admin Ui",
    color: "orange",
    topBarItems: [{
        url: "/",
        text: "Dashboard",
        icon: "mdi-action-view-carousel right"
      },
      // {url:"/Ninja",text:"Ninja"},
      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Churches",drops:[
      // {url:"/test1",icon:"mdi-notification-event-note left",text:"test1"},

      // {url:"/test3",icon:"mdi-notification-event-note left",text:"test3"},
      // ]},
      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Schools"}
    ],
    sideBarItems: [
      // {text:"Churches",icon:"mdi-image-style",drops:[
      //   {url:"/churchia/new",text:"New"},
      //   {url:"/churchia/all",text:"View all"}
      // ]},
      {
        text: "Dashboard",
        url: "/churchAdmin/" + m.route.param("churchName") + "/" + m.route.param("churchId"),
        icon: "mdi-action-view-carousel"
      }, {
        text: "Noticeboard",
        url: "/churchAdmin/" + m.route.param("churchName") + "/" + m.route.param("churchId") + "/Noticeboard",
        icon: "mdi-action-assignment"
      }, {
        text: "Sermons",
        url: "/churchia/all",
        icon: "mdi-av-my-library-books"
      }, {
        text: "Church members",
        url: "/churchia/all",
        icon: "mdi-action-perm-identity"
      }, {
        text: "Admins",
        url: "/churchia/all",
        icon: "mdi-communication-business"
      }, {
        text: "Site configuration",
        url: "/churchia/all",
        icon: "mdi-action-settings"
      }

      // {text:"Secondary schools",icon:"mdi-image-movie-creation",drops:[
      //   {url:"/uni/new",text:"New"},
      //   {url:"/uni/all",text:"View all"}
      // ]},
      // {text:"Play Ground",icon:"mdi-content-gesture",drops:[
      //   {url:"/ninja/play/ted",text:"Ted"},
      //   {url:"/ninja/play/caro",text:"Caro"}
      // ]},
      // {text:"Colleges",url:"/onlineChurch/admin/sermons",icon:"mdi-av-my-library-books"},
      // {text:"844 Primary Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-communication-business"},
      // {text:"844 High Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-image-texture"}
    ]
  }

  return config
}