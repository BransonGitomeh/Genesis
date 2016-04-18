module.exports = {
  //switch
  production: true,

  devPort: 3000,

  devAdapter: "fullProduction",

  prodAdapter: "prodMongo",

  devMigration: "safe",

  //adapters n all that ish
  adapters: {
    mongo: require("sails-mongo"),
    memory: require("sails-memory"),
    mysql: require("sails-mysql"),
    disk: require("sails-disk"),
  },

  connections: {
    //just helps to have one adapter but with different settings each time, like to use two diffrent mySql databases
    memory: {
      adapter: "memory"
    },
    localMongo: {
      adapter: 'mongo',
      host: 'localhost', // defaults to `localhost` if omitted
      port: 27017, // defaults to 27017 if omitted
      // user: 'username_here', // or omit if not relevant
      // password: 'password_here', // or omit if not relevant
      // database: 'database_name_here' // or omit if not relevant
    },

    disk: {
      adapter: "disk"
    },

    fullProduction:{
        adapter: 'mongo',
        // url: "mongodb://Branie:Branie@ds011331.mlab.com:11331/genesis_production",
        url:"mongodb://server:a10101995@ds013221.mlab.com:13221/premier"
      }
  },


  //code to figure out environment and return the correct vars
  adapter: function() {
    if (this.production == true) {
      //import the adapter
      // this.adapters.mongo = require("sails-mongo")
      //import the connection data
      this.connections.prodMongo = {
        adapter: 'mongo',
        url: "mongodb://genesisServer:a10101995@ds015398.mongolab.com:15398/genesis"
      };

      this.connections.fullProduction = {
        adapter: 'mongo',
        // url: "mongodb://Branie:Branie@ds011331.mlab.com:11331/genesis_production",
        url:"mongodb://server:a10101995@ds013221.mlab.com:13221/premier"
      };

      return "fullProduction"
    } else {
      return this.devAdapter
    }
  },


  //autoswitch ports depending on environment
  port: function() {
    if (this.production == true) {
      return (process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT)
    } else {
      return this.devPort
    }
  },

  ip: function() {
    if (this.production == true) {
      return process.env.OPENSHIFT_NODEJS_IP;
    } else {
      return this.devPort
    }
  },

  host: function() {
    if (this.production == true) {
      return process.env.OPENSHIFT_NODEJS_PORT
    } else {
      return this.devPort
    }
  },



  migration: function() {
    if (this.production == true) {
      return "safe"
    } else {
      return this.devMigration
    }
  }


}