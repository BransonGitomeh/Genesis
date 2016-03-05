var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")
var responceForm = require('../../../../shared_components/responceForm.js');

module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                m(responceForm,{
                  header:"Complement"
                }),
                m(footer)
            ]
        }
  }
