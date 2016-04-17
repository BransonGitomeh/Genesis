var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")
var MinistryBody = require("./MinistryBody")

var Config = {
  head:"Home-Cells Ministry",
  videoUrl:"//www.youtube.com/embed/ZIu_0cg8B6o",
  cardPicUrl:"/build/assets/img/icons/worship.jpg",
  Objective:"To mobolize church members for home fellowship, equip them with the word and engage them in caring, winning, training and sending lay persons for Jesus Christ ",
  Strategies:[
    {head:"Capacity building"},
    {head:"Information management"},
    {head:"Wining , build ,care."}
  ],
  // Verses:[
  //   {header:"Deutronomy 6:6-9 ",content:"making them models of a transformed society."}
  // ],
  // Statement:"Children’s Ministries at Gathering Church exists to encourage Children to worship our Savior and Lord Jesus Christ through the study and application of Scripture and the deepening of relationships with other Children for fellowship and accountability.A new season of ministry just began, and we invite you to be a part of one of the many mens's studies available. As you review the list of opportunities below, you'll see that whatever your circumstances, whether you are single or married, in every season of life, there is a spiritual home and sweet fellowship here for you.For information about any of these ministries, please contact the mens's Ministries Thanks",
  leaders:[
    {name:"Pst Martin",position:"Senior Pastor", message:" ",picUrl:"/build/assets/img/icons/worship.jpg"}
  ]
  // regularMeetings:[
  //   {name:"mens Prayer",time:"3.00am",occurencePeriod:"every 2 weeks",picUrl:"/build/assets/img/icons/worship.jpg"}
  // ]
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
