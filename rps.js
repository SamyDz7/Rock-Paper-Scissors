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
function computerchoice() {
    let choices = ["rock", "paper", "scissors"];
    computerplay = choices[Math.floor( Math.random() * choices.length)]
    return computerplay;
}
computerchoice()

userplay = prompt("Choose Rock, Paper or Scissors:")
function checkplayerchoice() {
    while(userplay.toLowerCase()=="rock" != true && userplay.toLowerCase()=="paper" != true && userplay.toLowerCase()=="scissors" != true) {
        userplay = prompt("Choose Rock, Paper or Scissors:")
    }
    return userplay = userplay.toLowerCase() ;
}
checkplayerchoice()
        

checkplayerchoice()
function playround(userplay , computerplay) {
if (userplay == "rock") {
    if (computerplay == "rock") {
        console.log("It's a draw. ")
    }
    else if (computerplay =="paper") {
        console.log("You lose! paper beats rock.")
    }
    else {
        console.log("You win! rock beats scissors.")
    }
}
if (userplay == "paper") {
    if (computerplay == "paper") {
        console.log("It's a draw. ")
    }
    else if (computerplay =="scissors") {
        console.log("You lose! scissors beats paper.")
    }
    else {
        console.log("You win! paper beats rock.")
    }
}

if (userplay == "scissors") {
    if (computerplay == "scissors") {
        console.log("It's a draw. ")
    }
    else if (computerplay =="rock") {
        console.log("You lose! rock beats scissors.")
    }
    else {
        console.log("You win! scissors beats paper.")
    }
}




}
playround(userplay , computerplay)