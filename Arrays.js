// Ex:- Array Declaration and Initialization
const arr = [];
arr[0] = "Srinivas";
arr[1] = 25;
arr[2] = true;

console.log(arr);
console.log(typeof(arr)); //Output: object


// Ex:- Another way of creating array(using "new" keyword)
const arr1 = new Array("HTML", 24.3, 45, true);
console.log(arr1);

arr1[4]=90;
console.log(arr1);


// Ex:- Array Operations
// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React"];
// Accessing Array Elements
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);

// Ex:- Accessing Last Array Elements
let lastItem = courses[courses.length - 1];
console.log("Last element: ", lastItem);

// Ex:- Modifying the array elements
let courses1 = ["HTML", "CSS", "Javascript", "React"];
console.log(courses1);
courses1[2] = "Bootstrap";
console.log(courses1);


// Ex:- push() ---> Adding elements to the array
// Creating an Array and Initializing with Values
let subjects = ["HTML", "CSS", "Javascript", "React"];

// Adding Element to the end of Array
subjects.push("Node.js");

// Ex:- unshift() ---> Adding Element to the beginning
subjects.unshift("Web Development");

console.log(subjects);

// Ex:- Removing elements from the array
// Creating an Array and Initializing with Values
let courses2 = ["HTML", "CSS", "Javascript", "React", "Node.js"];
console.log("Original Array: " + courses2);

// Removes and returns the last element
let lastElement = courses2.pop();
console.log("After Removing the last elements: " + courses1);

// Removes and returns the first element
let firstElement = courses2.shift();
console.log("After Removing the First elements: " + courses2);

// Removes 2 elements starting from index 1
// Syntax: arr.splice(Start Index, Delete Count)
courses1.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + courses2);

// Ex:- splice() syntax:- array.splice(start_index, delete_count, item1, item2, ...)
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits1.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits1);

// Ex:- splice()
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
fruits2.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits2);

// Ex:- slice() syntax:- arr.slice(startIndex, endIndex)    
let myArray = [5, "six", 2, 8.2];
let slicedArray = myArray.slice(2, 3); // end index is not included
console.log(slicedArray);
console.log(myArray);


// Ex:- Length of the array
let arr2 = ["HTML", 24.3, 45, true, false];
let length = arr2.length;
console.log("Array Length: " + length);

// Ex:- Re-sizing the array
let courses3 = ["HTML", "CSS", "Javascript", "React", "Node.js"];
// Increase the array length to 7
courses3.length = 7;
console.log("Array After Increase the Length: ", courses3);
// Decrease the array length to 2
courses3.length = 2;
console.log("Array After Decrease the Length: ", courses3);

// Ex:- Concatenation of array
let courses4 = ["HTML", "CSS", "JavaScript", "React"];
let otherCourses = ["Node.js", "Expess.js"];
// Concatenate both arrays
let concatArray = courses4.concat(otherCourses);
console.log("Concatenated Array: ", concatArray);


// Ex:- Converting Array into String
let courses5 = ["HTML", "CSS", "JavaScript", "React"];
console.log(courses5);
// Convert array to String
console.log(courses5.toString());


/* Method                                       	    Functionality

includes, indexOf, lastIndexOf, find, findIndex()	    Finding Elements
push, unshift, splice	                                Adding Elements
pop, shift, splice	                                    Removing Elements
concat, slice	                                        Combining & Slicing Arrays
join	                                                Joining Array Elements
sort	                                                Sorting Array Elements */

