
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function aliens(ctx, moveTimes, antennaX, antennaY) {

	for (i = 0; i < moveTimes; i++) {

		ctx.fillStyle = "#32CD32";

		// draw rest of alien's body
    ctx.fillRect(antennaX, antennaY, 5, 5);
    ctx.fillRect(antennaX + 5, antennaY + 5, 5, 5);
    ctx.fillRect(antennaX, antennaY + 10, 40, 5);
    ctx.fillRect(antennaX + 35, antennaY, 5, 5);
    ctx.fillRect(antennaX + 30, antennaY + 5, 5, 5);
    ctx.fillRect(antennaX - 5, antennaY + 15, 50, 5);
    ctx.clearRect(antennaX + 5, antennaY + 15, 5, 5);
    ctx.clearRect(antennaX + 30, antennaY + 15, 5, 5);
    ctx.fillRect(antennaX - 10, antennaY + 20, 60, 5);
    ctx.fillRect(antennaX - 10, antennaY + 25, 5, 10);
    ctx.fillRect(antennaX, antennaY + 25, 40, 5);
    ctx.fillRect(antennaX + 45, antennaY + 25, 5, 10);
    ctx.fillRect(antennaX, antennaY + 30, 5, 5);
    ctx.fillRect(antennaX + 35, antennaY + 30, 5, 5);
    ctx.fillRect(antennaX + 5, antennaY + 35, 10, 5);
    ctx.fillRect(antennaX + 25, antennaY + 35, 10, 5);

		console.log(antennaX + ", " + antennaY);

		await new Promise(resolve => setTimeout(resolve, 2000));

		// prepare his next move
		antennaX += 30;
	}
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

console.log("W: " + width + ", H: " + height);

// Center vertically
var center = Math.round(height / 2);

// Set boundary and move rate
var y_boundary = height - 10;
var moveRate = 30;
var moveTimes = (width - 10) / moveRate;
var positions = Math.floor((y_boundary - 10) / moveRate);


moveTimes = 290;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1000, 1000);

// Space Invaders alien
ctx.fillStyle = "#32CD32";
var antennaX = 150;
var antennaY = 100;

// Empire State Building
ctx.fillRect(460, 750, 80, 250);
ctx.fillRect(470, 710, 60, 40);
ctx.fillRect(480, 690, 40, 20);
ctx.fillRect(490, 685, 20, 5);
ctx.fillRect(497, 645, 5, 40);
ctx.fillRect(450, 925, 100, 75);
ctx.clearRect(470, 750, 1, 250);
ctx.clearRect(530, 750, 1, 250);

aliens(ctx, moveTimes, 10, 100);
// aliens(ctx, moveTimes, 140, 10);
// aliens(ctx, moveTimes, 180, 10);
// aliens(ctx, moveTimes, 220, 10);
// aliens(ctx, moveTimes, 260, 10);
// aliens(ctx, moveTimes, 300, 10);
// aliens(ctx, moveTimes, 340, 10);
// aliens(ctx, moveTimes, 380, 10);
// aliens(ctx, moveTimes, 420, 10);
// aliens(ctx, moveTimes, 460, 10);

// function army() {
// 	var canvas = document.getElementById("myCanvas");
// 	var ctx = canvas.getContext("2d");
// 	var width = canvas.width;
// 	var height = canvas.height;
//
// 	// Center vertically
// 	var center = Math.round(height / 2);
//
// 	// Set boundary and move rate
// 	var y_boundary = width - 10;
// 	var x_boundary = length - 10;
// 	var moveRate = 30;
// 	var moveTimes = center / moveRate;
// 	var positions = Math.floor((y_boundary - 10) / moveRate);
// 	console.log(positions);
//
// 	// spawn aliens
// 	for (i = 0; i < positions; i++) {
// 		yPosition = 10;
// 		aliens(ctx, moveTimes, yPosition, 10)
// 		// move to the next row
// 		console.log(yPosition);
// 		yPosition += 30;
//
// 	}
//
// }
