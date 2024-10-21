// if statement
let age = 18;
if (age >= 18) {
console.log('You are eligible to vote');
}

// Nested-if
let username = 'Srinivas';
let password = 'Srinivas@198';
if (username == 'Srinivas') {
    if (password.length <= 9) {
        console.log('Login Success');
    }
}

// Ex:- 
let username2 = 'Rahul';
let userpassword2 = 'Rahul@236';
if (username2 == 'Rahul' && userpassword2.length <= 10) {
console.log('Login Success');
}


// if-else
let username3 = 'Karunakar';
let userpassword3 = 'Rahul@1236';
    if (username3 == 'Rahul' && userpassword3.length <= 9) {
        console.log("Login Success");
    }
    else{
        console.log("Incorrect Credentials")
    }


// else-if
let monthNumber = 6;
let monthName;
if (monthNumber == 1) {
    monthName = 'Jan';
} else if (monthNumber == 2) {
    monthName = 'Feb';
} else if (monthNumber == 3) {
    monthName = 'Mar';
} else if (monthNumber == 4) {
    monthName = 'Apr';
} else if (monthNumber == 5) {
    monthName = 'May';
} else if (monthNumber == 6) {
    monthName = 'Jun';
} else if (monthNumber == 7) {
    monthName = 'Jul';
} else if (monthNumber == 8) {
    monthName = 'Aug';
} else if (monthNumber == 9) {
    monthName = 'Sep';
} else if (monthNumber == 10) {
    monthName = 'Oct';
} else if (monthNumber == 11) {
    monthName = 'Nov';
} else if (monthNumber == 12) {
    monthName = 'Dec';
} else {
    monthName = 'Invalid monthNumber';
}
console.log(monthName);


// Switch statements
let day = 6;
let dayName;
switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}
console.log(dayName); // Friday