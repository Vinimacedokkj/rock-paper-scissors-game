  var playerPoints = 0;
  var pcPoints = 0;
 
 alert('Que os jogos comecem!');

function generateRandom() {
  let pcNum = Math.random();
  
  if (pcNum >= 0 && pcNum < 0.3) {
    pcNum = 'Rock';
  } else if (pcNum >= 0.3 && pcNum < 0.6) {
    pcNum = 'Paper';
  } else if (pcNum >= 0.6 && pcNum < 1) {
    pcNum = 'Scissors';
  }
  
  return pcNum;
}

function rockFunction() {
  let pcChoice = generateRandom();
  
  let choice = 'Rock';
  
  if (choice == 'Rock' && pcChoice == 'Rock') {
    document.getElementById('result').innerHTML = `🗿 x 🗿<br>Placar: ${playerPoints}x${pcPoints}`;

  } else if (choice == 'Rock' && pcChoice == 'Paper') {
    pcPoints += 1;
    document.getElementById('result').innerHTML = `🗿 x 📄<br>Placar: ${playerPoints}x${pcPoints}`;
    
  } else if (choice == 'Rock' && pcChoice == 'Scissors') {
    playerPoints += 1;
    document.getElementById('result').innerHTML = `🗿 x ✂️<br>Placar: ${playerPoints}x${pcPoints}`;
  }

    if (playerPoints == 10) {
      alert('Você ganhou!! Meus parabéns\nIniciando um novo jogo');
      playerPoints = 0;
      pcPoints = 0;
      
    } else if (pcPoints == 10) {
      alert('Você perdeu, não foi dessa vez...\nIniciando um novo jogo');
      playerPoints = 0;
      pcPoints = 0;
}
}

function paperFunction() {
  let pcChoice = generateRandom();
  
  let choice = 'Paper';
  
  if (choice == 'Paper' && pcChoice == 'Rock') {
    playerPoints += 1;
    document.getElementById('result').innerHTML = `📄 x 🗿<br>Placar: ${playerPoints}x${pcPoints}`;
    
  } else if (choice == 'Paper' && pcChoice == 'Paper') {
    document.getElementById('result').innerHTML = `📄 x 📄<br>Placar: ${playerPoints}x${pcPoints}`;
    
  } else if (choice == 'Paper' && pcChoice == 'Scissors') {
    pcPoints += 1;
    document.getElementById('result').innerHTML = `📄 x ✂️<br>Placar: ${playerPoints}x${pcPoints}`;
  }
  
      if (playerPoints == 10) {
        alert('Você ganhou!! Meus parabéns\nIniciando um novo jogo');
        playerPoints = 0;
        pcPoints = 0;
        
    } else if (pcPoints == 10) {
        alert('Você perdeu, não foi dessa vez...\nIniciando um novo jogo');
        playerPoints = 0;
        pcPoints = 0;
}
}

function scissorsFunction() {
  let pcChoice = generateRandom();
  
  let choice = 'Scissors';
  
  if (choice == 'Scissors' && pcChoice == 'Rock') {
    pcPoints += 1;
    document.getElementById('result').innerHTML = `✂️ x 🗿<br>Placar: ${playerPoints}x${pcPoints}`;
    
  } else if (choice == 'Scissors' && pcChoice == 'Paper') {
    playerPoints += 1;
    document.getElementById('result').innerHTML = `✂️ x 📄<br>Placar: ${playerPoints}x${pcPoints}`;
    
  } else if (choice == 'Scissors' && pcChoice == 'Scissors') {
    document.getElementById('result').innerHTML = `✂️ x ✂️<br>Placar: ${playerPoints}x${pcPoints}`;
  }
  
    if (playerPoints == 10) {
      alert('Você ganhou!! Meus parabéns\nIniciando um novo jogo');
      playerPoints = 0;
      pcPoints = 0;
      console.log('Placar resetado, pode jogar novamente');
      
  } else if (pcPoints == 10) {
      alert('Você perdeu, não foi dessa vez...\nIniciando um novo jogo');
      playerPoints = 0;
      pcPoints = 0;
}
}

