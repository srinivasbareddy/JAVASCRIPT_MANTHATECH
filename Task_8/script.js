/* 8. Write a program to display fibonacci series in reverse order
(learn about fibonacci series then implement it ) */

//Ex:- Fibonacci Series

/* const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series: ');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
} */

//Ex:- Fibonacci Series in Reverse Order

function reverseFibonacci(num) {
let array = [];

// Adding the first and second elements
array[0] = 0;
array[1] = 1;

for (let i = 2; i < num; i++) {
    // Storing sum as the current element
    array[i] = array[i - 2] + array[i - 1];
}

// reversing the array as we want the reversed order.
array.reverse();

return array;
}

var num = 5;
result = reverseFibonacci(num);

console.log("The Fibonacci series till 5th term in reverse order is: ", result);