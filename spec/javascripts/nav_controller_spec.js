describe("NavController", function(){
	describe("hashLocation", function(){
		it("returns an array of the url locations", function(){
			window.location.hash = "/maps/US/all/today";
			expect(NavController.hashLocation()).toEqual(["#", "maps", "US", "all", "today"]);
		});
	});
});