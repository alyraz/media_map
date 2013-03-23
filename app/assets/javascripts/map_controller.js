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

  createValuesMap: function(specialRegions){
    var values = {};
      for(var i = 0, length = specialRegions.length; i < length; i++) {
        values[specialRegions[i]] = '#ffffff';
      }
      return values;
  },

  init: function(){
    $('#world-map').vectorMap({
      onRegionClick: function(event, code){
        ViewController.clearMedia();
        $(location).attr("href", "#" + code.toLowerCase());
        VideoController.retrieveVideos(code);
      },
      backgroundColor: "#0a0b2a",
      regionStyle: {
        initial: {
          fill: "#b0b0b0"
        }
      },

      //$('#world-map div').css("background-color", "#0a0b2a");

      series: {
        regions: [{
          values: this.createValuesMap(this.selectableRegions)
        }]
      }
    });
  }
};
