var schools = require('../schools/schools');
var stages = require('./stages');


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
        {
          text:"Levels",
          url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels",
        },
        {
            text:"Stages",
            url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages"
        }
	]
}

module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
    	m(stages)
    	// m(stages)
    	// m(schools)
    )
  }
}