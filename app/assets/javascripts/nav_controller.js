var NavController = {
  init: function(){
    // set up listener on future url hash changes
    $(window).on('hashchange', function(){
      NavController.updatePageFromHash();
    });

    this.preparePage();
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
      var sort        = params[2];
      var category    = params[3];
      var timeFrame   = params[4];
      var date        = params[5];
      ViewController.updateFormSelection(sort, category, timeFrame);

      // read client's location and UCT
      // if (date !== (d.getMonth()+1) + "-" + d.getDate() + "-" + d.getFullYear()){
      //   NavController.retrieveArchivedVideos(MapController.selectedCountry, sort, category, timeFrame, date);
      // }
    } 
    // user has not made a selection; assign random country to view
    else {
      MapController.assignRandomRegion();
      this.setWindowHash();
    }

    // update page based on hash change
    this.updatePageFromHash();
  },

  updatePageFromHash: function(){
    console.log("update page from hash called");
    var params = this.hashParameters();
    if (params[1]) {
      MapController.selectedCountry = params[1];
    }
    else {
      MapController.selectedCountry = MapController.assignRegion();
      console.log("setting window hash from Nav Controller");
      this.setWindowHash(); // setting window hash
    }
    MapController.resetSelectedRegion();
    VideoController.retrieveVideos(VideoController.defaultVideoQuery);
  },

  setWindowHash: function(){
    // retrieve values of current selection
    var code      = MapController.selectedCountry;
    var sortType  = FormController.sortBy(); // TODO: sortBy is two functions
    var category  = FormController.category();
    var timeFrame = FormController.timeFrame();
    var urlHash = ["maps", code, sortType, category, timeFrame].join("/");

    // update url with values of current selection
    location.hash = urlHash;
  },

  retrieveArchivedVideos: function(country, sort, category, timeFrame, date){
    $.ajax({
      type: "POST",
      url: "/share",
      data: { sort: sort, category: category, timeFrame: timeFrame, date: date, country: MapController.selectedCountry }
    })
    .done(function( serverResponse ) {
      console.log("ready to render videos");
    });
  }
};
