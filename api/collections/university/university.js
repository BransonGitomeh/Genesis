module.exports = [{
    identity: 'university',
    attributes: {
      name:"string",
      admins:{
        collection:"user",
        via:"unis_i_admin"
      },
      revoked_admins:{
        collection:"user",
        via:"unis_im_revoked"
      },
      students:{
        collection:"student",
        via:"my_universities"
      },
      proschools:{
        collection:"proschool",
        via:"uni"
      },
      departments:{
        collection:"department",
        via:"uni"
      },
      study_sessions:{
        collection:"study_session",
        via:"uni"
      },
      tri_semesters:{
        collection:"tri_semester",
        via:"uni"
      },
      active_tri_semester:{model:"tri_semester"},

      noticeboard:{model:"noticeboard"}
    }
  },{
    identity: 'study_session',
    attributes: {
      name:"string",
      uni:{model:"university"},
      students:{
        collection:"student",
        via:"study_mode"
      }
    }
  },{
    identity: 'tri_semester',
    attributes: {
      name:"string",
      uni:{model:"university"},
      university:{model:"university"}
    }
  }
]
