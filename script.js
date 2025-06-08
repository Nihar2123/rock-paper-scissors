function getComputerChoice(){
    return Math.floor(Math.random() * 100 % 3) + 1;
}

function getHumanChoice(callback){
    const choice = document.querySelector('#choices');
    function handler(event){
        let target = event.target;
        let val = 0;

        switch(target.id){
            case 'rock': val = 1; break;
            case 'paper': val = 2; break;
            case 'scissor': val = 3; break;
        }

        if(val > 0){
            choice.removeEventListener('click', handler);
            callback(val);
        }
    };

    choice.addEventListener('click', handler);
}

const computerDisplay = document.querySelector('#computer');
const humanDisplay = document.querySelector('#human');

function playRound(){
    getHumanChoice(function(humanChoice){
        let computerChoice = getComputerChoice();
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
        computerDisplay.textContent = computerScore;
        humanDisplay.textContent = humanScore;
    });
}

function playGame(){
    while(humanScore < 5 && computerScore < 5){
        playRound();
    }
}

let humanScore = 0;
let computerScore = 0;
let s1 = 'You Lose! ', s2 = 'You Win! ';
let p1 = 'Rock beats Scissors', p2 = 'Scissors beats Paper', p3 = 'Paper beats Rock';
//playGame();
