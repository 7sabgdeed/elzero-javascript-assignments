// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");
let bodyContent = document.body.childNodes;
let numberTwo = divTwo.attributes.length;
let numberZero = numberTwo - numberTwo;
let spaceCharacter = bodyContent[numberZero].nodeValue[numberZero];

let titleOne = divTwo.title;
let titleTwo = divOne.title;

let textOne = divTwo.innerHTML;
let textTwo = divOne.innerHTML;


divOne.title = titleOne;
divTwo.title = titleTwo;


divOne.innerHTML = textOne;
divTwo.innerHTML = textTwo;
divTwo.innerHTML += spaceCharacter;
divTwo.innerHTML += numberTwo;