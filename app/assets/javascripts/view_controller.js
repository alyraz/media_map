var ViewController = {

  init: function(){
    $('.top-items').on('click', 'a', function(e){
      e.preventDefault();
      ViewController.updateVideo(this);
    });
  },

  updateVideo: function(link){
    var id = $(link).parent().attr('data-id');
    $('#ytplayer').attr("src", this.createSrc(id));
  },

  clearMedia: function(){
    $('.top-items li').remove();
    $('#ytplayer').attr("src", "");
  },

  createSrc: function(id){
    return "http://www.youtube.com/embed/" +id+ "?autoplay=1&enablejsapi=1";
  },

  createThumbnailList: function(video){
    return ["<li class='tile' data-id='"+video.id+"'><a href='#' class='tile-link'>",
            "<img src='"+video.thumbnail.sqDefault+"' heigh='80' width='107'>",
            "<span class='thumbnail-title'>",
            video.title,
            "</span><span>",
            video.viewCount,
            " views</span></a></li>"].join('');
  },

  render: function(videos){
    this.clearMedia();
    for(var i = 0; i < videos.length; i++){
      var thumbnail = videos[i].thumbnail.sqDefault;
      var id = videos[i].id;
      $('.top-items ul').append(ViewController.createThumbnailList(videos[i]));
    }
    var src = this.createSrc(videos[0].id);
    $('#ytplayer').attr("src", src).show();
  }
};
