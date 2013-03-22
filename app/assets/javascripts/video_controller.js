var VideoController = {
  prepareURL: function(countryCode){
    return ["http://gdata.youtube.com",
            "/feeds/api/standardfeeds/",
            countryCode,
            "/most_viewed?v=2&time=today&max-results=2&alt=jsonc"
           ].join('');
  },

  retrieveVideos: function(code){
    $.ajax({
          type: "GET",
          url: VideoController.prepareURL(code),
          dataType: "json"})
        .done(function(youtubeObj){
          console.log("Ajax request successful!");
          VideoController.render(youtubeObj.data.items);
        })
        .fail(function(){
          console.log("There was an error");
          console.log("hello");
        })
        .always(function(){
          console.log("I'm always doing this");
        });
  },

  render: function(videos){
    for(var i = 0, length = videos.length; i < length; i++){ 
      var frame = [
          "<iframe id='ytplayer' type='text/html'",
          "width='640' height='390'",
          "src='http://www.youtube.com/embed/" +videos[i].id+ "?autoplay=1'",
          "frameborder='0'/>"
          ].join('');
      $('#videos').append(frame);
    }
  }
};
