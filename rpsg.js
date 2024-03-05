let userscore =0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const canvas = document.getElementById("#confetti");
const jsConfetti = new JSConfetti();
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice= () =>
{
    const options =["Rock","Paper","Scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =() =>
{
    msg.innerText ="game was draw. play again.";
    msg.style.backgroundColor = "black";
}


const showWinner = (userWin ,userChoice , compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `you win!  your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        if(userscore == 5 ){
            msg.innerText =`You Won`;
            jsConfetti.addConfetti()
        }
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        if(compscore== 5 ){
            msg.innerText =`Computer Won`
        }
    }
}
const playGame = (userChoice) =>
{
    console.log("userChoice = " + userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice = " + compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin =compChoice === "Scissors" ? false : true;
        }else{
            userWin =compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});