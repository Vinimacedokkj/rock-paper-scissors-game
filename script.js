var pcPoints = 0;
var playerPoints = 0;

alert('This game finishes in 10 points, who make it first will be the winner.\nGood Luck!');

function generateRandom() {
  let pcPlay = Math.random();
  
  if (pcPlay >= 0 && pcPlay < 0.3) {
    pcPlay = 'Rock';
  } else if (pcPlay >= 0.3 && pcPlay < 0.6) {
    pcPlay = 'Paper';
  } else if (pcPlay >= 0.6 && pcPlay <= 1) {
    pcPlay = 'Scissors';
  }
  
  return pcPlay;
}

var finalResult = document.getElementById('result');

// Rock function
function rockFunction() {
  let pcPlay = generateRandom();
  
  let playerPlay = 'Rock';
  
  if (playerPlay === 'Rock' && pcPlay === 'Rock') {
    finalResult.innerHTML = `You 🗿 x 🗿 PC<br>${playerPoints}x${pcPoints}`;
    
  } else if (playerPlay === 'Rock' && pcPlay === 'Paper') {
    pcPoints += 1; 
    finalResult.innerHTML = `You 🗿 x 📃 PC<br>${playerPoints}x${pcPoints}`;
    
  } else if (playerPlay === 'Rock' && pcPlay === 'Scissors') {
    playerPoints += 1;
    finalResult.innerHTML = `You 🗿 x ✂ PC<br>${playerPoints}x${pcPoints}`;
  }
  
  if (playerPoints == 10) {
    alert(`You won\nFinal result: You ${playerPoints} x ${pcPoints} PC`);
    pcPoints = 0;
    playerPoints = 0;
    finalResult.innerHTML = `Score reseted<br>You ${playerPoints} x ${pcPoints} PC`;
} else if (pcPoints == 10) {
    alert(`PC won\nFinal result: You ${playerPoints} x ${pcPoints} PC`);
    pcPoints = 0;
    playerPoints = 0;
    finalResult.innerHTML = `Score reseted<br>You ${playerPoints} x ${pcPoints} PC`;
  }
}

// Paper function
function paperFunction() {
  let pcPlay = generateRandom();
  
  let playerPlay = 'Paper';
  
  if (playerPlay === 'Paper' && pcPlay === 'Rock') {
    playerPoints += 1;
    finalResult.innerHTML = `You 📃 x 🗿PC<br>${playerPoints}x${pcPoints}`;
    
  } else if (playerPlay === 'Paper' && pcPlay === 'Paper') {
    finalResult.innerHTML = `You 📃 x 📃 PC<br>${playerPoints}x${pcPoints}`;
    
  } else if (playerPlay === 'Paper' && pcPlay === 'Scissors') {
    pcPoints += 1;
    finalResult.innerHTML = `You 📃 x ✂ PC<br>${playerPoints}x${pcPoints}`;
  }
  
  if (playerPoints == 10) {
    alert(`You won\nFinal result: You ${playerPoints} x ${pcPoints} PC`);
    pcPoints = 0;
    playerPoints = 0;
    finalResult.innerHTML = `Score reseted<br>You ${playerPoints} x ${pcPoints} PC`;
    
} else if (pcPoints == 10) {
    alert(`PC won\nFinal result: You ${playerPoints} x ${pcPoints} PC`);
    pcPoints = 0;
    playerPoints = 0;
    finalResult.innerHTML = `Score reseted<br>You ${playerPoints} x ${pcPoints} PC`;
  }
}

// Scissros function
function scissorsFunction() {
  let pcPlay = generateRandom();
  
  let playerPlay = 'Scissors';
  
  if (playerPlay === 'Scissors' && pcPlay === 'Rock') {
    pcPoints += 1;
    finalResult.innerHTML = `You ✂ x 🗿 PC<br>${playerPoints}x${pcPoints}`;
    
  } else if (playerPlay === 'Scissors' && pcPlay === 'Paper') {
    playerPoints += 1;
    finalResult.innerHTML = `You ✂ x 📃 PC<br>${playerPoints}x${pcPoints}`;
    
  } else if (playerPlay === 'Scissors' && pcPlay === 'Scissors') {
    finalResult.innerHTML = `You ✂ x ✂ PC<br>${playerPoints}x${pcPoints}`;
}
  
  if (playerPoints == 10) {
    alert(`You won\nFinal result: You ${playerPoints} x ${pcPoints} PC`);
    pcPoints = 0;
    playerPoints = 0;
    finalResult.innerHTML = `Score reseted<br>You ${playerPoints} x ${pcPoints} PC`;
} else if (pcPoints == 10) {
    alert(`PC won\nFinal result: You ${playerPoints} x ${pcPoints} PC`);
    pcPoints = 0;
    playerPoints = 0;
    finalResult.innerHTML = `Score reseted<br>You ${playerPoints} x ${pcPoints} PC`;
  }
}

