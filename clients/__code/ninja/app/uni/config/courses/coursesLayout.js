var schools = require('../schools/schools');
var courses = require('./courses');

var breadcrumb = require("../breadCrumb");

var crumps = function(){
	return [
		{
      text:"Schools",
      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
    },
		{    
      text:"Courses",
      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses",
    },
	]
}

module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
    	m(schools),
    	m(courses)
    	// m(schools)
    )
  }
}