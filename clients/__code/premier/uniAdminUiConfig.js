module.exports = function(){
  var config = {
    logoText:m.route.param("uniName") + " Admin",
  	color:"pink",
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
      {text:"Noticeboard",icon:"mdi-image-movie-creation",url:"/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard"},
      {text:"Admins",icon:"mdi-av-my-library-books",drops:[
        {text:"All Admins",url:"/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId")},
        {text:"Add Admin",url:"/uni/admins/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/add"}
      ]},
      {text:"Configuration",icon:"mdi-action-settings",drops:[
        {text:"Schools",url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/schools"},

        // {text:"Courses"},
        // {text:"Levels"},
        // {text:"Stages"},
        // {text:"Levels"},
        // {text:"Tri-sems/sems"},
        // {text:"Study-modes"},

        {text:"Departments"},
        // {text:"Units"},
        
      ]},
      // {text:"844 Primary Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-communication-business"},
      // {text:"844 High Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-image-texture"}
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
