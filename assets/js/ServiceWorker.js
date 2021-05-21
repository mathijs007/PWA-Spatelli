"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    registerServiceWorker();
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("OneSignalSDKWorker.js").then(function(res) {
            console.log("Succesfully registered service worker with scope:",
            res.scope);
        }).catch(function(err) {
            console.log("Error registering service worker:", err);
        });
    }
}