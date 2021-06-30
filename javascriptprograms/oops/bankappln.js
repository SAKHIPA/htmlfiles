class Bank {
    status = 0


    getAccountDetails() {
        let accounts = {
            1000: { accountNumber: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
            1001: { accountNumber: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
            1002: { accountNumber: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
            1003: { accountNumber: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
        }
        return accounts
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

    // }

    deposit(amt) {
        this.balance += amt
        console.log(`your account${this.accountNumber},has been credited with ${amt}`);

    }
    withdraw(amt) {
        if (this.balance < amt) {
            console.log(`insufficient balance`);
        }
        else {
            this.balance -= amt
            console.log(`your account${this.accountNumber},has been credited with ${amt}`);

        }

    }

    balanceEnq() {

        console.log(`your account${this.accountNumber},with balance ${this.balance}`);

    }

}
var obj1 = new Bank()
//obj1.createAccount(1000,"sakhi",200)
//obj1.deposit(100)
//obj1.balanceEnq()
//obj1.withdraw(500)

//obj1.authenticate(1001,"user")

var user = obj1.authenticate(10001, "test")
var res = user == 0 ? "success" : user == 1 ? "invalid pw" : "invalid user"
console.log(res);
