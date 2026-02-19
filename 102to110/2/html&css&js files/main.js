// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let closeButton = document.querySelector(".close-button");
let popupContainer = document.querySelector(".popup-container");



function showPopup () {

    popupContainer.style.display = "flex";
}



function hidePopup () {

    popupContainer.style.display = "none";
}



setTimeout (showPopup, 5000);
closeButton.addEventListener("click", hidePopup);