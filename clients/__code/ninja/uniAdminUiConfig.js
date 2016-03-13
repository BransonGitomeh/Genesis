module.exports = {
  logoText:"university admin",
	color:"green",
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
    {text:"Noticeboard",icon:"mdi-image-movie-creation",drops:[
      {url:"/uni/new",text:"add"},
      {url:"/uni/all",text:"view board"},
      {url:"/uni/all",text:"view comments"}
    ]},
    // {text:"Colleges",url:"/onlineChurch/admin/sermons",icon:"mdi-av-my-library-books"},
    // {text:"844 Primary Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-communication-business"},
    // {text:"844 High Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-image-texture"}
	]
}
