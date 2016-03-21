var schools = require('../schools/schools');
var stages = require('../stages/stages');
var units = require('./units_selected');


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
        },
        {
            text:"Select Units",
            url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools/" + m.route.param("school_id") + "/courses/" + m.route.param("course_id") + "/levels/" + m.route.param("level_id") + "/stages/" + m.route.param("stage_id")  + "/units"
        }
	]
}

module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
    	m(stages),
    	m(units)
    	// m(schools)
    )
  }
}