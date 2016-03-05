module.exports = {
  identity: 'blogpost',

  migrate: "safe",

  attributes: {
      name: 'string',

      blog:{ model:"blog" },

      author:{ model:"userprofile" }
   }
}
