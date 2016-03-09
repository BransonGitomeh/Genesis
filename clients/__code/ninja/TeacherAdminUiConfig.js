module.exports = {
  logoText:"Teacher's admin Ui",
	color:"pink",
	topBarItems:[
		{url:"/",icon:"mdi-notification-event-note"},
		{url:"/Church",icon:"mdi-notification-network-locked"},
    {url:"/Teacher",icon:"mdi-notification-network-locked",text:"Teachers Ui"}
	],
	sideBarItems:[
    {text:"Timetable",url:"/onlineChurch/admin/sermons",icon:"mdi-image-style"},
    {text:"Messages",url:"/onlineChurch/admin/sermons",icon:"mdi-image-movie-creation"},
    // {text:"Colleges",url:"/onlineChurch/admin/sermons",icon:"mdi-av-my-library-books"},
    // {text:"844 Primary Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-communication-business"},
    // {text:"844 High Schools",url:"/onlineChurch/admin/sermons",icon:"mdi-image-texture"}
	]
}
