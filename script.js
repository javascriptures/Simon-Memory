userInput = [];
compSeq = [];
var score = 0;
let buttonCount = compSeq.length;
const clickSound = new Audio('/sounds/click.mp3');

var readyButton = document.querySelector('.ready');
var myScore = document.querySelector('.score');

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


readyButton.addEventListener('click', function () {
  compSeq = [];
  userInput = [];
  score = 0;
  getRandomNumber();
  lightUp();
  console.log(compSeq);

})

function lightUp() {
  j = 0;
  var light = setInterval(function () {
    if (j < compSeq.length) {
      $(`#button${compSeq[j]}`)
        .fadeTo(1000, 0.25)
        .fadeTo(1000, 1);
      j++;
    } else {
      clearInterval(light);
    }
  }, 1000);
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
  if (score == 3) {
    clearInterval(intervalSequence);
    return alert('You win!');
  }
}

function lose() {
  if (userInput.length == compSeq.length) {
    for (i = 0; i < compSeq.length; i++) {
      if (compSeq[i] !== userInput[i]) {
        return alert('You lose!');
      }
}
}
}

var intervalSequence = setInterval(sequence, 500);

//generate random number for computer sequence
function getRandomNumber() {
  var random = Math.floor(Math.random() * 4 + 1);
  compSeq.push(random);
}

// set up a function that will light up the sequence

// function colorSequence() {
//   for (i = 0; i < compSeq.length; i++) {
//       lightDown();
//   }
// }
// var i = 0;
// var myInterval = setInterval(isEqual, 1000);
// function isEqual() {
//   // if the user's input is correct
//   if (userInput == compSeq) {
//     buttonColor = document.getElementById(`button${compSeq[i]}`);
//     buttonColor.style.opacity = '0.25';
//     i++;
//     console.log(button);
//     // // call function to continue sequence
//     // getRandomNumber();
//   }
// }
// var i = 0;
// function lightDown() {
//   if (i <= compSeq.length) {
//     document.getElementById(`button${compSeq[i]}`).style.opacity = '0.25';
//   var newInterval = setInterval(function () {
//   document.getElementById(`button${compSeq[i]}`).style.opacity = '0.1.0';
//   }, 1000)
//   i++;
// }
//   else {
//     clearInterval(lightDown);
//   }
// }

// function lightDown(i) {
//   document.getElementById(`button${compSeq[i]}`).style.opacity = '1.0'

// }
