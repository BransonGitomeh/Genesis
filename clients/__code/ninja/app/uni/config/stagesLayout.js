var item = require('./item');
var schools = require('./schools');
var stages = require('./stages');
var units = require('./units');


var inputComponent = require('../../../../__components/forminput');
var breadcrumb = require("./breadCrumb");

var crumps = function(){
	return [
		{text:"Schools"},
    {text:"Courses"},
    {text:"Levels"},
    {text:"Stages"}
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