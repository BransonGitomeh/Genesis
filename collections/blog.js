module.exports = {
  identity: 'blog',

  connection: 'prodMongo',

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
