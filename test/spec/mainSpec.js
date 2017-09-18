define(["snake"], function(Snake) {
describe("Game", function() {

	it("true should be equal true", function() {
		expect(true).toEqual(true);
	});

	it("has to work somehow", function() {
		var settings = {
			dotSize: 15, // size of square in px
			boardWidth: 30,
			boardHeight: 25,
			initialSpeed: 1,
			initialLength: 5, // length of the snake in squares
		};
		var testSnake = new Snake(settings);
		expect(settings).not.toBe(0);
		expect(testSnake.body).not.toBe(1);
	});
	//	it("has to start on Space press", function() {

});
});

/*
The game
should wait for "Space"
should start on "Space"
should end when snake touches itself

The snake
should appear only when the game is started
should appear where stated in settings
should initially have length stated in settings
should initially move in direction stated in settings
should not exceed obtained length
should change it's direction when corresponding key pressed
should move with appropriate speed
should rise it's speed when the food is eaten
should not rise it's speed more than 9 times
should rise it's length when the food is eaten
should not move backwards
should not move when the game is ended


The field
should be one-dimension array
should have "0" on empty cells
should have not "0" on filled cells 
should have dimensions stated in settings
should be empty on the start of the game
should always contain food
should contain only one food at a time
should always contain snake
should contain only one snake at a time
*/