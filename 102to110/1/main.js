// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



let userInput = prompt("Print Number From – To", "Example: 5-20");



function printUsage () {

    console.log(`USAGE: <NUMBER_TO_COUNT_FROM>-<NUMBER_TO_COUNT_TO> OR <NUMBER_TO_COUNT_TO>-<NUMBER_TO_COUNT_FROM>`);
    console.log(`ex: 1-10`);
    console.log(`ex: 10-1`);
}



if (userInput === null||
    userInput.indexOf("-") === -1||
    userInput.indexOf("-") !== userInput.lastIndexOf("-") ||
    userInput.indexOf("-") === 0 ||
    userInput[userInput.length - 1] === "-") {

    printUsage ();

} else {

    userInput = userInput.trim();

    let num1 = +userInput.split("-")[0];
    let num2 = +userInput.split("-")[1];


    if (isNaN(num1) || isNaN(num2)) {

        printUsage ();

    } else {

        let from = null;
        let to = null;

        if (num1 > num2) {

            from = num2;
            to = num1;

        } else {

            to = num2;
            from = num1;
        }


        for (let i = from; i <= to; i++) {
    
            console.log(i);
        }
    }
}