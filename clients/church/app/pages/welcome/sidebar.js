var sidebarItem = require('./sidebarItem');

var links = [
  {text:"Welcome",url:"/Welcome/thank-you"},
  {text:"What you will find",url:"/Welcome/what-to-find"},
  {text:"How to connect with us",url:"/Welcome/connect"},
  {text:"Our Location",url:"/Welcome/location"}
]

// var distinctives = [
//   {text:"Church Discipline",url:"/AboutUs/whatWeTeach/churchdiscipline"},
//   {text:"Bibilical eldership",url:"/AboutUs/whatWeTeach/bibilicaleldership"},
//   {text:"Divorce and Marriage",url:"/AboutUs/whatWeTeach/divorceandmariage"},
//   {text:"Evangelising children",url:"/AboutUs/whatWeTeach/evangelisingchildren"},
//   {text:"The role of wemen in the church",url:"/AboutUs/whatWeTeach/roleofwemen"},
// ]


module.exports = {
  view:function(){
    return m("span",[
      m(".divider"),
      m("ul",{class:"section table-of-contents"},[
            links.map(function(link){
              return m(sidebarItem,{
                text:link.text,
                link:link.url
              })
            })
      ]),
      // m(".divider"),
      // m("ul",{class:"section table-of-contents"},[
      //       distinctives.map(function(link){
      //         return m(sidebarItem,{
      //           text:link.text,
      //           link:link.url
      //         })
      //       })
      // ]),
    ])

  }
}
