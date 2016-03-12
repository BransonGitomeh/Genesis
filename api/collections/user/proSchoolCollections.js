module.exports = [{
    identity: 'proschool',
    attributes: {
      name:"string",
      uni:{model:"university"},
      courses:{
        collection:"course",
        via:"school"
      }
    }
  },{
    identity: 'course',
    attributes: {
      name:"string",
      school:{model:"proschool"},
      levels:{
        collection:"level",
        via:"course"
      }
    }
  },{
    identity: 'level',
    attributes: {
      name:"string",
      course:{model:"course"},
      stages:{
        collection:"stage",
        via:"level"
      }
    }
  },{
    identity: 'stage',
    attributes: {
      name:"string",
      level:{model:"level"},
      units_i_offer:{
        collection:"unit",
        via:"stages_doing_me",
        dominant:true
      }
    }
  }
]
