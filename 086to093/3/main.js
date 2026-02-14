// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let userInput = document.querySelector(`[name="dollar"]`);
let showCalculationResult = document.querySelector(".result");

userInput.oninput = function (event) {

    let usd = event.target.value === "" || isNaN(event.target.value) ? 0 : Number(event.target.value);
    let egp = (usd * 15.6).toFixed(2);

    showCalculationResult.innerHTML = `{${usd}} USD Dollar = {${egp}} Egyptian Pound`;
}