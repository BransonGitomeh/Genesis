module.exports = {
  view:function(ctrl,attrs){
    var textarea =  m("div",{class:"input-field validate  col " + attrs.sizes},[
      m("textarea[required]",{
        id:attrs.label,
        name:attrs.label,
        type:attrs.type,
        class:"materialize-textarea",
        "aria-required":"true",
        oninput:m.withAttr("value",attrs.value)
      }),
      m("label",{for:attrs.label},attrs.label)
    ]);

    var input =  m("div",{class:"input-field validate col " + attrs.sizes},[
      m("input[required]",{
        id:attrs.label,
        name:attrs.label,
        type:attrs.type,
        "aria-required":"true",
        oninput:m.withAttr("value",attrs.value)
      }),
      m("label",{for:attrs.label},attrs.label)
    ]);

    // return what is asked for
    if(attrs.type === "textarea"){
      return textarea
    }else{
      return input
    }
  }
}


// (m.route() === attrs.link.url ? 'active': '')
