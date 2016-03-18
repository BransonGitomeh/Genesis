var __components = require('../__components/index.js');
var adminUi = __components.adminLayout

var ninjaUIConfig = require("./ninjaAdminUiConfig")
var churchUiConfig = require("./churchiaAdminUiConfig")
var uniAdminUiConfig = require("../premier/uniAdminUiConfig")

m.route.mode = "hash";

m.route(document.body,"/",{
		"/":m(adminUi,{ config:ninjaUIConfig, body:require("./app/ninja/home") }),
		"/churchia/new":m(adminUi,{ config:ninjaUIConfig, body:require("./app/churchia/new") }),
		"/churchia/all":m(adminUi,{ config:ninjaUIConfig, body:require("./app/churchia/all") }),

		"/uni/new":m(adminUi,{ config:ninjaUIConfig, body:require("./app/uni/new") }),
		"/uni/all":m(adminUi,{ config:ninjaUIConfig, body:require("./app/uni/all") }),

		//playground
		"/ninja/play/ted":m(adminUi,{ 
			config:ninjaUIConfig, 
			body:require("./app/ninja/play/ted") 
		}),
		"/ninja/play/caro":m(adminUi,{ 
			config:ninjaUIConfig, 
			body:require("./app/ninja/play/caro") 
		}),

		"/uniadmin/:uniName/:uniId":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/home") 
		}),
		"/uni/:uniName/:uniId/noticeboard":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/noticeboard") 
		}),
		"/uni/admins/:uniId":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/admins") 
		})

})
