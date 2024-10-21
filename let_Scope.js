
//Ex:- Block Scope of variable using "let"
{
    let a = 34;
    console.log(a);
}
console.log(a);


//Ex:- Global Scope of variable using "let"
let num = 30;
console.log(num);

function func1(){
    console.log(num);
}
func1();


//Ex:- Function Scope of variable using "let"
let num1 = 20;
console.log(num);

function func1(){
    let num2 = 30;
    console.log(num);
    console.log(num2);
}
func1();
console.log(num2);


//Ex:- Redeclaring variables in different blocks
let x = 40;
{
    let x = 45;
    console.log(x)
}
console.log(x);


//Ex:- Redeclaring the variable in same block
/* let y = 40;
{
    let y = 45;
    console.log(y)
}
console.log(y);
let y = 34;
console.log(y); */



//Ex:- Does not support Hoisting of variables
console.log(z);
let z = 50;