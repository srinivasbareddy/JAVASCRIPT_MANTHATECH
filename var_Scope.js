// Ex:- Function Scope of variables using "var"

var test = 8;
function foo(){
    console.log(test);
}
foo();


// Ex:- Declaring multiple variables in a single statement
var test1 = 2, test2 = 4, test3 = 6;

function foo(){
    console.log(test1, test2, test3);
}
foo();


// Ex:- Redeclaring the variable in same Global block
var num1 = 24;
var num1 = 36;
console.log(num1);


// Ex:- Redeclaring the variable in another scope
var age = 18;
function foo(){
    var age = 20;
    console.log(age);
}
foo();
console.log(age);

// Ex:- Deleting a Global variable declared using "var" in 'use strict' mode
'use strict';
var test = 26;
delete(test);
console.log(test);

