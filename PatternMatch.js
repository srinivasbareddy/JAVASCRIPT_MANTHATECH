var text = "@#$%^";
var pattern = /\S/;
console.log(pattern.test(text));

// Ex:- Validating mail address
const mail1 = "srinivasa.bareddy@manthatech.com";
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(pattern.test(mail1));



// Ex:- Validating mail address
const mail2 = "srinivasa.bareddy@manthatech.com";
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(pattern.test(mail2));


//Ex:- Validating Gmail address
const mail3 = "srinivasa.bareddy@gmail.com";
const pattern = /^[a-zA-Z0-9._%+-]+@gmail.com/;
console.log(pattern.test(mail3));