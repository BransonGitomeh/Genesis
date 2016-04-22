var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")
var responceForm = require('../../../../__components/responceForm.js');

module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                m(responceForm,{
                  header:"Complaint"
                }),
                m(footer)
            ]
        }
  }
