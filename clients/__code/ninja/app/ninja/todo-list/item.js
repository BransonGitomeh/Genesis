module.exports = {
  view:function(ctrl,args){
    return m("li",{class:"collection-item dismissable"},[
      m("input",{type:"checkbox",id:"task1"}),
      m("label",{for:"task1",style:args.complete() === true ? "text-decoration: line-through;" : ""},args.text),
      m("br"),
      m("span",{class:"task-cat teal"},args.type),
      m("span",{class:"pink-text right"},args.due)
    ])
  }
}
