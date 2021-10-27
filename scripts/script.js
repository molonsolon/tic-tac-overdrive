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
    [ ] game win / lose / draw announcements (render animated announcements on true checkwin function call)
        [ ] work out draw logic as it's not written into check results yet.
    [ ] play again / main menu button under results announcement;
    [ ] form validation + lock other radio buttons when choice is made.
    [ ] game difficulty selector  
    [ ] Purely aesthetic UI completion (backgrounds, animations, music, sound effects)
    [x] Put get player info functions in Player factory possibly?
 
*/

const Player = (number, name, marker) => {

    const getNumber = () => number;
    const getName = () => name;
    const getMarker = () => marker;
    
    
    return {
        getNumber,
        getName,
        getMarker,

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


    return {
        
        getResultCheckSectors,
        getRemainingSectors,
        getBoard,
        setBoard,
    
    }
})();



const game = (() => {

    let _whoseTurn = 0;
    let playerOne;
    let playerTwo;
    let result = null;

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
            return playerTwo.getmarker();
        }
    }

    const getTurn = () => _whoseTurn;
    const setTurn = () => _whoseTurn++;
    


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
        if (checkResults(playerTwo.getMarker())) {
            alert(`computer win!`)
        }
        setTurn();
    }

    const _compChoiceLogic = () => {

        let compDifficulty = `in training`;

        if (compDifficulty === `unbeatable`) {

            return _compMM();
        } else if (compDifficulty !== `unbeatable`) {
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

            } 
        }

    }

    const finalWinCheck = () => {
        if (checkResults(playerOne.getMarker())) {
            alert(`player 1 win`);
            
            
        } else if (checkResults(playerTwo.getMarker())) {
            if (playerTwo.getName() === `computer`) {
                alert(`computer win`)
            } else {
                alert(`player 2 win`)
            }
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
        computerOpponent,
        getTurn,
        setTurn,
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
                .to("#player-select-form", { duration: 1, xPercent: -150.2, yPercent: 0 }, 1);

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
                        playerTwoIcon.src = "/images/player-two-icon.png";
                        playerTwoName.value = ``;
                        playerTwoName.disabled = false;
                    } else if (value === `computer`) {
                        playerTwoIcon.src ="/images/ai-icon.png"
                        playerTwoName.value = `computer`;
                        playerTwoName.disabled = true;
                    }
                } else {
                continue
                }
            }
        }


       computerSwitch.forEach(function(element) {
           element.addEventListener(`change`, () => playerToggle())
           console.log(element)

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
            const startGameAnimation = gsap.timeline();


            startGameAnimation
                .to("#player-select-form", { duration: 1, xPercent: -300 }, 0)
                .to("#game-container", { duration: 1, xPercent: -300, yPercent: -35, ease: "bounce" }, 1);

        })
    }


    return {
        
        displayBoard,
        menuController,
        setPlayerMarker,
        }
})();




displayController.displayBoard();
displayController.menuController();

