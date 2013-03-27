describe("MapController", function(){
  describe("createValuesMap", function(){
    it("returns an object of selectable regions set to a color value", function(){
      expect(MapController.createValuesMap(["JP"])).toEqual({ "JP": "#CADFAA" });
    });
  });

  describe("checkIfSelectable", function(){
		it("returns true if a country code is selectable", function(){
			MapController.selectableRegions = ["AE", "AR", "AU"];
			expect(MapController.checkIfSelectable("AE")).toEqual(true);
		});
  });

  describe("assignRegion", function(){
		it("returns a random region from the selectableRegions array", function(){
			MapController.selectableRegions = ["AE", "AR"];
			expect(MapController.assignRegion()).toEqual("AE" || "AR");
		});
  });
});
