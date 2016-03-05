module.exports = {
  view:function(ctrl,args){
    return m("li",[
        m("a",{
          class:(args.link === m.route() ? "active" : " "),
          href:args.link,
          config:m.route
        },args.text)
      ])
  }
}
