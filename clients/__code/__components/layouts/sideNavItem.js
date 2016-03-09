module.exports = {
  view:function(ctrl,args){
    return m("li",[
      args.drops ? m("ul",{
        class:"collapsible collapsible-accordion",
        config:function(){
          $('.collapsible').collapsible()
        }
      },[
        m("li",{class:"bold"},[
          // header
          m("a",{class:"collapsible-header waves-effect waves-cyan"},[
            m("i",{class:args.icon})
          ],args.text),
          //body
          m("div",{class:"collapsible-body"},[
            m("ul",[

                args.drops.map(function(drop){

                  return m("li",{class:"waves-effect waves-block waves-blue"},[
                    m("a",{ //render a normal link
                      href:drop.url,
                      config:m.route,
                      class:(drop.url === m.route() ? "grey lighten-4" : "")
                    },[
                      m("i",{class:drop.icon}),
                      m("div",drop.text)
                    ])
                  ])

                })


            ])
          ])
        ])
      ]) : m("a",{ //render a normal link
        href:args.link,
        config:m.route,
        class:(args.link === m.route() ? args.color + "-grey lighten-5" : " " )
      },[
        m("i",{class:args.icon}),
        m("div",args.text)
      ]),
      ///////////////////
    ])
  }
}
