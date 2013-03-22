var VideoController = {

  videos: [],

  prepareURL: function(countryCode){
    return ["http://gdata.youtube.com",
            "/feeds/api/standardfeeds/",
            countryCode,
            "/most_viewed?v=2&time=today&max-results=1&alt=jsonc"
           ].join('');
  },

  retrieveVideos: function(code){
    $.ajax({
          type: "GET",
          url: VideoController.prepareURL(code),
          dataType: "json"})
        .done(function(youtubeObj){
          console.log(youtubeObj);
          var videos = youtubeObj.data.items;
          for (var i = 0, length = videos.length; i< length; i++){
            VideoController.videos.push(videos[i]);
          }
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
      var frame = [
          "<iframe id='ytplayer' type='text/html'",
          "width='450' height='275'",
          "src='http://www.youtube.com/embed/",
          VideoController.videos[i].id,
          "?autoplay=1'",
          "frameborder='0'/>"
          ].join('');
      $('.selected-item').append(frame);
    }
  }
};

 

