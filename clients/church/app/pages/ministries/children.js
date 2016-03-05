var footer = require("../../peices/footer")
var topbar = require("../../peices/topbar")
var MinistryBody = require("./MinistryBody")

var Config = {
  head:"Childrens Ministry",
  videoUrl:"//www.youtube.com/embed/ZIu_0cg8B6o",
  cardPicUrl:"/build/assets/img/event21/children.jpg",
  // Objective:"To  reach and train children in the way of christ( Proverbs 22:6), and  equip  them with the word",
  Strategies:[
    {
      head:"Reaching out and Follow-up for Christ",
      bullets:[
        "Creation of take home papers where parents sign an access progress of their children in church.",
        "Giving the children a snack after class to ensure that they remain consistent in attendance",
        "Making the annual VBS free and subsidizing the camp fee to a small affordable amount."
      ]
    },
    {
      head:"Spiritual growth",
      bullets:[
        "Vigorous publicity of the VBS and the camp to ensure that children come from far and wide.",
        "Creation of memory verse stickers where children can go and stick them in the different areas of their homes."
      ]
    },
    {
      head:"Resource mobilization",
      bullets:[
        "Maximum utilization of children week to raise funds.",
        "Encourage children to be faithful in tithing and giving."
      ]
    },
    {
      head:"Capacity building",
      bullets:[
        "Capacity building of the teachers and volunteers to ensure delivery.",
        "To  set up and equip Children library",
        "Formal training for teachers.",
        "Train adults on children evangelism."
      ]
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
