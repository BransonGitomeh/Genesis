var item = require('./item');
var schools = require('./schools');
var courses = require('./courses');


var inputComponent = require('../../../../__components/forminput');
var breadcrumb = require("./breadCrumb");

var crumps = function(){
	return [
		{text:"Schools"},
		{text:"Courses"}
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