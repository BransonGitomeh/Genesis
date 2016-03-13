module.exports = [{
    identity: 'student',
    attributes: {
      user:{model:"user"},
      profile:{model:"student_profile"},
      my_universities:{
        collection:"university",
        via:"students"
      },
      units_im_taking:{
        collection:"unit",
        via:"students_taking_me"
      },
      guardians:{
        collection:"user",
        via:"my_students"
      },
      course:{model:"course"},
      level:{model:"level"},
      stage:{model:"stage"}
    }
  },{
    identity: 'student_profile',
    attributes: {
      student:{model:"user"},
      surname:"string",
      othernames:"string",
      dob:"string"
    }
  }
]
