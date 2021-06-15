var num=11;

var flag=0;

for(let i=2;i<num;i++){
    if(num%i==0){
        flag=flag+1;
    }
}
if(flag==0){
    console.log("prime no");
}
else{
    console.log("not a prime");
}