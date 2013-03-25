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
        values[selectableRegions[i]] = '#CADFAA'; // OR -- #99a 
      }
      return values;
  },

  checkIfSelectable: function(code){
    for(var i = 0, length = this.selectableRegions.length; i < length; i++) {
      if (MapController.selectableRegions[i] === code) return true;
    }
    return false;
  },

  randomRegion: function(){
    return this.selectableRegions[Math.floor(Math.random() * this.selectableRegions.length)];
  },

  init: function(){
    this.map = new jvm.WorldMap({
      container: $('#world-map'),
      regionsSelectable: true,
      regionsSelectableOne: true, // allows only one selectable region
      backgroundColor: "#a5bfdd",
      selectedRegions: [MapController.randomRegion()],
      regionStyle: {
        initial: {
          fill: "#F4F3F0",
          stroke: 'none'
        },
        hover: {
          "fill-opacity": 0.65
        },
        selected: {
          fill: 'green'
        },
      },
      series: {
        regions: [{
          values: this.createValuesMap(this.selectableRegions)
        }]
      },

      // turn off labels for unsupported countries
      onRegionLabelShow: function(event, label, code){
        if(!MapController.checkIfSelectable(code)) {
          event.preventDefault();
        }
      },

      // turn off hover state for unsupported countries
      onRegionOver: function(event, code){
        if(!MapController.checkIfSelectable(code)) {
          event.preventDefault();
        }
      },

      onRegionSelected: function(e, code, isSelected, selectedRegions){
        // Note: This function is called twice: 
        // 1) once when a region is *selected*; and
        // 2) once when a region is *deselected*.
        if(isSelected){
          console.log("loading videos for " + code);
          MapController.selectedCountry = code;
          ViewController.clearMedia();
          VideoController.retrieveVideos(code,
                                           FormController.sortBySelection(),
                                           FormController.timeSelection(),
                                           FormController.categorySelection());
        }
      }
    });
  }
};
