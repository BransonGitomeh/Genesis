var paymentCard = require("./payment-card")

var model = {
	student:() => {
		return m.request({
			method:"GET",
			url:apiUrl + "/basic/getMyPayments/" + m.route.param("student_id")
		})
	}
}
module.exports = {
	controller:(args)=>{
		return {
			student:model.student()
		}
	},
	view:(ctrl,args)=>{
		return m(".invoice",[

			m(".invoice-header",[
				m(".row-section",[
					m(".col s12 m6 l6",[
						m("br"),
						m("img",{src:"akssksks"})
						
					]),
					m(".col s12 m6 l6",[
						m(".invoce-company-address right-align",[
							m("p",[
								m("span",{class:"strong"},ctrl.student().name),
								m("br"),
								m("span",ctrl.student().adm),
								m("br"),
								m("span",ctrl.student().stage.name),
								m("br"),
								m("span",ctrl.student().course.name),
								m("br"),
								m("span",ctrl.student().study_mode.name),
								m("br"),
								m("span",ctrl.student().level.name)
							])
						])
					])
				]),
				m(".row",[
					m(".col s12 m3 l3 blue white-text",[
						m("h4","Financial Statement")
					]),
					m(".col s12 m9 l9 invoice-brief blue white-text",[
						m(".row",[
							m(".col s12 m3 l3",[
								m("p",{class:"strong"},"Total Paid"),
								m("h4",{class:"header"},"RWF." + ctrl.student().sums)
							]),
							m(".col s12 m3 l3",[
								m("p",{class:"strong"},"Invoice Number"),
								m("h4",{class:"header"},"RWF." + ctrl.student().sums)
							]),
							m(".col s12 m3 l3",[
								m("p",{class:"strong"},"Date"),
								m("h4",{class:"header"},"RWF." + ctrl.student().sums)
							])
						])
					]),
					m("br"),
					m("br"),
					m(".invoice-table container",[
						m(".row",[
							m("table",{class:"striped"},[
								m("thead",[
									m("tr",[
										m("th","semester"),
										m("th","course_paid_to"),
										m("th","level_paid_to"),
										m("th","stage_paid_to"),
										m("th","receipt"),
										m("th","ammount")
									])
								]),
								m("tbody",[
									ctrl.student().payments_i_have_made.map((payment)=>{
										return m("tr",[
											m("td",payment.tri_semesters_i_was_paid_to ? payment.tri_semesters_i_was_paid_to.name : ""),
											m("td",payment.course_paid_to ? payment.course_paid_to.name : ""),
											m("td",payment.level_paid_to ? payment.level_paid_to.name : ""),
											m("td",payment.stage_paid_to ? payment.stage_paid_to.name : ""),
											m("td",payment.receipt),
											m("td",payment.ammount),
										])
									})
								])
							])			
						])
					])
				])
			])
		])
	  }
}


//             <div class="invoice-footer">
//               <div class="row">
//                 <div class="col s12 m6 l6">
//                   <p class="strong">Payment Method</p>
//                   <p>Please make the cheque to: AMANDA ORTON</p>
//                   <p class="strong">Terms &amp; Condition</p>
//                   <ul>
//                     <li>You know, being a test pilot isn't always the healthiest business in the world.</li>
//                     <li>We predict too much for the next year and yet far too little for the next 10.</li>
//                   </ul>
//                 </div>
//                 <div class="col s12 m6 l6 center-align">
//                   <p>Approved By</p>
//                   <img src="images/signature-scan.png" alt="signature">
//                   <p class="header">AMANDA ORTON</p>
//                   <p>Managing Director</p>
//                 </div>
//               </div>
//             </div>
            
//           </div>