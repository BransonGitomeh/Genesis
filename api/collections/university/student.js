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
      stage:{model:"stage"},
      study_mode:{model:"study_session"},

      //payments
      payments:{
        collection:"payment",
        via:"student"
      }
    }
  },{
    identity: 'student_profile',
    attributes: {
      student:{model:"student"},
      surname:"string",
      othernames:"string",
      dob:"string"
    }
  },{
    identity: 'payment',
    attributes: {
      student:{model:"student"},
      trisem:{model:"tri_semester"},
      installments:{
        collection:"installment",
        via:"payment_i_belongTo"
      }
    }
  },{
    identity: 'installment',
    attributes: {
      ammount:"string",
      payment_i_belongTo:{model:"payment"}
    }
  }
]
