var fbPage = require('../../../__components/plugins/fbPage');

module.exports = {
  view: function(args){
    // return ("div","footer")
    return m("footer",{class:"page-footer blue"},[
      m(".hide-on-med-and-up",[
        m("br"),
        m(".container",[
          m(fbPage,{
            height:"250px",
            width:"100%",
            page:"https://web.facebook.com/Premier-ECDE-Teachers-College-1439285166325335/?fref=ts",
            tabs:"timeline, events, messages",
            smallHeader:"true",
            adaptWidth:"true",
            hideCover:"false",
            showPosts:"false",
            facePile:"true"
          })
        ]),
        m("br")
      ]),

      m("div",{class:"footer-copyright"},"Copyright 2015. Premier ECDE Teachers College. P.O. BOX 3279 Kigali, Rwanda",[
        m("span",{class:"right"},"< SSU: 0.3.0 />")
      ])
    ])
  }
}
