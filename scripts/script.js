/* 
                To-Do

    [x] Try switching row/column/diagonal functions into game module.
    [x] Figure out object of row/column/diagonal functions, loop through for results check.
    [ ] Make game.checkResults() return finalResult, have displayController check when this value
        equals something other than undefined then display that result via a div toggle with
        win message in body.
        --- returning finalResult from game module gets a referenceError: finalResult is not defined..
            figure this out!!!
    [x] game.checkResult function isn't detecting correctly after creating successful minimax ai
        figure out WHY this is happening before throwing solutions @ it all slap-dash.
    [x] minimax function isn't working, only returning first possible value instead of using recursion
    [ ] score keeping UI
    [ ] game win / lose / draw announcements (render animated announcements on true checkwin function call)
        [x] work out draw logic as it's not written into check results yet.
    [ ] play again / main menu button under results announcement;
    [ ] form validation + lock other radio buttons when choice is made.
    [x] game difficulty selector  
    [ ] Purely aesthetic UI completion (backgrounds, animations, music, sound effects)
        [x] animate background of gameboard to cycle through each color of my Hyperdrive
            pallete on coolors.co (fast loop), adjust opacity!
        [ ] change font + UI to have more sharp angles
    [x] Put get player info functions in Player factory possibly?
 
*/

gsap.registerPlugin(TextPlugin);

const Player = (number, name, marker) => {
    let _score = 0;
    const getNumber = () => number;
    const getName = () => name;
    const getMarker = () => marker;
    const getScore = () => _score;
    const setScore = () => _score++;

    return {
        getNumber,
        getName,
        getMarker,
        getScore,
        setScore,

    }
};



const gameboard = (() => {

    let _board = [0, 1, 2,
        3, 4, 5,
        6, 7, 8];


    const _resultCheckSectors = {

        row1: () => [0, 1, 2].map(x => _board[x]),
        row2: () => [3, 4, 5].map(x => _board[x]),
        row3: () => [6, 7, 8].map(x => _board[x]),
        column1: () => [0, 3, 6].map(x => _board[x]),
        column2: () => [1, 4, 7].map(x => _board[x]),
        column3: () => [2, 5, 8].map(x => _board[x]),
        diagonal1: () => [0, 4, 8].map(x => _board[x]),
        diagonal2: () => [2, 4, 6].map(x => _board[x]),
    }

    const getBoard = () => _board;

    const getResultCheckSectors = () => _resultCheckSectors;

    function getRemainingSectors(boardState) {
        return boardState.filter(i => i != `o` && i != `x`);
    }

    function setBoard(index, marker) {
        _board.splice(index, 1, marker);
    }

    const clearBoard = () =>  {
        _board = [0, 1, 2,
                  3, 4, 5,
                  6, 7, 8];
        const boardSpaces = document.querySelectorAll(`.board-space`);
        for (let i = 0; i < boardSpaces.length; i++) {
            boardSpaces[i].textContent = ``;
            console.log(`board cleared`)
        }
    }


    return {

        getResultCheckSectors,
        getRemainingSectors,
        getBoard,
        setBoard,
        clearBoard,

    }
})();



