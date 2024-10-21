// Internal Error

/* Internal Error: In the JavaScript engine, 
this error occurs more often when there is too much data and
the stack exceeds its limit critical dimension capacity. 
If there are too many recursion patterns, switching cases, etc.., 
The JavaScript engine will become saturated. 

--> The InternalError object in JavaScript signals an internal error 
within the JavaScript engine. 
This error typically occurs when an operation is excessively large or 
exceeds certain predefined limits. 

---> Examples of such cases include:

1) Excessive switch cases, surpassing allowable limits.
2) Regular expression with an overly complex pattern containing many parentheses.
3) Array initializer that surpasses defined size constraints.
4) Recursion depth reaches an unsustainable level, leading to excessive recursion.

---> Handling Internal Errors:- 
To handle this common JavaScript error, follow the approach below.

Use try-catch block: 
A try-and-catch block will help you avoid falling into the Internal error condition. 
All you need to do is wrap the potentially error-free code in the 
try-block and handle the error in the catch block.
*/

/* switch(condition) {
    case 1:
    ...
    break
    case 2:
    ...
    break
    case 3:
    ...
    break
    case 4:
    ...
    break
    case 5:
    ...
    break
    case 6:
    ...
    break
    case 7:
    ...
    break
    ... up to 500 cases
} */

// Output: The result will look like an Internal Error.

// Ex:- Internal Error
function func(x) {
    // "x >= 10" is the exit condition
    if (x >= 10000000000000) return;
  
    // do stuff
    func(x + 1); // the recursive call
}
func(0);

// Ex:- Internal Error
function calculateFactorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

console.log(calculateFactorial(10000000));

// Ex:- Internal Error
let array = new Array(Infinity); // Creating an array of infinite size

for (let i = 0; i < Infinity; i++) {
    array[i] = i;
}

