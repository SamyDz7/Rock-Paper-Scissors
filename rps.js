/* 
play round :
    create computer choice *
    take player choice :
        prompt for answer 
        check validity 
        if not valid prompt again until valid
    compare 
    display outcome and tally points
play 5 rounds 
declare winner


*/ 
let computerplay;
let userplay;
let playerpoints = 0 , computerpoints = 0;
function computerchoice() {
    let choices = ["rock", "paper", "scissors"];
    computerplay = choices[Math.floor( Math.random() * choices.length)]
    return computerplay;
}

function checkplayerchoice() {
    while(userplay.toLowerCase()=="rock" != true && userplay.toLowerCase()=="paper" != true && userplay.toLowerCase()=="scissors" != true) {
    }
    return userplay = userplay.toLowerCase() ;
}
        

function playround(userplay , computerplay) {
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
        console.log("It's a draw. ")
    }
    else if (computerplay =="scissors") {
        console.log("You lose! scissors beats paper.")
        computerpoints++ ;
    }
    else {
        console.log("You win! paper beats rock.")
        playerpoints++ ;
    }
}

if (userplay == "scissors") {
    if (computerplay == "scissors") {
        console.log("It's a draw. ")
    }
    else if (computerplay =="rock") {
        console.log("You lose! rock beats scissors.")
        computerpoints++ ;
    }
    else {
        console.log("You win! scissors beats paper.")
        playerpoints++ ;
    }
}




}
playround(userplay , computerplay)
function playgame() {
    for(let i = 0 ; i < 5 ;i++) {
        computerchoice()
        userplay = prompt("Choose Rock, Paper or Scissors:")
        checkplayerchoice()
        playround(userplay , computerplay)
    }
    if (playerpoints > computerpoints) {
        console.log("Congratulations! you win the game.")
    }
    else if (computerpoints > playerpoints) {
        console.log("You lose.")
    }
    else {
        console.log("It's a draw!")
    }

}
playgame()