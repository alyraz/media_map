var MapController = {
 
  selectableRegions: [
    "AE", "AR", "AU", "BE", "BR", "CA", "CL", "CO", "CZ",
    "DE", "DZ", "EG", "ES", "FR", "GB", "GH", "GR", "HK",
    "HU", "ID", "IE", "IL", "IN", "IT", "JO", "JP", "KE",
    "KR", "MA", "MX", "MY", "NG", "NL", "NZ", "PE", "PH",
    "PL", "RU", "SA", "SE", "SG", "TN", "TR", "TW", "UG",
    "US", "YE", "ZA"
  ],

  createValuesMap: function(selectableRegions){
    var values = {};
      for(var i = 0, length = selectableRegions.length; i < length; i++)
        values[selectableRegions[i]] = '#CADFAA';
      return values;
  },

  checkIfSelectable: function(code){
    for(var i = 0, length = this.selectableRegions.length; i < length; i++)
      if (MapController.selectableRegions[i] === code) return true;
    return false;
  },

  resetSelectedRegion: function(){
    this.map.clearSelectedRegions();
    this.map.setSelectedRegions(MapController.selectedCountry);
  },

  assignRegion: function(){
    return this.selectableRegions[Math.floor(Math.random() * this.selectableRegions.length)];
  },

  init: function(){
    this.map = new jvm.WorldMap({
      container: $('#world-map'),
      regionsSelectable: true,
      regionsSelectableOne: true, // allows only one selectable region
      backgroundColor: "#a5bfdd", // ocean blue

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
        }
      },

      series: {
        regions: [{
          values: this.createValuesMap(this.selectableRegions)
        }]
      },

      onRegionLabelShow: function(event, label, code){
        if(!MapController.checkIfSelectable(code)){
          event.preventDefault();
        };
      },

      onRegionOver: function(event, code){
        if(!MapController.checkIfSelectable(code))
          event.preventDefault();
      },

      onRegionClick: function(e, code){
        if(!MapController.checkIfSelectable(code))
          e.preventDefault();
        else
          MapController.selectedCountry = code;
      },

      onRegionSelected: function(e, code, isSelected, selectedRegions){
        if(isSelected){
          this.selectedRegions = code;
          $('.country').val(code);
          ViewController.setWindowHash();
          MapController.map.setFocus(code);
          ViewController.clearMedia();
        }
      }
    });
  }
};
