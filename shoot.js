
async function shoot() {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var keepGoing = true;
  var yPosition = canvas.height - 225;
  var xPosition = (canvas.width / 2)-2;
  var limit = 150;
  var count = 0;

	while (count < 120 && keepGoing) {

		ctx.fillStyle = "#32CD32";

		// draw laser
    ctx.fillRect(xPosition, yPosition, 3, 15);

    delay = 20;
    await new Promise(resolve => setTimeout(resolve, delay));

    //console.log("Shot moving...");

    // erase the laser
    ctx.fillStyle = "black";
    ctx.fillRect(xPosition, yPosition, 3, 15);

    for (let alien = 0; alien < alienArray.length; alien++) {
      let alienLocation = alienArray[alien].location;
      if (yPosition > alienLocation[0][1] &&
          yPosition < alienLocation[1][1] &&
          xPosition > alienLocation[0][0] &&
          xPosition < alienLocation[1][0]) {
            console.log("HIT!");
            alienArray[alien].killAlien();
            keepGoing = false;
            game.hit();
          }
    }


    yPosition -= 5;
    count += 1;

	}
  console.log("Shot gone into space.");
}

function newShot() {
  shoot()
  game.incrementShot();
  console.log(game.getShotsFired);
}
