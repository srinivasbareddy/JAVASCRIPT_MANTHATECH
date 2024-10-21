// Ex:- Numbers

let x=123;
console.log(typeof(x)); // number
let numString=x.toString();
console.log(typeof(numString)); // string


let y=1234.653;
console.log(y.toExponential());
console.log(y.toFixed(2));
console.log(y.toPrecision(7));

//Ex:- Properties of Numbers

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.EPSILON);
console.log(Number.isInteger(123.89));
console.log(Number.isFinite(Infinity));