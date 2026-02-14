// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let allImages = document.querySelectorAll("img");
let numberOfImages = allImages.length;

for (let i = 0; i < numberOfImages; i++) {

    allImages[i].hasAttribute("alt") ?
    allImages[i].setAttribute("alt", "Old") :
    allImages[i].setAttribute("alt", "Elzero New");
}