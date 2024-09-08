

const number = [1, 2, 3, 4, 5, 6];
// number.reverse();
// console.log(number);

// const rev = [];
// for(let num of number){
//  rev.unshift(num);
// }
// console.log(rev);
// const rev = [];

// for(let i=0; i<number.length; i++){
//  const num = number[i];
//  rev.unshift(num);
// }
// console.log(rev);


for(i=number.length - 1; i>=0; i--){
    const num = number[i];
    console.log(num);
}

