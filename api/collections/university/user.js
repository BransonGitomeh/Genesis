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
      unis_i_admin:{
        collection:"university",
        via:"admins"
      },
      unis_im_revoked:{
        collection:"university",
        via:"revoked_admins"
      },
      my_students:{
        collection:"student",
        via:"guardians"
      }
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
