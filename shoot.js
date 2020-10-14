
async function shoot() {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var keepGoing = true;
  var xPosition = 497;
  var yPosition = 625;
  var limit = 150;
  var count = 0;

	while (count < 120) {

		ctx.fillStyle = "#32CD32";

		// draw laser
    ctx.fillRect(xPosition, yPosition, 5, 15);

    delay = 20;
    await new Promise(resolve => setTimeout(resolve, delay));

    console.log("Shot moving...");

    // erase the laser
    ctx.fillStyle = "black";
    ctx.fillRect(xPosition, yPosition, 5, 15);

    yPosition -= 5;
    count += 1;

	}
  console.log("Shot gone into space.");
}

function newShot() {
  shoot()
}
