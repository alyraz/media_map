var MapController = {
 
  selectableRegions: ["AE", "AR", "AU", "BE", "BR", "CA",
                      "CL", "CO", "CZ", "DE", "DZ",
                      "EG", "ES", "FR", "GB", "GH",
                      "GR", "HK", "HU", "ID", "IE", "IL",
                      "IN", "IT", "JO", "JP", "KE", "KR",
                      "MA", "MX", "MY", "NG", "NL",
                      "NZ", "PE", "PH", "PL", "RU", "SA",
                      "SE", "SG", "TN", "TR", "TW",
                      "UG", "US", "YE", "ZA"],

  createValuesMap: function(selectableRegions){
    var values = {};
      for(var i = 0, length = selectableRegions.length; i < length; i++)
        values[selectableRegions[i]] = '#90DA94';
      return values;
  },

  checkIfSelectable: function(code){
    for(var i = 0, length = this.selectableRegions.length; i < length; i++)
      if (MapController.selectableRegions[i] === code) return true;
    return false;
  },

  randomRegion: function(){
    return this.selectableRegions[Math.floor(Math.random() * this.selectableRegions.length)];
  },

  displayMedia: function(code){
    ViewController.clearMedia();
    VideoController.retrieveVideos(code,
                                   FormController.sortBySelection(),
                                   FormController.timeSelection(),
                                   FormController.categorySelection(),
                                   VideoController.defaultVideoQuery);
  },

  init: function(){
    this.map = new jvm.WorldMap({
      container: $('#world-map'),
      regionsSelectable: true,
      regionsSelectableOne: true, // allows only one selectable region
      backgroundColor: "#44bbcc",
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
          fill: '#3E57BB'
        }
      },
      series: {
        regions: [{
          values: this.createValuesMap(this.selectableRegions)
        }]
      },


      // countryCode = MapController.selectedCountry;
      // sort = FormController.sortBySelection();
      // category = FormController.categorySelection();
      // time = FormController.timeSelection();
      // MapController.selectedCountry = code;
      // ViewController.setWindowHash(countryCode, sort, category, time)

      // turn off labels for unsupported countries
      onRegionLabelShow: function(event, label, code){
        if(!MapController.checkIfSelectable(code))
          event.preventDefault();
      },

      // turn off hover state for unsupported countries
      onRegionOver: function(event, code){
        if(!MapController.checkIfSelectable(code))
          event.preventDefault();
      },

      onRegionClick: function(e, code){
        if(!MapController.checkIfSelectable(code))
          e.preventDefault();
      },

      onRegionSelected: function(e, code, isSelected, selectedRegions){
        // Note: This function is called twice:
        // 1) once when a region is *selected*; and
        // 2) once when a region is *deselected*.
        if(isSelected){
          MapController.selectedCountry = code;
          countryCode = MapController.selectedCountry;
          sort = FormController.sortBySelection();
          category = FormController.categorySelection();
          time = FormController.timeSelection();
          MapController.selectedCountry = code;
          ViewController.setWindowHash(countryCode, sort, category, time)
          MapController.displayMedia(code);
        }
      }
    });
  }
};
