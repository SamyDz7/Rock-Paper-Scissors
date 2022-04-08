/* 
play round :
    create computer choice
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
function computerchoice() {
    let choices = ["rock", "paper", "scissors"];
    choice = choices[Math.floor( Math.random() * choices.length)]
    return choice;
}
computerchoice()
console.log(choice)






function checkplayerchoice() {
    let userplay = prompt("Choose Rock, Paper or Scissors:")
    if(userplay.toLowerCase()=="rock" || userplay.toLowerCase()=="paper" || userplay.toLowerCase()=="scissors") {
        return userplay; 
    }
    else {
        
        }
}
        
    

checkplayerchoice()
let userplay = prompt("Choose Rock, Paper or Scissors:")
function playround(userplay , computerplay) {




}