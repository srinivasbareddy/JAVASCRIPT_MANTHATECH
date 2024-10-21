/* 9. Implement a set of functions that mimic the behavior of a calculator . The
functions should take two numbers as input and perform the following
operations : addition , subtraction , division , multiplication , modulus . */

function calculate(num1, num2){
    let addition = num1 + num2;
    console.log(addition);

    let subtraction = num1 - num2;
    console.log(subtraction);

    let multiplication = num1 * num2;
    console.log(multiplication);

    let division = num1 / num2;
    console.log(division);

    let modulus = num1 % num2;
    console.log(modulus);
}
calculate(80, 40);