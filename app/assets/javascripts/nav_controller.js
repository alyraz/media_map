var NavController = {
	init: function(){
		this.enableBack();
	},

	enableBack: function(){
		$('.prev').on('click', function(e){
			e.preventDefault();
			var index = $.inArray(MapController.selectedCountry, MapController.visitedCountries);
			if ( index !== -1 && index !== 0 ) {
				countryCode = MapController.visitedCountries[index-1];
				time = FormController.timeSelection();
				sort = FormController.sortBySelection();
				category = FormController.categorySelection();
				num = VideoController.defaultVideoQuery;
				MapController.resetSelectedRegion(countryCode);
				VideoController.retrieveVideos(countryCode, sort, time, category, num);
			}
		});
	}
};