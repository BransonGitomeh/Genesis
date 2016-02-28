module.exports = {
  identity: 'session',

  connection: 'prodMongo',

  migrate: "alter",

  attributes: {
      sessionId: 'string',

      issueTime:"string",

      user:{ model:"user" },

      userSessionPast:{model:"user"}
   }
}
