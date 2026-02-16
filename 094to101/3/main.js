// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let ourDiv = document.querySelector(".our-element");


let newDivBeforeOurDiv = document.createElement("div");

newDivBeforeOurDiv.className = "start";
newDivBeforeOurDiv.title = "Start Element";
newDivBeforeOurDiv.setAttribute("data-value", "Start");
newDivBeforeOurDiv.textContent = "Start";


let newDivAfterOurDiv = document.createElement("div");

newDivAfterOurDiv.className = "end";
newDivAfterOurDiv.title = "End Element";
newDivAfterOurDiv.setAttribute("data-value", "End");
newDivAfterOurDiv.textContent = "End";


ourDiv.nextElementSibling.remove();

ourDiv.before(newDivBeforeOurDiv);

ourDiv.after(newDivAfterOurDiv);