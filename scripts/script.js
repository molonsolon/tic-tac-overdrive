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

 
*/

const Player = (number, name, marker) => {
    return {
        number,
        name,
        marker,

    }
};



const introAnimation = gsap.timeline();
introAnimation
    .to("#intro-title", { duration: 1.5, rotate: 720, perspective: 500, scale: 50, ease: "back.out" })
    .from("#enter-btn", { duration: 1, x: 1000 });



const gameboard = (() => {
    let board = [0, 1, 2,
        3, 4, 5,
        6, 7, 8];

    const resultCheckSectors = {

        row1: () => [0, 1, 2].map(x => board[x]),
        row2: () => [3, 4, 5].map(x => board[x]),
        row3: () => [6, 7, 8].map(x => board[x]),
        column1: () => [0, 3, 6].map(x => board[x]),
        column2: () => [1, 4, 7].map(x => board[x]),
        column3: () => [2, 5, 8].map(x => board[x]),
        diagonal1: () => [0, 4, 8].map(x => board[x]),
        diagonal2: () => [2, 4, 6].map(x => board[x]),
    }


    function getRemainingSectors(currBdst) {
        return currBdst.filter(i => i != `o` && i != `x`);
    }

    const getBoard = () => board;

    function setBoard(index, marker) {
        board.splice(index, 1, marker);
    }


    return {
        resultCheckSectors,
        getRemainingSectors,
        getBoard: getBoard,
        setBoard: setBoard,
        board,
    }
})();



