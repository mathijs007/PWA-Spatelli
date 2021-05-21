"use strict";

document.addEventListener("DOMContentLoaded", init);

let listOfFavouriteProducts;

function init() {
    listOfFavouriteProducts = JSON.parse(getStorage("Favourites"));
    if (document.title === "Favourites") {        
        showList(listOfFavouriteProducts);
    }
}

function clickFavourite(e) {
    let item = e.target.nextSibling.innerHTML;
    checkingState(item, listOfFavouriteProducts);
    console.log("List: " + listOfFavouriteProducts);
    if (document.title === "Favourites") {
        init();
    } else {
        fillListFromCache();
    }
}

function checkingState(item, l) {
    if (!isArray(l)) {
        l = [item];
    } else if (!l.includes(item)) {
        l.push(item);
    } else {
        l.splice(l.indexOf(item), 1);
    }
    setStorage("Favourites",JSON.stringify(l));
}

function checkingHearts(l) {
    if(isArray(l)){
        document.querySelectorAll(".flex").forEach(p => {
            if (l.indexOf(p.innerHTML) !== -1) {
                p.previousElementSibling.style.color = 'red';
            } else {
                p.previousElementSibling.style.color = '#2CCED2';
            }
        });
    }
}

function isArray(l){
    if(Array.isArray(l)){
        return true;
    }
    return false;
}


// favourites.html
function showList(l) {
    console.log("showing list");
    console.log(l);
    document.querySelector("main ul").innerHTML = "";
    l.forEach(e => {
        document.querySelector("main ul").innerHTML += `<li><img src="images/${e}.png" alt="${e}" />
        <p class="heart">♥</p><p class="flex">${e}</p></li>`
    });
    checkingHearts(l);
    document.querySelectorAll(".heart").forEach(el => el.addEventListener('click', clickFavourite))
}