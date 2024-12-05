// numberUtils.js
function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

module.exports = { isEven, isOdd, isPrime };
