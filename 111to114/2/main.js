// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let userNameInput = document.querySelector("#user-name");
let emailInput = document.querySelector("#email");
let ageInput = document.querySelector("#age");
let favouriteColorSelectBox = document.querySelector("#favourite-color");



function updateValueInSessionStorage (key, value) {

    window.sessionStorage[`${key}`] = value;
}



userNameInput.addEventListener("input", function () {

    updateValueInSessionStorage("user-name", this.value);
});


emailInput.addEventListener("input", function () {

    updateValueInSessionStorage("email", this.value);
});


ageInput.addEventListener("input", function () {

    updateValueInSessionStorage("age", this.value);
});


favouriteColorSelectBox.addEventListener("change", function () {

    updateValueInSessionStorage("favourite-color", this.value);
});



if (window.sessionStorage["user-name"] !== undefined) {

    userNameInput.value = window.sessionStorage["user-name"];
}

if (window.sessionStorage["email"] !== undefined) {

    emailInput.value = window.sessionStorage["email"];
}

if (window.sessionStorage["age"] !== undefined) {

    ageInput.value = window.sessionStorage["age"];
}

if (window.sessionStorage["favourite-color"] !== undefined) {

    favouriteColorSelectBox.value = window.sessionStorage["favourite-color"];
}