var $ = function(sel) {
    var elem = document.querySelectorAll(sel);

    var text = function(actualText) {
        elem.forEach(element => {
            element.innerText = actualText;
        });
        
    }

    var addClass = function(className) {
        elem.forEach(element => {
            element.classList.add(className);
        });
    }

    var removeClass = function(className) {
        elem.forEach(element => {
            element.classList.remove(className);
        });
    }

    var publicAPI = {
        element: elem,
        text: text,
        addClass: addClass,
        removeClass: removeClass
    }

    return publicAPI;
}