function createUrl(countryCode){
  return ["http://gdata.youtube.com",
          "/feeds/api/standardfeeds/",
          countryCode,
          "/most_viewed?v=2&time=today&max-results=4&alt=jsonc"
         ].join('');
}

function createSrc(id){
  return "http://www.youtube.com/embed/" +id+ "?autoplay=1&enablejsapi=1&origin=http://localhost:3000";
}

function createThumbnailList(videoID, thumbnail){
  return "<li class='tile' data-id='"+videoID+"'><img src='"+thumbnail+"'/></li>"
}
