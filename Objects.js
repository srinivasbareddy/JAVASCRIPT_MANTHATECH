// Ex:- Creating an Object
let person1 = {
    firstName: "Srinivas",
    lastName: "Bareddy",
    age: 25,
};
console.log(person1);
console.log(typeof(person1));


//Ex:- Creating Object with "new" keyword
const Employee = new Object({
    name:"John Doe",
    age:45,
    role:"SDE"
});
console.log(Employee.age);

// Ex:- Accessing Object Properties
    // Accessing with Dot Notation
let person2 = {
    firstName: "Karunakar",
    lastName: "Bareddy",
    age: 23,
    "1": "value1",
    "my choice": "value2",
};
console.log(person2.firstName);

    // Accessing with Bracket Notation
let person3 = {
    firstName: "Vikas",
    lastName: "Jakkula",
    age: 28,
    "1": "value1",
    "my choice": "value2",
};
console.log(person3["firstName"]);

//Ex:- Accessing Non-existing properties
let person4 = {
    firstName: "Raju",
    lastName: "Budati",
    age: 28,
    "1": "value1",
    "my choice": "value2",
};
console.log(person4.gender);
console.log(person4['gender']);

// Ex:- Variable as a key
let person5 = {
    firstName: "Vamshi",
    lastName: "Palla",
    age: 28,
  };
  
let a = "firstName";

console.log(person5[a]);  // Output: Vamshi
console.log(person5.a);   // Output: undefined

// Ex:- Object De-structuring
let person6 = {
    firstName: "Suresh",
    lastName: "Amaravarpu",
    age: 28,
  };
  
let { gender, age } = person6;
console.log(gender);    // Output:- undefined
console.log(age);       // Output:- 28


// Ex:- Modifying the Objects
    // With Dot Notation
let person7 = {
    firstName: "Rahul",
    lastName: "Nekkanti",
    age: 28,
};
      
person7.firstName = "Abhi";

console.log(person7.firstName);  // Abhi

    // With Bracket Notation
let person8 = {
    firstName: "Rakesh",
    lastName: "Mulagundla",
    age: 28,
};
      
person8["firstName"] = "Rajesh";

console.log(person8["firstName"]);  // Rajesh

// Ex:- Adding Object property
    // With Dot Notation
let person9 = {
    firstName: "Rakesh",
    lastName: "Kandula",
    age: 28,
};
      
person9.gender = "Male";
console.log(person9);

    // With Bracket Notation
let person10 = {
    firstName: "Rahul",
    lastName: "Attuluri",
    age: 28,
};
      
person10["gender"] = "Male";
console.log(person10);

// Ex:- Function as a value of a object
let person11 = {
    firstName: "Rahul",
    lastName: "Attuluri",
    age: 28,
    run: function () {
      console.log("Start Running.");
    },
};
  
person11.run();


// Ex:- Array as a value of an object
let person12 = {
    firstName: "Rahul",
    lastName: "Sipligunj",
    age: 28,
    habits: ["Playing Chess", "Singing"],
};
  
console.log(person12.habits);  // ["Playing Chess", "Singing"]
  
console.log(person12.habits[0]);  // Playing Chess
  
console.log(person12["habits"][1]);  // Singing


// Ex:- Object as a value of an object
let person13 = {
    firstName: "Vijay",
    lastName: "Dammalapati",
    age: 28,
    habits: ["Playing Chess", "Singing", "Dancing"],
    car: {
      name: "Audi",
      model: "A6",
      color: "White",
    },
};
  
console.log(person13.car.name);  // Audi
  
console.log(person13.car["model"]);  // A6


// Ex:- Deleting property of an object
let person14 = {
    firstName: "Rahul",
    lastName: "Kannuru",
    age: 28,
    habits: ["Playing Chess", "Singing", "Dancing"],
    car: {
      name: "Audi", 
      model: "A6",
      color: "White",
    },
};

delete person14.age;
console.log(person14);


// Ex:- Checking if a property exists in an Object
let person15 = {
    firstName: "Rahul",
    lastName: "Kannuru",
    age: 28,
    habits: ["Playing Chess", "Singing", "Dancing"],
    car: {
      name: "Audi", 
      model: "A6",
      color: "White",
    },
};

console.log('gender' in person15);


// Ex:- Object Methods
const car = new Object({
    name:"Suzuki",
    color:"black",
    speed:50
});
car.start= function(){
console.log("first method of car");
console.log(car);
}
car.start();


//Ex:- 
const car = new Object({
    name:"Suzuki",
    color:"black",
    speed:50
});
function stop(){
console.log("second method of car");
}
car.stop=stop;
console.log(car);

// Ex:- Function Expression
const start= function fun1(){
console.log("function expression");
}
console.log(start);

// Ex:- When a function is a property of an object, it becomes method

const person16 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
    console.log('Hello, World!');
    },
    getFullName: function () {
    return this.firstName + ' ' + this.lastName;
    }
};
console.log(person16);

// Ex:- Nested Object
const person17 = {
    fname:"John",
    lname:"Doe",
    age: 24,
    address :{
    HNo :"10-32/5d",
    street: "XYZ street",
    colony:"ABC Colony",
    country:{
    state:"Telangana",
    country:"India"
    }
    }
}
console.log(person17.address.colony);
// console.log(address.street);
console.log(person17['address']['country']['state']);

// Ex:- Nested Object
const person18 = {
    fname:"John",
    lname:"Doe",
    age: 24,
    address :{
    HNo :"10-32/5d",
    street: "XYZ street",
    colony:"ABC Colony",
    country:{
    state:"Telangana",
    country:"India"
    }
    }
}
var data= "address";
var data2= "country";
console.log(person18[data]); // array notation
console.log(person18.data); // dot notation --> undefined 