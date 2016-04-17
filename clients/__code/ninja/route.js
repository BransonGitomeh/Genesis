var __components = require('../__components/index.js');
var adminUi = __components.adminLayout
var studentUi = __components.studentLayout
var churchUi = __components.churchAdminLayout


var ninjaUIConfig = require("./ninjaAdminUiConfig")
var uniAdminUiConfig = require("../premier/uniAdminUiConfig")
var churchiaAdminUiConfig = require("../churchia/churchiaAdminUiConfig")
var uniStudentUiConfig = require("../premier/uniStudentUiConfig")

m.route.mode = "hash";

m.route(document.body, "/", {
	"/": m(adminUi, {
		config: ninjaUIConfig,
		body: require("./app/ninja/home")
	}),

	"/churchia/new": m(adminUi, {
		config: ninjaUIConfig,
		body: require("./app/churchia/new")
	}),
	"/churchia/all": m(adminUi, {
		config: ninjaUIConfig,
		body: require("./app/churchia/all")
	}),

	"/uni/new": m(adminUi, {
		config: ninjaUIConfig,
		body: require("./app/uni/new")
	}),
	"/uni/all": m(adminUi, {
		config: ninjaUIConfig,
		body: require("./app/uni/all")
	}),

	//playground
	"/ninja/play/ted": m(adminUi, {
		config: ninjaUIConfig,
		body: require("./app/ninja/play/ted")
	}),

	"/ninja/play/caro": m(adminUi, {
		config: ninjaUIConfig,
		body: require("./app/ninja/play/caro")
	}),

	// student portal routes
	"/uni/admin/:uniName/:uniId/Student/:student_id": m(studentUi, {
		config: uniStudentUiConfig,
	}),

	"/uni/admin/:uniName/:uniId/Student/:student_id/finance": m(studentUi, {
		config: uniStudentUiConfig,
		body: require("./app/uni/students/portal/finance")
	}),

	"/uniadmin/:uniName/:uniId": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/home")
	}),

	"/churchAdmin/:churchName/:churchId": m(churchUi, {
		config: churchiaAdminUiConfig,
		body: require("./app/churchia/home")
	}),

	"/churchAdmin/:churchName/:churchId/Noticeboard": m(churchUi, {
		config: churchiaAdminUiConfig,
		body: require("./app/churchia/noticeboard/all")
	}),

	"/churchAdmin/:churchName/:churchId/Noticeboard/new": m(churchUi, {
		config: churchiaAdminUiConfig,
		body: require("./app/churchia/noticeboard/new")
	}),

	//finance search page
	"/uni/:uniName/:uniId/Students/search": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/finance/search")
	}),

	//view noticeboard
	"/uni/:uniName/:uniId/noticeboard": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/noticeboard")
	}),

	"/uni/:uniName/:uniId/noticeboard/add": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/newnotice")
	}),

	// view admins
	"/uni/admins/:uniName/:uniId": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/allAdmins")
	}),
	// add admin
	"/uni/admins/:uniName/:uniId/add": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/newAdmin")
	}),
	//login for admin
	"/uniLogin/:uniName/:uniId": require("./app/uni/login"),

	//configuration for the university

	//-----proffessional schools

	//view all proffessional schools
	"/uni/admin/:uniName/:uniId/schools": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/schools/proffessionalSchoolsLayout"),
	}),

	//viewing courses offered in a school ie IT
	//**"/courses" in the end since this route can offer other things, maybe
	"/uni/admin/:uniName/:uniId/schools/:school_id/courses": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/courses/coursesLayout"),
	}),

	//viewing all the stages to be passed through in a level ie sem1 sem2 or in stages etc
	"/uni/admin/:uniName/:uniId/schools/:school_id/courses/:course_id/levels/:level_id/stages": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/stages/stagesLayout"),
	}),
	//viewing all the units offered in a certain level...will ask for department to be selected
	"/uni/admin/:uniName/:uniId/schools/:school_id/courses/:course_id/levels/:level_id/stages/:stage_id/units": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/units/unitsSelectedLayout"),
	}),



	//-----departments

	//view all departments
	//view all proffessional schools
	"/uni/admin/:uniName/:uniId/departments/:school_id": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/departments/DepartmentsLayout"),
	}),

	//view all units a department offers, and add
	"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/depChoice/DepartmentsLayout"),
	}),

	//view its courses
	"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/courses/coursesLayout"),
	}),

	//viewing all the levels of a certain course ie diploma etc
	"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/levels/levelsLayout"),
	}),

	"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/stages/stagesLayout"),
	}),

	"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id/stages/:stage_id/units": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/units/unitsSelectedLayout"),
	}),

	//a selected department is there
	"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id/stages/:stage_id/units/:selectedDepartment": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/units/unitsAvailableLayout"),
	}),
	//view its units
	"/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/units": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/units/unitsMakingLayout"),
	}),

	//other settings
	"/uni/admin/:uniName/:uniId/study_modes": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/study_modes/study_modesLayout"),
	}),
	//view all units a department offers, and add
	"/uni/admin/:uniName/:uniId/tri_sems": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/tri_sems/tri_semsLayout"),
	}),

	"/uni/admin/:uniName/:uniId/payment-methods": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/config/payments/payment_methodsLayout"),
	}),

	//register student to all that stuff
	"/uni/admin/:uniName/:uniId/Students/index": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/index"),
	}),

	"/uni/admin/:uniName/:uniId/Students/config/:student_id": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/config"),
	}),

	"/uni/admin/:uniName/:uniId/Students/config/:student_id/units/:semester_id/:tri_sem_id": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/config_units"),
	}),

	"/uni/admin/:uniName/:uniId/Students/viewpayments/:student_id": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/viewpayments"),
	}),

	"/uni/admin/:uniName/:uniId/Students/config/:student_id": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/config"),
	}),

	"/uni/admin/:uniName/:uniId/Students/payments/:student_id": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/payment"),
	}),

	"/uni/admin/:uniName/:uniId/Students": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/selectCourse"),
	}),

	"/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/selectLevel"),
	}),

	"/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/selectStage"),
	}),



	"/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages/:stage_id/study_mode": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/selectUnits"),
	}),

	"/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages/:stage_id/study_mode/:study_mode": m(adminUi, {
		config: uniAdminUiConfig,
		body: require("./app/uni/students/enterOtherDetails"),
	}),
})