// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let allImages = document.querySelectorAll("img");
let numberOfImages = allImages.length;

for (let i = 0; i < numberOfImages; i++) {

    allImages[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    allImages[i].setAttribute("alt", "Elzero Logo");
}