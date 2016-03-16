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
      {text:"Noticeboard",icon:"mdi-image-movie-creation",url:"/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard"},
      // {text:"Colleges",url:"/onlineChurch/admin/sermons",icon:"mdi-av-my-library-books"},
      // {text:"844 Primary Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-communication-business"},
      // {text:"844 High Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-image-texture"}
  	]
  }

  // m.request({
  //   url:"http://localhost:3000/basic/getUniversity/" + m.route.param("uniId"),
  //   method:"GET",
  // }).then(function(res){
  //   console.log(res);
  //
  // })

  return config
}