const game = (() => {

    let whoseTurn = 0;
    let playerOne;
    let playerTwo;
    
    function setPlayer(player) {
        if (player.number === 1) {
            playerOne = player; 
        } else if (player.number === 2) {
            playerTwo = player;
        }
    }


    const getTurn = () => whoseTurn;
    const setTurn = () => whoseTurn++;
    
    function getPlayerName(playerNumber) {
        if (playerNumber === 1) {
            return playerOne.name
        } else {
            return playerTwo.name
        }
    }

    function getPlayerMarker(playerNumber) {
        if (playerNumber === 1) {
            return playerOne.marker
        } else {
            return playerTwo.marker
        }
    }

    const compMM = () => {
        return minimax(gameboard.getBoard(), playerTwo.marker).index;
    }

    const compR = () => {
        return gameboard.getRemainingSectors(gameboard.getBoard())[Math.floor(Math.random() * gameboard.getRemainingSectors(gameboard.getBoard()).length)];
    }

    const computerOpponent = () => {
        compChoice = compChoiceLogic();
        let compChoiceSelector = document.querySelector(`#sector-${compChoice}`);
        compChoiceSelector.textContent = playerTwo.marker;
        gameboard.setBoard(compChoice, playerTwo.marker);
        checkResults(playerTwo.marker);
        setTurn();
    }

    const compChoiceLogic = () => {

        let compDifficulty = `unbeatable`;

        if (compDifficulty === `unbeatable`) {

            return compMM();
        } else if (compDifficulty !== `unbeatable`) {
            let rNum = Math.random() * 100;

            if (compDifficulty === `highly skilled`) {
                if (rNum < 75) {

                    return compMM()
                } else {

                    return compR()
                }
            } else if (compDifficulty === `in training`) {

                if (rNum < 50) {

                    return compMM();
                } else {

                    return compR();
                }
            } else if (compDifficulty === `new on the job`) {
                if (rNum < 25) {

                    return compMM()
                } else {

                    return compR()
                }
            }
        }
    }




    function checkResults(currMark) {
        for (let key in gameboard.resultCheckSectors) {

            if (gameboard.resultCheckSectors[`${key}`]().join(`,`) === `${currMark},${currMark},${currMark}`) {
                return true

            }
        }

    }


    function minimax(currBdst, currMark) {
        const emptyCellsStore = gameboard.getRemainingSectors(currBdst);
        let score;

        if (checkResults(playerOne.marker)) {
            return { score: -1 };
        } else if (checkResults(playerTwo.marker)) {
            return { score: 1 };
        } else if (emptyCellsStore.length === 0) {
            return { score: 0 };
        }

        const testHistory = [];

        for (let i = 0; i < emptyCellsStore.length; i++) {
            const currentTest = [];
            currentTest.index = currBdst[emptyCellsStore[i]];
            currBdst[emptyCellsStore[i]] = currMark;

            if (currMark === playerTwo.marker) {
                const result = minimax(currBdst, playerOne.marker);
                currentTest.score = result.score;

            } else {
                const result = minimax(currBdst, playerTwo.marker);
                currentTest.score = result.score;
            }

            currBdst[emptyCellsStore[i]] = currentTest.index;
            testHistory.push(currentTest);
        }

        let bestNextMove;

        if (currMark === playerTwo.marker) {
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
        compMM,
        getPlayerName,
        setPlayer,
        playerOne,
        playerTwo,
        getPlayerMarker,
    }
})();



const displayController = (() => {
    const getBoard = gameboard.getBoard();
    const gameboardContainer = document.querySelector(`#gameboard-container`);
    const enterBtn = document.querySelector(`#enter-btn`);
    const startGameBtn = document.querySelector(`#start-btn`);
    const playerSelectForm = document.querySelector(`#player-select-form`);
    
    function displayBoard() {

        function currPlayerTurn(currPlayer, currSpace, index) {
            currSpace.textContent = currPlayer.marker;
            gameboard.setBoard(index, currPlayer.marker);
            game.checkResults(currPlayer.marker);
            game.setTurn()
        }

        for (let i = 0; i < gameboard.board.length; i++) {
            const boardSpace = document.createElement(`div`);
            boardSpace.classList.add(`board-space`);
            boardSpace.setAttribute(`id`, `sector-${i}`);
            gameboardContainer.appendChild(boardSpace);

            boardSpace.addEventListener(`click`, () => {
                if (boardSpace.textContent !== `x` && boardSpace.textContent !== `o`) {
                    if (game.getTurn() % 2 === 0 && game.getPlayerName(2) === `computer`) {
                        currPlayerTurn(playerOne, boardSpace, i)
                        game.computerOpponent();



                    } else if (game.getTurn() % 2 === 0) {
                        currPlayerTurn(playerOne, boardSpace, i);


                    } else {
                        currPlayerTurn(playerTwo, boardSpace, i);
                    }
                }



            })
        }
    };

    function setPlayerMarker(radioGroup) {
                let e = document.getElementsByClassName(radioGroup);
                console.log(e);
                for (const es of e) {
                    if (es.checked) {
                        console.log(es.checked)
                        return es.value;
                    } else {
                        continue
                    }
                }
            }

    function menuController() {


        enterBtn.addEventListener(`click`, () => {
            const introToPlayerSelect = gsap.timeline();

            introToPlayerSelect
                .to("#enter-btn", { duration: 1, xPercent: -150 }, 0)
                .to("#intro-screen", { duration: .8, xPercent: -150 }, .3)
                .to("#player-select-form", { duration: 1, xPercent: -150, yPercent: 0 }, 1);

        });

        // form control

        

       
        
        playerSelectForm.addEventListener(`submit`, function (event) { 
            event.preventDefault(); 
            playerOneMarker = setPlayerMarker(`player-one-radio`);
            console.log(setPlayerMarker(`player-one-radio`))
            playerTwoMarker = setPlayerMarker(`player-two-radio`);
            playerOneName = document.querySelector(`#player-one-name`).value;
            playerTwoName = document.querySelector(`#player-two-name`).value;

            playerOne = Player(1, playerOneName, playerOneMarker);
            
            playerTwo = Player(2, playerTwoName, playerTwoMarker);

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
        board: getBoard,
        displayBoard,
        menuController,
        setPlayerMarker,
         
        }
})();




displayController.displayBoard();
displayController.menuController();

