class Bank {
    status = 0


    accounts = {
        1000: { accountNumber: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
        1001: { accountNumber: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
        1002: { accountNumber: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
        1003: { accountNumber: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
    }
    getAccountDetails() {
        return this.accounts
    }

    authenticate(userName, pwd) {

        let accountDetals = this.getAccountDetails()
        if (userName in accountDetals) {
            if (pwd == accountDetals[username]["password"]) {
                return 0;//success

            }

            else {
                return 1;//invalid pw

            }


        }
        else {
            return -1;//invalid user
        }
    }




    // createAccount(accountNumber, pName, balance) {
    //     this.accountNumber = accountNumber
    //     this.pName = pName
    //     this.balance = balance

    balanceEnq(accountNumber) {
        if(this.status==1){

        }
        else{

        }

        

    }

    fundTransfer(frmAcc, toAcc, amount) {
        if (this.status == 1) {
            let bal = this.balanceEnq(frmAcc)
            if (bal >= amount) {
                if (toAcc in this.accounts) {
                    this.accounts[frmAcc]["balance"] -= amount;
                    this.accounts[toAcc]["balance"] += amount;

                } else {
                    console.log("invalid accno");
                }

            }
            else {
                console.log("insufficient balance");
            }

        }
        else {
            console.log("invalid session");
        }
    }
    logout(user) {
        this.status = 0
    }

}
var obj1 = new Bank()

var user = obj1.authenticate(10001, "userone")
//var res = user == 0 ? "success" : user == 1 ? "invalid pw" : "invalid user"
console.log(res);
obj1.logout()
obj1.fundTransfer(user, 1000, 1000)
console.log(obj1.balanceEnq(user));
