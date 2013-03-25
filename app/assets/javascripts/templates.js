function createUrl(countryCode, sortBy, timeFrame, category){
  return ["http://gdata.youtube.com",
          "/feeds/api/standardfeeds/",
          countryCode,
          "/"+sortBy+category+"?v=2&time=",
          timeFrame,
          "&max-results=4&orderby=viewCount&alt=jsonc"
         ].join('');
}

// the most viewed call is deprecated, but it's replacement, 'most_popular',
// only supports time frames of today and all time...

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
