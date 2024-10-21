const add=(a,b) => a+b;
console.log(add(2,3));

const square = x => x*x;
console.log(square(5));

const greet= () => console.log("hello");
greet();

const person = (name,age) => ({name,age});
console.log(person('john',30));

const numbers =[1,2,3,4,5];
const doubleNumbers= numbers.map(num=>num*2);
console.log(doubleNumbers);

const number =[1,2,3,4,5];
const evenNumbers=number.filter(num=>num%2==0);
console.log(evenNumbers);