module.exports = {
  identity: 'user',

  connection: 'prodMongo',

  migrate: "alter",

  attributes: {
    // auth
    identifier:"string",
    password:"string",

    /**
    *relationships
    *
    *i feel like i should move this fields to another table to reduce the
    *number of queries that will be happening to this the auth table,
    *probably move this to profile
    */
    myprofile : {model : "userprofile"},

    previousSessions:{
      collection:"session",
      via:"userSessionPast"
    },

    currentSession:{model:"session"}
   }
}
