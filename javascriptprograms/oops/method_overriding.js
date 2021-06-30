class Parent{
    phone(){
        console.log("samsum");
    }
}
class Child extends Parent{
    phone(){
       // super.phone()
        console.log("iphone");
    }
}
var obj=new Child()
obj.phone()