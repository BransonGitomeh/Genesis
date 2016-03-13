module.exports = {
  controller:function(){
    return {
      active:m.prop(false)
    }
  },
  view:function(ctrl,args){
    return m("li",[
      args.drops ? m("ul",{
        class:"collapsible collapsible-accordion",
        "data-collapsible":"accordion",
        config:function(){
          $('.collapsible').collapsible()
        }
      },[
        m("li",{class:"bold"},[
          // header
          m("a",{class:"collapsible-header waves-effect waves-cyan " + (ctrl.active() === true ? "active" : "")},[
            m("i",{class:args.icon})
          ],args.text),
          //body
          m("div",{class:"collapsible-body"},[
            m("ul",[

                args.drops.map(function(drop){

                  return m("li",{class:"waves-effect waves-block waves-blue"},[
                    //implememntation to keep a sidebar dropdown dropped if a link inside it is active
                    // (drop.url === m.route() ? ctrl.active(true) : ""),
                    // (drop.url === m.route() ? m.redraw : ""),
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
