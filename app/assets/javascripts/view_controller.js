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
    $('.top-items li').remove();
    $('#ytplayer').attr("src", "");
  },

  render: function(videos){
    this.clearMedia();
    for(var i = 0; i < videos.length; i++){
      var thumbnail = videos[i].thumbnail.sqDefault;
      var id = videos[i].id;
      $('.top-items ul').append(createThumbnailList(videos[i]));
    }
    var src = createSrc(videos[0].id);
    $('#ytplayer').attr("src", src).show();
  }
};
