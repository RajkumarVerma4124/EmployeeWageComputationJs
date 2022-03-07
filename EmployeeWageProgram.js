//Displaying the welcome message
console.log("\nWelcome To The Employee Wage Program");

//Initializing constant
const IS_ABSENT = 0;
const WAGE_PER_HOUR = 20;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
//Genrating random value either 0 or 1
let empCheck = Math.floor(Math.random() * 10) % 2;
//Checking whether an employee is present or not(UC1)
console.log((IS_ABSENT == empCheck) ? "Employee Is Absent" : "Employee Is Present")

//Calculating daily employee wage(UC2)
let empHrs = 0;
let empDailyCheck = Math.floor(Math.random() * 10) % 3;
//Initializin array with emp daily check
let employees = ["Absent", "Part Time", "Full time"]
console.log("Today Employee Is : " + employees[empDailyCheck]);
switch (empDailyCheck) {
    case PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
        break;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Today's Wage Is : " + empWage);