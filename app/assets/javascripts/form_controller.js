var FormController = {
  init: function(){
    this.sendSelection();
  },

  sendSelection: function(){
    $('form').change(function(){
      ViewController.setWindowHash();
    });
  },
  
  sortBy: function(){
    return $('.sort').find('option:selected').val();
  },

  category: function(){
    return $('.category').find('option:selected').val();
  },

  timeFrame: function(){
    return $('.time').find('option:selected').val();
  }, 
};

