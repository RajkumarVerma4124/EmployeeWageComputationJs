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
let empCheck = Math.floor(Math.random() * 10) % 3;
//Checking whether an employee is present or not(UC1)
console.log((IS_ABSENT == empCheck) ? "Employee Is Absent" : "Employee Is Present")

//Calculating daily employee wage and ref using function to check whether emp is present fulltime or parttime(UC2 && UC3)
function getWorkingHours(empCheck) {
    //Initializing array with emp daily check
    let employees = ["Absent", "Part Time", "Full time"]
    console.log("Today Employee Is : " + employees[empCheck]);
    switch (empCheck) {
        case PART_TIME:
            return PART_TIME_HOURS;
        case FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empHours = getWorkingHours(empCheck);
let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee Today's Wage Is : " + empWage);