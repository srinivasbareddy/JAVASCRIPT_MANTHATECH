// Object destructing
const person={
    name:'John',
    age:30,
    address:'Hyd'
};
const {name,age,address}=person;
console.log(name,age,address);
// Array Destructing
const arr=[20,30,40,50];
console.log(arr[0]);
const[val1,val2,val3,val4]=arr;
console.log(val1,val2,val3,val4);