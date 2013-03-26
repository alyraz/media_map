$(function(){
  ShareController.init();
  VideoController.init();
  MapController.init();
  ViewController.init();
  FormController.init();

  $(window).on('hashchange', function(){
    console.log("YO!");
    countryCode = MapController.selectedCountry;
    sort = FormController.sortBySelection();
    category = FormController.categorySelection();
    time = FormController.timeSelection();
    num = VideoController.defaultVideoQuery;
    VideoController.retrieveVideos(countryCode, sort, time, category, num);
  });

});
