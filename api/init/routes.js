//put all route imports here
module.exports = function(){
  //routes shit here
  var routes = []
  var testUser = require("../routes/tests/userTests")

  var fetchRoutes = require("../routes/tests/fetchRoutes")

  var testUser = require("../routes/tests/userTests")
  var test2 = require("../routes/tests/userPropperTests")
  var basic = require("../routes/basic/university")

  var addNewAdminToUniversity = require("../routes/basic/addNewAdminToUniversity")
  var addExistingAdminToUniversity = require("../routes/basic/addExistingAdminToUniversity")

  var makeNewUni = require("../routes/basic/makeNewUni")
  var loginUserToUni = require("../routes/basic/loginUserToUni")
  
  var config = require("../routes/basic/universityConfig")
  var configMaking = require("../routes/basic/makeConfig")

  routes.push(testUser)
  routes.push(test2)
  routes.push(basic)
  routes.push(makeNewUni)
  
  routes.push(addNewAdminToUniversity)
  routes.push(addExistingAdminToUniversity)

  routes.push(fetchRoutes)
  routes.push(loginUserToUni)

  routes.push(config)
  routes.push(configMaking)

  return routes;
}
