
// Simple logic ---------
// function leapYear(year){
//     if(year % 4 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const leap = leapYear(2043);
// console.log(leap);

// ---------advanced logic ------------
function leapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true ;
    }
    else if(year % 100 === 0 && year % 400 ===0){
        return true;
    }
    else{
        
        return false;
    }
}
const leap = leapYear2(2100);
const leap2 = leapYear2(2400);
const leap3 = leapYear2(1900);
const leap4 = leapYear2(2052);
console.log(leap, leap2, leap3, leap4);
