module.exports = [{
  identity: 'university',
  attributes: {
    name: "string",
    admins: {
      collection: "user",
      via: "unis_i_admin"
    },
    revoked_admins: {
      collection: "user",
      via: "unis_im_revoked"
    },
    students: {
      collection: "student",
      via: "my_universities"
    },
    proschools: {
      collection: "proschool",
      via: "uni"
    },
    departments: {
      collection: "department",
      via: "uni"
    },
    study_sessions: {
      collection: "study_session",
      via: "uni"
    },
    tri_semesters: {
      collection: "tri_semester",
      via: "uni"
    },

    active_tri_semester: {
      model: "tri_semester"
    },

    noticeboard: {
      model: "noticeboard"
    },

    payment_methods: {
      collection: "payment_method",
      via: "university"
    }
  }
}, {
  identity: 'study_session',
  attributes: {
    name: "string",
    uni: {
      model: "university"
    },
    students: {
      collection: "student",
      via: "study_mode"
    },
    students_that_have_done_me_before: {
      collection: "student",
      via: "study_modes_ive_done_before"
    }
  }
}, {
  identity: 'tri_semester',
  attributes: {
    name: "string",

    uni: {
      model: "university"
    },

    university: {
      model: "university"
    },

    students_paying_for_me: {
      collection: "student",
      via: "tri_semesters_i_pay_for"
    },

    unit_registrations: {
      collection: "unit_registration",
      via: "tri_semester"
    },

    payments_made_to_me: {
      collection: "payment",
      via: "tri_semesters_i_was_paid_to"
    }
  }
}, {
  identity: 'payment_method',
  attributes: {
    name: "string",
    account: "string",

    university: {
      model: "university"
    },
    
    payments: {
      collection: "payment",
      via:"payment_method"
    }
  }
}]