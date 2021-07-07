function checkSlot(){
    //let ages=document.querySelector("#age").value
    let ages=age.value
    if(ages<18){
        result.innerHTML=`<p style="color:red"> not eligible</p>`//id can direcly invoke
    }
    else{
        result.innerHTML=`<p style="color:green">eligible<p>`
    }
}