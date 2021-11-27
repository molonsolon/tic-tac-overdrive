import displayController from "./displayController";

const game = (() => {
  let whoseTurn = 0;
  let playerOne;
  let playerTwo;
  const result = null; // eslint-disable-line no-unused-vars
  let compDifficulty = "new on the job";

  const setCompDifficulty = (value) => {
    compDifficulty = value;
    console.log(compDifficulty);
  };

  function setPlayer(player) {
    if (player.getNumber() === 1) {
      playerOne = player;
      return playerOne;
    }
    if (player.getNumber() === 2) {
      playerTwo = player;
      return playerTwo;
    }
    return undefined;
  }

  // i need to be able to pass in a timer set from game selection form
  // the function will accept an element id and time in seconds
  // the timer will run a setinterval function thats fed a function
  // that iterates a -- on the countdown variable
  //
  const startTimer = (id, countdown) => {
    const timerSpan = document.querySelector(id);

    function updateTimer() {
      timerSpan.textContent = countdown;
      countdown -= 1; // eslint-disable-line no-param-reassign
      console.log(countdown);
      if (countdown === 0) {
        clearInterval(timerInterval);
        console.log("interval cleared");
        displayController.showRestartBtn();
      } else if (
        playerOne.matchWinCheck() === true ||
        playerTwo.matchWinCheck() === true
      ) {
        clearInterval(timerInterval);
        console.log("interval cleared");
      }
    }
    updateTimer();
    let timerInterval = setInterval(updateTimer, 1000);
  };

  const getTurn = () => whoseTurn;
  const setTurn = () => {
    whoseTurn += 1;
  };
  const resetTurns = () => {
    whoseTurn = 0;
  };

  const compMM = () =>
    minimax(gameboard.getBoard(), playerTwo.getMarker()).index;

  const compR = () =>
    gameboard.getRemainingSectors(gameboard.getBoard())[
      Math.floor(
        Math.random() *
          gameboard.getRemainingSectors(gameboard.getBoard()).length
      )
    ];

  const compChoiceLogic = () => {
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

  function checkResults(playerMarker) {
    for (const key in gameboard.getResultCheckSectors()) {
      if (
        gameboard.getResultCheckSectors()[`${key}`]().join(",") ===
        `${playerMarker},${playerMarker},${playerMarker}`
      ) {
        return true;
      }
    }
  }

  function minimax(boardState, playerMarker) {
    const getEmptySectors = gameboard.getRemainingSectors(boardState);
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

    for (let i = 0; i < getEmptySectors.length; i++) {
      const currentTest = [];
      currentTest.index = boardState[getEmptySectors[i]];
      boardState[getEmptySectors[i]] = playerMarker;

      if (playerMarker === playerTwo.getMarker()) {
        const result = minimax(boardState, playerOne.getMarker());
        currentTest.score = result.score;
      } else {
        const result = minimax(boardState, playerTwo.getMarker());
        currentTest.score = result.score;
      }

      boardState[getEmptySectors[i]] = currentTest.index;
      testHistory.push(currentTest);
    }

    let bestNextMove;

    if (playerMarker === playerTwo.getMarker()) {
      let bestScore = -Infinity;
      for (let i = 0; i < testHistory.length; i++) {
        if (testHistory[i].score > bestScore) {
          bestScore = testHistory[i].score;
          bestNextMove = i;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < testHistory.length; i++) {
        if (testHistory[i].score < bestScore) {
          bestScore = testHistory[i].score;
          bestNextMove = i;
        }
      }
    }
    return testHistory[bestNextMove];
  }

  return {
    checkResults,
    setCompDifficulty,
    getTurn,
    setTurn,
    resetTurns,
    compChoiceLogic,
    setPlayer,
    playerOne,
    playerTwo,
    startTimer,
  };
})();
