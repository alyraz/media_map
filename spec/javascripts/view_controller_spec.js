describe("ViewController", function(){
  describe("createSrc", function(){
    it("returns the correct url for a specific video", function(){
      var result = ["http://www.youtube.com/",
                    "embed/2?autoplay=1&enablejsapi=1"
                   ].join('');
      expect(ViewController.createSrc(2)).toEqual(result);
    });
  });

  describe("createThumbnailList", function(){
    it("returns the correct markup for the top items list", function(){
      var fakeVideo = { id: "1", thumbnail: { sqDefault: "source_url" },
                        title: "Cat video", viewCount: "10" };

      var resultMarkup = ["<li class='tile' data-id='"+fakeVideo.id+"'>",
                          "<a href='#' class='tile-link'>",
                          "<img src='"+fakeVideo.thumbnail.sqDefault+"'/>",
                          "<span class='thumbnail-title'>",
                          fakeVideo.title,
                          "</span><span>",
                          fakeVideo.viewCount,
                          " views</span></a></li>"].join('');
      expect(ViewController.createThumbnailList(fakeVideo)).toEqual(resultMarkup);
    });
  });

  describe("clearMedia", function(){
    it("removes the list items and video from the view", function(){
      // pending test
    });
  });
});
