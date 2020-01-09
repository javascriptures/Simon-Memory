userInput = [];
compSeq = [];
var score = 0;
let buttonCount = compSeq.length;
const clickSound = new Audio('sounds/click.mp3');

var readyButton = document.querySelector('.ready');
var myScore = document.querySelector('.score');
var youWon = document.querySelector('img');


document.querySelector('#button1').addEventListener('click', function(event) {
  console.log('clicked!');
  clickSound.play();
  userInput.push(1);
  clickSound.currentTime = 0;
  console.log(userInput);
  lose();
});

document.querySelector('#button2').addEventListener('click', function(event) {
  console.log('clicked!');
  clickSound.play();
  userInput.push(2);
  clickSound.currentTime = 0;
  console.log(userInput);
  lose();
});

document.querySelector('#button3').addEventListener('click', function(event) {
  console.log('clicked!');
  clickSound.play();
  userInput.push(3);
  clickSound.currentTime = 0;
  console.log(userInput);
  lose();
});

document.querySelector('#button4').addEventListener('click', function(event) {
  console.log('clicked!');
  clickSound.play();
  userInput.push(4);
  clickSound.currentTime = 0;
  console.log(userInput);
  lose();
});

document.querySelector('.sequence').addEventListener('click', lightUp);

readyButton.addEventListener('click', function() {
  compSeq = [];
  userInput = [];
  score = 0;
  getRandomNumber();
  lightUp();
  intervalSequence;
  console.log(compSeq);
  readyButton.innerText = 'RESTART';
  youWon.style.visibility = "hidden";
  confetti.stop();
});

function lightUp() {
  j = 0;
  var light = setInterval(function() {
    if (j < compSeq.length) {
      $(`#button${compSeq[j]}`)
        .fadeTo(1000, 0.25)
        .fadeTo(1000, 1);
      j++;
    } else {
      clearInterval(light);
    }
  }, 1500);
}

function isEqual() {
  if (userInput.length == compSeq.length) {
    for (i = 0; i < compSeq.length; i++) {
      return compSeq[i] === userInput[i];
    }
  } else {
    return false;
  }
}

function sequence() {
  if (isEqual()) {
    getRandomNumber();
    console.log(compSeq);
    userInput = [];
    lightUp();
    score++;
    myScore.innerHTML = `Score: ${score}`;
    console.log(score);
    win();
  }
}

function win() {
  if (score == 5) {
    clearInterval(intervalSequence);
    reset();
    confetti.start();
    youWon.style.visibility = "visible";
    }
}

// function winSequence() {
//   i = 0;
//   var winnerval = setInterval(function() {
//     if (i <= 4) {
//       $(`#button${i}`)
//         .fadeTo(750, 0.5, 'swing')
//         .fadeTo(750, 1.0, 'swing');
//       i++;
//     } else {
//       clearInterval(winnerval);
//     }
//   }, 1000);
// }

function lose() {
  if (userInput.length == compSeq.length) {
    for (i = 0; i < compSeq.length; i++) {
      if (compSeq[i] !== userInput[i]) {
        reset();
        alert('You lose!');
      }
    }
  }
}

function reset() {
  userInput = [];
  compSeq = [];
  score = 0;
  myScore.innerHTML = `Score: ${score}`;
  readyButton.innerText = 'START';
}

var intervalSequence = setInterval(sequence, 500);

//generate random number for computer sequence
function getRandomNumber() {
  var random = Math.floor(Math.random() * 4 + 1);
  compSeq.push(random);
}
