var NavController = {
  init: function(){
    this.preparePage();
    $(window).on('hashchange', function(){
      NavController.preparePage();    
    });
  },

  preparePage: function(){

    var windowHash = window.location.href.split("/");
    
    if (windowHash[4]) {
      MapController.selectedCountry = windowHash[4];
    }
    else {
      MapController.selectedCountry = MapController.assignRegion();
      ViewController.setWindowHash();
    }
    
    MapController.resetSelectedRegion();

    var sort        = windowHash[5];
    var category    = windowHash[6];
    var timeFrame   = windowHash[7];

    $(".sort").val(sort);
    $(".category").val(category);
    $(".time").val(timeFrame);

    VideoController.retrieveVideos(VideoController.defaultVideoQuery);
  }
}
