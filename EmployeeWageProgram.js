//Displaying the welcome message
console.log("\nWelcome To The Employee Wage Program");

//Initializing constant and variables
const IS_ABSENT = 0;
const WAGE_PER_HOUR = 20;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const NUM_OF_WORKING_DAYS = 20;
const TOTAL_WORK_HOURS = 160;
let totalWage = 0,dailyEmpHrs = 0,day = 0,hours = 0;
let dailyWageEmp = new Array();
let totalWageEmp = new Array();

//Genrating random values
let empCheck = Math.floor(Math.random() * 10) % 2;
//Checking whether an employee is present or not(UC1)
console.log((IS_ABSENT == empCheck) ? "Employee Is Absent" : "Employee Is Present")

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

//Calculating the daily wage according the daily hours(UC6)
function calcDailyWage(empHours){
    return empHours * WAGE_PER_HOUR;
}

//Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month(UC4 && UC5)
while (day < NUM_OF_WORKING_DAYS && hours <= TOTAL_WORK_HOURS) {
    //Initializing array with emp daily check
    let employees = ["Absent", "Part Time", "Full time"]
    let empDailyCheck = Math.floor(Math.random() * 10) % 3;
    dailyEmpHrs = getWorkingHours(empDailyCheck);
    let dailyEmpWage = calcDailyWage(dailyEmpHrs);
    totalWage += dailyEmpWage;
    //Storing the daily wage along with total wage(UC6)
    totalWageEmp.push(totalWage);
    dailyWageEmp.push(dailyEmpWage);
    hours += dailyEmpHrs;
    day++;
    console.log("Day: " + day + "\tToday Employee Is:" + employees[empDailyCheck] + "\tEmp Total Work Hours: " + hours + " \tDailyWage: " + dailyWageEmp[day-1]+"\tTotal Emp Wage : "+totalWageEmp[day-1]);
}
console.log("\nTotal Working Days : "+day+"\nTotal Hours : "+hours+"\nTotal Emp Wage : " + calcDailyWage(hours));
console.log("Daily Emp Wage Using Array : "+dailyWageEmp.join(" "));
console.log("Total Emp Wage Using Array : "+totalWageEmp.join(" "));
