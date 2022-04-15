let computerplay;
let userplay;
let playerpoints = 0 , computerpoints = 0;
function computerchoice() {
    let choices = ["rock", "paper", "scissors"];
    computerplay = choices[Math.floor( Math.random() * choices.length)]
    return computerplay;
}

const rockPlayer = document.querySelector('.rockbtn') ;
const paperPlayer = document.querySelector('.paperbtn') ;
const scissorsPlayer = document.querySelector('.scissorsbtn') ;
const scores = document.querySelector('.scores')




function playround(userplay) {
computerchoice() 
if (userplay == "rock") {
    if (computerplay == "rock") {
        console.log("It's a draw. ")
    }
    else if (computerplay =="paper") {
        console.log("You lose! paper beats rock.")
        computerpoints++ ;
    }
    else {
        console.log("You win! rock beats scissors.")
        playerpoints++ ;
    }
}
if (userplay == "paper") {
    if (computerplay == "paper") {
        return console.log("It's a draw. ")
    }
    else if (computerplay =="scissors") {
        return console.log("You lose! scissors beats paper.")
        computerpoints++ ;
    }
    else {
        return console.log("You win! paper beats rock.")
        playerpoints++ ;
    }
}

if (userplay == "scissors") {
    if (computerplay == "scissors") {
        return console.log("It's a draw. ")
    }
    else if (computerplay =="rock") {
        return console.log("You lose! rock beats scissors.")
        computerpoints++ ;
    }
    else {
        return console.log("You win! scissors beats paper.")
        playerpoints++ ;
    }

}
scores.innerText = `${playerpoints} : ${computerpoints} ` ;
if(playerpoints == 5) {
    console.log('you win')
}
else if(computerpoints == 5) {
    console.log('you lose')
}
}

rockPlayer.addEventListener("click",() => {playround('rock') }) 
paperPlayer.addEventListener("click",() => {playround('paper')})
scissorsPlayer.addEventListener("click",() => {playround('rock')} )
scores.innerText = `${playerpoints} : ${computerpoints} ` ;


