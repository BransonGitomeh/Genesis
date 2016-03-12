module.exports = [{
    identity: 'user',
    attributes: {
      identifier:"string",
      password:"string",
      student_accounts:{
        collection:"student",
        via:"user"
      },
      profile:{model:"user_profile"},
      uni_admined:{model:"university"},
      uni_joined:{model:"university"}
    }
  },{
    identity: 'user_profile',
    attributes: {
      user:{model:"user"},
      surname:"string",
      othernames:"string",
      dob:"string"
    }
  }
]
