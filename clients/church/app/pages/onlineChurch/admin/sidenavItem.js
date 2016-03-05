module.exports = {
  view:function(ctrl,args){
    return m("li",{class:"waves-effect waves-block waves-blue"},[
      m("a",{href:args.link,config:m.route,class:(args.link === m.route() ? "blue-grey lighten-5" : " " )},[
        m("i",{class:args.icon}),
        m("div",args.text)
      ])
    ])
  }
}
