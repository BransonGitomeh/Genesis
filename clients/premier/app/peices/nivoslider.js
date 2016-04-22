module.exports = {
  view:function(ctrl){
    var images = ["0","1","2","3","4"]
    return m("div",{
      class:"slider",
      config:function(){
        $('.slider').nivoSlider({
    			effect: 'random',
    			slices: 15,
    			boxCols: 8,
    			boxRows: 4,
    			animSpeed: 500,
    			pauseTime: 3000,
    			startSlide: 0,
    			directionNav: false,
    			controlNav: false,
    			controlNavThumbs: false,
    			pauseOnHover: true,
    			manualAdvance: false,
    			prevText: 'Prev',
    			nextText: 'Next',
    			randomStart: false,
    			beforeChange: function(){},
    			afterChange: function(){},
    			slideshowEnd: function(){},
    		    lastSlide: function(){},
    		    afterLoad: function(){}
          });
      }
    },[
      images.map(function(image){
        // console.log(image);
        return m("img",{
          src:"images/nivoslider/" + image + ".jpg"
        })
      })
    ])

  }
}
