class Account {
    constructor(public Acc_no = 0, public Balance=0.0){}
    debitAmount(){
        return "this is debitAmount";
    }
    creditAmount(){
        return "this is creditAmount";
    }
    getBalance(){
        return this.Balance;
    }
}

interface IAccount{
    Date_of_opening: Date;
    addCustomer();
    removeCustomer();
}

class CurrentAccount extends Account implements IAccount{
    constructor(Acc_no = 0, Balance=0.0, public interestRate=0.0){
        super(Acc_no, Balance)
    }
    Date_of_opening: Date;
    addCustomer() {
        return "this is add customer from CurrentAccount class";
    }
    removeCustomer() {
        return "this is remove customer from CurrentAccount class";
    }
}

class SavingAccount extends Account implements IAccount{
    constructor(Acc_no = 0, Balance=0.0, public Min_Balance=0.0){
        super(Acc_no, Balance)
    }
    Date_of_opening: Date;
    addCustomer() {
        return "this is add customer from SavingAccount class";
    }
    removeCustomer() {
        return "this is remove customer from SavingAccount class";
    }
}


// Test case for creating an instance of CurrentAccount class with valid arguments:
let currAcc = new CurrentAccount(1234, 5000.0, 5.0);
console.log(currAcc.Acc_no); // expected output: 1234
console.log(currAcc.getBalance()); // expected output: 5000.0
console.log(currAcc.interestRate); // expected output: 5.0


//Test case for creating an instance of SavingAccount class with valid arguments:
let savAcc = new SavingAccount(5678, 10000.0, 2000.0);
console.log(savAcc.Acc_no); // expected output: 5678
console.log(savAcc.getBalance()); // expected output: 10000.0
console.log(savAcc.Min_Balance); // expected output: 2000.0


// Test case for calling addCustomer() method from CurrentAccount class:
let currAcc1 = new CurrentAccount(1234, 5000.0, 5.0);
console.log(currAcc1.addCustomer()); // expected output: "this is add customer from CurrentAccount class"

// Test case for calling addCustomer() method from SavingAccount class:
let savAcc1 = new SavingAccount(5678, 10000.0, 2000.0);
console.log(savAcc1.addCustomer()); // expected output: "this is add customer from SavingAccount class"


// Test case for calling removeCustomer() method from CurrentAccount class:
let currAcc2 = new CurrentAccount(1234, 5000.0, 5.0);
console.log(currAcc2.removeCustomer()); // expected output: "this is remove customer from CurrentAccount class"


// Test case for calling removeCustomer() method from SavingAccount class:
let savAcc2 = new SavingAccount(5678, 10000.0, 2000.0);
console.log(savAcc2.removeCustomer()); // expected output: "this is remove customer from SavingAccount class"


// Test case for calling debitAmount() method from Account class:
let acc = new Account(1111, 500.0);
console.log(acc.debitAmount()); // expected output: "this is debitAmount"


// Test case for calling creditAmount() method from Account class:
let acc1 = new Account(1111, 500.0);
console.log(acc1.creditAmount()); // expected output: "this is creditAmount"
