var __components = require('../__components/index.js');
var adminUi = __components.adminLayout
var layout = require("./app/pages/layout")

var adminConfig = require("./uniAdminUiConfig")

m.route.mode = "hash";

m.route(document.body, '/', {
  "/": require('./app/pages/home'),
  "/noticeboard/:uniId": m(layout, {
    body: require('./app/pages/noticeboard')
  }),
  
  "/contactus": require('./app/pages/contactus'),
  //academics
  "/academics/ecd": require('./app/pages/ecd'),
  "/academics/calender": require('./app/pages/calender'),
  "/academics/admissions": require('./app/pages/admissions'),
  "/academics/examinations": require('./app/pages/examinations'),
  "/academics/liblary": require('./app/pages/liblary'),

  //operations
  "/operations/service_charter": require('./app/pages/service_charter'),
  "/operations/governance": require('./app/pages/governance'),
  "/operations/HR": require('./app/pages/hr'),
  "/operations/finance": require('./app/pages/finance'),
  "/operations/downloads": require('./app/pages/downloads'),

  //proffessional_development
  "/proffessional_development/ctdc": require('./app/pages/ctdc'),
  "/proffessional_development/shortcourses": require('./app/pages/shortcourses'),
  "/proffessional_development/bronchure": require('./app/pages/bronchure'),
  "/proffessional_development/productinformation": require('./app/pages/productinformation'),

  // "/register/student":require('./app/pages/student-register'),
  // "/verify/student/:identifier":require('./app/pages/student-verify'),
  // "/login/student":require('./app/pages/student'),
  // "/login/student-pass/:identifier":require('./app/pages/student-pass'),
  // "/login/student-forgot/:identifier":require('./app/pages/student-forgot'),

  //Authentifucation routes for the domains that are supported or should be publicly shown
  //Student
  // "/auth/Student/register/":require("./app/pages/auth/student/register"), //register
  // "/auth/Student/pass-1/":require("./app/pages/auth/student/pass-1"), //give identifier ----
  // "/auth/Student/pass-2/:identifier":require("./app/pages/auth/student/pass-2"),
  // "/auth/Student/verify/:identifier":require("./app/pages/auth/student/verify"),
  // "/auth/Student/forgot/:identifier":require("./app/pages/auth/student/forgot"),

  //Admin
  // "/auth/Admin/register/":require("./app/pages/auth/Admin/register"), //register
  // "/auth/Admin/pass-1/":require("./app/pages/auth/Admin/pass-1"), //give identifier ----
  // "/auth/Admin/pass-2/:identifier":require("./app/pages/auth/Admin/pass-2"),
  // "/auth/Admin/verify/:identifier":require("./app/pages/auth/Admin/verify"),
  // "/auth/Admin/forgot/:identifier":require("./app/pages/auth/Admin/forgot"),

  //Staff
  // "/auth/Staff/register/":require("./app/pages/auth/Staff/register"), //register
  // "/auth/Staff/pass-1/":require("./app/pages/auth/Staff/pass-1"), //give identifier ----
  // "/auth/Staff/pass-2/:identifier":require("./app/pages/auth/Staff/pass-2"),
  // "/auth/Staff/verify/:identifier":require("./app/pages/auth/Staff/verify"),
  // "/auth/Staff/forgot/:identifier":require("./app/pages/auth/Staff/forgot")


  "/uniadmin/:uniName/:uniId": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/home")
  }),
  "/uni/:uniName/:uniId/noticeboard": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/noticeboard")
  }),
  "/uni/admins/:uniId": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/noticeboard")
  }),
  // view admins
  "/uni/admins/:uniName/:uniId": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/allAdmins")
  }),

  // add admin
  "/uni/admins/:uniName/:uniId/add": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/newAdmin")
  }),

  "/uniLogin/:uniName/:uniId": require("../ninja/app/uni/login"),

  "/uni/:uniName/:uniId/Students/search": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/finance/search")
  }),

  "/uni/admin/:uniName/:uniId/schools": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/schools/proffessionalSchoolsLayout"),
  }),

  "/uni/admin/:uniName/:uniId/departments/:school_id": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/departments/DepartmentsLayout"),
  }),

  //view all units a department offers, and add
  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/depChoice/DepartmentsLayout"),
  }),

  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/courses/coursesLayout"),
  }),

  //viewing all the levels of a certain course ie diploma etc
  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/levels/levelsLayout"),
  }),

  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/stages/stagesLayout"),
  }),

  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id/stages/:stage_id/units": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/units/unitsSelectedLayout"),
  }),

  //a selected department is there
  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/courses/:course_id/levels/:level_id/stages/:stage_id/units/:selectedDepartment": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/units/unitsAvailableLayout"),
  }),
  //view its units
  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/units": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/units/unitsMakingLayout"),
  }),
  //view prices of a unit
  "/uni/admin/:uniName/:uniId/departments/:school_id/choices/:department_id/units/:unit_id/prices": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/prices/pricesLayout"),
  }),

  //other settings
  "/uni/admin/:uniName/:uniId/study_modes": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/study_modes/study_modesLayout"),
  }),
  //view all units a department offers, and add
  "/uni/admin/:uniName/:uniId/tri_sems": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/tri_sems/tri_semsLayout"),
  }),

  "/uni/admin/:uniName/:uniId/payment-methods": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/config/payments/payment_methodsLayout"),
  }),

  //register student to all that stuff
  "/uni/admin/:uniName/:uniId/Students/index": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/index"),
  }),

  "/uni/admin/:uniName/:uniId/Students/config/:student_id": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/config"),
  }),

  "/uni/admin/:uniName/:uniId/Students/config/:student_id/units/:semester_id/:tri_sem_id": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/config_units"),
  }),

  "/uni/admin/:uniName/:uniId/Students/viewpayments/:student_id": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/viewpayments"),
  }),

  "/uni/admin/:uniName/:uniId/Students/config/:student_id": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/config"),
  }),

  "/uni/admin/:uniName/:uniId/Students/payments/:student_id": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/payment"),
  }),

  "/uni/admin/:uniName/:uniId/Students": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/selectCourse"),
  }),

  "/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/selectLevel"),
  }),

  "/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/selectStage"),
  }),

  "/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages/:stage_id/study_mode": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/selectStudyMode"),
  }),

  "/uni/admin/:uniName/:uniId/Students/:course_id/selectLevel/:level_id/stages/:stage_id/study_mode/:study_mode": m(adminUi, {
    config: adminConfig,
    body: require("../ninja/app/uni/students/enterOtherDetails"),
  }),


});