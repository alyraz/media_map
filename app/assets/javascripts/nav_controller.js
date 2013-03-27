var NavController = {
  init: function(){
    this.preparePage();
    $(window).on('hashchange', function(){
      NavController.hashChange();
    });

    $(window).trigger('hashchange');
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
      var date        = location[5];
      MapController.selectedCountry = location[1];
      $(".sort").val(sort);
      $(".category").val(category);
      $(".time").val(timeFrame);
      // read client's location and UCT
      // if (date !== (d.getMonth()+1) + "-" + d.getDate() + "-" + d.getFullYear()){
        NavController.retrieveArchivedVideos(MapController.selectedCountry, sort, category, timeFrame, date);
      // }
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
  },

  retrieveArchivedVideos: function(country, sort, category, timeFrame, date){
    d = new Date();
      $.ajax({
        type: "POST",
        url: "/share",
        data: { sort: sort, category: category, timeFrame: timeFrame, date: date, country: MapController.selectedCountry }
      }).done(function( serverResponse ) {
        console.log(serverResponse);
      });
  }
};
