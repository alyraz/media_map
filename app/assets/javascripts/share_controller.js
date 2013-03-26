var ShareController = {
  init: function(){
    $('#share-button').on('click', function(event){
      event.preventDefault();
      console.log("inside here");
      var category = FormController.category();
      var country = MapController.selectedCountry;
      var time = FormController.timeFrame();
      var sort_type = FormController.sortBy();

      shareData = {
        category: category,
        country: country,
        time: time,
        sort_type: sort_type
      };
      $.ajax({
        type: "POST",
        url: "/share",
        data: {shareData: shareData, videos: ShareController.getTopVideos()}
      }).done(function(serverResponse) {
        alert("Your share link is: " + "http://mediamap.com/" + serverResponse.data);
      });

    });
  },

  getTopVideos: function(){
    videoIds = [];
    topVideosList = $('.top-items li');
    for (var i=0;i<topVideosList.length;i++){
      var video = $(topVideosList[i]).data("id");
      videoIds.push(video);
    }
    return videoIds;
  }
};
