module.exports = {
  controller:function(){
    return {
      talk:function(){
        alert("my name is caro")
      },
      talkSomethingElse:function(){
        alert("my name is caro another")
      }
    }
  },
  view:function(ctrl,args){
    return  m("div",{class:"card-panel"},[
      m("h1",{class:"center"},"my card component")
      ,m("div",{class:"divider"})
      ,m("div","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
      ,m("button",{
        onclick:function(){
          ctrl.talkSomethingElse();
          m("div",{class:"divider"})
        }
      },"caro's button")
    ])
  }
}
