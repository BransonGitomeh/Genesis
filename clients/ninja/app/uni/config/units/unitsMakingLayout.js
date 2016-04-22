var schools = require('../schools/schools');
var departments = require('../departments/departments');
var units = require('./units');


var breadcrumb = require("../breadCrumb");

var crumps = function(){
	return [
		{
			text:"Departments",
			url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id"),
		},
    {
      text:"Manage Units",
      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/units",
			config:m.route
    }
	]
}

module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
      m(units)
    	// m(schools)
    )
  }
}
