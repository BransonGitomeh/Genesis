var schools = require('../schools/schools');
var stages = require('../stages/stages');
var units_selected = require('./units_selected');


var breadcrumb = require("../breadCrumb");

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
		{
			text:"Courses",
			url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses"
		},
		{
			text:"Levels",
			url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels"
		},
		{
			text:"Stages",
			url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id"),
		},
		{
			text:"Available Units",
			url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/departments/" + m.route.param("school_id") + "/choices/" + m.route.param("department_id") + "/courses/" + m.route.param("course_id") + "/levels/" + + m.route.param("level_id") + "/stages/" + m.route.param("stage_id") + "/units",
		}
	]
}



module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
    	m(units_selected)
    	// m(schools)
    )
  }
}
