//put all route imports here
module.exports = function(){
  //routes shit here
  var routes = []
  var testUser = require("../routes/tests/userTests")
  var test2 = require("../routes/tests/userPropperTests")
  var basic = require("../routes/basic/university")


  routes.push(testUser)
  routes.push(test2)
  routes.push(basic)

  return routes;
}
