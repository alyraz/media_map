var MapController = {
  
  //TODO -----> default country to wherever the user is located
  selectedCountry: 'US',

  selectableRegions: ["AE", "AR", "AU", "BE", "BR", "CA",
                      "CL", "CO", "CZ", "DE", "DK", "DZ",
                      "EG", "ES", "FI", "FR", "GB", "GH",
                      "GR", "HK", "HU", "ID", "IE", "IL",
                      "IN", "IT", "JO", "JP", "KE", "KR",
                      "MA", "MX", "MY", "NG", "NL", "NO",
                      "NZ", "PE", "PH", "PL", "RU", "SA",
                      "SE", "SG", "SN", "TN", "TR", "TW",
                      "UA", "UG", "US", "YE", "ZA"],

  createValuesMap: function(selectableRegions){
    var values = {};
      for(var i = 0, length = selectableRegions.length; i < length; i++) {
        values[selectableRegions[i]] = '#009999'; // OR -- #99a 
      }
      return values;
  },

  checkIfSelectable: function(code){
    for(var i = 0, length = this.selectableRegions.length; i < length; i++) {
      if (MapController.selectableRegions[i] === code) return true;
    }
    return false;
  },

  init: function(){
    $('#world-map').vectorMap({

    onRegionLabelShow: function(event, label, code){
      if(!MapController.checkIfSelectable(code)) {
        event.preventDefault();
      }
    },

    onRegionOver: function(event, code){
      if(!MapController.checkIfSelectable(code)) {
        event.preventDefault();
      }
    },

    onRegionClick: function(event, code){
      event.preventDefault();
      MapController.selectedCountry = code;
      ViewController.clearMedia();
      VideoController.retrieveVideos(code,
                                       FormController.sortBySelection(),
                                       FormController.timeSelection(),
                                       FormController.categorySelection());
    },

    backgroundColor: "#0a0b2a",
    regionStyle: {
      initial: {
        fill: "#aaa"
      }
    },

    series: {
      regions: [{
        values: this.createValuesMap(this.selectableRegions)
      }]
    }


    });
  }
};
