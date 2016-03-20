var __components = require('../__components/index.js');
var adminUi = __components.adminLayout

var ninjaUIConfig = require("./ninjaAdminUiConfig")
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
		//view noticeboard
		"/uni/:uniName/:uniId/noticeboard":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/noticeboard") 
		}),
		// view admins
		"/uni/admins/:uniName/:uniId":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/allAdmins") 
		}),
		// add admin
		"/uni/admins/:uniName/:uniId/add":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/newAdmin") 
		}),
		//login for admin
		"/uniLogin/:uniName/:uniId":require("./app/uni/login"),

		//configuration for the university

		//-----proffessional schools

		//view all proffessional schools
		"/uni/admin/:uniName/:uniId/schools":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/config/proffessionalSchoolsLayout"), 
		}),

		//viewing courses offered in a school ie IT
		//**"/courses" in the end since this route can offer other things, maybe
		"/uni/admin/:uniName/:uniId/schools/:school_id/courses":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/config/coursesLayout"), 
		}),
		//viewing all the levels of a certain course ie diploma etc
		"/uni/admin/:uniName/:uniId/schools/:school_id/courses/:course_id/levels":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/config/levelsLayout"), 
		}),
		//viewing all the stages to be passed through in a level ie sem1 sem2 or in stages etc
		"/uni/admin/:uniName/:uniId/schools/:school_id/courses/:course_id/levels/:level_id/stages":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/config/stagesLayout"), 
		}),
		//viewing all the units offered in a certain level.
		"/uni/admin/:uniName/:uniId/schools/:school_id/courses/:course_id/levels/:level_id/stages/:stage_id/units":m(adminUi,{ 
			config:uniAdminUiConfig, 
			body:require("./app/uni/config/stagesLayout"), 
		}),


		//-----departments

		//view all departments
		"/uni/admin/:uniName/:uniId/departments":require("./app/uni/login"),
		//view all units a department offers, and add
		"/uni/admin/:uniName/:uniId/departments/:department_id":require("./app/uni/login")


})
