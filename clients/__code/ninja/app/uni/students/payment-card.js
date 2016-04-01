var inputComponent = require('../../../../__components/forminput');
var model = {
	payment:(args)=>{
		return m.request({
				method:"GET",
				url:apiUrl + "/basic/getInstallments/" + args.payment_id,
				background: true, 
				initialValue: {
					trisem:{},
					installments:[]
				}
		})
	}
}
module.exports = {

	controller:(args)=>{
		var payment = model.payment(args);
		payment.then(m.redraw)
		return {
			payment:payment,
			schema:{
				ammount:m.prop(""),
				receiptNo:m.prop("")
			}
		}
	},
	view:(ctrl,args)=>{
		return m(".row",[
					m("div",{class:"col s12 m12 l12"},[
						// m("h5",ctrl.payment().trisem.name ),

						// m("form",{
						// 	class:"row",
						// 	onsubmit:(e)=>{
						// 		e.preventDefault();
						// 		m.request({
						// 			method:"POST",
						// 			url:apiUrl + "/basic/addInstalment/" + args.payment_id,
						// 			data:{
						// 				ammount:ctrl.schema.ammount(),
						// 				receipt:ctrl.schema.receiptNo()
						// 			}
						// 		}).then((res)=>m.route( m.route( ) ))
						// 	}
						// },[
						// 	// m("div",{class:"col l3"},[
						// 	// 	m("b",ctrl.payment().trisem.name)
						// 	// ]),

			   //              m(inputComponent,{
			   //                value:ctrl.schema.ammount,
			   //                label:"Installment ammount",
			   //                icon:"mdi-editor-attach-money prefix",
			   //                type:"text",
			   //                sizes:"s12 m12 l3"
			   //              }),

			   //              m(inputComponent,{
			   //                value:ctrl.schema.receiptNo,
			   //                label:"Receipt Number",
			   //                icon:"mdi-editor-insert-drive-file prefix",
			   //                type:"text",
			   //                sizes:"s12 m12 l3"
			   //              }),

			   //              m("div",{class:"s12 m12 l3"},[
			   //              	m("br"),
			   //              	m("button",{class:"btn blue col l3 waves-effect waves-block waves-light"},"submit")
			   //              ])
			   //          ]),
			   m("table",{class:"col s12 m12 l12 stripped"},[
							m("thead",[
								m("tr",[
									// m("th","ID"),
									m("th",{class:"grey white-text"},ctrl.payment().trisem.name)
								])
							])
				]),

			            m("table",{class:"col s12 m12 l12 stripped"},[
							m("thead",[
								m("tr",[
									// m("th","ID"),
									m("th","Date"),
									m("th","Ammount"),
									m("th","Receipt")
								])
							]),
							m("tbody",[
								ctrl.payment().installments.map((installment)=>{
									return m("tr",[
										// m("td",installment.id),
										m("td",installment.createdAt),
										m("td",installment.ammount),
										m("td",installment.receipt)
									])
								})
							]),

							m("tr",[
									m("td",{colspan:2,class:"right"},m("b","Total:")),
									m("td",m("b",ctrl.payment().sum))
							])						
						])
					]),

					// m(".col l12",[
					// 	m("tr",[
					// 			m("td",{colspan:3}),
					// 			m("td",ctrl.payment().sum)
					// 	])
					// ]),

					m("br"),
					m("br"),
					m("br"),
					m("br")
		])
										
				
	 }

}
