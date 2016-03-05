module.exports = {
  identity: 'message',

  migrate: "safe",

  attributes: {
      sendermail:"string",
      location: 'string',
      sendate: 'string',
      message: 'string',
      readstatus: {
        type:"boolean",
        defaultsTo:false
      },
   }
}
