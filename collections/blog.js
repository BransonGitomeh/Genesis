module.exports = {
  identity: 'blog',

  connection: 'memory',

  migrate: "safe",

  attributes: {
      name: 'string',
      church: { model: "church" },
      blogposts:{
        collection: "blogpost",
        via:"blog"
      }
   }
}
