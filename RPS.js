const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const shootBtn = document.getElementById("shoot-button")
const playDisp = document.getElementById('player-display')
const compDisp = document.getElementById('computer-display')
const textDisplay = document.getElementById('game-log')


let player = ''
let computer = ''

function generateComputer() {
    let number = Math.floor(Math.random() * 3) + 1

    switch (number) {
        case 1: 
            computer = 'rock'
            compDisp.textContent = 'Rock'
            break;
        case 2: 
            computer = 'paper'
            compDisp.textContent = 'Paper'
            break;
        case 3:
            computer = 'scissors'
            compDisp.textContent = 'Scissors'
            break;
    }
   
}

function determineWinner() {
    if (player === computer) {
        textDisplay.textContent = 'Tie'
    } else if (player == 'rock' && computer == 'scissors') {
        textDisplay.textContent = 'Player Wins'
    } else if (player == 'paper' && computer == 'rock') {
        textDisplay.textContent = 'Player Wins'
    } else if (player == 'scissors' && computer == 'paper') {
        textDisplay.textContent = 'Player Wins'
    } else {
        textDisplay.textContent = 'Computer Wins'
    }
}

function addButtonBackground(hand) {
    
    switch (hand) {
        case 'rock': 
            rockBtn.style.backgroundColor = 'rgb(207, 230, 161)'
            paperBtn.style.backgroundColor = 'rgb(234, 242, 239)'
            scissorsBtn.style.backgroundColor = 'rgb(234, 242, 239)'
            break;
        case 'paper':
            paperBtn.style.backgroundColor = 'rgb(207, 230, 161)'
            rockBtn.style.backgroundColor = 'rgb(234, 242, 239)'
            scissorsBtn.style.backgroundColor = 'rgb(234, 242, 239)'
            break;
        case 'scissors':
            scissorsBtn.style.backgroundColor = 'rgb(207, 230, 161)'
            paperBtn.style.backgroundColor = 'rgb(234, 242, 239)'
            rockBtn.style.backgroundColor = 'rgb(234, 242, 239)'
            break;
    }
    
}

shootBtn.addEventListener('click', function() {
    if (!player) {
        textDisplay.textContent = 'Please Select Either Rock, Paper, or Scissors'
    } else {
        generateComputer()
        determineWinner()
    }
   

   
})

rockBtn.addEventListener('click', function() {
    player = 'rock'
    addButtonBackground(player)
    playDisp.textContent = 'Rock'
})

paperBtn.addEventListener('click', function() {
    player = 'paper'
    addButtonBackground(player)
    playDisp.textContent = 'Paper'

})

scissorsBtn.addEventListener('click', function() {
    player = 'scissors'
    addButtonBackground(player)
    playDisp.textContent = 'Scissors'

})


