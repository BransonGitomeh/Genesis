module.exports = {
  identity: 'blogpost',

  connection: 'memory',

  migrate: "safe",

  attributes: {
      name: 'string',

      blog:{ model:"blog" },

      author:{ model:"userprofile" }
   }
}
