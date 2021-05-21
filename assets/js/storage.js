function isLocalStorageSupported() {
    try {
        return "localStorage" in window &&
            window["localStorage"] !== null;
    } catch (e) {
        return false;
    }
}

function getStorage(item) {
    if(isLocalStorageSupported) {
        return localStorage.getItem(item)
    }
}

function setStorage(list, items) {
    if(isLocalStorageSupported) {
        localStorage.setItem(list, items);
    }
}