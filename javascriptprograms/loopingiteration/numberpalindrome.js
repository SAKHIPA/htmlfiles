var num=123;
var res="";

while(num!=0){
    let digit=num%10;
   // console.log(digit);
    res=res+digit;
   num=Math.floor(num/10);

}
