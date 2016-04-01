module.exports = [{
    identity: 'department',
    attributes: {
      name:"string",
      uni:{model:"university"},
      units:{
        collection:"unit",
        via:"dep"
      }
    }
  },{
      identity: 'unit',
      attributes: {
        name:"string",
        dep:{model:"department"},
        stages_doing_me:{
          collection:"stage",
          via:"units_i_offer"
        },
        students_taking_me:{
          collection:"student",
          via:"units_im_taking"
        },
        students_that_have_done_me_before:{
          collection:"student",
          via:"units_ive_done_before"
        },
        cost:"string"
      }
    }
]
