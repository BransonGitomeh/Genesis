module.exports = {
  identity:"church",

  migrate: "safe",

  connection:"memory",

  attributes:{
    firstname:{
      type:"string"
    },
    lastname:{
      type:"string"
    }
  }

}
