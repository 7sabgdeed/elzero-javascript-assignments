// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let allElements = document.querySelectorAll("*");
let fontName = document.querySelector("#font-name");
let fontColor = document.querySelector("#font-color");
let fontSize = document.querySelector("#font-size");



function changePageFontName (newFontName) {

    allElements.forEach(element => {
        
        element.style.fontFamily = `"${newFontName}", sans-serif`;
    });
}



function changePageFontColor (newFontColor) {

    allElements.forEach(element => {

        element.style.color = `${newFontColor}`;
    });
}



function changePageFontSize (newFontSize) {

    allElements.forEach(element => {
        
        element.style.fontSize = `${newFontSize}px`;
    });
}



function addOrUpdateFontNameInLocalStorage (newFontName) {

    window.localStorage["font-name"] = newFontName;
}



function addOrUpdateFontColorInLocalStorage (newFontColor) {

    window.localStorage["font-color"] = newFontColor;
}



function addOrUpdateFontSizeInLocalStorage (newFontSize) {

    window.localStorage["font-size"] = newFontSize;
}



fontName.addEventListener("change", function () {

    changePageFontName(this.value);
    addOrUpdateFontNameInLocalStorage(this.value);
});


fontColor.addEventListener("change", function () {

    changePageFontColor(this.value);
    addOrUpdateFontColorInLocalStorage(this.value);
});


fontSize.addEventListener("change", function () {

    changePageFontSize(this.value);
    addOrUpdateFontSizeInLocalStorage(this.value);
});



if (window.localStorage.length > 0) {


    if (window.localStorage["font-name"] !== undefined) {

        let fontNameInLocalStorage = window.localStorage["font-name"];

        changePageFontName(fontNameInLocalStorage);
        fontName.value = fontNameInLocalStorage;
    }


    if (window.localStorage["font-color"] !== undefined) {

        let fontColorInLocalStorage = window.localStorage["font-color"];

        changePageFontColor(fontColorInLocalStorage);
        fontColor.value = fontColorInLocalStorage;
    }


    if (window.localStorage["font-size"] !== undefined) {

        let fontSizeInLocalStorage = window.localStorage["font-size"];

        changePageFontSize(fontSizeInLocalStorage);
        fontSize.value = fontSizeInLocalStorage;
    }
}