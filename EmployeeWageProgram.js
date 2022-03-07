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
const TOTAL_WORK_HOURS = 160;

//Genrating random values
let empCheck = Math.floor(Math.random() * 10) % 2;
//Checking whether an employee is present or not(UC1)
console.log((IS_ABSENT == empCheck) ? "Employee Is Absent" : "Employee Is Present")

let totalWage = 0,dailyEmpHrs = 0,day = 1,hours = 0;
//Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month(UC && UC5)
while (day <= NUM_OF_WORKING_DAYS && hours <= TOTAL_WORK_HOURS) {
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
    hours += dailyEmpHrs;
    console.log("Day: "+day+"\tToday Employee Is:"+employees[empDailyCheck]+"\tEmp Total Work Hours: "+hours+" \tDailyWage:"+dailyEmpWage);
    day++;
}
console.log("\nEmployee Total Wage For This Month is : " + totalWage)