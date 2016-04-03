var departments = require('../departments/departments');
var choices = require('./choices');


var breadcrumb = require("../breadCrumb");

var schools = require('../schools/schools');

var crumps = function(){
	return [
		{
			text:"Schools",
			url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
		},
		{
			text:"Departments",
			url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id"),
		},
		{
			text:"Choice",
			url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id"),
		},
	]
}

module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
      m(schools),
    	m(departments),
      m(choices)
    	// m(schools)
    )
  }
}
