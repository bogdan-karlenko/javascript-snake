define(["snake"], function(Snake) {
	describe("Snake", function() {

		var mockSettings = {},
			sut;

		beforeEach(function() {
			mockSettings.initialLength = 5;
			mockSettings.boardWidth = 30;
			mockSettings.boardHeight = 25;

			sut = new Snake(mockSettings);
		});

		it("should appear at left upper corner", function() {
			expect(sut.head.x).toEqual(1);
			expect(sut.head.y).toEqual(2);
		});

		it("should move right", function() {
			sut.head.x = 5;
			sut.head.y = 5;
			sut.move("right");
			expect(sut.head.x).toEqual(6);
		});

		it("should move left", function() {
			sut.head.x = 5;
			sut.head.y = 5;
			sut.move("left");
			expect(sut.head.x).toEqual(4);
		});

		it("should move up", function() {
			sut.head.x = 5;
			sut.head.y = 5;
			sut.move("up");
			expect(sut.head.y).toEqual(4);
		});

		it("should move down", function() {
			sut.head.x = 5;
			sut.head.y = 5;
			sut.move("down");
			expect(sut.head.y).toEqual(6);
		});

		it("should pass the field border to other side in all directions", function() {
			sut.head.x = mockSettings.boardWidth;
			sut.move("right")
			expect(sut.head.x).toBe(1);

			sut.head.x = 1;
			sut.move("left");
			expect(sut.head.x).toBe(mockSettings.boardWidth);

			sut.head.y = 1;
			sut.move("up");
			expect(sut.head.y).toBe(mockSettings.boardHeight);

			sut.head.y = mockSettings.boardHeight;
			sut.move("down");
			expect(sut.head.y).toBe(1);

		});

		it("has a test dummy", function() {
			expect(true).toBe(true);
		});
	});
});