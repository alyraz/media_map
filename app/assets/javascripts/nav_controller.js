var NavController = {
  init: function(){
    // set up listener on future url hash changes
    $(window).on('hashchange', function(){
      NavController.handleHashChange();
    });

    this.preparePage();
  },

  hashParameters: function() {
    return window.location.hash.split("/");
  },

  preparePage: function(){
    // get parameters from hash
    var params = this.hashParameters();

    // if we have parameters in hash, retrieve them and send to view
    if (params.length > 1) {
      MapController.selectedCountry = params[1];
      var sort        = params[2];
      var category    = params[3];
      var timeFrame   = params[4];
      ViewController.updateFormSelection(sort, category, timeFrame);
    } 
    // user has not made a selection; assign random country to view
    else {
      MapController.assignRandomRegion();
    }

    console.log("setting hash from nav controller preparePage");
    ViewController.setWindowHash(); // setting window hash, i get called first from NavController.init()

    // update url to reflect current location
    this.handleHashChange();
  },

  handleHashChange: function() {
    console.log("change hash called");
    var params = this.hashParameters();
    if (params[1]) {
      MapController.selectedCountry = params[1];
    }
    else {
      MapController.selectedCountry = MapController.assignRegion();
      console.log("setting window hash from Nav Controller");
      ViewController.setWindowHash(); // setting window hash
    }
    MapController.resetSelectedRegion();
    VideoController.retrieveVideos(VideoController.defaultVideoQuery);
  }
};
