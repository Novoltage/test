


let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    Heads: 0,
    Tails: 0
  };


  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Head') {
      if (computerMove === 'tail') {
        result = 'You lose.';
      } 
      else if (computerMove === 'head') {
        result = 'You win.';
      } 

    } 
    else if (playerMove === 'Tail'){
      if (computerMove === 'tail') {
        result = 'You win.';
      } 
      else if (computerMove === 'head') {
        result = 'You lose.';
      }
      
    } 
    

    if (result === 'You win.') {
      score.wins += 1;
    } 
    else if (result === 'You lose.') {
      score.losses += 1;
    } 
    
    

    localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You Picked ${playerMove} - Coin Toss is ${computerMove} `;

    document.querySelector(".js-counter").innerHTML = `Counter: Heads: ${score.Heads} Tails: ${score.Tails} `;
  }

  function updateScoreData(){
    document.querySelector('.js-score')
     .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`;
     
    document.querySelector(".js-counter").innerHTML = `Counter: Heads: ${score.Heads} Tails: ${score.Tails} `;
  }
  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 2) {
      computerMove = 'tail';
      score.Tails += 1;
    } else if (randomNumber >= 1 / 2) {
      computerMove = 'head';
      score.Heads += 1;
    } 
    return computerMove;
  }