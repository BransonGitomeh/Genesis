module.exports = {
  view:function(ctrl,args){
    return m(".card hoverable",[
      m("a",{
        href:args.cardLink,
        config:m.route
      },[
          m(".card-image waves-effect waves-block waves-light",[
            m("img",{
              class:"activator responsive-img valign",
              src:args.url
            })
          ]),

          args.text ? m(".card-content",[
            m("span",{class:"card-title activator grey-text text-darken-4"},args.text)
          ]) : m("span")

      ]),



    ])
  }
}
