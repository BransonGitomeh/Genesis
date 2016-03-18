module.exports = [{
    identity: 'university',
    attributes: {
      name:"string",
      admins:{
        collection:"user",
        via:"unis_i_admin"
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
