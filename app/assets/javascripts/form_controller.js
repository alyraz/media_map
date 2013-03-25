var FormController = {
  init: function(){
    this.sendSelection();
  },

  sendSelection: function(){
    $('form').change(function(){
      time = FormController.determineTimeSelection();
      sort = FormController.determineSortSelection();
      countryCode = VideoController.determineCountryCode();
      category = FormController.determineCategorySelection();
      VideoController.retrieveVideos(countryCode, sort, time, category);
    });
  },

  determineSortSelection: function(){
    return $('.sort').find('option:selected').val();
  },

  determineTimeSelection: function(){
    return $('.time').find('option:selected').val();
  },

  determineCategorySelection: function(){
    return $('.category').find('option:selected').val();
  }
};
