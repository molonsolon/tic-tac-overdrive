/* 
                To-Do

    [x] Try switching row/column/diagonal functions into game module.
    [x] Figure out object of row/column/diagonal functions, loop through for results check.
    [ ] Make game.checkResults() return finalResult, have displayController check when this value
        equals something other than undefined then display that result via a div toggle with
        win message in body.
        --- returning finalResult from game module gets a referenceError: finalResult is not defined..
            figure this out!!!


*/



const gameboard = (() => {
    let board = [0, 1, 2,
                 3, 4, 5,
                 6, 7, 8];
    
    const resultCheckSectors = {

        row1: () => [0,1,2].map(x => board[x]),
        row2:() => [3,4,5].map(x => board[x]),
        row3: () => [6,7,8].map(x => board[x]),
        column1: () => [0,3,6].map(x => board[x]),
        column2: () => [1,4,7].map(x => board[x]),
        column3: () => [2,5,8].map(x => board[x]),
        diagonal1: () => [0,4,8].map(x => board[x]),
        diagonal2: () => [2,4,6].map(x => board[x]),
    }
    
    function getRemainingSectors() {
        return board.filter(i => i != `o`&& i != `x`);
    }

    const getBoard = () => board;
    function setBoard(index, marker) {
        board.splice(index, 1, marker);
    }                   


    return { 
        resultCheckSectors,
        getRemainingSectors,
        getBoard: getBoard,
        setBoard: setBoard
    }
})();

const game = (() => {
    
    let whoseTurn = 0;
    const getTurn = () => whoseTurn;
    const setTurn = () => whoseTurn++;
    function choiceController() {
        
    }
    
    const  computerOpponent = () => {
            randomSectorSelect = gameboard.getRemainingSectors()[Math.floor(Math.random() * gameboard.getRemainingSectors().length)]
            console.log(randomSectorSelect);
            randomEmptyIndex = gameboard.getBoard()[randomSectorSelect];
            console.log(randomEmptyIndex)
            let computerChoice = document.querySelector(`#sector-${randomEmptyIndex}`);
            console.log(computerChoice)
            computerChoice.textContent = playerTwo.marker;
            gameboard.setBoard(randomEmptyIndex, playerTwo.marker);
            game.checkResults();
            game.setTurn();
            console.log(`work`);
    }

    const checkResults = () => {

        for (let key in gameboard.resultCheckSectors) {
            
            let finalResult;
            if (gameboard.resultCheckSectors[`${key}`]().join(``) === `xxx` ||
                gameboard.resultCheckSectors[`${key}`]().join(``) === `ooo`) {
                if (whoseTurn % 2 === 0) {
                    console.log(`playerOne wins!`)
                    return finalResult = `playerOne wins!`
                } else if (whoseTurn % 2 !== 0) {
                    console.log(`playerTwo wins!`)
                    return finalResult = `playerTwo wins!`
                }
                
            // improve this logic, it isn't catching the case of a win in the last turn
            } else if ((whoseTurn === 8) &&
                (gameboard.resultCheckSectors[`${key}`]().join(``) != `xxx`) &&
                (gameboard.resultCheckSectors[`${key}`]().join(``) != `ooo`))
                {
                console.log(`it's a tie!`);
                return finalResult = `it's a tie!`
            } else {
                console.log(`no matches`);
            }
        }
    }

    function minimax() {
        const emptyCellsStore = getRemainingSectors(board);
        
        if (finalResult == `playerOne wins!`) {
            return {score: -1};
        } else if (finalResult == `playerTwo wins!`) {
            return {score: 1};
        } else if (emptyCellsStore.length === 0) {
            return {score: 0};
        }

        const testHistory = [];

        for (let i = 0; i < emptyCellsStore.length; i++) {
            
            const currentTest = [];

            currentTest.index = board[emptyCellsStore[i]];

            board[emptyCellsStore[i]] = playerTwo.marker;

            if (whoseTurn % 2 !== 0) {
                const result = minimax(board);

                currentTest.score = result.score;
            } else {
                const result = minimax(board);
                currentTest.score = result.score;
            }

            board[emptyCellsStore[i]] = currentTest.index;

            testHistory.push(currentTest);
        }

        let bestNextMove;

        if (whoseTurn % 2 !== 0) {
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
        computerOpponent,
        // finalResult,
        getTurn,
        setTurn 
    }
})();

const displayController = (() => {
    const getBoard = gameboard.getBoard();
    const gameboardContainer = document.querySelector(`#gameboard-container`);
    
    function displayBoard() {
        
        // const boardSpace = document.getElementById(`${i}`);
        // 

        for (let i = 0; i <= 8; i++) {
            const boardSpace = document.createElement(`div`);
            boardSpace.classList.add(`board-space`);
            boardSpace.setAttribute(`id`, `sector-${i}`);
            gameboardContainer.appendChild(boardSpace);

            boardSpace.addEventListener(`click`, () => {
                
                if (game.getTurn() % 2 == 0 && boardSpace.textContent !== `x` && boardSpace.textContent !== `o` && playerTwo.name == `computer`) {
                    boardSpace.textContent = playerOne.marker;       
                    gameboard.setBoard(i, boardSpace.textContent);
                    game.checkResults();
                    game.setTurn();
                    game.computerOpponent();

                } else if (game.getTurn() % 2 == 0 && boardSpace.textContent !== `x` && boardSpace.textContent !== `o`) {
                    boardSpace.textContent = playerOne.marker;           
                    gameboard.setBoard(i, boardSpace.textContent);
                    game.checkResults();
                    game.setTurn(); 

                
                } else if (boardSpace.textContent !== `x` && boardSpace.textContent !== `o`) {
                    boardSpace.textContent = playerTwo.marker;
                    gameboard.setBoard(i, boardSpace.textContent);
                    game.checkResults();
                    game.setTurn();

                }
                
                
            })
        } 
    };

    return {
        board: getBoard,
        displayBoard: displayBoard
    }
})();

const Player = (player1Or2, name, marker) => 
{
    return {
        player1Or2,
        name, 
        marker,
        
    }
};


let playerOne = Player(1, `joey`, `x`)
let playerTwo = Player(2, `computer`, `o`)

displayController.displayBoard();

