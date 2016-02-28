module.exports = {
  identity: 'blogpost',

  connection: 'memory',

  migrate: "alter",

  attributes: {
      name: 'string',

      blog:{ model:"blog" },

      author:{ model:"userprofile" }
   }
}
