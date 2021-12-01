/*

    Features:
    [ ] score keeping UI
    [ ] game win / lose / draw announcements (render animated announcements on true checkwin
        function call)
        [x] work out draw logic as it's not written into check results yet.
    [ ] play again / main menu button under results announcement;
    [ ] form validation + lock other radio buttons when choice is made.
    [ ] Purely aesthetic UI completion (backgrounds, animations, music, sound effects)
        [x] animate background of gameboard to cycle through each color of my Hyperdrive
            pallete on coolors.co (fast loop), adjust opacity!
        [ ] change font + UI to have more sharp angles

    Bug:
    [ ] win match check is being called twice on winning turn completion, once on restart after.
    [x] webpack is calling functions twice, messing with time mode dropdown
    [ ] index.js is not able to locate audio source
    [ ] playerOne + Two are not getting defined on form submit
    Completed:

    [x] Try switching row/column/diagonal functions into game module.
    [x] Figure out object of row/column/diagonal functions, loop through for results check.
    [x] Make game.checkResults() return finalResult, have displayController check when this value
        equals something other than undefined then display that result via a div toggle with
        win message in body.
        --- returning finalResult from game module gets a
        referenceError: finalResult is not defined..
            figure this out!!!
    [x] game.checkResult function isn't detecting correctly after creating successful minimax ai
        figure out WHY this is happening before throwing solutions @ it all slap-dash.
    [x] minimax function isn't working, only returning first possible value instead of using
        recursion
    [x] game difficulty selector
    [x] Put get player info functions in Player factory possibly?

*/

import "./css/style.scss";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

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

const gameboard = (() => {
  let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const resultCheckSectors = {
    row1: () => [0, 1, 2].map((x) => board[x]),
    row2: () => [3, 4, 5].map((x) => board[x]),
    row3: () => [6, 7, 8].map((x) => board[x]),
    column1: () => [0, 3, 6].map((x) => board[x]),
    column2: () => [1, 4, 7].map((x) => board[x]),
    column3: () => [2, 5, 8].map((x) => board[x]),
    diagonal1: () => [0, 4, 8].map((x) => board[x]),
    diagonal2: () => [2, 4, 6].map((x) => board[x]),
  };

  const getBoard = () => board;

  const getResultCheckSectors = () => resultCheckSectors;

  function getRemainingSectors(boardState) {
    return boardState.filter((i) => i !== "o" && i !== "x");
  }

  function setBoard(index, marker) {
    board.splice(index, 1, marker);
  }

  const clearBoard = () => {
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const boardSpaces = document.querySelectorAll(".board-space");
    for (let i = 0; i < boardSpaces.length; i++) {
      boardSpaces[i].textContent = "";
      console.log("board cleared");
    }
  };

  return {
    getResultCheckSectors,
    getRemainingSectors,
    getBoard,
    setBoard,
    clearBoard,
  };
})();

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

