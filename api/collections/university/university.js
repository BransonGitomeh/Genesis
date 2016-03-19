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
      noticeboard:{model:"noticeboard"}
    }
  }
]
