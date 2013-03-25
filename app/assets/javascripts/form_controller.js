var FormController = {
  init: function(){
    this.sendSelection();
  },

  sendSelection: function(){
    $('form').change(function(){
      time = FormController.timeSelection();
      sort = FormController.sortBySelection();
      countryCode = MapController.selectedCountry;
      category = FormController.categorySelection();
      num = VideoController.defaultVideoQuery;
      VideoController.retrieveVideos(countryCode, sort, time, category, num);
    });
  },


  // determineActiveSelection: function(){
  //   return $('form').find('option:selected').val();
  // },

  sortBySelection: function(){
    return $('.sort').find('option:selected').val();
  },

  timeSelection: function(){
    return $('.time').find('option:selected').val();
  },

  categorySelection: function(){
    return $('.category').find('option:selected').val();
  }
};
