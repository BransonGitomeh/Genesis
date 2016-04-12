module.exports = (req, res) => {
	var student = req.params.student_id;

	req.db.student.findOne({
			id: student
		})
		.populate("course")
		.populate("stage")
		.populate("level")
		.populate("study_mode")
		.populate("units_ive_done_before")
		.populate("stages_ive_done_before.payments_made_to_me")
		.populate("stages_ive_done_before.units_i_offer")
		.exec((err, studentFound) => {
			// find all payments in the stages you have done, then look for those that are yours as a student
			var allPayments = []
			var sum = 0
			studentFound.stages_ive_done_before.map((stage) => {
				// console.log(stage)
				stage.payments_made_to_me.map((payment) => {
					// console.log(payment)
					// check if that payment belongs to that student
					if (payment.student_who_made_me === req.params.student_id) {
						allPayments.push(payment.ammount)
						sum = sum + Number(payment.ammount)
					} else {
						console.log("payment does not belong to that student")
					}

				})
			})

			// get the units offered and compare with units being taken and get the ones the student is taking
			var stages = []

			studentFound.stages_ive_done_before.map((stage) => {

					var costOfUnitsBeingTaken = 0
					var unitBeingTaken = []
					stage.units_i_offer.map((unit) => {

						// check this against all the units the student is taking
						studentFound.units_ive_done_before.map((Takenunit) => {
							if (unit.id === Takenunit.id) {

								unitBeingTaken.push({
									unit: unit.name,
									cost: unit.cost
								});

								costOfUnitsBeingTaken = costOfUnitsBeingTaken + Number(unit.cost)
							} else {
								console.log("that unit is not taken by that student")
							}
						})
					})

					var myPaymentsForThisStage = []
					var totalPayments = 0;
					stage.payments_made_to_me.map((payment)=>{
						if(payment.student_who_made_me === req.params.student_id){
							console.log("found")
							myPaymentsForThisStage.push({
								id:payment.id,
								ammount:payment.ammount,
								receiptNo:payment.receipt
							})
							totalPayments = totalPayments + Number(payment.ammount)
						}else{
							console.log("missing")
						}
					})

					stages.push({
						id: stage.id,
						name: stage.name,
						unitsSelected: unitBeingTaken,
						myPaymentsInThisSem:myPaymentsForThisStage,

						UnitsCharges: costOfUnitsBeingTaken,
						TotalPayments:totalPayments,
						balance:Number(costOfUnitsBeingTaken) - Number(totalPayments)
					});
				})
				// studentFound.units_im_taking
				var totalBalance = 0
				stages.map((stage)=>{
					totalBalance = totalBalance + Number(stage.balance)
				})

				var totalPaid = 0
				stages.map((stage)=>{
					totalPaid = totalPaid + Number(stage.TotalPayments)
				})

			res.send({
				student:{
					name:studentFound.name,
					adm:studentFound.adm,
					course:studentFound.course.name,
					study_mode:studentFound.study_mode.name,
					level:studentFound.level.name,
					stage:studentFound.stage.name
				},
				stages:stages,
				overall:{
					totalBalance:totalBalance,
					totalPaid:totalPaid
				}
			})
		})
}