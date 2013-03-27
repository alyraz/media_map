describe("NavController", function(){
	describe("hashParameters", function(){
		it("returns an array of the url locations", function(){
			window.location.hash = "/maps/US/all/today";
			expect(NavController.hashParameters()).toEqual(["#", "maps", "US", "all", "today"]);
		});
	});
});