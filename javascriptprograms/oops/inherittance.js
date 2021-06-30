class Person{
    setPerson(name,age){
        this.name=name
        this.age=age
    }
    printDetails(){
        console.log(this.name,this.age);
    }
}
class Student extends Person{
    setStudent(rollNo){
        this.rollNo=rollNo
    }

}
var obj=new Student()
obj.setPerson("sak",29)
obj.printDetails()