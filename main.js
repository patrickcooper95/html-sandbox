
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

async function aliens(army, startPosition) {

  var armyWidth = startPosition;
  var moveTimes = Math.floor(((width - armyWidth)/moveRate));
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
        army[i].antennaX += 30;
      }
    }
    else {
      for (let i = 0; i < army.length; i++) {
        army[i].antennaX -= 30;
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
ctx.fillRect(500, height-40, 100, 40);
ctx.fillRect(200, height-30, 100, 30);
ctx.fillRect(250, height-100, 50, 100);
ctx.fillRect(0, height-100, 100, 100);
ctx.fillRect(300, height-150, 30, 150);
ctx.fillRect(100, height-20, 75, 20);
ctx.fillRect(150, height-145, 27, 145);
ctx.fillRect(900, height-175, 50, 175);
ctx.fillRect(800, height-76, 40, 76);
ctx.fillRect(800, height-89, 45, 89);
ctx.fillRect(900, height-123, 23, 123);
ctx.fillRect(370, height-131, 80, 131);
ctx.fillRect(320, height-99, 50, 99);
ctx.fillRect(360, height-78, 50, 230);
ctx.fillRect(500, height-20, 300, 90);
ctx.fillRect(600, height-45, 35, 45);
ctx.fillRect(650, height-120, 70, 120);
ctx.fillRect(970, height-97, 30, 97);
ctx.fillRect(200, height-122, 25, 122);
ctx.fillRect(180, height-157, 30, 157);
ctx.fillRect(830, height-75, 75, 75);


// One WTC
ctx.fillRect(923, height-200, 4, 30);

// Empire State Building
ctx.fillStyle = "#32CD32";
ctx.fillRect(460, height-125, 80, 125);
ctx.fillRect(470, height-150, 60, 150);
ctx.fillRect(480, height-160, 40, 160);
ctx.fillRect(492, height-185, 15, 185);
ctx.fillRect(497, height-210, 5, 210);
ctx.fillRect(450, height-30, 100, 30);
ctx.clearRect(469, height-125, 1, 125);
ctx.clearRect(530, height-125, 1, 125);


// Number of aliens and starting positions
var alienArray = [];
var numRows = 3;
var numCols = 5;
var initCol = 20;

for (let col = 0; col < numCols; col++) {
  var initRow = 50;
  for (let row = 0; row < numRows; row++) {
    alienArray.push(new Alien(ctx, initCol, initRow));
    initRow += 50;
  }
  initCol += 80;
}

aliens(alienArray, initCol);

console.log("The aliens have landed.");
