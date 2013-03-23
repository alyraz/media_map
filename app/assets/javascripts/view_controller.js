var ViewController = {

  init: function(){
    $('.top-items').on('click', 'a', function(e){
      e.preventDefault();
      ViewController.updateVideo(this);
    });
  },

  updateVideo: function(link){
    var id = $(link).parent().attr('data-id');
    $('#ytplayer').attr("src", createSrc(id));
  },

  clearMedia: function(){
    console.log("inside clear media");
    $('.top-items li').remove();
  }
};
