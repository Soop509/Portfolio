"use strict";

const pipeTile = document.querySelector(".tile");

pipeTile.addEventListener("mouseover", function () {
  console.log("mouse is on");
});

pipeTile.addEventListener("mouseleave", function () {
  console.log("mouse is gone");
});
