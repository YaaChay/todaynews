function setSession(key, value) {
    sessionStorage.setItem(key, value);
};

function getSession(key) {
    return sessionStorage.getItem(key);
}

function removeSession(key) {
    sessionStorage.removeItem(key);
}

function clearSession() {
    sessionStorage.clear();
}

function haveSession(key) {
    var isHave;
    if (sessionStorage.getItem(key) != null || sessionStorage.getItem(key) != '') {
        isHave = false;
    } else {
        isHave = true;
    }
    return isHave;
}

export { setSession, getSession, removeSession, haveSession, clearSession };