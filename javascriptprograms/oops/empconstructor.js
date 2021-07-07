
class Employee{
    constructor(id,name,desig,salary,exp){
        this.id=id
        this.name=name
        this.desig=desig
        this.salary=salary
        this.exp=exp

    }
    

}
var obj1=new Employee(1001,"ram","developer",30000,3)
var obj2=new Employee(1002,"rahi","software",35000,4)
var obj3=new Employee(1003,"mahi","hardware",20000,2)
var obj4=new Employee(1004,"raj","fullstack",50000,5)
var obj5=new Employee(1005,"kanya","frontend",25000,1)
var employee=[]
employee.push(obj1,obj2,obj3,obj4,obj5)
var highSal=employee.reduce((sal1,sal2)=>sal1.salary>sal2.salary?sal1:sal2)
console.log(highSal);

var sortedEmp=employee.sort((emp1,emp2)=>emp1.exp-emp2.exp)
console.log(sortedEmp);

var isEmp=employee.some(emp=>emp.desig=="qa")
console.log(isEmp);


