// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let numberOfElementsInputFeild = document.querySelector(`[type="number"]`);
let textInput = document.querySelector(`[type="text"]`);
let select = document.querySelector("select");
let submitButton = document.querySelector(`[type="submit"]`);
let resultContainer = document.querySelector(".results");


submitButton.onclick = event => {

    event.preventDefault();

    resultContainer.innerHTML = "";

    generateElements(numberOfElementsInputFeild.value, select.value, textInput.value);
}


function generateElements (numberOfElementsToGenerate, elementsType, textInsideEachElement) {

    let counter = 0;

    if (isNaN(parseInt(numberOfElementsToGenerate))) {

        numberOfElementsToGenerate = 0;
    }

    for (let i = 0; i < numberOfElementsToGenerate; i++) {

        let eachElement = document.createElement(`${elementsType}`)
        counter++;
        eachElement.className = "box";
        eachElement.title = "Element";
        eachElement.id = `id-${counter}`;
        eachElement.innerHTML = textInsideEachElement;
        resultContainer.appendChild(eachElement);
    }
}