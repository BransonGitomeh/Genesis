module.exports = {
  identity:"church",

  migrate: "safe",
  
  connection:"prodMongo",

  attributes:{
    firstname:{
      type:"string"
    },
    lastname:{
      type:"string"
    }
  }

}
