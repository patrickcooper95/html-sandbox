
// Set initial direction of alien movement
var direction = "right";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Flip alien movement direction
function flip() {
  if (direction == "right") {
    direction = "left";
  }
  else {
    direction = "right";
  }
}

async function aliens(army) {

  var moveTimes = Math.floor(width / 100);
  console.log(moveTimes);

	for (let i = 0; i < moveTimes; i++) {
    for (let i = 0; i < army.length; i++) {
      army[i].draw(army[i].antennaX, army[i].antennaY);
    }

		await new Promise(resolve => setTimeout(resolve, 750));

    for (let i = 0; i < army.length; i++) {
      army[i].erase(army[i].antennaX, army[i].antennaY);
    }

    if (direction == "right") {
  		// prepare his next move
      for (let i = 0; i < army.length; i++) {
        army[i].antennaX += 65;
      }
    }
    else {
      for (let i = 0; i < army.length; i++) {
        army[i].antennaX -= 65;
      }
    }

    // Flip direction and start movement again
    if (i == (moveTimes - 1)) {
      i = 0;
      flip();
    }
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
alien2 = new Alien(ctx, 20, 100);
alien3 = new Alien(ctx, 100, 150);
alien4 = new Alien(ctx, 100, 100);
alien5 = new Alien(ctx, 20, 50);
alien6 = new Alien(ctx, 100, 50);

let alienArray = [alien, alien2, alien3, alien4, alien5, alien6];
//console.log(alien.location);

aliens(alienArray);

console.log("The aliens have landed.");
