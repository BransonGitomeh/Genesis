module.exports = {
  identity: 'session',

  connection: 'memory',

  migrate: "alter",

  attributes: {
      sessionId: 'string',

      issueTime:"string",

      user:{ model:"user" },

      userSessionPast:{model:"user"}
   }
}
