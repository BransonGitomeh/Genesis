module.exports = {
  identity: 'blogpost',

  connection: 'prodMongo',

  migrate: "alter",

  attributes: {
      name: 'string',

      blog:{ model:"blog" },

      author:{ model:"userprofile" }
   }
}
