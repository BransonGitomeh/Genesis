module.exports = {
  identity: 'session',

  connection: 'memory',

  migrate: "safe",

  attributes: {
      sessionId: 'string',

      issueTime:"string",

      user:{ model:"user" },

      userSessionPast:{model:"user"}
   }
}
