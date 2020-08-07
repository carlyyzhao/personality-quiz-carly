//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var bohoAestheticScore = 0;
var artsyAestheticScore = 0;
var vintageAestheticScore = 0;
var ninetiesAeseticScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");


var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", boho);
q1a2.addEventListener("click", artsy);
q1a3.addEventListener("click", vintage);
q1a4.addEventListener("click", nineties);

q2a1.addEventListener("click", boho);
q2a2.addEventListener("click", artsy);
q2a3.addEventListener("click", vintage);
q2a4.addEventListener("click", nineties);

q3a1.addEventListener("click", boho);
q3a2.addEventListener("click", artsy);
q3a3.addEventListener("click", vintage);
q3a4.addEventListener("click", nineties);

q4a1.addEventListener("click", boho);
q4a2.addEventListener("click", artsy);
q4a3.addEventListener("click", vintage);
q4a4.addEventListener("click", nineties);

q5a1.addEventListener("click", boho);
q5a2.addEventListener("click", artsy);
q5a3.addEventListener("click", vintage);
q5a4.addEventListener("click", nineties);


//#TODO: Define quiz functions here
function boho() {
  bohoAestheticScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function artsy() {
  artsyAestheticScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function vintage() {
  vintageAestheticScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function nineties() {
  ninetiesAeseticScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function updateResult() {
  if (bohoAestheticScore >= 2) {
    result.innerHTML = "Boho!";
  } else if (artsyAestheticScore >= 2) {
    result.innerHTML = "Artsy!";
  } else if (vintageAestheticScore >= 2) {
    result.innerHTML = "Vintage!";
  } else if (ninetiesAeseticScore >= 2) {
    result.innerHTML = "90's Nostalgia!";
  } else {
    result.innerHTML = "Try again!";
  }
}
