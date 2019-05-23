import Data from './Data';
import Turn from './Turn';
import domUpdates from './domUpdates';

class Round {
  constructor(game, puzzle) {
    this.game = game;
    this.puzzle = puzzle;
    this.currentTurn;
  }

  newTurn(player) {
    // this.game.changePlayer();
    const turn = new Turn(this, player);
    this.currentTurn = turn;
    domUpdates.updateCurrentPlayer(turn.player);
  }

  endRound() {
    this.game.roundCounter++;
    domUpdates.updateRound(this.game.roundCounter + 1);
    domUpdates.clearCorrectLetters();
    this.game.start();
  }
}

export default Round;