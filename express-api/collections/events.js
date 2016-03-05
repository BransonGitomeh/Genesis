module.exports = {
  identity: 'event',

  connection: 'memory',

  migrate: "safe",

  attributes: {
      date:"string",
      title: 'string'
   }
}
