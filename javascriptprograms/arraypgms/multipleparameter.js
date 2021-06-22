function addNumber(...params){

    let res=0;
    for(let  num of params){
        res+=num
    }
    return res
}
console.log(addNumber(10,20,30));