var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")
var MinistryBody = require("./MinistryBody")

var Config = {
  head:"Ladies Ministry",
  videoUrl:"//www.youtube.com/embed/ZIu_0cg8B6o",
  cardPicUrl:"/build/assets/img/event21/ladies.jpg",
  Objective:"To empower and equip women with the gospel of Jesus Christ, to transform the community for better lives and build their capacity for self-sustainability.",

  Strategies:[
    {head:"Capacity building to empower women to exploit their full God given potential preaching Christ, caring for their families and communities"},

    {head:"Missions- To reach to the unsaved, needy, and destitute and the neglected and rejected with the gospel and love of Christ."},

    {
      head:"Poverty alleviation by implementing integrated projects such as:",
      bullets:['Promote health','Promote income generating activities &  resource mobilization','Promote education']
    }

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
