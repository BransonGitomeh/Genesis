module.exports = (req,res) => {

  req.db.student.findOne({id:req.params.student_id})
  .populate("course.department.proschool.uni.proschools.departments.courses.levels.stages.units_i_offer")
  .populate("course.department.proschool.uni.proschools.departments.courses.levels.stages.level.course.department")
  .populate("courses_ive_done_before")
  .populate("levels_ive_done_before")
  .populate("stages_ive_done_before")
  .populate("units_ive_done_before")
  .exec((err,foundStudent)=>{

    foundStudent.course.department.proschool.uni.proschools.map((school)=>{

    });

    var courses = []
    var levels = []
    var stages = []
    var units = []

    foundStudent.course.department.proschool.uni.proschools.map((school)=>{
      school.departments.map((department)=>{
        department.courses.map((course)=>{
          //pick courses
          courses.push({
            id:course.id,
            name:course.name
          })

          //pick the available levels in each
          course.levels.map((level)=>{

            levels.push({
              id:level.id,
              name:level.name
            })

            //pick the available stages in each stage
            level.stages.map((stage)=>{

              stages.push(stage)

              //pick the available units in each stage
              stage.units_i_offer.map((unit)=>{
                units.push({
                  id:unit.id,
                  name:unit.name
                })
              })

            })

          })
        })
      })
    })

    var selectedCourse = []
    foundStudent.courses_ive_done_before.map((courses)=>{
      selectedCourse.push({
        id:courses.id,
        name:courses.name
      })
    })

    var selectedLevels = []
    foundStudent.levels_ive_done_before.map((level)=>{
      selectedLevels.push({
        id:level.id,
        name:level.name
      })
    })

    var selectedLevels = []
    foundStudent.levels_ive_done_before.map((level)=>{
      selectedLevels.push({
        id:level.id,
        name:level.name
      })
    })

    var selectedStages = []
    foundStudent.stages_ive_done_before.map((stage)=>{
      selectedStages.push({
        id:stage.id,
        name:stage.name
      })
    })

    var selectedUnits = []
    foundStudent.units_ive_done_before.map((unit)=>{
      selectedUnits.push({
        id:unit.id,
        name:unit.name
      })
    })


    var details = {
      availableStages:stages
    }

    res.send(details)
  })
}
