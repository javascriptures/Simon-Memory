userInput = [];
compSeq = [];
var id = 0;
const clickSound = new Audio('/sounds/click.mp3');

var readyButton = document.querySelector('.ready');
// var button1 = document.querySelector('#button1');
// var button2 = document.querySelector('#button2');
// var button3 = document.querySelector('#button3');
// var button4 = document.querySelector('button4');

readyButton.addEventListener('click', readyState());

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

readyButton.addEventListener('click', readyState);

//start sequence
function readyState() {
  getRandomNumber();
  var i = 0;
  var myInterval = setInterval(function() {
    id = compSeq[i];
    button = document.querySelector(`#button${i}`);
  }, 1000);
}

//generate random number for computer sequence
function getRandomNumber() {
  var random = Math.floor(Math.random() * 4);
  compSeq.push(random);
}

function sequence() {}
// 2 user replicates sequence
