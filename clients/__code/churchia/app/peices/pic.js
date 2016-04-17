module.exports = {
  view:function(ctrl,args){
    return m("li",[
      m("img",{src:args.url}),
      m(".caption center-align",[
        m("h3",args.tagline),
        m("h5",{class:"light grey-text text-lighten-3"},args.subTagline)
      ])
    ])
  }
}