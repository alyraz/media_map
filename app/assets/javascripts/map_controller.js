var MapController = {
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
        values[selectableRegions[i]] = '#99a';
      }
      return values;
  },

  init: function(){
    $('#world-map').vectorMap({
      onRegionClick: function(event, code){
        event.preventDefault();
        ViewController.clearMedia();
        $(location).attr("href", "#" + code.toLowerCase());
        VideoController.retrieveVideos(code,
                                       FormController.determineSortSelection(),
                                       FormController.determineTimeSelection(),
                                       FormController.determineCategorySelection());
      },
      backgroundColor: "#0a0b2a",
      regionStyle: {
        initial: {
          fill: "#ccc"
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
