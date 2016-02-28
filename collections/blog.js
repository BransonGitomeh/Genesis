module.exports = {
  identity: 'blog',

  connection: 'prodMongo',

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
