//put all route imports here
module.exports = function(){
  //routes shit here
  var collections = []

  require("../collections/university/user").map((collection) => collections.push(collection))
  require("../collections/university/department").map((collection) => collections.push(collection))
  require("../collections/university/proSchool").map((collection) => collections.push(collection))
  require("../collections/university/university").map((collection) => collections.push(collection))
  require("../collections/university/student").map((collection) => collections.push(collection))
  require("../collections/university/noticeboard").map((collection) => collections.push(collection))

  return collections;
}
