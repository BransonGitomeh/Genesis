module.exports = [{
    identity: 'university',
    attributes: {
      name:"string",
      admins:{
        collection:"user",
        via:"uni_i_admin"
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
    }
  }
]
