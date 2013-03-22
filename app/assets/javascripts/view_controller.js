function clearMedia(){
  console.log("inside clear media");
  $('.top-items li').remove();
}

jQuery(document).ready(function($) {
  instantiateMap();

  $('.top-items').on('click', '.tile', function(){
    var id = $(this).attr('data-id');
    $('#ytplayer').attr("src", createSrc(id))
  });

});
