module.exports = [{
  identity: 'student',
  attributes: {
    user: {
      model: "user"
    },
    profile: {
      model: "student_profile"
    },

    my_universities: {
      collection: "university",
      via: "students"
    },

    units_im_taking: {
      collection: "unit",
      via: "students_taking_me"
    },

    guardians: {
      collection: "user",
      via: "my_students"
    },

    course: {
      model: "course"
    },

    level: {
      model: "level"
    },
    stage: {
      model: "stage"
    },
    study_mode: {
      model: "study_session"
    },

    //payments
    payments: {
      collection: "payment",
      via: "student"
    },

    //keep track of the semesters you have registered for
    tri_semesters_i_pay_for: {
      collection: "tri_semester",
      via: "students_paying_for_me"
    },

    payments_i_have_made: {
      collection: "payment",
      via: "student_who_made_me"
    },

    //mentain track of all the state the user has passed through
    courses_ive_done_before: {
      collection: "course",
      via: "students_that_have_done_me_before"
    },

    levels_ive_done_before: {
      collection: "level",
      via: "students_that_have_done_me_before"
    },

    stages_ive_done_before: {
      collection: "stage",
      via: "students_that_have_done_me_before"
    },

    units_ive_done_before: {
      collection: "unit",
      via: "students_that_have_done_me_before"
    },

    unit_registrations: {
      collection: "unit_registration",
      via: "student"
    },

    study_modes_ive_done_before: {
      collection: "study_session",
      via: "students_that_have_done_me_before"
    }
  }
}, {
  identity: 'unit_registration',
  attributes: {
    unit: {
      model: "unit"
    },
    stage: {
      model: "stage"
    },
    student: {
      model: "student"
    },
    tri_semester: {
      model: "tri_semester"
    }

  }
}, {
  identity: 'student_profile',
  attributes: {
    student: {
      model: "student"
    },
    surname: "string",
    othernames: "string",
    dob: "string"
  }
}, {
  identity: 'payment',
  attributes: {
    student: {
      model: "student"
    },

    trisem: {
      model: "tri_semester"
    },

    installments: {
      collection: "installment",
      via: "payment_i_belongTo"
    },

    student_who_made_me: {
      model: "student"
    },

    course_paid_to: {
      model: "course"
    },

    level_paid_to: {
      model: "level"
    },

    stage_paid_to: {
      model: "stage"
    },

    tri_semesters_i_was_paid_to: {
      model: "tri_semester"
    },

    payment_method: {
      model: "payment_method"
    }
  }
}, {
  identity: 'installment',
  attributes: {
    ammount: "string",
    payment_i_belongTo: {
      model: "payment"
    }
  }
}, {
  identity: 'request',
  attributes: {
    req: "string"
  }
}]