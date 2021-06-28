class employee {
    employeeDetails(eId, eName, sal) {
        this.empId = eId
        this.empName = eName
        this.salary = sal
    }

    printDetails(){
        console.log(this.empId,this.empName,this.salary);
    }
}
var emp=new employee()
emp.employeeDetails(1000,"sakhi",50000)
emp.printDetails()

emp.employeeDetails(1001,"takhi",50000)
emp.printDetails()

var emp1=new employee()
emp1.employeeDetails(2000,"sakhi",50000)
emp1.printDetails()

