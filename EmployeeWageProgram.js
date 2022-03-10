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
let totalWage = 0,
    days = 0,
    hours = 0;
let dailyWageEmpArr = new Array();
let totalWageEmpArr = new Array();
let empDailyWageMap = new Map();
let empDayAndHoursArr = new Map();

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
function calcDailyWage(empHours) {
    return empHours * WAGE_PER_HOUR;
}

//Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month(UC4 && UC5)
while (days < NUM_OF_WORKING_DAYS && hours <= TOTAL_WORK_HOURS) {
    //Initializing array with emp daily check
    let employees = ["Absent", "Part Time", "Full time"]
    let empDailyCheck = Math.floor(Math.random() * 10) % 3;
    totalWage += calcDailyWage(getWorkingHours(empDailyCheck));
    //Storing the daily wage along with total wage(UC6)
    totalWageEmpArr.push(totalWage);
    dailyWageEmpArr.push(calcDailyWage(getWorkingHours(empDailyCheck)));
    hours += getWorkingHours(empDailyCheck);
    days++;
    //Storing the day and daily wage using map(UC8) 
    empDailyWageMap.set(days, calcDailyWage(getWorkingHours(empDailyCheck)));
    //Storing the day and daily hours using map(UC9) 
    empDayAndHoursArr.set(days, getWorkingHours(empDailyCheck));
    console.log("Day: " + days + "\tTodays Employee Is:" + employees[empDailyCheck] + "\tEmp Total Work Hours: " + hours + " \tDailyWage: " + dailyWageEmpArr[days - 1] + "\tTotal Emp Wage : " + totalWageEmpArr[days - 1]);
}
console.log("\nTotal Working Days : " + days + "\nTotal Hours : " + hours + "\nTotal Emp Wage : " + calcDailyWage(hours));
console.log("Daily Emp Wage Using Array : " + dailyWageEmpArr.join(" "));
console.log("Total Emp Wage Using Array : " + totalWageEmpArr.join(" "));

//Array Helper functions(UC7)
//Iterate array using helper function foreach traversal or reduce method(UC7a)
console.log("\nIterate Array Using Helper Function Foreach Or Reduce");
let totalEmpWage = 0;
//Lambda function to sum up total wage and daily wage using foreach
let sumWages = (dailyWage) => totalEmpWage += dailyWage;
//Lamda function to calculate total wage with current wage using reduce
let totalWageUsingReduce = (totalWage, dailyWage) => totalWage + dailyWage;
//Foreach to traverse the array and print total wage
dailyWageEmpArr.forEach(sumWages);
console.log(`Total Wage Using Foreach : ${totalEmpWage}`);
//Using reduce to traverse the array and print total wage and returning the accumulator
console.log(`Total Wage Using Reduce :  ${dailyWageEmpArr.reduce(totalWageUsingReduce,0)}`);

//Showing the days along with daily wage using array map helper function(UC7b)
console.log("\nShowing the days along with daily wage using array map helper function");
let daysCount = 0;
//Lambda function to map days with daily wage
let mapDayWithDailyWage = (dailyWage) => `Day : ${++daysCount} \tTodays's Wage : ${dailyWage}`;
//Map function used to map each element with days in array
let daysWithDailyWageMapArr = dailyWageEmpArr.map(mapDayWithDailyWage);
console.log(daysWithDailyWageMapArr.join("\n"));

//Showing the dayss when full time wage of 160 were earned using filter function(UC7c)
console.log("\nShowing the dayss when full time wage of 160 were earned using filter function");
//Lambda function to get full working dayss wages returns if values matches with given value
let getFullTimeWorkDayWages = (dailyWage) => dailyWage.includes("160");
//Array using filter function to filter the array based on given condition
let FullWorkDayWagesArr = daysWithDailyWageMapArr.filter(getFullTimeWorkDayWages);
console.log(FullWorkDayWagesArr.join("\n"));

//Finding the first occurrence when full time wage was earned using find function using find(UC7d)
console.log("\nFinding the first occurrence when full time wage was earned");
console.log(FullWorkDayWagesArr.find(getFullTimeWorkDayWages));

//Checking if every element of full time wage is truly holding full time wage using every(UC7e)
console.log("\nChecking every element truly holding full time wages of employees");
console.log(FullWorkDayWagesArr.every(getFullTimeWorkDayWages) ? `Every element is holding correct value` : `Every element is not holding correct value`);

//Checking if there is any part time wages using some(UC7f)
console.log("\nChecking whether it holds some part time wages");
//Lambda function to check wages matches parttime wages abd returns if values matches with given value
let getPartTimeWorkDayWages = (dailyWage) => dailyWage.includes("80");
console.log(daysWithDailyWageMapArr.some(getPartTimeWorkDayWages) ? `The employee have worked part time wages` : `The Employee doesn't woked part time wages`);

//Finding the number of dayss employee worked using reduce(UC7g)
console.log("\nFinding the number of dayss employee worked");
let totalDaysWorked = (numOfDays, dailyWage) => {
    if (dailyWage > 0)
        numOfDays++;
    return numOfDays;
}
console.log(`Number of dayss employee worked : ${dailyWageEmpArr.reduce(totalDaysWorked,0)}`);

//Using map to store days and daily wage along with total wage(UC8)
console.log("\nStoring days with daily wage using map");
for (let [key, value] of empDailyWageMap) {
    console.log("Day : " + key + " \tTodays 's Wage  " + value);
}
console.log("Total Employee Wage Using Map : " + Array.from(empDailyWageMap.values()).reduce(totalWageUsingReduce, 0));

//Using Arrow Functions(UC9)
let totalHoursUsingMap = Array.from(empDayAndHoursArr.values()).reduce(totalWageUsingReduce, 0)
let totalWageOfEmpUsingArrow = (dailyWageEmpArr.filter(dailyWage => dailyWage > 0)).reduce(totalWageUsingReduce, 0);
//Using arrow function to find emp total hours and there total wage(UC9a)
console.log("\nUsed Arrow Function : \nEmpoyee Total hours : " + totalHoursUsingMap + "\nEmpoyee Total Wage: " + totalWageOfEmpUsingArrow);
//Show fulltime, parttime and absent days of employee using arrow function(UC9b)
console.log("\nShowing Fulltime, Parttime And Absent Days Of Employee Below : ");
let nonWorkingDays = new Array();
let partTimeWorkingDays = new Array();
let fullTimeWorkingDays = new Array();
empDayAndHoursArr.forEach((value, key, map) => {
    if (value == 8)
        fullTimeWorkingDays.push(key);
    else if (value == 4)
        partTimeWorkingDays.push(key);
    else
        nonWorkingDays.push(key);
})
console.log("Full Time Working Days " + fullTimeWorkingDays.join(" : "));
console.log("Part time work Days : " + partTimeWorkingDays.join(" : "));
console.log("Non Working Days : " + nonWorkingDays.join(" : "));