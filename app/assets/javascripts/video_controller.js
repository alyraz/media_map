var VideoController = {

  videos: [],

  init: function(){
    this.defaultVideoQuery = 4;
    this.additionalVideos = 4;
    this.retrieveVideos(MapController.selectedCountry, "most_popular", "today", this.defaultVideoQuery);
    this.getMoreVideos();
  },

  getMoreVideos: function(){
    $('.top-items').on('click', '.fetch-videos', function(e){
      e.preventDefault();
      time = FormController.timeSelection();
      sort = FormController.sortBySelection();
      code = MapController.selectedCountry;
      category = FormController.categorySelection();
      VideoController.additionalVideos += 10;
      VideoController.retrieveVideos(code, sort, time, category, VideoController.additionalVideos);
    });
  },

  retrieveVideos: function(code, sortBy, time, category, num){
    $.ajax({
      type: "GET",
      url: this.createUrl(code, sortBy, time, category, num),
      dataType: "json"})
    .done(function(youtubeObj){
      VideoController.videos = youtubeObj.data.items;
      ViewController.render(VideoController.videos);
    })
    .fail(function(){
      console.log("There was an error");
    })
    .always(function(){
      console.log("I'm always doing this");
    });
  },

  createUrl: function(countryCode, sort, timeFrame, category, num){
    return ["http://gdata.youtube.com",
            "/feeds/api/standardfeeds/",
            countryCode,
            "/"+sort+category+"?v=2&time=",
            timeFrame,
            "&max-results=",
            num,
            "&alt=jsonc"
           ].join('');
  }
};
