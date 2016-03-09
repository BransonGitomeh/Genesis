var JD = require('../../../../__components/libs/jollyData');
var fbPage = require('../../../../__components/plugins/fbPage');

module.exports = {
  view:function(ctrl,attrs){
    // console.log(attrs.link.title);
    var links = [
      {title:"Welcome",url:"/"},
      {title:"Academic Calender", url:"/academics/calender"},
      {title:"Downloads", url:"/operations/downloads"},
      {title:"Library",url:"/academics/liblary"},
      {title:"Bronchure",url:"/proffessional_development/bronchure"},
      // {title:"NoticeBoard",url:"/NoticeBoard"},
      {title:"Service Charter",url:"/operations/service_charter"},
    ]


  return m("div",[
    m("div",[
      //responsive image holder
      m(".col l12",[
        m("img[src='images/default/logo.png']",{
          class:"responsive-img"
        })
      ]),
      //latest news header
      // m("h5",{class:"center"},"Latest News"),
      //all the links on the sidebar
      m("ul",{class:"section table-of-contents"},[
        links.map(function(link){
          return m("li",[
            m("a",{
              class:(m.route() === link.url ? 'active blue-text': ''),
              href:link.url,
              config:m.route
            },link.title)
          ])
        }),

        //--------------------------------------------------------------
        //NOTICE BOAD IS ONLY AVAILABLE TO THOSE logged in
        JD.loggedIn() ?
        m("li",[
          m("a",{
            class:(m.route() === "/login/NoticeBoard" ? 'active blue-text': ''),
            href:"/login/StudentBoard", //use JD to decide what link to show based on who has logged in
            config:m.route
          },"Notice board")
        ]):
        m("span")
        //----------------------------------------------------------------
      ]),
      //fb container
      m(".container",[
        m(fbPage,{
          height:"250px",
          width:"380px",
          page:"https://web.facebook.com/Premier-ECDE-Teachers-College-1439285166325335/?fref=ts",
          tabs:"timeline, events, messages",
          smallHeader:"true",
          adaptWidth:"true",
          hideCover:"false",
          showPosts:"false",
          facePile:"true"
        })
      ])
    ])
  ])
  }
}
