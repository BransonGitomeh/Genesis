module.exports = function(){
  var config = {
    logoText:m.route.param("uniName") + " Registra Portal",
  	color:"blue",
  	topBarItems:[
      {url:"/",text:"Home",icon:"mdi-action-view-carousel right"},
  		// {url:"/Ninja",text:"Ninja"},
  		// {url:"/Church",icon:"mdi-notification-network-locked left",text:"Churches",drops:[
        // {url:"/test1",icon:"mdi-notification-event-note left",text:"test1"},

        // {url:"/test3",icon:"mdi-notification-event-note left",text:"test3"},
      // ]},
      // {url:"/Church",icon:"mdi-notification-network-locked left",text:"Schools"}
  	],
  	sideBarItems:[
      {
        text:"Dashboard",
        url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Registra/",
        icon:"mdi-action-view-carousel"
      },
      // {
      //   text:"Noticeboard",
      //   url:"/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard",
      //   icon:"mdi-action-assignment"
      // },
      {
        text:"Finance",
        url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Registra/" + m.route.param("student_id") + "/finance",
        icon:"mdi-editor-attach-money"
      },

      // {
      //   text:"Students",
      //   url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/index",
      //   icon:"mdi-action-perm-identity"
      // },

      // {
      //   text:"Admins",
      //   url:"/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId"),
      //   icon:"mdi-action-assignment-ind"
      // },
      // {text:"System Users",icon:"mdi-av-my-library-books",drops:[
      //   {text:"Registrars",url:"/uni/registrars/" + m.route.param("uniName") + "/" + m.route.param("uniId")},
      // ]},


      // {text:"Configuration",icon:"mdi-action-settings",drops:[
      //   {text:"Schools",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/schools"},
      //   // {text:"Departments",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments"},
      //   {text:"Study modes",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/study_modes"},
      //   {text:"Tri-Semesters",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/tri_sems"}

      // ]}
  	]
  }

  // m.request({
  //   url:apiUrl + "/basic/getUniversity/" + m.route.param("uniId"),
  //   method:"GET",
  // }).then(function(res){
  //   console.log(res);
  //
  // })

  return config
}
