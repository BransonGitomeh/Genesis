var vm = {
  logstuff:function(stuff){
    console.log(stuff);
  }
}
module.exports = {
  controller:function(args){
    return {
      runthing:vm.logstuff(args)
    }
  },
  view:function(ctrl,args){
    return m("li",{class:"collection-item dismissable"},[
      m("input",{
        type:"checkbox",
        disabled:"disabled",
        id:args.text ? args.text : "",
        onclick: function(e) {
            args.complete(e.target["checked"]);
        },
        checked:args.complete()
      }),
      console.log(args.complete()),
      m("label",{for:args.text,style:(args.complete() ? "text-decoration: line-through;" : "")},args.text),
      m("br"),
      m("span",{class:"task-cat teal"},args.type ? args.type : ""),
      m("span",{class:"pink-text right"},args.due ? args.due : "")
    ])
  }
}