const game = (() => {

    let _whoseTurn = 0;
    let playerOne;
    let playerTwo;
    let result = null;
    let compDifficulty = `new on the job`;

    const setCompDifficulty = (value) => {
        compDifficulty = value;
        console.log(compDifficulty);
    }

    function setPlayer(player) {
        if (player.getNumber() === 1) {
            playerOne = player
            return playerOne;
        } else if (player.getNumber() === 2) {
            playerTwo = player;
            return playerTwo;
        }
    }

    function getPlayerName(playerNumber) {
        if (playerNumber === 1) {
            return playerOne.getName()
        } else {
            return playerTwo.getName()
        }
    }

    function getPlayerMarker(playerNumber) {
        if (playerNumber === 1) {
            return playerOne.getMarker();
        } else {
            return playerTwo.getMarker();
        }
    }

    const getTurn = () => _whoseTurn;
    const setTurn = () => _whoseTurn++;
    const resetTurns = () => _whoseTurn = 0;

    const _compMM = () => {
        return minimax(gameboard.getBoard(), playerTwo.getMarker()).index;
    }

    const _compR = () => {
        return gameboard.getRemainingSectors(gameboard.getBoard())[Math.floor(Math.random() * gameboard.getRemainingSectors(gameboard.getBoard()).length)];
    }

    const computerOpponent = () => {
        compChoice = _compChoiceLogic();
        let compChoiceSelector = document.querySelector(`#sector-${compChoice}`);
        compChoiceSelector.textContent = playerTwo.getMarker();
        gameboard.setBoard(compChoice, playerTwo.getMarker());
        finalWinCheck();
        setTurn();
    }

    const _compChoiceLogic = () => {

        console.log(compDifficulty)

        if (compDifficulty === `unstoppable`) {

            return _compMM();
        } else if (compDifficulty !== `unstoppable`) {
            let rNum = Math.random() * 100;

            if (compDifficulty === `highly skilled`) {
                if (rNum < 75) {

                    return _compMM()
                } else {

                    return _compR()
                }
            } else if (compDifficulty === `in training`) {

                if (rNum < 50) {

                    return _compMM();
                } else {

                    return _compR();
                }
            } else if (compDifficulty === `new on the job`) {
                if (rNum < 25) {

                    return _compMM()
                } else {

                    return _compR()
                }
            }
        }
    }



    function checkResults(playerMarker) {
        for (let key in gameboard.getResultCheckSectors()) {

            if (gameboard.getResultCheckSectors()[`${key}`]().join(`,`) === `${playerMarker},${playerMarker},${playerMarker}`) {

                return true

            } else {
                return false
            }
        }

    }

    const tieCheck = (value) => typeof value ===`string`;

    const finalWinCheck = () => {
        if (checkResults(playerOne.getMarker()) && _whoseTurn % 2 === 0) {
            alert(`player 1 win`);
            displayController.showRestartBtn();
            playerOne.setScore();

        } else if (checkResults(playerTwo.getMarker()) && _whoseTurn % 2 !== 0 && checkResults(playerOne.getMarker()) === false) {
            if (playerTwo.getName() === `computer`) {
                alert(`computer win`)
                displayController.showRestartBtn();
                playerTwo.setScore();
            } else {
                alert(`player 2 win`)
                displayController.showRestartBtn();
                playerTwo.setScore();
            }
        } else if (gameboard.getBoard().every(tieCheck)) {
            alert(`it's a tie!`);
            displayController.showRestartBtn();
        } else if ((playerOne.getScore() === 4 || playerTwo.getScore() === 4) && gameboard.getBoard().every(tieCheck) === false) {
            if (playerOne.getScore() === 4) {
                alert(`player 1 wins the match!`)
            } else if (playerTwo.getScore() === 4) {
                if(playerTwo.getName() === `computer`) {
                    alert(`computer wins the match!`)
                } else {
                    alert(`player 2 wins the match!`)
                }
            }
        } else {
            
            return false
        }
    }

    function minimax(boardState, playerMarker) {

        const getEmptySectors = gameboard.getRemainingSectors(boardState);
        let score;

        if (checkResults(playerOne.getMarker())) {
            return { score: -1 };
        } else if (checkResults(playerTwo.getMarker())) {
            return { score: 1 };
        } else if (getEmptySectors.length === 0) {
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
        return testHistory[bestNextMove]
    }


    return {
        checkResults,
        setCompDifficulty,
        computerOpponent,
        getTurn,
        setTurn,
        resetTurns,
        getPlayerName,
        getPlayerMarker,
        setPlayer,
        playerOne,
        playerTwo,
        finalWinCheck,
    }
})();



const displayController = (() => {
    
    const gameboardContainer = document.querySelector(`#gameboard-container`);
    const enterBtn = document.querySelector(`#enter-btn`);
    const startGameBtn = document.querySelector(`#start-btn`);
    const playerSelectForm = document.querySelector(`#player-select-form`);
    const computerSwitch = document.querySelectorAll(`.switch-radio`);
    const playerTwoIcon = document.querySelector(`#player-two-icon`);
    const playerOneName = document.querySelector(`#player-one-name`);
    const playerTwoName = document.querySelector(`#player-two-name`);
    const startGameContainer = document.querySelector(`#start-game-container`)
    let difficulty;
    const appContainer = document.querySelector(`#app-container`)
    const restartBtn = document.querySelector(`#restart-btn`);

    const showRestartBtn = () => {
        restartBtn.style.visibility = "visible";
    }

    const getDifficulty = () => difficulty;

    function displayBoard() {

        function playTurn(playerNumber, turnSpace, index) {
            let playerMarker = game.getPlayerMarker(playerNumber)
            turnSpace.textContent = playerMarker;
            gameboard.setBoard(index, playerMarker);
            game.finalWinCheck();
            
            game.setTurn()
        }

        for (let i = 0; i < gameboard.getBoard().length; i++) {
            const boardSpace = document.createElement(`div`);
            boardSpace.classList.add(`board-space`);
            boardSpace.setAttribute(`id`, `sector-${i}`);
            gameboardContainer.appendChild(boardSpace);

            boardSpace.addEventListener(`click`, () => {
                if (boardSpace.textContent !== `x` && boardSpace.textContent !== `o`) {
                    if (game.getTurn() % 2 === 0 && game.getPlayerName(2) === `computer`) {
                        playTurn(1, boardSpace, i)
                        game.computerOpponent();



                    } else if (game.getTurn() % 2 === 0) {
                        playTurn(1, boardSpace, i);


                    } else {
                        playTurn(2, boardSpace, i);
                    }
                }



            })
        }
    };

    function setPlayerMarker(radioGroup) {
        let element = document.getElementsByClassName(radioGroup);

        for (const elements of element) {
            if (elements.checked) {
                console.log(elements.checked)
                return elements.value;
            } else {
                continue
            }
        }
    };



    function menuController() {



        enterBtn.addEventListener(`click`, () => {
            const introToPlayerSelect = gsap.timeline();

            introToPlayerSelect
                .to("#enter-btn", { duration: 1, xPercent: -150 }, 0)
                .to("#intro-screen", { duration: .8, xPercent: -150 }, .3)
                .to("#player-select-form", { duration: 1, xPercent: -150.2, yPercent: 0 }, 1)
                .to("#intro-container", { autoAlpha: 0, delay: 3 });

        });

        // form control


        const introAnimation = gsap.timeline();
        introAnimation
            .to("#intro-title", { duration: 1.5, rotate: 720, perspective: 500, scale: 50, ease: "back.out" })
            .from("#enter-btn", { duration: 1, x: 1000 });

        const playerToggle = () => {
            let value;
            console.log(`run`)
            for (const elements of computerSwitch) {
                if (elements.checked) {
                    console.log(elements.checked)
                    value = elements.value;
                    if (value === `player`) {
                        if (startGameContainer.childNodes.length > 1) {
                            startGameContainer.removeChild(difficultySelector);
                            startGameContainer.removeChild(difficultySelectorLabel)
                        }
                        playerTwoIcon.src = "/images/player-two-icon.png";
                        playerTwoName.value = ``;
                        playerTwoName.disabled = false;
                    } else if (value === `computer`) {
                        playerTwoIcon.src = "/images/ai-icon.png"
                        playerTwoName.value = `computer`;
                        playerTwoName.disabled = true;
                        difficultySelectorLabel = document.createElement(`p`);
                        difficultySelectorLabel.textContent = `Difficulty`;
                        difficultySelectorLabel.classList.add(`selector-label`)
                        difficultySelector = document.createElement(`button`);
                        difficultySelector.setAttribute(`id`, `difficulty-selector`);
                        difficultySelector.textContent = `new on the job`
                        startGameContainer.insertBefore(difficultySelector, startGameBtn);
                        startGameContainer.insertBefore(difficultySelectorLabel, difficultySelector)
                        let count = 0;
                        
                        difficultySelector.addEventListener(`click`, () => {
                            let difficulties = [`new on the job`, `in training`, `highly skilled`, `unstoppable`]
                            console.log(count)
                            if (count < 3) {
                                count += 1;
                                difficulty = difficulties[count];
                                difficultySelector.textContent = difficulty;
                                console.log(count);
                            } else {
                                count = 0;
                                difficulty = difficulties[count];
                                difficultySelector.textContent = difficulty;
                                console.log(count)
                            }
                            game.setCompDifficulty(difficulty);
                        })
                    }
                } else {
                    continue
                }
            }
        }


        computerSwitch.forEach(function (element) {
            element.addEventListener(`change`, () => playerToggle())
            console.log(element)

        })

        restartBtn.addEventListener(`click`, () => {
            gameboard.clearBoard();
            game.resetTurns();
            restartBtn.style.visibility = `hidden`;
        })





        playerSelectForm.addEventListener(`submit`, function (event) {
            event.preventDefault();
            playerOneMarker = setPlayerMarker(`player-one-radio`);
            playerTwoMarker = setPlayerMarker(`player-two-radio`);
            p1Name = playerOneName.value;
            p2Name = playerTwoName.value

            playerOne = Player(1, p1Name, playerOneMarker);

            playerTwo = Player(2, p2Name, playerTwoMarker);

            game.setPlayer(playerOne);

            game.setPlayer(playerTwo);



        });




        startGameBtn.addEventListener(`click`, () => {
             
            
            function playGameTheme() {
                const gameTheme = new Audio(`audio/lightwave - game -theme.wav`);
                if (typeof gameTheme.loop === 'boolean') {
                    gameTheme.loop = true;
                    gameTheme.play();
                }
                else {
                    gameTheme.addEventListener('ended', function() {
                        this.currentTime = 0;
                        this.play();
                        }, false);
                }
            };
            const playerSelectExit = gsap.timeline();
            const boardEnter = gsap.timeline()
            const countdownAnimation = gsap.timeline();
            const boardSpaceAnimation = gsap.timeline({
                repeat: -1,
                repeatDelay: 0,
                defaults: {
                    ease: "power4",
                    
                }
            })
            const boardScaleAnimation = gsap.timeline({
                repeat: -1,
                repeatDelay: 0,
                defaults: {
                    ease: "power1.out"
                }
            });

            const boardSpinAnimation = gsap.timeline({
                repeat: -1,
                repeatDelay: 0,
                defaults: {
                    ease: "power1.out"
                }
            })

            const spaceDuration = 60 / 130;

            


            playerSelectExit
                .to("#player-select-form", { duration: 1, xPercent: -300 })
                .to("#player-select-form", { autoAlpha: 0 });

            countdownAnimation
                .to("#game-container", { duration: 1, xPercent: -300, yPercent: -35 })
                .to(".countdown-timer", { duration: 2,
                    text: { 
                        value: "3 2 1 Begin", 
                        delimiter: " "
                    }
                })
                .to(".countdown-timer", {duration: 0, autoAlpha: 0})
            
            boardEnter
                .to("#gameboard-container", { duration: 0, delay: 3, autoAlpha: 1 })
                .call(playGameTheme, null, 3 + (spaceDuration / 4));
            
            
            boardSpaceAnimation
                .to(".board-space", { background: "hsla(82, 100%, 55%, .85)" }, 0.61538)
                .to(".board-space", { background: "hsla(43, 100%, 53%, .85)" })
                .to(".board-space", { background: "hsla(30, 100%, 54%, .85)" })
                .to(".board-space", { background: "hsla(20, 100%, 55%, .85)" })
                .to(".board-space", { background: "hsla(13, 100%, 55%, .85)" })
                .totalDuration(spaceDuration * 8);

            boardScaleAnimation
                .to("#gameboard-container", { scale: 1.1 })
                .totalDuration(spaceDuration);


            boardSpinAnimation

                .to("#gameboard-container", { rotation: 90 }, 2)
                .to("#gameboard-container", { rotation: 180 }, 4)
                .to("#gameboard-container", { rotation: 270 }, 6)
                .to("#gameboard-container", { rotation: 360 }, 8)
                .totalDuration(spaceDuration * 16);


        })
    }

    function animationController() {

    }


    return {
        getDifficulty,
        displayBoard,
        menuController,
        setPlayerMarker,
        showRestartBtn,
    }
})();



displayController.displayBoard();
displayController.menuController();

