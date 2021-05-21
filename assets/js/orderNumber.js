"use strict"

document.addEventListener("DOMContentLoaded", init);

function init() {
    let nr = getStorage("Nr");
    if(nr === null){
        document.querySelector("main").innerHTML = "<h1>Your Order</h1><p>You haven't ordered yet!</p>"
    } else {
        document.querySelector("main").innerHTML =  `<h1>Your Order</h1><p id="nr">Nr: ${nr}</p><p>Thank you for ordering, we will start working on your order</p>`;
    }
}