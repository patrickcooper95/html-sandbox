
var listOfAliens = [];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function aliens(lifeForm) {

  var moveTimes = 10;
  var i = 0;
  var antennaX = lifeForm.antennaX;
  var antennaY = lifeForm.antennaY;

	for (i = 0; i < moveTimes; i++) {
    console.log(i);
    console.log(moveTimes);

    lifeForm.draw(antennaX, antennaY);

		console.log(antennaX + ", " + antennaY);

		await new Promise(resolve => setTimeout(resolve, 1000));

    lifeForm.erase(antennaX, antennaY);

		// prepare his next move
		antennaX += 65;
	}
  console.log("Alien done moving.");
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
// var moveTimes = (width - 10) / moveRate;
var positions = Math.floor((y_boundary - 10) / moveRate);


// var moveTimes = 108;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1000, 1000);

// Space Invaders alien
var antennaX = 150;
var antennaY = 100;

//background buildings
ctx.fillStyle = "#006400";
ctx.fillRect(500, 950, 100, 50);
ctx.fillRect(200, 900, 100, 100);
ctx.fillRect(250, 850, 50, 150);
ctx.fillRect(0, 800, 100, 200);
ctx.fillRect(300, 700, 30, 300);
ctx.fillRect(100, 975, 100, 25);
ctx.fillRect(150, 770, 30, 230);
ctx.fillRect(900, 700, 50, 300);
ctx.fillRect(800, 730, 40, 270);
ctx.fillRect(800, 900, 100, 100);
ctx.fillRect(900, 950, 100, 50);
ctx.fillRect(370, 960, 80, 40);
ctx.fillRect(320, 930, 50, 70);
ctx.fillRect(360, 770, 50, 230);
ctx.fillRect(500, 910, 300, 90);
ctx.fillRect(600, 790, 35, 210);
ctx.fillRect(650, 740, 70, 260);

//One WTC
ctx.fillRect(923, 670, 4, 30);


// Empire State Building
ctx.fillStyle = "#32CD32";
ctx.fillRect(460, 750, 80, 250);
ctx.fillRect(470, 710, 60, 40);
ctx.fillRect(480, 690, 40, 20);
ctx.fillRect(490, 685, 20, 5);
ctx.fillRect(497, 640, 5, 45);
ctx.fillRect(450, 925, 100, 75);
ctx.clearRect(470, 750, 1, 250);
ctx.clearRect(530, 750, 1, 250);

alien = new Alien(ctx, 20, 150);
alien2 = new Alien(ctx, 160, 100);
listOfAliens.push(alien, alien2);
console.log(alien.location);
aliens(alien);
aliens(alien2);
//aliens(ctx, 20, 100);
// aliens(ctx, 20, 150);
// aliens(ctx, 20, 200);
// aliens(ctx, 20, 250);
// aliens(ctx, 160, 100);
// aliens(ctx, 160, 150);
// aliens(ctx, 160, 200);
// aliens(ctx, 160, 250);
// aliens(ctx, 300, 100);
// aliens(ctx, 300, 150);
// aliens(ctx, 300, 200);
// aliens(ctx, 300, 250);


console.log("The aliens have landed.");
