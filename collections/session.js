module.exports = {
  identity: 'session',

  connection: 'prodMongo',

  migrate: "safe",

  attributes: {
      sessionId: 'string',

      issueTime:"string",

      user:{ model:"user" },

      userSessionPast:{model:"user"}
   }
}
