/*
 */

"use strict";
let currentScore = 50;
let playing = true;

function changBackgroundColor(color) {
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to top," + color + ", white)";
}
function setMsg(query, message) {
  document.querySelector(query).textContent = message;
}
function scoreRegister(input) {
  if (currentScore > 0 || currentScore < 100) {
    //Keep playing game
    if (input === "a") {
      startTimer();
      currentScore += 5;
    } else if (input == "l") {
      startTimer();
      currentScore -= 5;
    }
    console.log("currentScore = " + currentScore);
    checkIfWin();
    document.getElementById("player1").style.width = currentScore + "%";
  } else {
  }
}
document.addEventListener(
  "keydown",
  function (e) {
    if (playing) {
      document.getElementById("info").classList.add("hidden");
      console.log("playing");
      scoreRegister(e.key);
    }
  },
  false
);
document.querySelector(".reset").addEventListener(
  "click",
  function (e) {
    document.getElementById("player1").style.width = 50 + "%";
    currentScore = 50;
    playing = true;
    setMsg("h1", "TAP WAR!");
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to left, blue, red)";
    document.getElementById("info").classList.remove("hidden");
    stopTimer();
    resetTimer();
  },
  false
);
function checkIfWin() {
  if (currentScore <= 0) {
    //player1 wins stop playing
    win("red");
    stopTimer();
    playing = false;
  } else if (currentScore >= 100) {
    //player2 wins stop playing
    win("blue");
    stopTimer();
    playing = false;
  }
  return null;
}
function win(player) {
  console.log("win function");
  if (player === "red") {
    changBackgroundColor("red");
    setMsg("h1", "RED WINS!");
  } else if (player === "blue") {
    changBackgroundColor("blue");
    setMsg("h1", "BLUE WINS!");
  }
}
function winByScore() {
  if (currentScore === 50) {
    setMsg("h1", "ITS A DRAW...");
    changBackgroundColor("black");
  } else if (currentScore > 50) {
    win("blue");
  } else {
    win("red");
  }
  playing = false;
}

/* COUNT DOWN*/
const timer = document.getElementById("stopwatch");

var second = 30;
var stoptime = true;
var initi = false;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    second = parseInt(second);

    if (second < 10 || second == 0) {
      second = "0" + second;
    }
    second -= 1;
    console.log("second = " + second);
    if (!initi) {
      initi = true;
      timer.innerHTML = second;
    } else {
      timer.innerHTML = second;
    }
    if (second == 0) {
      stopTimer();
      winByScore();
      playing = false;
    }

    setTimeout("timerCycle()", 300);
  }
}

function resetTimer() {
  timer.innerHTML = "30";
  second = 30;
}
