
const khor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];

const number = [1, 5, 61, 5, 82, 61];

function noDup(array){
    const unq = [];
 for(const num of array){
   if(unq.includes(num) === false){
     unq.push(num);
   }
 }
 return unq;
}
const unique = noDup(khor);
console.log(unique);

