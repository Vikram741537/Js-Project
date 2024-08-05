let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompchoice = () =>{
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"]
    const randidx = Math.floor(Math.random()*3)
    return options[randidx]
}
const drawGame = () =>{
    
    msg.innerText = "Game was Draw. Play Again!"
    msg.style.backgroundColor = " #081b31"
}
const showWinner = (userWin, userChoice, compchoice) =>{
 if(userWin){
    userScore++
    userScorePara.innerText = userScore
    
    msg.innerText = `You Win Your ${userChoice} beats ${compchoice}`
    msg.style.backgroundColor = "green"
 }else{
    compScore++
    compScorePara.innerText = compScore
    
    msg.innerText = `You Lost!Your ${compchoice} beats ${userChoice}`
    msg.style.backgroundColor = "red"

 }
}
const playGame = (userChoice) => { 
    console.log("user choice =", userChoice )
    //generate compute choice
    const compchoice = genCompchoice()
    console.log("comp choice = ", compchoice)
    if(userChoice == compchoice){
       drawGame();
    } else{
        let userWin = true;
        if(userChoice=="rock"){
            userWin = compchoice == "paper" ? false : true
        } else if(userChoice = "paper"){
            userWin = compchoice == "scissors" ? false : true
        } else {
            userWin = compchoice == "rock" ? false : true
        }
        showWinner(userWin , userChoice, compchoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
    const userChoice = choice.getAttribute("id") 
    playGame(userChoice)
    })
})