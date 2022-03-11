//Created Employee Payroll class(UC11a)
class EmployeePayroll {
    //Declaring properties of class
    id;
    salary;
    gender;
    startDate;

    //Defining parameterizd constructor of class using constructor keyword(UC12)
    constructor(...parameters) {
        this.id = parameters[0];
        this.name = parameters[1];
        this.salary = parameters[2];
        this.gender = parameters[3];
        this.startDate = parameters[4];
    }

    //Getter and setter methods for properties of class
    get name() { return this._name };
    set name(name) { this._name = name };

    //Method to return string of values
    toString() {
        return `Id: ${this.id} \tName: ${this.name} \tSalary: ${this.salary} \tGender: ${this.gender} \tStartDate: ${this.startDate}`
    }
}

//Creating obj for class using parameterized conbstructor
let employPayroll = new EmployeePayroll(1, "Rajkumar", 25000, 'M', new Date().toLocaleDateString());
console.log(employPayroll.toString());
//Updating values of the properties of class using obj
employPayroll.name = "Raj";
employPayroll.salary = 30000;
console.log(employPayroll.toString());
//Adding new emp in the new employeepayroll obj with gender and start date(UC12)
let newEmp = new EmployeePayroll(2, "Mahipal", 11000, 'M', new Date().toLocaleDateString());
console.log(newEmp.toString());