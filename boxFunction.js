
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function aliens(ctx, moveTimes, head_y, head_x) {

	for (i = 0; i < moveTimes; i++) {

		ctx.fillStyle = "#32CD32";

		// draw rest of alien's body
		var left_y = head_y + 10;
		var left_x = head_x - 10;
		var right_y = head_y + 10;
		var right_x = head_x + 10;

		console.log(i);

		// draw alien
		ctx.fillRect(head_x, head_y, 10, 10);
		ctx.fillRect(left_x, left_y, 10, 10);
		ctx.fillRect(right_x, right_y, 10, 10);
		console.log(head_x + ", " + head_y)

		await new Promise(resolve => setTimeout(resolve, 2000));

		ctx.clearRect(head_x, head_y, 10, 10);
		ctx.clearRect(left_x, left_y, 10, 10);
		ctx.clearRect(right_x, right_y, 10, 10);

		// prepare his next move
		head_x += 30;
		left_x += 30;
		right_x += 30;
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

// for (i = 0; i < 10; i++) {
// 	yPosition = 100;
//
// 	aliens(ctx, moveTimes, yPosition, 10);
// 	yPosition += 40;
// }
moveTimes = 290;
aliens(ctx, moveTimes, 100, 10);
aliens(ctx, moveTimes, 140, 10);
aliens(ctx, moveTimes, 180, 10);
aliens(ctx, moveTimes, 220, 10);
aliens(ctx, moveTimes, 260, 10);
aliens(ctx, moveTimes, 300, 10);
aliens(ctx, moveTimes, 340, 10);
aliens(ctx, moveTimes, 380, 10);
aliens(ctx, moveTimes, 420, 10);
aliens(ctx, moveTimes, 460, 10);

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
