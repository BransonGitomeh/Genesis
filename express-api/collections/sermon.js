module.exports = {
  identity: 'sermon',

  connection: 'memory',

  migrate: "safe",

  attributes: {
      author:"string",
      content: 'string'
   }
}
