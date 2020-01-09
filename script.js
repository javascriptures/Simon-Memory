userInput = [];
compSeq = [];
var id = 0;
let buttonCount = compSeq.length;
const clickSound = new Audio('/sounds/click.mp3');

var readyButton = document.querySelector('.ready');
// var button1 = document.querySelector('#button1');
// var button2 = document.querySelector('#button2');
// var button3 = document.querySelector('#button3');
// var button4 = document.querySelector('button4');

// readyButton.addEventListener('click', readyState());

document.querySelector('#button1').addEventListener('click', function(event) {
  console.log('clicked!');
  clickSound.play();
  userInput.push(1);
  clickSound.currentTime = 0;
  console.log(userInput);
});

document.querySelector('#button2').addEventListener('click', function(event) {
  console.log('clicked!');
  clickSound.play();
  userInput.push(2);
  clickSound.currentTime = 0;
  console.log(userInput);
});

document.querySelector('#button3').addEventListener('click', function(event) {
  console.log('clicked!');
  clickSound.play();
  userInput.push(3);
  clickSound.currentTime = 0;
  console.log(userInput);
});

document.querySelector('#button4').addEventListener('click', function(event) {
  console.log('clicked!');
  clickSound.play();
  userInput.push(4);
  clickSound.currentTime = 0;
  console.log(userInput);
});

document.querySelector('.sequence').addEventListener('click', lightUp);

// readyButton.addEventListener('click', readyState);

//start sequence
// function readyState() {
//   getRandomNumber();
//   var i = 0;
//   var myInterval = setInterval(function() {
//     id = compSeq[i];
//     button = document.querySelector(`#button${i}`);
//   }, 1000);
// }

function isEqual(){
  if (userInput.length == compSeq.length){
    for (i = 0; i<compSeq.length; i++){
      return compSeq[i] === userInput[i];
    }
  }
  else {return false;}
}

function sequence() {
  for (i = 0; i<10; i++) {
  getRandomNumber();
}
}

//generate random number for computer sequence
function getRandomNumber() {
  var random = Math.floor(Math.random() * 4 + 1);
  compSeq.push(random);
}

getRandomNumber();
getRandomNumber();
getRandomNumber();
console.log(compSeq);

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
  }, 1000);
}

// function lightDown(i) {
//   document.getElementById(`button${compSeq[i]}`).style.opacity = '1.0'

// }
