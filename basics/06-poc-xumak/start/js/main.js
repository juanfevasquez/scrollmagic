function setBgImage(selector) {

    console.log("Hey there");
    var elem = document.querySelector(selector);
    var path = elem.getAttribute('data-image-path');
    
    elem.style.backgroundImage = 'url(' + path + ')';
    console.log(elem);
}

    


















