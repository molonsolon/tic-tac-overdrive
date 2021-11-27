import game from "./game";

const Player = (number, name, marker) => {
  let score = 0;
  const getNumber = () => number;
  const getName = () => name;
  const getMarker = () => marker;
  const resetScore = () => {
    score = 0;
  };
  const getScore = () => score;

  const roundWinCheck = () => {
    if (game.checkResults(marker)) {
      alert(`${name} wins`);
      console.log(`${name} wins`);
      score += 1;
      displayController.showRestartBtn();
      return true;
    }
    if (game.getTurn() === 9) {
      alert(`it's a tie!`); // eslint-disable-line quotes
      displayController.showRestartBtn();
      return true;
    }
    return false;
  };

  //   const tieCheck = (value) => typeof value === 'string';

  function matchWinCheck() {
    if (score === 5) {
      alert(`${name} wins the match!!!`);
      displayController.showRestartBtn();
      return true;
    }
    return false;
  }

  const computerTurn = () => {
    const compChoice = game.compChoiceLogic();
    const compSpace = document.querySelector(`#sector-${compChoice}`);
    compSpace.textContent = marker;
    gameboard.setBoard(compChoice, marker);
    game.setTurn();
    roundWinCheck();
    matchWinCheck();
    console.log("checked for computer win");
  };

  function playTurn(space, index) {
    space.textContent = marker; // eslint-disable-line no-param-reassign
    gameboard.setBoard(index, marker);

    console.log("checked for win player1");
    game.setTurn();
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
};