const displayController = (() => {
  const gameboardContainer = document.querySelector("#gameboard-container");
  const enterBtn = document.querySelector("#enter-btn");
  const startGameBtn = document.querySelector("#start-btn");
  const playerSelectForm = document.querySelector("#player-select-form");
  const computerSwitch = document.querySelectorAll(".switch-radio");
  const playerTwoIcon = document.querySelector("#player-two-icon");
  const playerOneName = document.querySelector("#player-one-name");
  const playerTwoName = document.querySelector("#player-two-name");
  const startGameContainer = document.querySelector("#start-game-container");
  let difficulty;
  const appContainer = document.querySelector("#app-container");
  const restartBtn = document.querySelector("#restart-btn");
  const timeModeBtn = document.querySelector("#time-mode-btn");
  const timeModeSelector = document.querySelector("#mode-selector");
  timeModeSelector.style.visibility = 'hidden';
  const timerDiv = document.querySelector("#timer");
  const difficultySelectorLabel = document.querySelector(".selector-label");
  const difficultySelector = document.querySelector("#difficulty-selector");

  let modeSet;

  timeModeBtn.addEventListener("click", () => {
    if (timeModeSelector.style.visibility === "hidden") {
      console.log(timeModeSelector);
      timeModeSelector.style.visibility = "visible";
      console.log(timeModeSelector);
    } else {
      console.log('err!');
      timeModeSelector.style.visibility = "hidden";
    }
  });

  const showRestartBtn = () => {
    restartBtn.style.visibility = "visible";
  };

  const getDifficulty = () => difficulty;

  function displayBoard() {
    for (let i = 0; i < 9; i++) {
      const boardSpace = document.createElement("div");
      boardSpace.classList.add("board-space");
      boardSpace.setAttribute("id", `sector-${i}`);
      gameboardContainer.appendChild(boardSpace);

      boardSpace.addEventListener("click", () => {
        if (boardSpace.textContent !== "x" && boardSpace.textContent !== "o") {
          if (game.getTurn() % 2 === 0 && playerTwo.getName() === "computer") {
            playerOne.playTurn(boardSpace, i);
            console.log("player1 turn played");

            if (game.checkResults(playerOne.getMarker()) !== true) {
              playerTwo.computerTurn();
              console.log("player2 turn played");
            }

            // if (playerOne.roundWinCheck() === false) {
            //     playerTwo.computerTurn();
            //     console.log(`player2 turn played`)
            // }
          } else if (game.getTurn() % 2 === 0) {
            playerOne.playTurn(boardSpace, i);
          } else {
            playerTwo.playTurn(boardSpace, i);
          }
        } else if (
          game.checkResults(playerOne.getMarker()) ||
          game.checkResults(playerTwo.getMarker())
        ) {
          console.log("round over");
        }
      });
    }
  }

  function setRadioValue(radioGroup) {
    const element = document.getElementsByClassName(radioGroup);

    for (const elements of element) {
      if (elements.checked) {
        console.log(elements.checked);
        return elements.value;
      }
    }
  }

  function menuController() {
    const showElement = (element) => {
      element.style.visibility = "visible";
    };
    const hideElement = (element) => {
      element.style.visibility = "hidden";
    };

    enterBtn.addEventListener("click", () => {
      const introToPlayerSelect = gsap.timeline();

      introToPlayerSelect
        .to("#enter-btn", { duration: 1, xPercent: -150 }, 0)
        .to("#intro-screen", { duration: 0.8, xPercent: -150 }, 0.3)
        .to(
          "#player-select-form",
          { duration: 1, xPercent: -150.2, yPercent: 0 },
          1
        )
        .to("#intro-container", { autoAlpha: 0, delay: 3 });
    });

    // form control

    const introAnimation = gsap.timeline();
    introAnimation
      .to("#intro-title", {
        duration: 1.5,
        rotate: 720,
        perspective: 500,
        scale: 50,
        ease: "back.out",
      })
      .from("#enter-btn", { duration: 1, x: 1000 });

    const playerToggle = () => {
      let value;
      console.log("run");
      for (const elements of computerSwitch) {
        if (elements.checked) {
          console.log(elements.checked);
          value = elements.value;
          if (value === "player") {
            difficultySelector.style.visibility = "hidden";
            difficultySelectorLabel.style.visibility = "hidden";
            playerTwoIcon.src = "/images/player-two-icon.png";
            playerTwoName.value = "";
            playerTwoName.disabled = false;
          } else if (value === "computer") {
            playerTwoIcon.src = "/images/ai-icon.png";
            playerTwoName.value = "computer";
            playerTwoName.disabled = true;
            difficultySelector.textContent = "new on the job";
            difficultySelector.style.visibility = "visible";
            difficultySelectorLabel.style.visibility = "visible";
            let count = 0;

            difficultySelector.addEventListener("click", () => {
              const difficulties = [
                "new on the job",
                "in training",
                "highly skilled",
                "unstoppable",
              ];
              console.log(count);
              if (count < 3) {
                count += 1;
                difficulty = difficulties[count];
                difficultySelector.textContent = difficulty;
                console.log(count);
              } else {
                count = 0;
                difficulty = difficulties[count];
                difficultySelector.textContent = difficulty;
                console.log(count);
              }
              game.setCompDifficulty(difficulty);
            });
          }
        }
      }
      let coutdown;
    };

    computerSwitch.forEach((element) => {
      element.addEventListener("change", () => playerToggle());
      console.log(element);
    });

    restartBtn.addEventListener("click", () => {
      if (
        playerOne.matchWinCheck() !== undefined ||
        playerTwo.matchWinCheck() !== undefined
      ) {
        gameboard.clearBoard();
        playerOne.resetScore();
        playerTwo.resetScore();
        game.resetTurns();
        console.log("match reset");
        restartBtn.style.visibility = "hidden";
        game.startTimer(".seconds", timerSet);
      } else {
        gameboard.clearBoard();
        game.resetTurns();
        restartBtn.style.visibility = "hidden";
      }
    });

    playerSelectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const playerOne = Player(
        1,
        playerOneName.value,
        setRadioValue("player-one-radio")
      );

      const playerTwo = Player(
        2,
        playerTwoName.value,
        setRadioValue("player-two-radio")
      );

      game.setPlayer(playerOne);

      game.setPlayer(playerTwo);
    });

    startGameBtn.addEventListener("click", () => {
      let timerSet = setRadioValue("time-radio");
      console.log(timerSet);
      let modeSet = setRadioValue("extreme-radio");
      console.log(modeSet);
      console.log(`${timerSet} on click`);

      function playGameTheme() {
        const gameTheme = new Audio("audio/lightwave - game -theme.wav");
        if (typeof gameTheme.loop === "boolean") {
          gameTheme.loop = true;
          gameTheme.play();
        } else {
          gameTheme.addEventListener(
            "ended",
            function () {
              this.currentTime = 0;
              this.play();
            },
            false
          );
        }
      }
      const playerSelectExit = gsap.timeline();
      const boardEnter = gsap.timeline();
      const countdownAnimation = gsap.timeline();
      const boardSpaceAnimation = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
        defaults: {
          ease: "power4",
        },
      });
      const boardScaleAnimation = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
        defaults: {
          ease: "power1.out",
        },
      });

      const boardSpinAnimation = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
        defaults: {
          ease: "power1.out",
        },
      });

      const beatDuration = 60 / 130;

      const timerDisplay = (value) => {
        if (value === "endless") {
          boardEnter
            .to("#gameboard-container", { duration: 0, delay: 3, autoAlpha: 1 })
            .call(playGameTheme, null, 3 + beatDuration / 4);
        } else if (value != "endless") {
          console.log("timer initialized");
          boardEnter
            .to("#gameboard-container", { duration: 0, delay: 3, autoAlpha: 1 })
            .call(playGameTheme, null, 3 + beatDuration / 4)
            .call(
              game.startTimer,
              [".seconds", value],
              null,
              3 + beatDuration / 4
            )
            .call(showElement, [timerDiv], null, 3 + beatDuration / 4);
        }
      };

      timerDisplay(timerSet);

      playerSelectExit
        .to("#player-select-form", { duration: 1, xPercent: -300 })
        .to("#player-select-form", { autoAlpha: 0 });

      countdownAnimation
        .to("#game-container", { duration: 1, xPercent: -300, yPercent: -35 })
        .to(".countdown-timer", {
          duration: 2,
          text: {
            value: "3 2 1 Begin",
            delimiter: " ",
          },
        })
        .to(".countdown-timer", { duration: 0, autoAlpha: 0 });

      boardSpaceAnimation
        .to(".board-space", { background: "hsla(82, 100%, 55%, .85)" }, 0.61538)
        .to(".board-space", { background: "hsla(43, 100%, 53%, .85)" })
        .to(".board-space", { background: "hsla(30, 100%, 54%, .85)" })
        .to(".board-space", { background: "hsla(20, 100%, 55%, .85)" })
        .to(".board-space", { background: "hsla(13, 100%, 55%, .85)" })
        .totalDuration(beatDuration * 8);

      boardScaleAnimation
        .to("#gameboard-container", { scale: 1.1 })
        .totalDuration(beatDuration);

      boardSpinAnimation

        .to(
          "#gameboard-container",
          { rotation: 90, boxShadow: "hsla(82, 100%, 55%, .85) -10px 5px" },
          2
        )
        .to(
          "#gameboard-container",
          { rotation: 180, boxShadow: "hsla(43, 100%, 53%, .85) -10px 5px" },
          4
        )
        .to(
          "#gameboard-container",
          { rotation: 270, boxShadow: "hsla(30, 100%, 54%, .85) 10px 5px" },
          6
        )
        .to(
          "#gameboard-container",
          { rotation: 360, boxShadow: "hsla(13, 100%, 55%, .85) 10px 5px" },
          8
        )
        .totalDuration(beatDuration * 16);
    });
  }

  function animationController() {}

  return {
    getDifficulty,
    displayBoard,
    menuController,
    setRadioValue,
    showRestartBtn,
  };
})();

displayController.displayBoard();
displayController.menuController();
