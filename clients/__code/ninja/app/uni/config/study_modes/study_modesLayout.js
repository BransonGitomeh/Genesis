var study_modes = require('./study_modes');

var breadcrumb = require("../breadCrumb");

var crumps = function(){
	return [
		{
      text:"Departments",
      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "departments"
    },
	]
}

module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
    	m(study_modes)
    	// m(schools),
    	// m(schools)
    )
  }
}