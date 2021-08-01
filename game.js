
class Game {
  /**
   * Class for game data.
   *
   * score: user's score for this game
   * direction: current direction the aliens are moving
   * numAlive: aliens remaining
   * shotsFired: number of shots fired by the user
   */
   constructor() {
     this.shotsFired = 0;
     this.score = 0;
   }

   // Getter for shots fired
   get getShotsFired() {
     return this.shotsFired;
   }

   // Getter for score
   get getScore() {
     return this.score;
   }

   incrementShot() {
     this.shotsFired += 1;
   }

   hit () {
     this.score += 10;
   }
}

game = new Game();
