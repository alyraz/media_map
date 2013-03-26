var FormController = {
  init: function(){
    this.sendSelection();
  },

  sendSelection: function(){
    $('form').change(function(){
      countryCode = MapController.selectedCountry;
      sort = FormController.sortBySelection();
      category = FormController.categorySelection();
      time = FormController.timeSelection();
      ViewController.setWindowHash(countryCode, sort, category, time)
    });
  },
  
  sortBySelection: function(){
    return $('.sort').find('option:selected').val();
  },

  timeSelection: function(){
    return $('.time').find('option:selected').val();
  },

  categorySelection: function(){
    return $('.category').find('option:selected').val();
  },

  
};

