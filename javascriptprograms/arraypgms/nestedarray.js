var employees=[
    [100,"ram",20000,"developer"],
    [101,"ravi",22000,"developer"],
    [102,"raju",25000,"qa"],
    [103,"nithin",22000,"qa"]]
    // for(let emp of employees){
    //     console.log(emp[1]);
    // }

for(let emp of employees){
    if(emp[2]>=22000){
        console.log(emp[1]);
    }
}



