class Calculation{
    add(){
        console.log("no args");
    }
    add(num){
        console.log("one arg");
    }
    add(num1,num2){
        console.log("2 args");
    }
}
var cal=new Calculation()
cal.add()
cal.add(10)
cal.add(10,20)