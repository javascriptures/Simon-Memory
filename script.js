userInput = [];
compSeq = [];
var id = 0;

var readyButton = document.querySelector('.ready');
// var button1 = document.querySelector('#button1');
// var button2 = document.querySelector('#button2');
// var button3 = document.querySelector('#button3');
// var button4 = document.querySelector('button4');
var clickSound = document.getElementById('.click');

readyButton.addEventListener('click', readyState());

button1.addEventListener('click', function() {
  console.log('clicked!');
  click();
});
readyButton.addEventListener('click', readyState);

function click() {
  clickSound.play();
}

//start sequence
function readyState() {
  getRandomNumber();
  var i = 0;
  var myInterval = setInterval(function() {
    id = simonSeq[i];
    button = document.querySelector(`#button${i}`);
  }, 1000);
}

//generate random number for computer sequence
function getRandomNumber() {
  var random = Math.floor(Math.random() * 4);
  simonSeq.push(random);
}

function sequence() {}
// 2 user replicates sequence
