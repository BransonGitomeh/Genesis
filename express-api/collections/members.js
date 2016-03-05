module.exports = {
  identity: 'member',

  connection: 'memory',

  migrate: "safe",

  attributes: {
      surname:"string",
      othernames: 'string',
      dob: 'string',
      gender: 'string',
      nationality: 'string',
      id_passport: 'string',
      email: 'string',
      postalAddress: 'string'
   }
}
