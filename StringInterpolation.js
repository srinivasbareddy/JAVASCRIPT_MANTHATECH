// Ex:- String Concatenation
const name1 = "Alice";
const greeting1 = "Hello, " + name1 + "!";
console.log(greeting1);


// Ex:-1 String Interpolation
const name2 = "Srinivas";
const greeting2 = `Hello, ${name2}!`;
console.log(greeting2);

// Ex:-2 String Interpolation in function call
function greet(){
    return "Hello!";
}
console.log(`${greet()} Welcome to Hyderabad`);

// Ex:-3 String Interpolation in Expression evaluation
console.log(`Sum of 10 and 20 is ${10+20}`);


// Ex:-4 String Interpolation in Conditional Statements
function isEven(x){
    console.log(`${x} is ${x % 2 == 0 ? 'even': 'odd'}`);
}
isEven(8);


// Ex:- 
function myInfo(fname, lname, country){
    return `My name is ${fname} ${lname}, ${country} is my favorite country`;
}
console.log(myInfo("Srinivas", "Bareddy", "India"));


// Ex:- Expression Substitution
let text1 = "Visit Microsoft!";
let result = text.replace("Microsoft", "Google");
console.log(result);


// Ex:- Replacing multiple values of a string
let news = "Heavy Rains for three days..!";
let latestNews = news.replace("Heavy", "High Alert on")
                     .replace("Rainfall", "due to rains");
console.log(latestNews);