define(["drawing"], function(drawing) {
	describe("Drawing module", function() {

		var test = true;

		beforeEach(function() {
			canv = document.createElement("canvas");

			mockField = {
				body: [
					0,
					1,
					0,
				],
			};

			mockScore = 10;

			ctx = canv.getContext("2d");

			testResult = drawing(mockField, mockScore, test);
		});

		it("has to be able to draw \"Press Space\" message", function() {
			expect(testResult.drawPressSpace(ctx)).toEqual(true);
		});

		it("has to be able to draw score", function() {

			expect(testResult.drawScore(ctx)).toEqual(true);
		});

		it("has to be able to draw grid", function() {

			expect(testResult.drawGrid(ctx)).toEqual(true);
		});

		it("has to be able to draw field", function() {

			expect(testResult.drawField(ctx)).toEqual(true);
		});

		it("has to draw whole thing on demand", function() {
			expect(testResult.done).toEqual(true);
		});
	});
});