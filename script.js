const age = 23;
if (age >= 18) {
    console.log("U mag naar binnen");

} else {
    console.log("Helaas, u mag nog niet naar binnen");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");

} else {
    console.log("Helaas, geen korting voor u");
}


const isFemale = false;
if (isFemale) {
    console.log("Welkom bij de ladiesnight");

} else {
    console.log("Helaas, dit feest is alleen voor vrouwen");
}


const driverStatus = 'bob';
if (driverStatus === 'bob') {
    console.log("U mag rijden, wel thuis!");

} else {
    console.log("Helaas, u mag niet rijden. We bestellen een taxi voor u");
}

const name = "Sarah";
if (name == "Sarah" || name == "Bram") {
    console.log("Je krijgt een gratis biertje!");

} else {
    console.log("U heeft geen recht op een gratis biertje");
}


const totalAmount = 120;
if (totalAmount > 25 && totalAmount <= 50) {
    console.log("U krijgt gratis (vega) bitterballen!");

} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("U krijgt een gratis portie nachos!");

} else if (totalAmount >= 100) {
    console.log("U krijgt een gratis flesje champagne!");

} else {
    console.log("Bestel voor meer dan €25, €50 of bestel voor €100 of meer voor een gratis cadeautje!")
}