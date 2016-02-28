module.exports = {
  identity: 'blogpost',

  connection: 'prodMongo',

  migrate: "safe",

  attributes: {
      name: 'string',

      blog:{ model:"blog" },

      author:{ model:"userprofile" }
   }
}
