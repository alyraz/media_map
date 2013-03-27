var FormController = {
  init: function(){
    this.sendSelection();
    // $('.country').chosen();
  },

  sendSelection: function(){
    $('form').change(function(){
      MapController.selectedCountry = FormController.country();
      NavController.setWindowHash(); // setting window hash
    });
  },
  
  sortBy: function(sort){
    if (sort) $(".sort").val(sort);
    return $('.sort').find('option:selected').val();
  },

  category: function(){
    return $('.category').find('option:selected').val();
  },

  timeFrame: function(){
    return $('.time').find('option:selected').val();
  },

  country: function(){
    return $('.country').find('option:selected').val();
  }
};
