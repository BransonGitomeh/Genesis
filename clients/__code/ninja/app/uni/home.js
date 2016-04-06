var card = require("./card")

var inputComponent = require('../../../__components/forminput');
module.exports = {
  controller(){
  		return {
  			stats:m.request({
  				method:"GET",
  				url:apiUrl + "/uniStats/" + m.route.param("uniId")
  			})
  		}
  },
  view(ctrl,atrrs){
    return m(".card-panelx",[
	      			m(".card-stats",[
	      				m("br"),
	      				m(".row",[
		      				m(card,{
		      					title:"Schools",
		      					number:ctrl.stats().proschools,
		      					color:"cyan"
		      				}),
		      				m(card,{
		      					title:"Departments",
		      					number:ctrl.stats().departments,
		      					color:"blue"
		      				}),
		      				m(card,{
		      					title:"Courses",
		      					number:ctrl.stats().courses,
		      					color:"blue"
		      				}),
		      				m(card,{
		      					title:"Students",
		      					number:ctrl.stats().students,
		      					color:"cyan"
		      				}),
		      			])
	      			])
      		
    ])
  }
}