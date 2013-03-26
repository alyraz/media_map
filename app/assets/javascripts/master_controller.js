$(document).ready(function(){

  MapController.init();
  VideoController.init();
  ViewController.init();
  FormController.init();
  ShareController.init();
  NavController.init();


  window.location.hash.split("/");
  // MapController.map.setSelectedRegions(MapController.selectedCountry); 
});
