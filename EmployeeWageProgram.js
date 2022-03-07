//Displaying the welcome message
console.log("\nWelcome To The Employee Wage Program");

//Checking whether an employee is present or not(UC1)
//Initializing constant
const IS_ABSENT = 0;
//Genrating random value either 0 or 1
let empCheck = Math.floor(Math.random() * 10) % 2;
console.log((IS_ABSENT == empCheck) ? "Employee Is Absent" : "Employee Is Present")