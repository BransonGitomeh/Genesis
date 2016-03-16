var layout = require("./app/pages/layout")
m.route.mode = "hash";

m.route(document.body,'/',{
  "/":require('./app/pages/home'),
  "/noticeboard/:id":m(layout,{body:require('./app/pages/noticeboard')}),
  "/contactus":require('./app/pages/contactus'),
  // //academics
  "/academics/ecd":require('./app/pages/ecd'),
  "/academics/calender":require('./app/pages/calender'),
  "/academics/admissions":require('./app/pages/admissions'),
  "/academics/examinations":require('./app/pages/examinations'),
  "/academics/liblary":require('./app/pages/liblary'),

  //operations
  "/operations/service_charter":require('./app/pages/service_charter'),
  "/operations/governance":require('./app/pages/governance'),
  "/operations/HR":require('./app/pages/hr'),
  "/operations/finance":require('./app/pages/finance'),
  "/operations/downloads":require('./app/pages/downloads'),

  //proffessional_development
  "/proffessional_development/ctdc":require('./app/pages/ctdc'),
  "/proffessional_development/shortcourses":require('./app/pages/shortcourses'),
  "/proffessional_development/bronchure":require('./app/pages/bronchure'),
  "/proffessional_development/productinformation":require('./app/pages/productinformation'),

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



});
