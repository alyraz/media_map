var NavController = {
  init: function(){
    this.preparePage();
    $(window).on('hashchange', function(){
      NavController.hashChange();
    });
  },

  hashLocation: function() {
    return window.location.hash.split("/");
  },

  preparePage: function(){
    var location = this.hashLocation();
    if (location.length > 1) {
      var sort        = location[2];
      var category    = location[3];
      var timeFrame   = location[4];
      MapController.selectedCountry = location[1];
      $(".sort").val(sort);
      $(".category").val(category);
      $(".time").val(timeFrame);
      this.hashChange();
    } else {
      MapController.selectedCountry = MapController.assignRegion();
    }
    ViewController.setWindowHash();
  },

  hashChange: function() {
    var location = this.hashLocation();
    if (location[1]) {
      MapController.selectedCountry = location[1];
    } else {
      MapController.selectedCountry = MapController.assignRegion();
      ViewController.setWindowHash();
    }
    MapController.resetSelectedRegion();
    VideoController.retrieveVideos(VideoController.defaultVideoQuery);
  }
};
