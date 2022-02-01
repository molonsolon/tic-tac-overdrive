import { checkResults, getTurn, compChoiceLogic, setTurn } from "./Game";
import { setBoard } from "./Gameboard";

const playerActions = {
  getNumber() {
    return this.number;
  },
  getName() {
    return this.name;
  },
  resetScore() {
    this.score = 0;
  },
  getScore() {
    return this.score;
  },
  getMarker() {
    return this.marker;
  },
  roundWinCheck() {
    if (checkResults(this.marker)) {
      console.log(`${this.name} wins`);
      this.score += 1;
      console.log(`${this.name} score: ${this.score}`);
      return true;
    }
    if (getTurn() === 9) {
      return "tie";
    }
    return false;
  },
  matchWinCheck() {
    if (getTurn() === 0) {
      return false;
    }
    if (this.score === 5) {
      return true;
    }
    return false;
  },
  computerTurn() {
    const compChoice = compChoiceLogic();
    const compSpace = document.querySelector(`#sector-${compChoice}`);
    compSpace.textContent = this.marker;
    setBoard(compChoice, this.marker);
    setTurn();
  },
  playTurn: function playTurn(space, index) {
    space.textContent = this.marker; // eslint-disable-line no-param-reassign
    setBoard(index, this.marker);

    setTurn();
  },
};

// eslint-disable-next-line import/prefer-default-export
export function createPlayer(number, name, marker) {
  const player = Object.create(playerActions);
  player.name = name;
  player.number = number;
  player.marker = marker;
  player.score = 0;
  return player;
}
