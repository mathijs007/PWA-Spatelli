"use script";

document.addEventListener("DOMContentLoaded", init);

let order = [];

function init() {
    console.log("Page loaded!");
}

function clickAdd(e) {
    checkStorage(e.target.title);
}

function checkStorage(title) {
    if (getStorage("Products") === null) {
        fetch("https://matheus007.be/api/products/" + title)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                addOrderItem(myJson);
            })
    } else {
        addOrderItem(JSON.parse(getStorage("Products"))[title]);
    }
    if (state === "Order") {
        showOrder();
    }
}

function addOrderItem(myJson) {
    let inIt = false;
    let product = {ProductName:myJson.ProductName, Count:1, Price:myJson.Price}
    
    order.forEach(function (el, index) {
        if (myJson.ProductName == el.ProductName) {
            inIt = true;
            el.Count += 1;
            this[index] = el;
            return;
        }
    }, order);
    if (!inIt) {
        order.push(product);
    }
    checkColor(order.length);
}

function removeOrderItem(e) {
    let pElement = e.target.parentElement;
    order.forEach(function (el, index) {
        if (pElement.title === el.ProductName) {
            if (el.Count > 1) {
                el.Count -= 1;
                order[index] = el;
            } else {
                order.splice(index, 1);
            }
            return;
        }
    }, order);
    showOrder();
    checkColor(order.length);
}

function checkColor(int) {
    if (int > 0) {
        document.querySelector("a[title='Order']").style.color = 'yellow';
    } else if (int === 0) {
        document.querySelector("a[title='Order']").style.color = 'white';
    }
}

function showOrderItemInString(obj) {
    return  obj.ProductName + ' (x' + obj.Count + '), €' + (obj.Price * obj.Count);
}