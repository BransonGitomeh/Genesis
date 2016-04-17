module.exports = {
  //switch
  production: false,

  devPort: 3000,

  devAdapter: "my_cassandra_connection",

  prodAdapter: "prodMongo",

  devMigration: "drop",

  //adapters n all that ish
  adapters: {
    mongo: require("sails-mongo"),
    memory: require("sails-memory"),
    mysql: require("sails-mysql"),
    disk: require("sails-disk"),
    cassandra: require("sails-cassandra")
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
    localMYSQL: {
      adapter: 'mysql',
      host: 'localhost',
      port: 3306,
      user: 'Branson',
      password: 'a32357377',
      database: 'test'
    },
    my_cassandra_connection: {

      adapter: 'cassandra',

      // typical sails/waterline options (see comment below)
      user: 'username',
      password: 'password',

      // cassandra driver options
      contactPoints: ['127.0.0.1'],
      keyspace: 'excelsior'
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
      }
      return "prodMongo"
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