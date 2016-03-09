var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")

module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                m("h3",{class:"center"},"blog comming soon"),
                m(footer)
            ]
        }
  }
