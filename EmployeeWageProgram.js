//Displaying the welcome message
console.log("\nWelcome To The Employee Wage Program");

//Initializing constant
const IS_ABSENT = 0;
const WAGE_PER_HOUR = 20;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const NUM_OF_WORKING_DAYS = 20;

//Genrating random values
let empCheck = Math.floor(Math.random() * 10) % 2;
//Checking whether an employee is present or not(UC1)
console.log((IS_ABSENT == empCheck) ? "Employee Is Absent" : "Employee Is Present")

//Calculating wages for a month of an employee(UC4)
let totalWage = 0;
dailyEmpHrs = 0;
for (let day = 1; day <= NUM_OF_WORKING_DAYS; day++) {
    //Calculating daily employee wage and ref using function to check whether emp is present fulltime or parttime(UC2 && UC3)
    function getWorkingHours(empDailyCheck) {
        switch (empDailyCheck) {
            case PART_TIME:
                return PART_TIME_HOURS;
            case FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    //Initializing array with emp daily check
    let employees = ["Absent", "Part Time", "Full time"]
    let empDailyCheck = Math.floor(Math.random() * 10) % 3;
    dailyEmpHrs = getWorkingHours(empDailyCheck);
    let dailyEmpWage = dailyEmpHrs * WAGE_PER_HOUR;
    totalWage += dailyEmpWage;
    console.log("Day: " + day + "\tToday Employee Is: " + employees[empDailyCheck] + "\tDailyWage: " + dailyEmpWage);
}
console.log("\nEmployee Total Wage Per Month is : " + totalWage)