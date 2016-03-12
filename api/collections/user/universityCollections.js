module.exports = [{
    identity: 'university',
    attributes: {
      name:"string",
      admins:{
        collection:"user",
        via:"uni_admined"
      },
      students:{
        collection:"user",
        via:"uni_joined"
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
