// 12 inches = 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

// const shuvo = inchToFeet(75);
// console.log(shuvo ,);

function inchToFeet2(inch){
    const feet2 = inch / 12;
    const feetnumber = parseInt(feet2);
    const inchRemaining = inch % 12;
    const result = feetnumber + ' ft ' + inchRemaining + ' inch. ';
    return result;
}
const raihan = inchToFeet2(75);
console.log(raihan);

function mileToKilometer(mile){
    const kilo = mile * 1.6090;
    return kilo;
}
function kiloToMile(kilo){
    const mile = kilo * 0.62137119;
    return mile;
}
