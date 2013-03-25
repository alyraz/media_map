describe("MapController", function(){
  describe("createValuesMap", function(){
    it("returns an object of selectable regions set to a color value", function(){
      expect(MapController.createValuesMap(["JP"])).toEqual({ "JP": "#99a" });
    });
  });
});
