module.exports = [{
    identity: 'student',
    attributes: {
      user:{model:"user"},
      profile:{model:"student_profile"},
      units_im_taking:{
        collection:"unit",
        via:"students_taking_me"
      }
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
