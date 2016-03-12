//put all route imports here
module.exports = function(){
  //routes shit here
  var collections = []

  require("../collections/user/userCollections").map((collection) => collections.push(collection))
  require("../collections/user/departmentCollections").map((collection) => collections.push(collection))
  require("../collections/user/proSchoolCollections").map((collection) => collections.push(collection))
  require("../collections/user/universityCollections").map((collection) => collections.push(collection))
  require("../collections/user/studentCollections").map((collection) => collections.push(collection))

  return collections;
}
