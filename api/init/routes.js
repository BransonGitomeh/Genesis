//put all route imports here
module.exports = function(){
  //routes shit here
  var routes = []
  var testUser = require("../routes/tests/userTests")
  var test2 = require("../routes/tests/userPropperTests")

  routes.push(testUser)
  routes.push(test2)

  return routes;
}
