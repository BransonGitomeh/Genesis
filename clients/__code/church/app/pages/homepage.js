var footer = require("../peices/footer");
var topbar = require("../peices/topbar");
var eventsSidebar = require("../peices/eventsSidebar")

var events = [
  {
    date:"21st Feb",
    eventName:"1st Aniversary and dedication of children"
  },
  {
    date:"28st Feb",
    eventName:"Ladies Sunday"
  },
  {
    date:"6th March",
    eventName:"Baptism"
  },
  {
    date:"13th March",
    eventName:"Fundraising for sundayschool tent"
  },
  {
    date:"28th March",
    eventName:"Sunday School Day & Great Commision training"
  },
  {
    date:"17th April",
    eventName:"Ladies Sunday"
  },
  {
    date:"23rd April",
    eventName:"Youth Hike/Retreat"
  },
  {
    date:"30th April",
    eventName:"Mentorship Program"
  },
  {
    date:"15th May",
    eventName:"Ladies Sunday"
  }
]

var meetings = [
  {
    date:"Tuesday",
    eventName:"Prayers ",
    time:"From 6-7pm"
  },
  {
    date:"Thursday",
    eventName:"Bible study",
    time:"From 6-7pm"
  },
  {
    date:"Thursday",
    eventName:"Fellowship at New Horizon Childrens home",
    time:"From 7.30 - 8.30 pm"
  }
]

module.exports = {
  view:function(){
      return [
          m(topbar),

          m(".row",[

            m(".col l9 s12",[
              m("br"),
              m("br"),
                m("div",{
                  id:"slider",
                  config:function(){
                    var slider = new IdealImageSlider.Slider('#slider');
                  	slider.start();
                  }
                },[
                //  m("img",{src:"/build/assets/img/event21/children.jpg",alt:"slide 1"}),
                //  m("img",{src:"/build/assets/img/event21/general.jpg",alt:"slide 1"}),
                //  m("img",{src:"/build/assets/img/event21/pillars.jpg",alt:"slide 1"}),
                //  m("img",{src:"/build/assets/img/event21/teneez.jpg",alt:"slide 1"}),
                //  m("img",{src:"/build/assets/img/event21/ladies.jpg",alt:"slide 1"}),
                  // m("img",{src:"/build/assets/img/1.jpg",alt:"slide 1"}),
                ]),
              m("span",[
                m("h3",{class:"center blue-text"},"2016: THE YEAR OF DEVINE ESTABLISHMENT"),
                m("h5",{class:"center"},[
                  m("b","DEUT 28:9..."),
                  m("span","The lord shall establish you as his holy people...")
                ])
              ])

            ]),

            m(".col l3 s12",[
              m("br"),
              m("br"),
              m(eventsSidebar),

              m(".card-panel row center",[
                m("h5",{class:"center"},"Our 2016 year planner"),



                  m("a",
                    {
                      class:"btn waves-block waves-" + primaryColor +" waves-effect " + color,
                      //href:"http://gatheringchurchkenya.org/build/assets/docs/GatheringChurchyear2016Planner1.pdf"
                    },[
                      m("i",{
                        class:"mdi-file-cloud-download left"
                      }),
                      m("span","download")
                    ]),



              ])
            ]),

            // m("br"),
            // m("a",{class:"active"},"Dedication Of children 21st March 2016"),
            // m("br"),
            // m("a",{class:"active"},"Sunday School/Teens meeting on Saturday 6/2/2016"),
            // m("br"),
            // m("a",{class:"active"},"Life Ministry training - induction on 14/2/2016")

            // m("div",{class:"col l12"},[
            //   m("br"),
            //   m(".divider"),
            //   m("h5","Upcoming Events"),
            //   m(".divider"),
            //
            //   m(".row",[
            //     m(".col l3",[
            //       m(infocard,{
            //         cardLink:"/events/Meetings",
            //         url:"/build/assets/img/icons/worship.jpg",
            //         text:"Seminars"
            //       })
            //     ]),
            //      m(".col l3",[
            //        m(infocard,{
            //         cardLink:"/events/Meetings",
            //         url:"/build/assets/img/icons/worship.jpg",
            //         text:"Keshas"
            //       })
            //     ]),
            //     m(".col l3",[
            //        m(infocard,{
            //         cardLink:"/events/Meetings",
            //         url:"/build/assets/img/icons/worship.jpg",
            //         text:"Meetings"
            //       })
            //     ]),
            //     m(".col l3",[
            //        m(infocard,{
            //         cardLink:"/events/Celebrations",
            //         url:"/build/assets/img/icons/worship.jpg",
            //         text:"Celebrations"
            //       })
            //     ]),
            //
            //   ]),
            // ]),

            // m("div",{class:"col l12"},[
            //               m(".divider"),
            //               m("h5","Recent News"),
            //               m(".divider"),
            //
            //               m(".row center",[
            //                 m(".col l3",[
            //                   m(infocard,{
            //                     cardLink:"/recentNews/Development",
            //                     url:"/build/assets/img/icons/worship.jpg",
            //                     text:"Development"
            //                   })
            //                 ]),
            //                  m(".col l3",[
            //                    m(infocard,{
            //                     cardLink:"/recentNews/Ministry",
            //                     url:"/build/assets/img/icons/word.jpg",
            //                     text:"Gospel"
            //                   })
            //                 ]),
            //                 m(".col l3",[
            //                    m(infocard,{
            //                     cardLink:"/recentNews/Youth",
            //                     url:"/build/assets/img/icons/worship.jpg",
            //                     text:"Youth"
            //                   })
            //                 ]),
            //                 m(".col l3",[
            //                    m(infocard,{
            //                     cardLink:"/aweosme",
            //                     url:"/build/assets/img/icons/worship.jpg",
            //                     text:"Online Church"
            //                   })
            //                 ]),
            //
            //               ]),
            //       ])
          ]),

          m(footer)
      ]
  }
}
