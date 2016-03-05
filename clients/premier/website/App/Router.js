m.route.mode = "hash";

m.route(document.body,'/',{
  "/":require('./pages/home'),
  "/contactus":require('./pages/contactus'),
  // //academics
  "/academics/ecd":require('./pages/ecd'),
  "/academics/calender":require('./pages/calender'),
  "/academics/admissions":require('./pages/admissions'),
  "/academics/examinations":require('./pages/examinations'),
  "/academics/liblary":require('./pages/liblary'),

  //operations
  "/operations/service_charter":require('./pages/service_charter'),
  "/operations/governance":require('./pages/governance'),
  "/operations/HR":require('./pages/hr'),
  "/operations/finance":require('./pages/finance'),
  "/operations/downloads":require('./pages/downloads'),

  //proffessional_development
  "/proffessional_development/ctdc":require('./pages/ctdc'),
  "/proffessional_development/shortcourses":require('./pages/shortcourses'),
  "/proffessional_development/bronchure":require('./pages/bronchure'),
  "/proffessional_development/productinformation":require('./pages/productinformation'),

  // "/register/student":require('./pages/student-register'),
  // "/verify/student/:identifier":require('./pages/student-verify'),
  // "/login/student":require('./pages/student'),
  // "/login/student-pass/:identifier":require('./pages/student-pass'),
  // "/login/student-forgot/:identifier":require('./pages/student-forgot'),

  //Authentifucation routes for the domains that are supported or should be publicly shown
  //Student
  "/auth/Student/register/":require("./pages/auth/student/register"), //register
  "/auth/Student/pass-1/":require("./pages/auth/student/pass-1"), //give identifier ----
  "/auth/Student/pass-2/:identifier":require("./pages/auth/student/pass-2"),
  "/auth/Student/verify/:identifier":require("./pages/auth/student/verify"),
  "/auth/Student/forgot/:identifier":require("./pages/auth/student/forgot"),

  //Admin
  "/auth/Admin/register/":require("./pages/auth/Admin/register"), //register
  "/auth/Admin/pass-1/":require("./pages/auth/Admin/pass-1"), //give identifier ----
  "/auth/Admin/pass-2/:identifier":require("./pages/auth/Admin/pass-2"),
  "/auth/Admin/verify/:identifier":require("./pages/auth/Admin/verify"),
  "/auth/Admin/forgot/:identifier":require("./pages/auth/Admin/forgot"),

  //Staff
  "/auth/Staff/register/":require("./pages/auth/Staff/register"), //register
  "/auth/Staff/pass-1/":require("./pages/auth/Staff/pass-1"), //give identifier ----
  "/auth/Staff/pass-2/:identifier":require("./pages/auth/Staff/pass-2"),
  "/auth/Staff/verify/:identifier":require("./pages/auth/Staff/verify"),
  "/auth/Staff/forgot/:identifier":require("./pages/auth/Staff/forgot")



});
