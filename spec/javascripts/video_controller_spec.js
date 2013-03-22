describe("VideoController", function(){
  describe("#prepareURL", function(){
    it("should return a valid youtube url", function(){
      var url = VideoController.prepareURL("JP");
      expect(url).toMatch('http://gdata.youtube.com/feeds/api/standardfeeds/');
    });
  });
  describe("videos array", function(){
    it("should return an empty array when unitialized",function(){
      var videos = VideoController.videos;
      var emptyArray = [];
      expect(videos).toEqual(emptyArray);
    });
  });
});
