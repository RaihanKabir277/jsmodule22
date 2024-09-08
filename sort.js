const persons = ['rakib', 'nokib', 'sakib', 'dakib'];

const sorted = persons.sort();
console.log(sorted);

const  number = [4, 6, 7, 3, 78, 65];
const asc = number.sort(function (a, b) { return a - b});
const desc = number.sort(function (a, b) { return b - a});

console.log(asc);