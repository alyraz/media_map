var VideoController = {

  videos: [],

  init: function(){
    this.retrieveVideos(MapController.selectedCountry, "most_popular", "today");
  },

  // I don't think we need any of this but don't want to delete
  // without group approval, manana. 

  // init: function(){
  //   if (this.determineCountryCode()){
  //     this.retrieveVideos(this.determineCountryCode(), "most_popular", "today");
  //   }
  // },

  // determineCountryCode: function(){


  //   var url = $(location).attr('href');
  //   var urlCountryCode = /\/#\w{2}$/;

  //   // test if url contains a country code
  //   if(urlCountryCode.test(url)){
  //     // strip country code from url
  //     var countryCodeChars = /#\w{2}/;
  //     var countryCode = countryCodeChars.exec(url)[0].replace("#", "");
  //     return countryCode.toUpperCase();
  //   }
  // },

  retrieveVideos: function(code, sortBy, time, category){
    $.ajax({
      type: "GET",
      url: createUrl(code, sortBy, time, category),
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

  createUrl: function(countryCode, sort, timeFrame, category){
    return ["http://gdata.youtube.com",
            "/feeds/api/standardfeeds/",
            countryCode,
            "/"+sort+category+"?v=2&time=",
            timeFrame,
            "&max-results=4&orderby=viewCount&alt=jsonc"
           ].join('');
  }
};
