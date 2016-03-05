m.route.mode = "hash";

m.route(document.body,"/",{
		"/":require("./app/pages/homepage"),
			//events
			"/events/Celebrations":require("./app/pages/homepage/events/Celebrations"),
			"/events/Keshas":require("./app/pages/homepage/events/Keshas"),
			"/events/Meetings":require("./app/pages/homepage/events/Meetings"),
			"/events/Seminars":require("./app/pages/homepage/events/Seminars"),
			//recentnews
			"/recentNews/Announcements":require("./app/pages/homepage/recentNews/Announcements"),
			"/recentNews/Development":require("./app/pages/homepage/recentNews/Development"),
			"/recentNews/Ministry":require("./app/pages/homepage/recentNews/Ministry"),
			"/recentNews/Youth":require("./app/pages/homepage/recentNews/Youth"),

			"/Welcome/connect":require("./app/pages/welcome/connect"),
			"/Welcome/location":require("./app/pages/welcome/location"),
			"/Welcome/thank-you":require("./app/pages/welcome/thank-you"),
			"/Welcome/what-to-find":require("./app/pages/welcome/what-to-find"),




		"/AboutUs":require("./app/pages/aboutus"),
			"/AboutUs/Gospel":require("./app/pages/aboutus/Gospel"),
			"/AboutUs/History":require("./app/pages/aboutus/History"),
			"/AboutUs/Leadership":require("./app/pages/aboutus/Leadership"),
			"/AboutUs/whatWeTeach":require("./app/pages/aboutus/whatweTeach/Introduction"),
					"/AboutUs/whatWeTeach/thegospel":require("./app/pages/aboutus/whatweTeach/thegospel"),
					"/AboutUs/whatWeTeach/history":require("./app/pages/aboutus/whatweTeach/history"),
					"/AboutUs/whatWeTeach/leadership":require("./app/pages/aboutus/whatweTeach/leadership"),

					"/AboutUs/whatWeTeach/churchdiscipline":require("./app/pages/aboutus/whatweTeach/discipline"),
					"/AboutUs/whatWeTeach/bibilicaleldership":require("./app/pages/aboutus/whatweTeach/eldership"),
					"/AboutUs/whatWeTeach/divorceandmariage":require("./app/pages/aboutus/whatweTeach/divorce"),
					"/AboutUs/whatWeTeach/evangelisingchildren":require("./app/pages/aboutus/whatweTeach/children"),
					"/AboutUs/whatWeTeach/roleofwemen":require("./app/pages/aboutus/whatweTeach/wemen"),

		"/ministries":require("./app/pages/ministries"),
			"/ministries/teneez":require("./app/pages/ministries/teneez"),
			"/ministries/home-cells":require("./app/pages/ministries/home-cells"),
			"/ministries/children":require("./app/pages/ministries/children"),
			"/ministries/wemen":require("./app/pages/ministries/wemen"),
			"/ministries/youth":require("./app/pages/ministries/youth"),
			"/ministries/pillars":require("./app/pages/ministries/pillars"),

		"/onlineChurch":require("./app/pages/onlineChurch"),


		"/feedback/complaint":require("./app/pages/feedback/complaint"),
		"/feedback/complement":require("./app/pages/feedback/complement"),
		"/feedback/suggestion":require("./app/pages/feedback/suggestion"),


			"/login/Members":require("./app/pages/login/Members"),
			"/login/Pastorial":require("./app/pages/login/Pastorial"),
			"/login/Mleaders":require("./app/pages/login/Mleaders"),
			"/login/register":require("./app/pages/login/Register"),
			"/login/forgotPassword":require("./app/pages/login/forgotPassword"),
			"/login/inputPassword/:identifier":require("./app/pages/login/inputPassword"),
			"/login/verifyCode/:identifier":require("./app/pages/login/verifyCode"),

		// online church
		"/onlineChurch/blog":require("./app/pages/onlineChurch/blog"),
		"/onlineChurch/sermons":require("./app/pages/onlineChurch/sermons"),
		"/onlineChurch/gallery":require("./app/pages/onlineChurch/gallery"),

		"/onlineChurch/felowship":require("./app/pages/onlineChurch/felowship"),
		"/onlineChurch/service":require("./app/pages/onlineChurch/service"),
		"/onlineChurch/ministries":require("./app/pages/onlineChurch/ministries"),
		//auth
		"/onlineChurch/login":require("./app/pages/onlineChurch/auth/login"),
		"/onlineChurch/register":require("./app/pages/onlineChurch/auth/Register"),
		"/onlineChurch/forgotPassword":require("./app/pages/onlineChurch/auth/forgotPassword"),
		"/onlineChurch/inputPassword/:identifier":require("./app/pages/onlineChurch/auth/inputPassword"),
		"/onlineChurch/verifyCode/:identifier":require("./app/pages/onlineChurch/auth/verifyCode"),

		"/onlineChurch/giving":require("./app/pages/onlineChurch/giving"),
			"/onlineChurch/giving/offering":require("./app/pages/onlineChurch/giving/offering"),
			"/onlineChurch/giving/thanksgiving":require("./app/pages/onlineChurch/giving/thanksgiving"),
			"/onlineChurch/giving/tithe":require("./app/pages/onlineChurch/giving/tithe"),
			"/onlineChurch/giving/loveoffering":require("./app/pages/onlineChurch/giving/loveoffering"),
			"/onlineChurch/giving/firstfruits":require("./app/pages/onlineChurch/giving/firstfruits"),
			"/onlineChurch/giving/development":require("./app/pages/onlineChurch/giving/development")
})
