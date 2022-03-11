//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let empMap = new Map();

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
    set name(name) {
        let namePattern = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (namePattern.test(name))
            this._name = name
        else throw "Name Is Invalid";
    };


    //Method to return string of values
    toString() {
        return `Id: ${this.id} \tName: ${this.name} \tSalary: ${this.salary} \tGender: ${this.gender} \tStartDate: ${this.startDate}`
    }
}

//Function to add employe vaues to the employee object
function addEmployee(id, name, salary, gender, startDate){
    let emp 
    try{
        emp = new EmployeePayroll(id, name, salary, gender, startDate);
    } catch(e){
        console.error(e)
    }
    empMap.set(id,emp);
    return empMap;
}

//Function to add employee details from user
function addEmployeeDetailsFromUser(){
    try {
        let id = prompt("Enter Your Id : ");
        let name = prompt("Enter Your Name : ");
        let salary = parseInt(prompt("Enter Your Salary : "));
        let gender = prompt("Enter Your Gender Like M or F : ");
        let startDate = prompt("Enter The Date Of Joining Like 3/11/2022 month/date/year : ");
        let emp = addEmployee(id, name , salary, gender, startDate)
        return emp;
    } catch(e){
        console.error(e)
    }
    
}

//Function to add employee details from user
function upDateEmployeeDetailsFromUser(){
    try { 
        let id = parseInt(prompt("Enter The Id Of The Employee You Want To Edit : "));
        for(let employee of empMap.values()){
            if(employee.id == id){
                console.log("1: Change Name \n2: Change Salary \n3: Go Back");
                let choice = parseInt(prompt("Enter The Choice From Above : "));
                switch (choice){
                    case 1:
                        let newName = prompt("Enter The New Name You Want : ");
                        employee.name = newName;
                        break;
                    case 2:
                        let newSalary = parseInt(prompt("Enter Your New Salary : "));
                        employee.salary = newSalary;
                        break;
                    case 3:
                        return;
                    default:
                        console.log("Wrong Choice")
                        break;
                }
            }
        } 
    } catch(e) {
        console.error(e)
    }   
    
}

//Creating obj for class using parameterized conbstructor
try {
    while(true)
    {
        console.log("1: Enter Default Employee \n2: Enter EmployeeDetais By Yourself \n3: Update Employee \n4: Display Employee \n5: Exit");
        let choice = parseInt(prompt("Enter Your choice : "))
        switch(choice){
            case 1:
                //Created obj for class using parameterized conbstructor
                addEmployee(1, "Rajkumar", 25000, 'M', new Date().toLocaleDateString());
                addEmployee(2, "Mahipal", 11000, 'M', new Date().toLocaleDateString())
                addEmployee(3, "Ajay" , 35000, 'M', new Date().toLocaleDateString())
                addEmployee(4, "Aman" , 25000, 'M', new Date().toLocaleDateString())
                let emp = addEmployee(6, "Omkar" , 25000, 'M', new Date().toLocaleDateString())
                for (let employee of emp.values()){
                    console.log(employee.toString())
                }
                break;
            case 2:
                try {
                    let empMapArr = addEmployeeDetailsFromUser();
                    for (let employee of empMapArr.values()){
                        console.log(employee.toString())
                    }
                } catch (e) {
                    console.error(e)
                }
                break;
            case 3:
                upDateEmployeeDetailsFromUser();
                break;
            case 4:
                for (employee of empMap.values()){
                    console.log(employee.toString())
                }
                break;  
            case 5:
                process.exit(1);
            default:
                console.log("Wrong Choice")
                continue;
        }
    }
} 
catch(e) {
    console.error(e)
}
