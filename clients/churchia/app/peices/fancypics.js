var pics = [
  {tagline:"Pic1",subTagline:"Pastor and wife",url:"http://lorempixel.com/580/250/nature/1"},
  {tagline:"Pic2",subTagline:"All Pastors in that church",url:"http://lorempixel.com/580/250/nature/1"},
  {tagline:"Pic3",subTagline:"Congregation on last service",url:"http://lorempixel.com/580/250/nature/1"}
]

module.exports = {
        view:function(ctrl,args){
            return m(".slider",{
              config:function(){
                $('.slider').slider({
                  Transition:"500",
                  Interval:"20"
                })
              }
            },[
              m("ul",{class:"slides"},[
                pics.map(function(pic){
                  return m(require("./pic"),{
                    tagline:pic.tagline,
                    subTagline:pic.subTagline,
                    url:pic.url
                  })
                })
              ])
            ])
        }
}
