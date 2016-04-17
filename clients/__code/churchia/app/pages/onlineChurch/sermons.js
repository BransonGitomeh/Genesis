var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")

module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                m("h3",{class:"center"},"Sermon Archive comming soon"),
                m(footer)
            ]
        }
  }
