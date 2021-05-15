
class Alien {
  /**
   * Base class for alien lifeforms.
   * @param ctx: the canvas element on which to draw alien
   * @param antennaX: the x-coor for the left antenna
   * @param antennaY: the y-coor for the left antenna
   *
   * location: returns the current location of the aliens
   * draw: draws and re-draws the alien as needed
   * erase: erase the previous view of the alien as it moves
   * alive: boolean, is alien alive or not
   */
  constructor(ctx, antennaX, antennaY) {
    this.ctx = ctx;
    this.antennaX = antennaX;
    this.antennaY = antennaY;
    this.alive = true;
  }

  // Getter
  get location() {
    return this.calcLocation();
  }

  // Kill alien
  killAlien() {
    this.alive = false;
    this.antennaX = 0;
    this.antennaY = 0;
  }

  // Method
  calcLocation() {
    let topLeft = [this.antennaX - 10, antennaY];
    let botRight = [this.antennaX + 45, antennaY + 35];

    let location = [topLeft, botRight];

    return location;
  }

  draw(antennaX, antennaY) {

    if (this.alive) {
      this.ctx.fillStyle = "#32CD32";

  		// draw rest of alien's body
      this.ctx.fillRect(antennaX, antennaY, 5, 5);
      this.ctx.fillRect(antennaX + 5, antennaY + 5, 5, 5);
      this.ctx.fillRect(antennaX, antennaY + 10, 40, 5);
      this.ctx.fillRect(antennaX + 35, antennaY, 5, 5);
      this.ctx.fillRect(antennaX + 30, antennaY + 5, 5, 5);
      this.ctx.fillRect(antennaX - 5, antennaY + 15, 50, 5);
      this.ctx.clearRect(antennaX + 5, antennaY + 15, 5, 5);
      this.ctx.clearRect(antennaX + 30, antennaY + 15, 5, 5);
      this.ctx.fillRect(antennaX - 10, antennaY + 20, 60, 5);
      this.ctx.fillRect(antennaX - 10, antennaY + 25, 5, 10);
      this.ctx.fillRect(antennaX, antennaY + 25, 40, 5);
      this.ctx.fillRect(antennaX + 45, antennaY + 25, 5, 10);
      this.ctx.fillRect(antennaX, antennaY + 30, 5, 5);
      this.ctx.fillRect(antennaX + 35, antennaY + 30, 5, 5);
      this.ctx.fillRect(antennaX + 5, antennaY + 35, 10, 5);
      this.ctx.fillRect(antennaX + 25, antennaY + 35, 10, 5);

      // Update alien's position attributes
      this.antennaX = antennaX;
      this.antennaY = antennaY;
    }
  }

  erase(antennaX, antennaY) {
    // erase the alien
    ctx.fillStyle = "black";
    ctx.fillRect(antennaX, antennaY, 5, 5);
    ctx.fillRect(antennaX + 5, antennaY + 5, 5, 5);
    ctx.fillRect(antennaX, antennaY + 10, 40, 5);
    ctx.fillRect(antennaX + 35, antennaY, 5, 5);
    ctx.fillRect(antennaX + 30, antennaY + 5, 5, 5);
    ctx.fillRect(antennaX - 5, antennaY + 15, 50, 5);
    ctx.fillRect(antennaX - 10, antennaY + 20, 60, 5);
    ctx.fillRect(antennaX - 10, antennaY + 25, 5, 10);
    ctx.fillRect(antennaX, antennaY + 25, 40, 5);
    ctx.fillRect(antennaX + 45, antennaY + 25, 5, 10);
    ctx.fillRect(antennaX, antennaY + 30, 5, 5);
    ctx.fillRect(antennaX + 35, antennaY + 30, 5, 5);
    ctx.fillRect(antennaX + 5, antennaY + 35, 10, 5);
    ctx.fillRect(antennaX + 25, antennaY + 35, 10, 5);
  }

}
