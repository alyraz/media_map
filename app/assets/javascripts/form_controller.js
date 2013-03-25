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
      VideoController.retrieveVideos(countryCode, sort, time, category);
    });
  },

<<<<<<< HEAD
  determineSortSelection: function(){
=======
  // determineActiveSelection: function(){
  //   return $('form').find('option:selected').val();
  // },

  sortBySelection: function(){
>>>>>>> remove hash from URL and add selectedCountry attribute to MapController
    return $('.sort').find('option:selected').val();
  },

  timeSelection: function(){
    return $('.time').find('option:selected').val();
  },

  categorySelection: function(){
    return $('.category').find('option:selected').val();
  }
};
