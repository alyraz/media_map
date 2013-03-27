describe("VideoController", function(){
  describe("#createUrl", function(){
    it("returns a valid youtube url", function(){
      MapController.selectedCountry = "JP";
      var url = VideoController.createUrl();
      expect(url).toMatch('http://gdata.youtube.com/feeds/api/standardfeeds/JP');
    });
  });

  describe("videos array", function(){
    it("returns an empty array when unitialized", function(){
      var videos = VideoController.videos;
      var emptyArray = [];
      expect(videos).toEqual(emptyArray);
    });
  });
});
