var schools = require('./schools');

var breadcrumb = require("../breadCrumb");

var crumps = function(){
	return [
		{
      text:"Schools",
      url:"/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
    },
	]
}

module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
    	m(schools)
    	// m(schools),
    	// m(schools)
    )
  }
}