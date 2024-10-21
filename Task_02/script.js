/* 2. Write a function calculateSalary → that accepts two parameters 
    (monthly pay scale , deductions ) : take a fixed amount of salary (25 k per month
    and deduct the deductions amount , then display salary . */

function calculateSalary(monthlyPay, deductions){
    let  salary = 25000;
    let pfAmount = (salary * 5) / 100;
    let taxDeductions = (salary * 3) / 100;

    let salaryAfterDedeuctions = salary - pfAmount - taxDeductions;
    console.log(`Total Salary after all the Dedeuctions is: ${salaryAfterDedeuctions} Rupees`);
}
calculateSalary();