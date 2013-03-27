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
      var date        = params[5];
      ViewController.updateFormSelection(sort, category, timeFrame);
      // read client's location and UCT
      // if (date !== (d.getMonth()+1) + "-" + d.getDate() + "-" + d.getFullYear()){
        NavController.retrieveArchivedVideos(MapController.selectedCountry, sort, category, timeFrame, date);
      // }
    } 
    // user has not made a selection; assign random country to view
    else {
      MapController.assignRandomRegion();
    }

    console.log("setting hash from NavController.preparePage");
    this.setWindowHash();

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
      this.setWindowHash(); // setting window hash
    }
    MapController.resetSelectedRegion();
    VideoController.retrieveVideos(VideoController.defaultVideoQuery);
  },

  setWindowHash: function(){
    var code = MapController.selectedCountry;
    var sortBy = FormController.sortBy();
    var category = FormController.category();
    var timeFrame = FormController.timeFrame();

    var hash = ["maps", code, sortBy, category, timeFrame].join("/");
    location.hash = hash;
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
