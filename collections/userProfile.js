module.exports = {
  identity: 'userprofile',

  connection: 'prodMongo',

  migrate: "safe",

  attributes: {
    user:{model:"user"},
    //attrs
    surname:"string",
    othernames:"string",


    //relationships
    church_i_pastor : { model : "church" },
    church_i_belongTo: { model : "church" },
    blogposts:{
      collection:"blogpost",
      via:"author"
    }

  }
}
