var FormController = {
  init: function(){
    this.sendSelection();
  },

  sendSelection: function(){
    $('form').change(function(){
      time = FormController.determineActiveSelection();
      countryCode = VideoController.determineCountryCode();
      VideoController.retrieveVideos(countryCode, time);
    });
  },

  determineActiveSelection: function(){
    return $('form').find('option:selected').val();
  }
};
