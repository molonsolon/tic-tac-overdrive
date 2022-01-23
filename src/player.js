import { checkResults, getTurn, compChoiceLogic, setTurn } from "./Game";
import Gameboard from "./Gameboard";
import {showRestartBtn} from "./DisplayController";

const playerActions = {
  getNumber() {
    return this.number
  },
  getName() {
    return this.name
  },
  resetScore() {
    return this.score === 0
  },
  getScore() {
    return this.score
  },
  getMarker() {
    return this.marker
  },
  roundWinCheck() {
    if (checkResults(this.marker)) {
      alert(`${this.name} wins`);
      console.log(`${this.name} wins`);
      this.score += 1;
      showRestartBtn();
      return true;
    }
    if (getTurn() === 9) {
      alert(`it's a tie!`); // eslint-disable-line quotes
      showRestartBtn();
      return true;
    }
    return false;
  },
  matchWinCheck() {
    if (getTurn === 0) {
      return false;
    }
    if (this.score === 5) {
      alert(`${this.name} wins the match!!!`);
      showRestartBtn();
      return true;
    }
    return false
  },
  computerTurn() {
    const compChoice = compChoiceLogic();
    const compSpace = document.querySelector(`#sector-${compChoice}`);
    compSpace.textContent = this.marker;
    Gameboard.setBoard(compChoice, this.marker);
    setTurn();
    roundWinCheck();
    matchWinCheck();
    console.log("checked for computer win");
  },
  playTurn: function playTurn(space, index) {
    space.textContent = this.marker; // eslint-disable-line no-param-reassign
    Gameboard.setBoard(index, this.marker);

    console.log("checked for win player1");
    setTurn();
    roundWinCheck();
    matchWinCheck();
  }
}

function createPlayer(number, name, marker, score) {
  let player = Object.create(playerActions);
  player.name = name;
  player.number = number;
  player.marker = marker;
  player.score = score;
  return player;
}

// export default const Player = (number, name, marker) => {
//   let score = 0;
//   const getNumber = () => number;
//   const getName = () => name;
//   const getMarker = () => marker;
//   const resetScore = () => {
//     score = 0;
//   };
//   const getScore = () => score;

//   const roundWinCheck = () => {
//     if (Game.checkResults(marker)) {
//       alert(`${name} wins`);
//       console.log(`${name} wins`);
//       score += 1;
//       showRestartBtn();
//       return true;
//     }
//     if (Game.getTurn() === 9) {
//       alert(`it's a tie!`); // eslint-disable-line quotes
//       showRestartBtn();
//       return true;
//     }
//     return false;
//   };

//   function matchWinCheck() {
//     if (Game.getTurn === 0) {
//       return false;
//     }
//     if (score === 5) {
//       alert(`${name} wins the match!!!`);
//       showRestartBtn();
//       return true;
//     }
//     return false;
//   }

//   const computerTurn = () => {
//     const compChoice = Game.compChoiceLogic();
//     const compSpace = document.querySelector(`#sector-${compChoice}`);
//     compSpace.textContent = marker;
//     Gameboard.setBoard(compChoice, marker);
//     Game.setTurn();
//     roundWinCheck();
//     matchWinCheck();
//     console.log("checked for computer win");
//   };

//   function playTurn(space, index) {
//     space.textContent = marker; // eslint-disable-line no-param-reassign
//     Gameboard.setBoard(index, marker);

//     console.log("checked for win player1");
//     Game.setTurn();
//     roundWinCheck();
//     matchWinCheck();
//   }

//   return {
//     getNumber,
//     getName,
//     getMarker,
//     computerTurn,
//     playTurn,
//     roundWinCheck,
//     matchWinCheck,
//     resetScore,
//     getScore,
//   };
// }
