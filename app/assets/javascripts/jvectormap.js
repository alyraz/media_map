function instantiateMap(){

  var selectableRegions = ["US", "IN", "AR", "AU", "BE",
                           "BR", "CA", "CL", "CO", "CZ",
                           "EG", "FR", "DE", "GB", "HK",
                           "HU", "IE", "IL", "IT", "JP", 
                           "JO", "MY", "MX", "MA", "NL", 
                           "NZ", "PE", "PH", "PL", "RU", 
                           "SA", "SG", "ZA", "KR", "ES", 
                           "SE", "TW", "AE", "DZ", "ID"];

  function createValuesMap(specialRegions) {
    var values = {};
    for(var i = 0;i < specialRegions.length;i++) {
      values[specialRegions[i]] = '#ffffff';
    }

    return values;
  }

  $('#world-map').vectorMap({
    onRegionClick: function(event, code){
      clearMedia();
      VideoController.retrieveVideos(code);
    },
    regionStyle: {
      initial: {
        fill: "#b0b0b0"
      }
    },
    series: {
      regions: [{
        values: createValuesMap(selectableRegions)
      }]
    }
  });
};
