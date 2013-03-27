var VideoController = {

  videos: [],

  init: function(){
    this.defaultVideoQuery = 4;
    this.additionalVideos = 4;
    this.getMoreVideos();
  },

  getMoreVideos: function(){
    $('.top-items').on('click', '.fetch-videos', function(e){
      e.preventDefault();
      VideoController.additionalVideos += 10;
      VideoController.retrieveVideos(VideoController.additionalVideos);
    });
  },

  retrieveVideos: function(num){
    // var num = num;
    $.ajax({
      type: "GET",
      url: this.createUrl(num),
      dataType: "json"})
    .done(function(youtubeResponse){
      VideoController.videos = youtubeResponse.data.items;
      ViewController.render(VideoController.videos);
    })
    .fail(function(){
      console.log("There was an error");
    })
    .always(function(){
      console.log("I'm always doing this");
    });
  },

  createUrl: function(num){
    return "http://gdata.youtube.com/feeds/api/standardfeeds/" +
            MapController.selectedCountry+
            "/" +FormController.sortBy()+
            FormController.category()+
            "?v=2&time=" +FormController.timeFrame()+
            "&max-results=" +num+ "&alt=jsonc";
  }
};
