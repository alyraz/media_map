var FormController = {
  init: function(){
    this.sendSelection();
  },

  sendSelection: function(){
    $('form').change(function(){
      ViewController.setWindowHash(); // setting window hash
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
};
