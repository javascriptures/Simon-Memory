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

document.querySelector('.sequence').addEventListener('click', function() {
  var mynewInterval = setInterval(isEqual, 1000);
});

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

function sequence() {
  getRandomNumber();
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
//       buttonColor = document.getElementById(`button${compSeq[i]}`);
//       console.log(buttonColor);
//   }
// }
var i = 0;
var myInterval = setInterval(isEqual, 1000);
function isEqual() {
  // if the user's input is correct
  if (userInput == compSeq) {
    buttonColor = document.getElementById(`button${compSeq[i]}`);
    buttonColor.style.opacity = '0.25';
    i++;
    console.log(button);
    // // call function to continue sequence
    // getRandomNumber();
  }
}
// function lightDown() {
//   var i = 0;
//   var myInterval = setInterval(function () {
//       if (i <= compSeq.length) {
//         document.getElementById(`#button${compSeq[i]}`).style.opacity = '1.0';
//         i++;
//         lightUp()
//       }
//       else {
//         clearInterval(myInterval);
//       }
//   }, 1000)
//   }

// function lightDown(){

// }
