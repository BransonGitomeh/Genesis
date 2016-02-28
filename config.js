module.exports = {
  production:false,
  //autoswitch ports depending on environment
  port:function(){
    if(this.production == true){
      return process.env.PORT
    }else{
      return 3000
    }
  },
  adapters:{
    memory: require("sails-memory"),
    mysql: require("sails-mysql"),
    mongo: require("sails-mongo")
  },
  connections:{
    //just helps to have one adapter but with different settings each time, like to use two diffrent mySql databases
    memory:{ adapter:"memory" },
    localMYSQL:{
      adapter    : 'mysql',
      host      : 'localhost',
      port      : 3306,
      user      : 'Branson',
      password  : 'a32357377',
      database  : 'test'
    },
    prodMongo:{
      adapter: 'mongo',
      url:"mongodb://genesisServer:a10101995@ds015398.mongolab.com:15398/genesis"
    }
  }
}
