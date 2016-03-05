module.exports = {
  identity: 'session',

  migrate: "safe",

  attributes: {
      sessionId: 'string',

      issueTime:"string",

      user:{ model:"user" },

      userSessionPast:{model:"user"}
   }
}
