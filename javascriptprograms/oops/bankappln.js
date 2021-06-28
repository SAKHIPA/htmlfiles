class Bank{
    status=0


getAccountDetails(){
        let accounts={
            1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
            1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
            1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
            1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
        }
        return accounts
    }

    authenticate(username,pwd){

        let accountDetals=this.getAccountDetails()
        if(username in accountDetals){
            if(pwd==accountDetals[usernsme]["password"]){
                this.status

                else{
                    return 1
                }
            }

        }
        else{
            return 0
        }
    }




    createAccount(accountNumber,pName,balance){
        this.accountNumber=accountNumber
        this.pName=pName
        this.balance=balance

    }

    deposit(amt){
        this.balance+=amt
        console.log(`your account${this.accountNumber},has been credited with ${this.amt}`);

    }
    withdraw(amt){
        if(this.balance<amt){
            console.log(`insufficient balance`);
        }
        else{
            this.balance-=amt
            console.log(`your account${this.accountNumber},has been credited with ${this.amt}`);
    
        }

    }

    balance(){
    
        console.log(`your account${this.accountNumber},with balance ${this.balance}`);

    }

}
var obj1=new Bank()

var user=obj1.authenticate(1000,"test")