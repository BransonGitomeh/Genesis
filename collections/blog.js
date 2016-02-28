module.exports = {
  identity: 'blog',

  connection: 'memory',

  migrate: "alter",

  attributes: {
      name: 'string',
      church: { model: "church" },
      blogposts:{
        collection: "blogpost",
        via:"blog"
      }
   }
}
