"use strict";

document.addEventListener("DOMContentLoaded", init);

let state = "Pasta";

function init() {
    setup();
}

function setup() {
    document.querySelector("a[title='Pasta']").addEventListener("click", switchState);
    document.querySelector("a[title='Drink']").addEventListener("click", switchState);
    document.querySelector("a[title='Order']").addEventListener("click", showOrder);
    fetchArray();
}

function fetchArray() {
    fillListFromCache("products");
}

function switchState(e) {
    console.log("Switch");
    document.querySelector("main").innerHTML = "";
    state = e.target.title;
    fetchArray();
}

function showOrder() {
    state = "Order";
    document.querySelector("main").innerHTML = "<ul>";
    let toPay = 0;
    order.forEach(function (el) {
        console.log(order);
        document.querySelector("main ul").innerHTML += `<li title="${el.ProductName}">${showOrderItemInString(el)} <a href="#">Remove</a></li>`;
        toPay += (el.Price * el.Count);
    });
    document.querySelector("main").innerHTML += `</ul><p>€${toPay}</p>`;
    document.querySelector("main").innerHTML += "<a title='sendButton' href='#'>Order</a>",
        document.querySelector("a[title='sendButton']").addEventListener("click", send);
    document.querySelectorAll("ul li").forEach(function (el) {
        el.addEventListener("click", removeOrderItem);
    });
}

function send() {
    if(checkPost()) {
        postJSON(order);
    }
}

function fillListFromCache() {
    console.log(JSON.parse(getStorage("Products")));
    if(getStorage("Products") === null || getStorage("Products") === "") {
        getJSON();
    } else {
        fillList(JSON.parse(getStorage("Products")));
    }
    
}

function fillList(items) {
    let select = document.querySelector("main");
    select.innerHTML = "";
    items.filter(checkState)
        .forEach(elem => select.innerHTML += `<div><img src= "images/${elem.idProduct}.png" alt="${elem.ProductName}" />
<p class="heart">♥</p><p class="flex">${elem.ProductName} €${elem.Price}</p>
<input type="submit" value="Add" title="${elem.idProduct}" /></div>`);
    document.querySelectorAll("input").forEach(el => el.addEventListener('click', clickAdd))
    document.querySelectorAll(".heart").forEach(el => el.addEventListener('click', clickFavourite))
    checkingHearts(JSON.parse(getStorage("Favourites")));
}

function postJSON(data) {
    fetch('https://matheus007.be/api/orders', {
        method: "POST",
        body: JSON.stringify(data)
    }).then((res) => {
        console.log(JSON.stringify(data));
        console.log("this is res", res);
        setJSONNr();
    }).catch((err) => {
        console.log(err)
    })
}

function getJSON() {
    fetch("https://matheus007.be/api/products/").then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            fillList(myJson);
            setStorage("Products", JSON.stringify(myJson));
        })
}

function setJSONNr() {
    fetch("https://matheus007.be/api/orders/nr").then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            setStorage("Nr", myJson.id);
            window.location.href = "../../YourOrder.html";
        })
}

function checkState(value) {
    return value.ProductType === state;
}

function checkPost() {
    if(order.length === 0) {
        return false;
    }
    return true;
}