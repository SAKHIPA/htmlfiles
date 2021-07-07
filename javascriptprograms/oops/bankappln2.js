//class Bank {
    //status = 0
    accounts = {
        1000: { accountNumber: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
        1001: { accountNumber: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
        1002: { accountNumber: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
        1003: { accountNumber: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
    }
    

    // if(1000 in accounts){
    //     console.log(accounts[1000]["name"]);

    // }
    // else{
    //     console.log("not");
    // }


    //check name

    // for(let account in accounts){
    //     if(accounts[account]["name"]=="aj"){
    //         console.log("exist");
    //         break
    //     }
    //     else{
    //         console.log("not");
    //         break
    //     }
    // }



    //usename=1000 pw=userone
    // 
    


    let frmAcc=1000,toAcc=1001,amt=500
    function fundTransfer(frmAcc,toAcc,amount){
        accounts[frmAcc]["balance"]-=amount
        accounts[toAcc]["balance"]+=amount
    }

    fundTransfer(frmAcc,toAcc,amt)
    console.log(accounts);