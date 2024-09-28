const addBoxButton = document.getElementById('togglerulebook');
const hiddenBox = document.querySelector('.rulebook.hidden');
const crossbtn = document.getElementById('cross');

const addBoxButton1 = document.getElementById('addBox');
const hiddenBox1 = document.querySelector('.sub-box.hidden');

const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('.number');
const result = document.getElementById('yourchoice');
const mainElement = document.querySelector(".main");


let savedCompsScore = localStorage.getItem('compsScore');
let savedUsersScore = localStorage.getItem('usersScore');

let comps = document.getElementById('scorecomp');
let users = document.getElementById('scoreuser');

comps.textContent = savedCompsScore !== null ? savedCompsScore : 0;
users.textContent = savedUsersScore !== null ? savedUsersScore : 0;


const hidemumma = document.querySelector('.mumma');
const hideaddbox = document.querySelector('.addBox');
const statusbar = document.getElementById('status');
const hidemainresbox = document.querySelector('.mainresbox')


addBoxButton.addEventListener('click',() =>{
    if(hiddenBox.classList.contains('hidden')){
        hiddenBox.classList.remove('hidden');
    }else{
        hiddenBox.classList.add('hidden');  
    }
    
    crossbtn.addEventListener('click',function() {
        hiddenBox.classList.add('hidden');  
    });
});



buttons.forEach(button => {
    button.addEventListener('click', playGame); //Invoke this event
    button.addEventListener('click', function () {
        const backgroundValue = getComputedStyle(button).getPropertyValue("background-image");
        const borderColor = getComputedStyle(button).getPropertyValue("border-color");
        
        mainElement.style.backgroundImage = backgroundValue;
        mainElement.style.borderColor = borderColor;
        hidemumma.style.display = 'none'; 
        hideaddbox.style.display = 'flex'; 
        hidemainresbox.style.display = 'block';

    });
});



function playGame(event) {
    const playerChoice = event.target.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const winner = getWinner(playerChoice, computerChoice);
    const secondPulse = document.querySelector(".twopulse");
    const firstPulse = document.querySelector(".onepulse");

        statusbar.textContent = `${winner} `;

    const mainTwoElement = document.querySelector('.main.two');
      
        switch (computerChoice) {
            case 'rock':
                mainTwoElement.style.backgroundImage = 'var(--rock)'; 
                mainTwoElement.style.borderColor = 'var(--bx1)'; 
                break;
            case 'paper':
                mainTwoElement.style.backgroundImage = 'var(--paper)'; 
                mainTwoElement.style.borderColor = 'var(--bx3)'; 
            case 'scissors':
                mainTwoElement.style.backgroundImage = 'var(--scissors)'; 
                mainTwoElement.style.borderColor = 'var(--bx2)'; 
                break;
            default:
                break;
        }

addBoxButton1.addEventListener('click',() =>{

        toggleAnimation();
        function toggleAnimation() {
            console.log("toggled");
             firstPulse.classList.remove("animate");
             secondPulse.classList.remove("animate");
         }
        hidemumma.style.display = 'block';
        hidemainresbox.style.display = 'none';
        if (parseInt(users.textContent) === 5 || parseInt(comps.textContent) === 5) {
            hiddenBox1.classList.remove('hidden'); 
            users.textContent = 0;
            comps.textContent = 0;
            hiddenBox1.classList.add('hidden'); 

        }
    
});

    if (winner === "YOU WIN") {
        users.textContent = parseInt(users.textContent) + 1;
    
    localStorage.setItem('usersScore', users.textContent);
        console.log(`${parseInt(users.textContent)}`)
        if (parseInt(users.textContent) === 5) {
            hiddenBox1.classList.remove('hidden'); 

        }
        toggleAnimation();
        function toggleAnimation() {
            console.log("toggled");
             firstPulse.classList.toggle("animate");
         }
    } else if (winner === "YOU LOST") {
        comps.textContent = parseInt(comps.textContent) + 1;
    
    localStorage.setItem('compsScore', comps.textContent);
        toggleAnimation();
        function toggleAnimation() {
            console.log("toggled");
             secondPulse.classList.toggle("animate");
         }
    }
    else{
        firstPulse.classList.toggle("animate");
        secondPulse.classList.toggle("animate");
     }
}


function getWinner(player, computer) {
    if (player === computer) {
        return "TIE UP";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "YOU WIN";
    } else {
        return "YOU LOST";
    }
}



