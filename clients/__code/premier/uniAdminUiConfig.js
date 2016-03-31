module.exports = function(){
  var config = {
    logoText:m.route.param("uniName") + " Admin",
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
        text:"View Board",
        url:"/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard",
        icon:"mdi-image-movie-creation"
      },
      {
        text:"Finance",
        url:"/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/finance/search?q=''",
        icon:"mdi-editor-attach-money"
      },


      {text:"System Users",icon:"mdi-av-my-library-books",drops:[
        {text:"Admins",url:"/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId")},
        {text:"Registrars",url:"/uni/registrars/" + m.route.param("uniName") + "/" + m.route.param("uniId")},
        {text:"Students",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/Students/index"}
      ]},

      {text:"Configuration",icon:"mdi-action-settings",drops:[
        {text:"Schools",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/schools"},
        {text:"Departments",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments"},
        {text:"Study modes",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/study_modes"},
        {text:"Tri-sems/sems",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/tri_sems"}
        
      ]}
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
