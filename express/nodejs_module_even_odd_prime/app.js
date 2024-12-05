// app.js
const { isEven, isOdd, isPrime } = require('./numberUtils');

const number = 17;

console.log(`Number: ${number}`);
console.log(`Is Even: ${isEven(number)}`);
console.log(`Is Odd: ${isOdd(number)}`);
console.log(`Is Prime: ${isPrime(number)}`);
