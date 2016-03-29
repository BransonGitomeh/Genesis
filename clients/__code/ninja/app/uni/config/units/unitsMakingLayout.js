var schools = require('../schools/schools');
var departments = require('../departments/departments');
var units = require('./units');


var breadcrumb = require("../breadCrumb");

var crumps = function(){
	return [
		{
      text:"Departments",
      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "departments"
    },
    {
      text:"Manage Units",
      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "departments/" + m.route.param("department_id") + "/units" 
    }
	]
}

module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
    	m(departments),
      m(units)
    	// m(schools)
    )
  }
}