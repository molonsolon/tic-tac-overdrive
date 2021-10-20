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

const Player = (player1Or2, name, marker) => {
    return {
        player1Or2,
        name,
        marker,

    }
};

let playerOne = Player(1, `joey`, `x`)
let playerTwo = Player(2, `computer`, `o`)

let computerMarker = playerTwo.marker;
let humanMarker = playerOne.marker;

const introAnimation = gsap.timeline();
    introAnimation
    .to("#intro-title", {duration: 1.5, rotate: 720, perspective: 500, scale: 50, ease: "back.out"  } )
    .from("#enter-btn", {duration: 1, x: 1000});



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

let currentBoard = gameboard.getBoard()


const game = (() => {

    let whoseTurn = 0;
    const getTurn = () => whoseTurn;
    const setTurn = () => whoseTurn++;


    let currentBoard = gameboard.getBoard()

    let computerMarker = playerTwo.marker;
    let humanMarker = playerOne.marker;

    const compMM = () => {
        return minimax(currentBoard, computerMarker).index;
    }

    const compR = () => {
        return gameboard.getRemainingSectors(currentBoard)[Math.floor(Math.random() * gameboard.getRemainingSectors(currentBoard).length)];
    }
  
    const computerOpponent = () => {
        compChoice = compChoiceLogic();
        let compChoiceSelector = document.querySelector(`#sector-${compChoice}`);
        compChoiceSelector.textContent = playerTwo.marker;
        gameboard.setBoard(compChoice, playerTwo.marker);
        checkResults(computerMarker);        
        setTurn();
    }

    

    const compChoiceLogic = () => {
        
        let compDifficulty = `new on the job`;
        
        
        
        
        if (compDifficulty === `unbeatable`) {
            return compMM();
        } else if (compDifficulty !== `unbeatable`) {
            let rNum = Math.random() * 100;
            console.log(rNum);
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


        if (checkResults(humanMarker)) {
            return { score: -1 };
        } else if (checkResults(computerMarker)) {
            return { score: 1 };
        } else if (emptyCellsStore.length === 0) {
            return { score: 0 };
        }



        const testHistory = [];

        for (let i = 0; i < emptyCellsStore.length; i++) {
            const currentTest = [];
            currentTest.index = currBdst[emptyCellsStore[i]];
            currBdst[emptyCellsStore[i]] = currMark;

            if (currMark === computerMarker) {
                const result = minimax(currBdst, humanMarker);
                currentTest.score = result.score;

            } else {
                const result = minimax(currBdst, computerMarker);
                currentTest.score = result.score;
            }

            currBdst[emptyCellsStore[i]] = currentTest.index;
            testHistory.push(currentTest);
        }

        let bestNextMove;

        if (currMark === computerMarker) {
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
        compMM
    }
})();



const displayController = (() => {
    const getBoard = gameboard.getBoard();
    const gameboardContainer = document.querySelector(`#gameboard-container`);
    
    function displayBoard() {
        
        function currPlayerTurn(currPlayer, currSpace, index) {
            currSpace.textContent = currPlayer.marker;
            gameboard.setBoard(index, currPlayer.marker);
            game.checkResults(currPlayer.marker);
            game.setTurn()
        }
        // const boardSpace = document.getElementById(`${i}`);

        for (let i = 0; i < gameboard.board.length; i++) {
            const boardSpace = document.createElement(`div`);
            boardSpace.classList.add(`board-space`);
            boardSpace.setAttribute(`id`, `sector-${i}`);
            gameboardContainer.appendChild(boardSpace);

            boardSpace.addEventListener(`click`, () => {
                if (boardSpace.textContent !== `x` && boardSpace.textContent !== `o` ) {
                    if (game.getTurn() % 2 == 0 && playerTwo.name == `computer`) {
                        currPlayerTurn(playerOne, boardSpace, i)
                        game.computerOpponent();
                        
                        
    
                    } else if (game.getTurn() % 2 == 0) {
                        currPlayerTurn(playerOne, boardSpace, i);
    
    
                    } else {
                       currPlayerTurn(playerTwo, boardSpace, i);
                    }
                }
                


            })
        }
    };

    

    function menuController() {
        const enterBtn = document.querySelector(`#enter-btn`);
        const startGameBtn = document.querySelector(`#start-btn`);
        const playerSelectForm = document.querySelector(`#player-select-form`);

        enterBtn.addEventListener(`click`, () =>{
            const introToPlayerSelect = gsap.timeline();
            
            introToPlayerSelect
                .to("#enter-btn", {duration: 1, xPercent: -150}, 0)
                .to("#intro-screen", {duration: .8, xPercent: -150}, .3)
                .to("#player-select-form", {duration: 1, xPercent: -150, yPercent: 0}, 1);
            
        });

        playerSelectForm.addEventListener(`submit`, function(event) {event.preventDefault();});

        startGameBtn.addEventListener(`click`, () => {
            const startGameAnimation = gsap.timeline();


            startGameAnimation
                .to("#player-select-form", {duration: 1, xPercent: -300}, 0)
                .to("#game-container", {duration: 1, xPercent: -300, yPercent: -35, ease: "bounce"}, 1);

        })
    }
    

    return {
        board: getBoard,
        displayBoard,
        menuController,
    }
})();




displayController.displayBoard();
displayController.menuController();

