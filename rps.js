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
let choice;
let userplay;
function computerchoice() {
    let choices = ["rock", "paper", "scissors"];
    choice = choices[Math.floor( Math.random() * choices.length)]
    return choice;
}
computerchoice()

userplay = prompt("Choose Rock, Paper or Scissors:")
function checkplayerchoice() {
    while(userplay.toLowerCase()=="rock" != true && userplay.toLowerCase()=="paper" != true && userplay.toLowerCase()=="scissors" != true) {
        userplay = prompt("Choose Rock, Paper or Scissors:")
    }
    return userplay ;
}
checkplayerchoice()
console.log(userplay)
        
    

checkplayerchoice()
function playround(userplay , computerplay) {




}