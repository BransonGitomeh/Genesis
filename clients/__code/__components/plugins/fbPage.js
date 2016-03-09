module.exports = {
  view:function(ctrl,args){
    return m(".fb-page",{
      "data-href":args.page,
      "data-width":args.width,
      "data-height":args.height,
      "data-hide-cover":args.hideCover,
      "data-small-header":args.smallHeader,
      "data-show-facepile":args.facePile,
      "data-show-posts":args.showPosts,
      "data-tabs":args.tabs,
      config:function(){

        /**
        *if this is called at first, FB object will not have innitialized and will screw things up,
        *this is usefull in a re-draw where the fb thing will be blown away, but the FB sdk will
        *have innitialized and hence calling parse will render it :-)
        */
        if (typeof FB != 'undefined'){
          FB.XFBML.parse();
        }
      }
    })
  }
}
