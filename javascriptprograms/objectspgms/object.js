var employee={id:1000,ename:"sakhi",sal:40000}
console.log(employee.id);


employee.sal=50000;
console.log(employee);

employee.sal-=500;
console.log(employee.sal);


console.log("gender" in employee);

employee.gender="male";
console.log(employee);


employee.sal=employee.sal+500;
console.log(employee.sal);



if(!("exp" in employee)){
employee.exp=2;
}
console.log(employee);



