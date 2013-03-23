var ViewController = {

  init: function(){
    $('.top-items').on('click', '.tile', this.updateVideo);
  },

  updateVideo: function(){
    var id = $(this).attr('data-id');
    $('#ytplayer').attr("src", createSrc(id));
  },

  clearMedia: function(){
    console.log("inside clear media");
    $('.top-items li').remove();
  }
};
