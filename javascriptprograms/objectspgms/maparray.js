var arr=[2,3,5,4,8]

var squares=arr.map(num=>num**2)
console.log(squares);


var cubes=arr.map(num=>num**3)
console.log(cubes);

//even numbers
var evens=arr.filter(num=>num%2==0)
console.log(evens);