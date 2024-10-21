/* 11.Write a program to find ( remove the ) duplicate elements from an array of
elements and display the unique elements . */

// Method - 1

let arr1 = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr1) {
return arr1.filter((item,
  index) => arr1.indexOf(item) === index);
}
console.log(removeDuplicates(arr1));

// Method - 2

let arr2 = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr2) {
let unique = [];
arr2.forEach(element => {
  if (!unique.includes(element)) {
      unique.push(element);
  }
});
return unique;
}
console.log(removeDuplicates(arr2));


// Method - 3
let arr3 = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr3) {
return [...new Set(arr3)];
}

console.log(removeDuplicates(arr3));