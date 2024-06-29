let yourscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const playerImg = document.querySelector("#player-img");
const computerImg = document.querySelector("#computer-img");
const playertext= document.querySelector("#playermsg");
const computertext = document.querySelector("#devicemsg");

const generatecomputerchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

const showwinner = (userwin, computerChoice, userChoice) => {
    if (userwin) {
        
        msg.innerText = `You won! ${userChoice} beats ${computerChoice}`;
        playertext.innerText = userChoice;
        computertext.innerText = computerChoice;
       
    } else {
       
        msg.innerText = `Computer won! ${computerChoice} beats ${userChoice}`;
        playertext.innerText = userChoice;
        computertext.innerText = computerChoice;
    }
}

const draw = () => {
    console.log("it's a tie");
    msg.innerText = "It's a tie!";
    playertext.innerText = "";
    computertext.innerText ="";
}

const updateGameImages = (userChoice, computerChoice) => {
    const imageMap = {
        'rock': 'Rock.png',
        'paper': 'Paper.png',
        'scissors': 'scissors.png'
    };

    playerImg.src = imageMap[userChoice];
    computerImg.src = imageMap[computerChoice];

    playerImg.style.transform = 'rotate(0deg)';
    computerImg.style.transform = 'rotate(0deg)';

    // Apply rotations based on choices
    if (userChoice === 'rock') {
        playerImg.style.transform = 'rotate(185deg)';
    } else if (userChoice === 'paper') {
        playerImg.style.transform = 'rotate(-55deg)';
    }

    if (computerChoice === 'scissors') {
        computerImg.style.transform = 'rotate(130deg)';
    } else if (computerChoice === 'paper') {
        computerImg.style.transform = 'rotate(-55deg)';
    }
}

const playgame = (userChoice) => {
    console.log("user choice", userChoice);

    const computerChoice = generatecomputerchoice();
    console.log("computer choice", computerChoice);

    updateGameImages(userChoice, computerChoice);

    if (userChoice === computerChoice) {
        draw();
    } else {
        let userwin = true;

        if (userChoice === "rock") {
            userwin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = computerChoice === "scissors" ? false : true;
        } else {
            userwin = computerChoice === "rock" ? false : true;
        }
        showwinner(userwin, computerChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

function checkScreenWidth() {
    const body = document.getElementById('body');
    if (window.innerWidth <= 780) {
        body.style.background = 'linear-gradient(to right, #faff5f, #00ec3f)';
    } else {
        body.style.backgroundImage = 'url("background.jpg")';
    }
}

window.addEventListener('resize', checkScreenWidth);
window.addEventListener('load', checkScreenWidth);
