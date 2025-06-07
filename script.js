function getComputerChoice(){
    return Math.floor(Math.random() * 100 % 3) + 1;
}

function getHumanChoice(){
    let str = prompt("Enter your choice");
    str = str.toLowerCase();
    if(str === 'rock') return 1;
    else if (str === 'paper') return 2;
    else if(str === 'scissors') return 3;
    return -1;
}

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if(computerChoice === humanChoice){
        console.log('It\'s a tie');
        humanScore++;
        computerScore++;
    }
    else if (computerChoice === 1){
        if(humanChoice === 2) {console.log(s2 + p3); humanScore++;}
        else {console.log(s1 + p1); computerScore++;}
    }
    else if(computerChoice === 2){
        if(humanChoice === 3) {console.log(s2 + p2); humanScore++;}
        else {console.log(s1 + p3); computerScore++;}
    }
    else if(computerChoice === 3){
        if(humanChoice === 1) {console.log(s2 + p1); humanScore++;}
        else {console.log(s1 + p2); computerScore++;}
    }

    console.log('Our Score: ' + humanScore + ' Computer: ' + computerScore);
}

function playGame(){
    let n = 5;
    while(n--){playRound();}
    if(humanScore > computerScore) console.log('You Win!');
    else if (humanScore < computerScore) console.log('You Lose!');
    else console.log('It\'s a tie');
}

let humanScore = 0;
let computerScore = 0;
let s1 = 'You Lose! ', s2 = 'You Win! ';
let p1 = 'Rock beats Scissors', p2 = 'Scissors beats Paper', p3 = 'Paper beats Rock';
playGame();
