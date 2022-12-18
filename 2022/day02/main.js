// A = Rock = 1
// B = Paper = 2
// C = Scissors = 3

// X = Rock = 1
// Y = Paper = 2
// Z = Scissors = 3

// win = 6
// draw = 3
// lost = 0

let util = require('../utils');

let year = 2022;
let day = 2;

// Part 1

util.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let shapeScores = {
        rock: 1,
        paper: 2,
        scissors: 3,
    };

    let opponentMoves = {
        A: 'rock',
        B: 'paper',
        C: 'scissors',
    };

    let myMoves = {
        X: 'rock',
        Y: 'paper',
        Z: 'scissors'
    }

    let score = 0;
    for(let line of lines) {
        let parts = line.split(' ');

        let myMove = myMoves[parts[1]];
        let opponentMove = opponentMoves[parts[0]];

        score += shapeScores[myMove];

        if(myMove === opponentMove) {
            score += 3;
        }
        else {
            if(opponentMove === 'rock' && myMove === 'paper') {
                score += 6;
            }
            if(opponentMove === 'paper' && myMove === 'scissors') {
                score += 6;
            }
            if(opponentMove === 'scissors' && myMove === 'rock') {
                score += 6;
            }
        }
    }
    
    console.log(score);
}).catch((err) => {
    console.log(err, err.stack);
});


// Part 2

util.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let shapeScores = {
        rock: 1,
        paper: 2,
        scissors: 3,
    };

    let opponentMoves = {
        A: 'rock',
        B: 'paper',
        C: 'scissors',
    };

    let winning = {
        rock: 'paper',
        scissors: 'rock',
        paper: 'scissors',
    }

    let score = 0;
    for(let line of lines) {
        let parts = line.split(' ');

        let opponentMove = opponentMoves[parts[0]];

        let myMove;
        if(parts[1] === 'Y')  {
            myMove = opponentMove;
            score += 3;
        }
        else if(parts[1] === 'Z') {
            score += 6;
            myMove = winning[opponentMove];
        }
        else {
            for(let key in winning) {
                if(winning[key] === opponentMove) {
                    myMove = key;
                }
            }
        }

        score += shapeScores[myMove];
    }
    
    console.log(score);
}).catch((err) => {
    console.log(err, err.stack);
});