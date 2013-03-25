var ShareController = {
  init: function(){
    $('#share-button').on('click', function(event){
      event.preventDefault();
      var category = 1;
      var country = 2
      var frequency = 3
      var sort_type = 4

      shareData = {
        category: category,
        country: country,
        frequency: frequency,
        sort_type: sort_type
      }
      $.ajax({
        type: "POST",
        url: "/share",
        data: {shareData: shareData}
      }).done(function(serverResponse) {
        alert(serverResponse.data);
      });

    });
  }
}
