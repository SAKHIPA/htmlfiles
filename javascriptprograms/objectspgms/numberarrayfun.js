//ar arr=[432789]op  <5 num-1>5 num+1 using method
var arr=[4,3,2,7,8,9]
//var op=arr.map(num=>num>5?num+1:num-1)
//console.log(op);

var total=arr.reduce((num1,num2)=>num1+num2)
console.log(total);

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);
