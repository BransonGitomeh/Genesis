var _ = require("underscore")


module.exports = (req, res) => {
	req.db.stage.findOne({
			id: req.params.semester_id
		})
		.populate("units_i_offer")
		.populate("level.course.department.proschool.uni.active_tri_semester")
		.exec((err, level) => {
			if (err) throw err;
			req.db.unit_registration.find({
					student: req.params.student_id,
					stage: req.params.semester_id,
					tri_semester:  req.params.tri_sem_id
				})
				.populate("unit.price")
				.exec((err, unit_registration) => {
					console.log(unit_registration)
					//this are the units the student has registered to, ever for that semester in question
					//use this versus the units offered by the stage
					// console.log(unit_registration)
					var Finalunits = []
					var units = []
					unit_registration.map((unit) => {
							units.push(unit.unit)
						})
						//check if a unit is selected againts this list of units
						// console.log(units)

					level.units_i_offer.map((unitLevel) => {
						var ifSelectedBefore = !!_.where(units, {
							id: unitLevel.id
						}).length;

						Finalunits.push({
							id: unitLevel.id,
							name: unitLevel.name,
							selected: ifSelectedBefore
						})
					})

					if (err) throw err;
					res.send({
						units_in_semester: level.units_i_offer,
						units_in_student: units,
						units_i_offer: Finalunits
					})
				})

		})
}