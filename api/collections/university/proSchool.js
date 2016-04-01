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
      },
      students:{
        collection:"student",
        via:"course"
      },
      payments_made_to_me:{
        collection:"payment",
        via:"course_paid_to"
      },
      students_that_have_done_me_before:{
        collection:"student",
        via:"courses_ive_done_before"
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
      },
      students:{
        collection:"student",
        via:"level"
      },
      payments_made_to_me:{
        collection:"payment",
        via:"level_paid_to"
      },
      students_that_have_done_me_before:{
        collection:"student",
        via:"levels_ive_done_before"
      }
    }
  },{
    identity: 'stage',
    attributes: {
      name:"string",
      level:{model:"level"},
      units_i_offer:{
        collection:"unit",
        via:"stages_doing_me"
      },
      students:{
        collection:"student",
        via:"stage"
      },
      payments_made_to_me:{
        collection:"payment",
        via:"stage_paid_to"
      },
      students_that_have_done_me_before:{
        collection:"student",
        via:"stages_ive_done_before"
      }
    }
  }
]
