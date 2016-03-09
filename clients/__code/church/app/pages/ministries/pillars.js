var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")
var MinistryBody = require("./MinistryBody")

var Config = {
  head:"Pillars Ministry",
  videoUrl:"//www.youtube.com/embed/ZIu_0cg8B6o",
  cardPicUrl:"/build/assets/img/event21/pillars.jpg",
  // Objective:"To  reach and train Men in the way of christ( Proverbs 22:6), and  equip  them with the word",
  // Verses:[
  //   {header:"Deutronomy 6:6-9 ",content:"making them models of a transformed society."}
  // ],
  Statement:"Men’s Ministries at Gathering Church exists to encourage Men to worship our Savior and Lord Jesus Christ through the study and application of Scripture and the deepening of relationships with other Men for fellowship and accountability.A new season of ministry just began, and we invite you to be a part of one of the many mens's studies available. As you review the list of opportunities below, you'll see that whatever your circumstances, whether you are single or married, in every season of life, there is a spiritual home and sweet fellowship here for you.For information about any of these ministries, please contact the mens's Ministries Thanks",
  leaders:[
    {name:"Pst Martin",position:"Senior Pastor", message:" ",picUrl:"/build/assets/img/icons/worship.jpg"},
  ]
}

module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                m(".body",[
                  m(MinistryBody,{
                    ministryConfig:Config
                  })
                ]),
                m(footer)
            ]
        }
  }
