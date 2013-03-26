$(function(){
  MapController.init();
  VideoController.init();
  ViewController.init();
  FormController.init();
  ShareController.init();

  $(window).on('hashchange', function(tag){
    var windowHash = window.location.href.split("/");
    
    MapController.selectedCountry = windowHash[4];
    var sort        = windowHash[5];
    var category    = windowHash[6];
    var timeFrame   = windowHash[7];

    console.log("CODE:"+ MapController.selectedCountry);
    console.log("SORT:"+ sort);
    console.log("CATEGORY:"+ category);
    console.log("TIMEFRAME:"+ timeFrame);

    $(".sort").val(sort);
    $(".category").val(category);
    $(".time").val(timeFrame);

    var num = VideoController.defaultVideoQuery;
    VideoController.retrieveVideos(num);

    // FormController.sortBy        = windowHash[5];
    // FormController.category      = windowHash[6];
    // FormController.timeFrame     = windowHash[7];

    // $('.sort').find("option[value='"+ sort +"']"); //and make it selected!
    // $('.category').find("option[value='"+ category +"']"); //and make it selected!
    // $('.time').find("option[value='"+ timeFrame +"']"); //and make it selected!

   
  });
});
