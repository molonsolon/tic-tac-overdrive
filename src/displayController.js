import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import Game from "./Game";
import Gameboard from './Gameboard'

gsap.registerPlugin(TextPlugin);

export default function DisplayController() {
  const gameboardContainer = document.querySelector("#gameboard-container");
  const enterBtn = document.querySelector("#enter-btn");
  const startGameBtn = document.querySelector("#start-btn");
  const playerSelectForm = document.querySelector("#player-select-form");
  const computerSwitch = document.querySelectorAll(".switch-radio");
  const playerTwoIcon = document.querySelector("#player-two-icon");
  const playerOneName = document.querySelector("#player-one-name");
  const playerTwoName = document.querySelector("#player-two-name");
  let difficulty;
  let playerOne;
  let playerTwo;
  const restartBtn = document.querySelector("#restart-btn");
  const timeModeBtn = document.querySelector("#time-mode-btn");
  const timeModeSelector = document.querySelector("#mode-selector");
  timeModeSelector.style.visibility = "hidden";
  const timerDiv = document.querySelector("#timer");
  const difficultySelectorLabel = document.querySelector(".selector-label");
  const difficultySelector = document.querySelector("#difficulty-selector");

  timeModeBtn.addEventListener("click", () => {
    if (timeModeSelector.style.visibility === "hidden") {
      console.log(timeModeSelector);
      timeModeSelector.style.visibility = "visible";
      console.log(timeModeSelector);
    } else {
      console.log("err!");
      timeModeSelector.style.visibility = "hidden";
    }
  });

  const showRestartBtn = () => {
    restartBtn.style.visibility = "visible";
  };

  const getDifficulty = () => difficulty;

  const boardSpaceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  function displayBoard() {
    boardSpaceArray.forEach((index) => {
      const boardSpace = document.createElement("div");
      boardSpace.classList.add("board-space");
      boardSpace.setAttribute("id", `sector-${index}`);
      gameboardContainer.appendChild(boardSpace);

      boardSpace.addEventListener("click", () => {
        if (boardSpace.textContent !== "x" && boardSpace.textContent !== "o") {
          if (Game.getTurn() % 2 === 0 && playerTwo.getName() === "computer") {
            playerOne.playTurn(boardSpace, index);
            console.log("player1 turn played");

            if (Game.checkResults(playerOne.getMarker()) !== true) {
              playerTwo.computerTurn();
              console.log("player2 turn played");
            }
          } else if (Game.getTurn() % 2 === 0) {
            playerOne.playTurn(boardSpace, index);
          } else {
            playerTwo.playTurn(boardSpace, index);
          }
        } else if (
          Game.checkResults(playerOne.getMarker()) ||
          Game.checkResults(playerTwo.getMarker())
        ) {
          console.log("round over");
        }
      });
    });
  }

  function setRadioValue(radioGroup) {
    const element = document.getElementsByClassName(radioGroup);
    const array = [...element].filter((x) => x.checked);

    return array[0].value;
  }

  function menuController() {
    const showElement = (element) => {
      // eslint-disable-next-line no-param-reassign
      element.style.visibility = "visible";
    };
    // const hideElement = (element) => {
    //   // eslint-disable-next-line no-param-reassign
    //   element.style.visibility = "hidden";
    // };
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
      console.log("run");
      const nodeListArray = [...computerSwitch].filter((x) => x.checked);

      if (nodeListArray[0].value === "player") {
        difficultySelector.style.visibility = "hidden";
        difficultySelectorLabel.style.visibility = "hidden";
        playerTwoIcon.src = "/images/player-two-icon.png";
        playerTwoName.value = "";
        playerTwoName.disabled = false;
      } else if (nodeListArray[0].value === "computer") {
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
          Game.setCompDifficulty(difficulty);
        });
      }
    };

    computerSwitch.forEach((element) => {
      element.addEventListener("change", () => playerToggle());
      console.log(element);
    });

    restartBtn.addEventListener("click", () => {
      if (playerOne.getScore() === 5 || playerTwo.getScore() === 5) {
        Gameboard.clearBoard();
        playerOne.resetScore();
        playerTwo.resetScore();
        Game.resetTurns();
        console.log("match reset");
        restartBtn.style.visibility = "hidden";
        Game.startTimer(".seconds", Game.getTimer());
        console.log(Game.getTimer());
      } else {
        Gameboard.clearBoard();
        Game.resetTurns();
        restartBtn.style.visibility = "hidden";
      }
    });

    playerSelectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      playerOne = Player(
        1,
        playerOneName.value,
        setRadioValue("player-one-radio")
      );

      playerTwo = Player(
        2,
        playerTwoName.value,
        setRadioValue("player-two-radio")
      );

      Game.setPlayer(playerOne);

      Game.setPlayer(playerTwo);
    });

    startGameBtn.addEventListener("click", () => {
      const timerSet = setRadioValue("time-radio");
      console.log(timerSet);
      const modeSet = setRadioValue("extreme-radio");
      console.log(modeSet);
      console.log(`${timerSet} on click`);

      function playGameTheme() {
        const gameTheme = new Audio("../audio/lightwave-game-theme.mp3");
        if (typeof gameTheme.loop === "boolean") {
          gameTheme.loop = true;
          gameTheme.play();
        } else {
          gameTheme.addEventListener(
            "ended",
            // eslint-disable-next-line func-names
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
        } else if (value !== "endless") {
          console.log("timer initialized");
          boardEnter
            .to("#gameboard-container", { duration: 0, delay: 3, autoAlpha: 1 })
            .call(playGameTheme, null, 3 + beatDuration / 4)
            .call(
              Game.startTimer,
              [".seconds", value],
              null,
              3 + beatDuration / 4
            )
            .call(showElement, [timerDiv], null, 3 + beatDuration / 4);
        }
      };

      timerDiv.addEventListener("update", () => {
        if (timerDiv.textContent === 1) showRestartBtn();
      });

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

  return {
    getDifficulty,
    displayBoard,
    menuController,
    setRadioValue,
    showRestartBtn,
  };
}
