var arr=[11,15,2,9,6,5,12]

arr.sort((num1,num2)=>num1-num2)

var element=12;
var low=0,upp=arr.length-1;
var flag=0;
while(low<upp){
    let mid=Math.floor((low+upp)/2)
    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element==arr[mid]){
        flag++;
        break;
    }
}
console.log(flag==0?"not found":"found");
