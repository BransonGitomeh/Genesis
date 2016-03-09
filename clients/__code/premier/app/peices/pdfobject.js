module.exports = {
  view:function(ctrl,args){
    var link = "documents/" + args.name;

    var customHeight;
    if(args.height){
      customHeight = args.height
    }else{
      customHeight="700px";
    }

    return m("div[id='PDFObject']",{
      config:function(){
        var myParams = {
          url: link,
          height:customHeight,
          pdfOpenParams: {
             navpanes: 0,
             statusbar: 1,
             view: "FitV",
             pagemode: "thumbs"
          }
        };

       PDFObject(myParams).embed('PDFObject');
      }
    },[
      m("p","It appears you dont have Adobe Reader or PDF support in this web browser. download the document ",[
        m("a",{href:link},"here")
      ])
    ])

  }
}
