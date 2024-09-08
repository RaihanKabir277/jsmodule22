

function oddAvg(numbers){
let odds = [];
 for(const num of numbers){
    console.log(num);

    if(num % 2 === 1){
     odds.push(num);
    }
 }
//  console.log(odds);
let sum = 0;
for(const number of odds){
    sum += number;
}
const count = odds.length;
console.log(sum, count);
const avg = sum / count;
return avg;
}

const numbers = [42, 13, 58, 65, 81, 7, 5, 96];
const avg = oddAvg(numbers);
console.log('average of the odd number is: ',avg);