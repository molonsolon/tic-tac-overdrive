import {
  getResultCheckSectors,
  getRemainingSectors,
  getBoard,
} from "./Gameboard";

let whoseTurn = 0;

const result = null; // eslint-disable-line no-unused-vars
let compDifficulty = "new on the job";
let setTimer;
let playerOne;
let playerTwo;

export const getTimer = () => setTimer;

// eslint-disable-next-line no-unused-vars
const getCompDifficulty = () => compDifficulty;

export const setCompDifficulty = (value) => {
  compDifficulty = value;
  console.log(compDifficulty);
};

export function setPlayer(player) {
  if (player.getNumber() === 1) {
    playerOne = player;
    console.log(playerOne.getName());
    return playerOne;
  }
  if (player.getNumber() === 2) {
    playerTwo = player;
    console.log(playerTwo);
    return playerTwo;
  }
  return undefined;
}

export const startTimer = (id, countdown) => {
  const timerSpan = document.querySelector(id);
  setTimer = countdown;

  function updateTimer() {
    timerSpan.textContent = countdown;
    countdown -= 1.0; // eslint-disable-line no-param-reassign
    console.log(countdown);

    if (countdown === 0) {
      clearInterval(timerInterval);
      console.log("interval cleared");
      alert(`time's up!`);
      // DisplayController.showRestartBtn();
    } else if (playerOne.getScore() === 5 || playerTwo.getScore() === 5) {
      clearInterval(timerInterval);
      console.log("interval cleared");
    }
  }
  updateTimer();
  let timerInterval = setInterval(updateTimer, 1000);
};

export const getTurn = () => whoseTurn;
export const setTurn = () => {
  whoseTurn += 1;
};
export const resetTurns = () => {
  whoseTurn = 0;
};

const compMM = () => minimax(getBoard(), playerTwo.getMarker()).index;

const compR = () =>
  getRemainingSectors(getBoard())[
    Math.floor(Math.random() * getRemainingSectors(getBoard()).length)
  ];

export const compChoiceLogic = () => {
  console.log(compDifficulty);

  if (compDifficulty === "unstoppable") {
    return compMM();
  }
  if (compDifficulty !== "unstoppable") {
    const rNum = Math.random() * 100;

    if (compDifficulty === "highly skilled") {
      if (rNum < 75) {
        return compMM();
      }

      return compR();
    }
    if (compDifficulty === "in training") {
      if (rNum < 50) {
        return compMM();
      }

      return compR();
    }
    if (compDifficulty === "new on the job") {
      if (rNum < 25) {
        return compMM();
      }

      return compR();
    }
  }
  return undefined;
};

export function checkResults(playerMarker) {
  const resultArray = Object.values(getResultCheckSectors());

  const playerResult = resultArray.some(
    (element) =>
      element().join(",") === `${playerMarker},${playerMarker},${playerMarker}`
  );

  return playerResult;
}

function minimax(boardState, playerMarker) {
  const getEmptySectors = getRemainingSectors(boardState);
  // eslint-disable-next-line no-unused-vars
  let score;

  if (checkResults(playerOne.getMarker())) {
    return { score: -1 };
  }
  if (checkResults(playerTwo.getMarker())) {
    return { score: 1 };
  }
  if (getEmptySectors.length === 0) {
    return { score: 0 };
  }

  const testHistory = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < getEmptySectors.length; i++) {
    const currentTest = [];
    currentTest.index = boardState[getEmptySectors[i]];
    // eslint-disable-next-line no-param-reassign
    boardState[getEmptySectors[i]] = playerMarker;

    if (playerMarker === playerTwo.getMarker()) {
      // eslint-disable-next-line no-shadow
      const result = minimax(boardState, playerOne.getMarker());
      currentTest.score = result.score;
    } else {
      // eslint-disable-next-line no-shadow
      const result = minimax(boardState, playerTwo.getMarker());
      currentTest.score = result.score;
    }

    // eslint-disable-next-line no-param-reassign
    boardState[getEmptySectors[i]] = currentTest.index;
    testHistory.push(currentTest);
  }

  let bestNextMove;

  if (playerMarker === playerTwo.getMarker()) {
    let bestScore = -Infinity;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < testHistory.length; i++) {
      if (testHistory[i].score > bestScore) {
        bestScore = testHistory[i].score;
        bestNextMove = i;
      }
    }
  } else {
    let bestScore = Infinity;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < testHistory.length; i++) {
      if (testHistory[i].score < bestScore) {
        bestScore = testHistory[i].score;
        bestNextMove = i;
      }
    }
  }
  return testHistory[bestNextMove];
}
