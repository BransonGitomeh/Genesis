module.exports = {
  view:function(ctrl,args){
    return m("iframe",{
      frameborder:"0",
      scrolling:"no",
      marginheight:"0",
      marginwidth:"0",
      width: args.width ? args.width  :"100%",
      height: args.height ? args.height  :"100%",
      src: args.location,
      allowfullscreen:true
    })
  }
}
