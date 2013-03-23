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

function createThumbnailList(video){
  return ["<li class='tile' data-id='"+video.id+"'><a href='#' class='tile-link'>",
          "<img src='"+video.thumbnail.sqDefault+"'/>",
          "<span class='thumbnail-title'>",
          video.title,
          "</span><span>",
          video.viewCount,
          " views</span></a></li>"].join('');
}
