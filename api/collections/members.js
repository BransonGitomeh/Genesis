module.exports = {
  identity: 'member',

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
