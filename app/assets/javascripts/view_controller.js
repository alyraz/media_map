var ViewController = {

  init: function(){
    this.checkScroll();
    this.enableTopItemClick();
    $('.video-thumbnails').on('click', 'li a', function(e){
      e.preventDefault();
      ViewController.updateVideo(this);
    });
  },

  updateVideo: function(link){
    var id = $(link).parent().attr('data-id');
    $('#ytplayer').attr("src", this.createSrc(id, "1"));
  },

  clearMedia: function(){
    $('.top-items ul li.tile').remove();
  },

  createSrc: function(id){
    return "http://www.youtube.com/embed/" +id+ "?autoplay=1&enablejsapi=1";
  },

  createThumbnailList: function(video){
    return ["<li class='tile' data-id='"+video.id+"'><a href='#' class='tile-link'>",
            "<img src='"+video.thumbnail.sqDefault+"' height='80' width='107'>",
            "<span class='thumbnail-title'>",
            video.title,
            "</span><span class='view-count'>",
            ViewController.addCommas(video.viewCount),
            " views</span></a></li>"].join('');
  },

  formattedDate: function(){
    today = new Date();
    date = (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear();
    return date;
  },

  render: function(videos){
    this.clearMedia();
    this.populateThumbnails(videos);
    var src = this.createSrc(videos[0].id);
    $('#ytplayer').attr("src", src).show();
  },

  populateThumbnails: function(videos){
    this.clearMedia();
    for(var i = 0; i < videos.length; i++){
      var thumbnail = videos[i].thumbnail.sqDefault;
      var id = videos[i].id;
      $('.video-thumbnails').append(ViewController.createThumbnailList(videos[i]));
    }
  },

  addCommas: function(views){
    while (/(\d+)(\d{3})/.test(views.toString())){
      views = views.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return views;
  },

  updateFormSelection: function(sort, category, timeFrame){
    $(".sort").val(sort);
    $(".category").val(category);
    $(".time").val(timeFrame);
    $(".country").val(MapController.selectedCountry);
  },

  updateFlag: function(code){
    var image = "assets/48-pixel-flags/"+code.toLowerCase()+".png";
    $('.flag').html("<img src='"+image+"'>");
  },

  checkScroll: function() {
    if ( $('.top-items').scrollTop + $('.top-items').clientHeight == $('.top-items').scrollHeight ){
      alert("the end!");
    }
  },

  enableTopItemClick: function() {
    $('.arrow').on('click', function(e){
      e.preventDefault();
      if ($(this).attr('class').indexOf('show-videos') !== -1) {
        ViewController.showThumbnails();
      } else {
        ViewController.hideThumbnails();
      }
    });
  },

  showThumbnails: function() {
    $('.arrow').toggleClass("hidden");
    $('.top-items').css('width', '135px');
    $('.top-items ul').show();
  },

  hideThumbnails: function(){
    $('.arrow').toggleClass("hidden");
    $('.top-items').css('width', '20px');
    $('.top-items ul').hide();
  }
};
