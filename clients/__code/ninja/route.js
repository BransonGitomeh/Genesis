var __components = require('../__components/index.js');
var adminUi = __components.adminLayout

var ninjaUIConfig = require("./ninjaAdminUiConfig")
var churchUiConfig = require("./churchiaAdminUiConfig")

m.route.mode = "hash";

m.route(document.body,"/",{
		"/":m(adminUi,{ config:ninjaUIConfig, body:require("./app/ninja/home") }),

		"/churchia/new":m(adminUi,{ config:ninjaUIConfig, body:require("./app/churchia/new") }),
		"/churchia/all":m(adminUi,{ config:ninjaUIConfig, body:require("./app/churchia/all") }),

		"/uni/new":m(adminUi,{ config:ninjaUIConfig, body:require("./app/uni/new") }),
		"/uni/all":m(adminUi,{ config:ninjaUIConfig, body:require("./app/uni/all") }),

})
