module.exports = {
  view:function(ctrl,args){
    return m("div",{class:"card-panel"},[
      m("h4",{class:"center"},args.title),
      m("div",{class:"divider"}),
      m("p",args.content),
      m("div",{class:"divider"}),
      m("br"),
      m("div",{class:"row"},[
        m("div",{class:"col l6"},[
          // m("div","weird text"),
          m("div","( " + moment.duration(moment(args.createdAt).diff(moment(new Date())),'milliseconds').humanize() + " ago"  + " )")
        ]),
        m("div",{class:"col l6"},[
          args.deleteBtn === true ? 
          m("button",{
            class:"btn red right",
            onclick:function(){
              m.request({
                method:"GET",
                url:"http://localhost:3000/basic/removeFromNoticeboard/" + args.id
              }).then(m.route(m.route()))
            }
          },"remove") :""

          // m("div",{class:"right"},"weird text")
        ]),
      ])
    ])
  }
}
