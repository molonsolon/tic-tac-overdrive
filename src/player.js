import Game from "./Game";
import Gameboard from "./Gameboard";
import DisplayController from "./DisplayController";

export default function Player({ number, name, marker }) {
  let score = 0;
  const getNumber = () => number;
  const getName = () => name;
  const getMarker = () => marker;
  const resetScore = () => {
    score = 0;
  };
  const getScore = () => score;

  const roundWinCheck = () => {
    if (Game.checkResults(marker)) {
      alert(`${name} wins`);
      console.log(`${name} wins`);
      score += 1;
      DisplayController.showRestartBtn();
      return true;
    }
    if (Game.getTurn() === 9) {
      alert(`it's a tie!`); // eslint-disable-line quotes
      DisplayController.showRestartBtn();
      return true;
    }
    return false;
  };

  function matchWinCheck() {
    if (Game.getTurn === 0) {
      return false;
    }
    if (score === 5) {
      alert(`${name} wins the match!!!`);
      DisplayController.showRestartBtn();
      return true;
    }
    return false;
  }

  const computerTurn = () => {
    const compChoice = Game.compChoiceLogic();
    const compSpace = document.querySelector(`#sector-${compChoice}`);
    compSpace.textContent = marker;
    Gameboard.setBoard(compChoice, marker);
    Game.setTurn();
    roundWinCheck();
    matchWinCheck();
    console.log("checked for computer win");
  };

  function playTurn(space, index) {
    space.textContent = marker; // eslint-disable-line no-param-reassign
    Gameboard.setBoard(index, marker);

    console.log("checked for win player1");
    Game.setTurn();
    roundWinCheck();
    matchWinCheck();
  }

  return {
    getNumber,
    getName,
    getMarker,
    computerTurn,
    playTurn,
    roundWinCheck,
    matchWinCheck,
    resetScore,
    getScore,
  };
}
