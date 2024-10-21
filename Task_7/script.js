/* 7. Implement a program that checks if a student is eligible for a scholarship
based on their GPA . If GPA is >= 7.5 then student is eligible for scholarship
else it will be rejected . */

function eligibilityCheck(studentGpa){
    let isEligibleForScholarship = (studentGpa >= 7.5 ? "Eligible" : "Rejected");
    console.log(isEligibleForScholarship);
}
eligibilityCheck(8.0);

/* let studentGpa = 7.4;

let isEligibleForScholarship = (studentGpa >= 7.5 ? "Eligible" : "Rejected");

console.log(isEligibleForScholarship); */

