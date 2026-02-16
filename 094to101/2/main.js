// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let addClassesInput = document.querySelector(".classes-to-add");
let removeClassesInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(`[title="Current"]`);
let classesDiv = document.querySelector(".classes-list div");



function showClasses () {

    let classListLength = currentElement.classList.length;
    

    if (classListLength === 0) {
        
        classesDiv.textContent = "No Classes To Show";

        return;
    }


    currentElement.className = [...currentElement.classList].sort().join(" ");
    
    classesDiv.textContent = "";


    for (let i = 0; i < classListLength; i++) {

        let EachSpanClass = document.createElement("span");
         
        EachSpanClass.textContent = currentElement.classList.item(i);

        classesDiv.appendChild(EachSpanClass);
    }
}



function filterInput (input) {

    if (input.trim() ===  "") {

        return [];
    }


    let classesNamesFromInput = input.split(" ");

    classesNamesFromInput = classesNamesFromInput.filter(element => element !== "");

    classesNamesFromInput = classesNamesFromInput.map(element => element.toLowerCase());

    return classesNamesFromInput;
}



function addNewClassesToClassList (classesNamesToAdd) {

    let classesNamesToAddCount = classesNamesToAdd.length;


    for (let i = 0; i < classesNamesToAddCount; i++) {
        
        currentElement.classList.add(classesNamesToAdd[i]);
    }
}



function removeClassesFromClassList (classesNamesToRemove) {

    let classesNamesToRemoveCount = classesNamesToRemove.length;


    for (let i = 0; i < classesNamesToRemoveCount; i++) {
        
        currentElement.classList.remove(classesNamesToRemove[i]);
    }
}



addClassesInput.addEventListener("blur", function() {

    let classesNamesToAdd = filterInput(addClassesInput.value);

    addClassesInput.value = "";


    if (classesNamesToAdd.length === 0) {

        return;
    }


    addNewClassesToClassList(classesNamesToAdd);

    showClasses();  
});



removeClassesInput.addEventListener("blur", function () {

    let classesNamesToRemove = filterInput(removeClassesInput.value);

    removeClassesInput.value = "";

    
    if (classesNamesToRemove.length === 0) {

        return;
    } 


    removeClassesFromClassList(classesNamesToRemove);

    showClasses();
});



showClasses();