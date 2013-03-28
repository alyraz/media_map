var NavController = {
  init: function(){
    this.preparePage();

    $(window).on('hashchange', function(){
      NavController.updatePageFromHash();
    });
  },

  hashParameters: function(){
    return window.location.hash.split("/");
  },

  preparePage: function(){
    // get parameters from hash
    var params = this.hashParameters();
    // if we have parameters in hash, retrieve them and send to view for storing
    if (params.length > 1){
      MapController.selectedCountry = params[1];
      var country     = params[1];
      var sort        = params[2];
      var category    = params[3];
      var timeFrame   = params[4];
      var date        = params[5];

      // check if date is not today
      if (!this.isCurrentDate(date)){
        NavController.retrieveArchivedVideos(country, sort, category, timeFrame, date);
        // get video ids from database and populate render videos
      }
      else {
        MapController.updateSelectedRegion();
        VideoController.retrieveVideos(VideoController.defaultVideoQuery);
        this.setWindowHash();
      }
      ViewController.updateFormSelection(sort, category, timeFrame);
    }
    // user has not made a selection; assign random country to view
    else {
      MapController.assignRandomRegion();
      VideoController.retrieveVideos(VideoController.defaultVideoQuery);
      this.setWindowHash();
    }
  },

  isCurrentDate: function(date){
    var d = new Date ();
    var today = (d.getMonth()+1) + "-" + d.getDate() + "-" + d.getFullYear();
    return date === today;
  },


  updatePageFromHash: function(){
    var params = this.hashParameters();
    if (params[1]) {
      MapController.selectedCountry = params[1];
    }
    else {
      MapController.selectedCountry = MapController.assignRegion();
      this.setWindowHash();
    }

    MapController.clearSelectedRegion();
    MapController.updateSelectedRegion();
    VideoController.retrieveVideos(VideoController.defaultVideoQuery);
  },

  setWindowHash: function(archiveDate){
    // retrieve values of current selection
    var code      = MapController.selectedCountry;
    var sortType  = FormController.sortBy(); // TODO: sortBy is two functions
    var category  = FormController.category();
    var timeFrame = FormController.timeFrame();

    var date = "";
    if(archiveDate){
      date = archiveDate;
    }
    else {
      date = ViewController.formattedDate();
    }

    var urlHash = ["maps", code, sortType, category, timeFrame, date].join("/");

    // update url with values of current selection
    location.hash = urlHash;
  },

  retrieveArchivedVideos: function(country, sort, category, timeFrame, date){
    $.ajax({
      type: "POST",
      url: "/share",
      data: { sort: sort, category: category, timeFrame: timeFrame, date: date, country: MapController.selectedCountry }
    }).done(function( serverResponse ) {
      var videos = serverResponse.videos;
      ViewController.render(videos);
      MapController.updateSelectedRegion();
    }).fail(function(){
      window.location = "/";
    });
  }
};
