const numbers = [3, 4, 5, 6, 7, 8, 9];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// function square (element){
//     return element * element;
// }

// number.map(function(element, index){
//     console.log(element, index, );
// })
// console.log(output);

const bigger = numbers.filter( x => x >5);
console.log(bigger);