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

  resetSelectedRegion: function(){
    console.log(MapController.selectedCountry);
    this.map.clearSelectedRegions();
    this.map.setSelectedRegions(MapController.selectedCountry);
  },

  assignRegion: function(){
    return this.selectableRegions[Math.floor(Math.random() * this.selectableRegions.length)];
  },

  // displayMedia: function(){
  //   ViewController.clearMedia();
  //   VideoController.retrieveVideos(4);
  // },

  init: function(){
    console.log('initialized');
    this.map = new jvm.WorldMap({
      container: $('#world-map'),
      regionsSelectable: true,
      regionsSelectableOne: true, // allows only one selectable region
      backgroundColor: "#44bbcc",

      //!!!!!!!!!!!! only set if there isn't already an incoming URL
      // selectedRegions: [MapController.assignRegion()],
      
      regionStyle: {
        initial: {
          fill: "#F4F3F0",
          stroke: 'none'
        },
        hover: {
          "fill-opacity": 0.55
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

      onRegionLabelShow: function(event, label, code){
        if(!MapController.checkIfSelectable(code))  //supress labels for unsupported countries
          event.preventDefault();
      },

      onRegionOver: function(event, code){
        if(!MapController.checkIfSelectable(code)) //supress hover for unsupported countries
          event.preventDefault();
      },

      // moving functality of selected into click and turning off selecte to
      // get bring back to life working 
      onRegionClick: function(e, code){
        if(!MapController.checkIfSelectable(code))
          e.preventDefault();
          MapController.selectedCountry = code;
          // ViewController.setWindowHash();
          // ViewController.clearMedia();
          // VideoController.retrieveVideos(4);
      }, 

      onRegionSelected: function(e, code, isSelected, selectedRegions){
        if(isSelected){
          this.selectedRegions = code;
          // MapController.selectedCountry = code;
          ViewController.setWindowHash();
          ViewController.clearMedia();
          //VideoController.retrieveVideos(4);
        }
      }
    });
  }
};
