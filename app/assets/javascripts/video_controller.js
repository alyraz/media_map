var VideoController = {

  videos: [],

  init: function(){
    var countryCode = $('#country').data('countryCode');
    if(countryCode){
      VideoController.retrieveVideos(countryCode);
    }
  },

  retrieveVideos: function(code){
    $.ajax({
          type: "GET",
          url: createUrl(code),
          dataType: "json"})
        .done(function(youtubeObj){
          VideoController.videos = youtubeObj.data.items;
          VideoController.render();
        })
        .fail(function(){
          console.log("There was an error");
        })
        .always(function(){
          console.log("I'm always doing this");
        });
  },

  render: function(){
    for(var i = 0, length = VideoController.videos.length; i < length; i++){ 
      var thumbnail = VideoController.videos[i].thumbnail.sqDefault;
      var id = VideoController.videos[i].id;
      $('.top-items ul').append(createThumbnailList(id, thumbnail));
    }
    var src = createSrc(VideoController.videos[0].id);
    $('#ytplayer').attr("src", src).show();
  }
};
