var VideoController = {

  videos: [],

  init: function(){
    if (this.determineCountryCode()){
      this.retrieveVideos(this.determineCountryCode(), "today");
    }
  },

  determineCountryCode: function(){
    var url = $(location).attr('href');
    var urlCountryCode = /\/#\w{2}$/;

    // test if url contains a country code
    if(urlCountryCode.test(url)){
      // strip country code from url
      var countryCodeChars = /#\w{2}/;
      var countryCode = countryCodeChars.exec(url)[0].replace("#", "");
      return countryCode.toUpperCase();
    }
  },

  retrieveVideos: function(code, time){
    console.log("inside retrieve videos");
    $.ajax({
      type: "GET",
      url: createUrl(code, time),
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
  }

};
