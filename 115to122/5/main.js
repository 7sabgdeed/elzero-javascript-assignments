// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



const book = {

    title: "Al-sunnah",
    author: "Abdullah bin Ahmed bin 7anbal",
    
    similar: {

        "Al-darimi": ["Al-naqd 3ala Al-marrisi", "Al-rad 3ala Al-jahmiyya"],
        "Al-sunnah by Al-khallal": {

            EUR: "50 EUR",
            EGP: "2831.25 EGP",
        },

        "Al-share3ah": "$48",
    },
};


let {title: alSunnahbyAbdullah, author: abdullahBinAhmed, similar: similarBooks, similar: {"Al-darimi": [alnaqd, alrad3alaAlJahmiya], "Al-sunnah by Al-khallal": {EUR: alSunnahbyAlKallalPriceEUR, EGP: alSunnahbyAlKallalPriceEGP}, "Al-share3ah": alShare3ahBookPrice}} = book;

let [alDarimi, alSunnahbyAlKallal] = Object.keys(similarBooks);



console.log(`One of my Favourite Books Is ${alSunnahbyAbdullah}`);
// One of my Favourite Books Is Al-sunnah

console.log(`The author of this book is ${abdullahBinAhmed}`);
// The author of this book is Abdullah bin Ahmed bin 7anbal

console.log(`There are similar books to this one such as ${alnaqd} & ${alrad3alaAlJahmiya} by ${alDarimi}`);
// There are similar books to this one such as Al-naqd 3ala Al-marrisi & Al-rad 3ala Al-jahmiyya by Al-darimi

console.log(`Other similar book is ${alSunnahbyAlKallal}`);
// Other similar book is Al-sunnah by Al-khallal

console.log(`${alSunnahbyAlKallal}'s Price in EURO Is ${alSunnahbyAlKallalPriceEUR}`);
// Al-sunnah by Al-khallal's Price in EURO Is 50 EUR

console.log(`${alSunnahbyAlKallal}'s Price in Egyption pound Is ${alSunnahbyAlKallalPriceEGP}`);
// Al-sunnah by Al-khallal's Price in Egyption pound Is 2831.25 EGP

console.log(`Origin Price Is ${alShare3ahBookPrice}`);
// Al-share3ah's book Price Is $48
