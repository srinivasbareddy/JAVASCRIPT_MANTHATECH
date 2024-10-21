// Ex:- 
function add(number1, number2) {
    return number1 + number2;
}
console.log(add(34, 56));


// Ex:- 
function square(num){
    return num*num;
}
console.log(square(20));

// Ex:- Function with "return" value
function say(message="no corresponding value passed"){
    return message;
}
console.log(say());

function say(message="no corresponding value passed"){
    return "Hello World";
}
console.log(say());


// Ex:- Arguments Object
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(1,2,3,7,8,9));


// Ex:- Function Hoisting

showMe(); // a hoisting example
function showMe(){
    console.log('an hoisting example');
}


// Ex:- Anonymous Functions
var greet= function (){
    console.log("I am anonymous functio");
};
greet();


// Ex:- Function Expression with arguments
var func=function add(a,b){
    var c=a+b;
    console.log(c);
    console.log("I am a Function Expression");
}
console.log(func(10,20));


// Ex:- Function Expression
var sample= function(){
    console.log("I am function expression");
}
sample();


// Ex:- Passing an Object as argument for a function
var person1={
    name:"Rahul",
    age:30
}
function greet(obj){
    console.log(obj.name+"\t"+obj.age);
}
greet(person1);


// Ex:- call() function
var customer={
    name:"Srinivas",
    address:"Hyderabad",
    details: function(){
    return this.name+"\t"+this.address
    }
}
console.log(customer.details());

var customer2={
name:"Kumar",
address:"Delhi"
}
// access the details() -> method of Customer (obj) in Customer2 (obj)
//console.log(customer2.details());
console.log(customer.details.call(customer2));

// Ex:- 2) call() method
const person_1 = {
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}
const person_2 = {
    firstName: "John",
    lastName: "Doe"
}
const person_3 = {
    firstName: "Mary",
    lastName: "Doe"
}
person_1.fullName.call(person_2);



// Ex:-1 apply() function
var emp = {
    name: "emp1",
    address: "hyderabad",
    getInfo: function(country, pincode, hno){
        return this.name+"\t"+this.address+"\t"+country+"\t"+pincode+"\t"+hno;
    }
}
var emp2 = {
    name: "emp2",
    address: "delhi"
}
var arr = ["India", 508204, "2-29"];
console.log(emp.getInfo.call(emp2, arr[0], arr[1], arr[2]));
console.log(emp.getInfo.apply(emp2, arr));

// Ex:-2 apply() ---> The apply() method accepts the arguments in an array.
let student1 = {
    details: function(){
        return this.name+" "+this.class;
    }
}
let stud1 = {
    name: "Dinesh",
    class: "11th",
}
let stud2 = {
    name: "Vaibhav",
    class: "11th",
}

let s = student1.details.apply(stud2);
console.log(s);
// Explanation: In the above example, the details method of student is "applied" on stud2.

// Ex:-3 apply()
let student2 = {
    details: function(section, rollnum){
        return this.name + " " + this.class + " " + section + " " + rollnum;
    }
}
let stud3 = {
    name: "Ramesh",
    class: "11th",
}
let stud4 = {
    name: "Surseh",
    class: "11th",
}

let z = student2.details.apply(stud2, ["A", "24"]);
console.log(z);

// Ex:- bind() function
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}

const member = {
    firstName: "Hegde",
    lastName: "Nilsen",
}
let fullName = person.fullName.bind(member);
console.log(fullName()); // Output:- Hegde Nilsen
/* Explanation: In this above example, it creates 2 objects(person and member). 
The member object borrows the fullName method from person. */ 


// Ex:- Call by value

function testFunc(name){
    name = name + 'Bareddy';
    console.log("Modified name: " + name);
}
var name = 'Srinivas';
testFunc(name);
console.log("Old Name: " + name);

// Ex:- Call by Reference
/* Explanation: When we want to implement a Call by Reference, we need to send the object's reference
So, we need to send the actual object as a function argument to send an object's reference */
function testFunc2(candidate){
    candidate.name = 'Rajesh';
    candidate.surname = 'Mulagundla';
}
var candidate = {
    name: 'Pavan',
    surname: 'Kandula'
}
testFunc2(candidate);
console.log("Name: " + candidate.name);
console.log("Surname: " + candidate.surname);