var str="";


for(let col=1;col<=5;col++){
    let row=3;
    if(( row==3)|(row+col==4)|(col-row==2)){
        str+=" * "
    }
    else{
        str+=" "
    }
    console.log(str);
}