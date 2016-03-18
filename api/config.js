module.exports = {
  production:false,
  devPort:3000,
  devAdapter:"disk",
  prodAdapter:"prodMongo",
  devMigration:"safe",
  adapters:{
    memory: require("sails-memory"),
    mysql: require("sails-mysql"),
    disk: require("sails-disk"),
    // mongo: require("sails-mongo")
  },
  connections:{
    //just helps to have one adapter but with different settings each time, like to use two diffrent mySql databases
    memory:{ adapter:"memory" },
    disk:{ adapter:"disk" },
    localMYSQL:{
      adapter    : 'mysql',
      host      : 'localhost',
      port      : 3306,
      user      : 'Branson',
      password  : 'a32357377',
      database  : 'test'
    },
    // prodMongo:{
    //   adapter: 'mongo',
    //   url:"mongodb://genesisServer:a10101995@ds015398.mongolab.com:15398/genesis"
    // }
  },
  //code to figure out environment and return the correct vars
  adapter:function(){
    if(this.production == true){
      return "prodMongo"
    }else{
      return this.devAdapter
    }
  },
  //autoswitch ports depending on environment
  port:function(){
    if(this.production == true){
      return process.env.PORT
    }else{
      return this.devPort
    }
  },
  migration:function(){
    if(this.production == true){
      return "safe"
    }else{
      return this.devMigration
    }
  },
}
