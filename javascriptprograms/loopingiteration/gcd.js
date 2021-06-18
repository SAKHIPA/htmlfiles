var num1=28,num2=14;
var gcd=0;

var count=0;


for(let i=0;i<=num1;i++){

    if((num1%i==0)&(num2%i==0)){
        
        gcd=i;
        count++;
        
    


    }
    
}
console.log(count);

console.log(gcd);

