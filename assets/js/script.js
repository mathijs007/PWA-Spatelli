"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("Page loaded!");
    setupButtons();
}

function setupButtons() {
    document.querySelector(".w3-display-left").addEventListener("click", plusDivsLeft);
    document.querySelector(".w3-display-right").addEventListener("click", plusDivsRight);
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivsLeft() {
    showDivs(slideIndex += -1);
}

function plusDivsRight() {
    showDivs(slideIndex += 1);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}