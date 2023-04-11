var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(Acc_no, Balance) {
        if (Acc_no === void 0) { Acc_no = 0; }
        if (Balance === void 0) { Balance = 0.0; }
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    Account.prototype.debitAmount = function () {
        return "this is debitAmount";
    };
    Account.prototype.creditAmount = function () {
        return "this is creditAmount";
    };
    Account.prototype.getBalance = function () {
        return this.Balance;
    };
    return Account;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(Acc_no, Balance, interestRate) {
        if (Acc_no === void 0) { Acc_no = 0; }
        if (Balance === void 0) { Balance = 0.0; }
        if (interestRate === void 0) { interestRate = 0.0; }
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    CurrentAccount.prototype.addCustomer = function () {
        return "this is add customer from CurrentAccount class";
    };
    CurrentAccount.prototype.removeCustomer = function () {
        return "this is remove customer from CurrentAccount class";
    };
    return CurrentAccount;
}(Account));
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(Acc_no, Balance, Min_Balance) {
        if (Acc_no === void 0) { Acc_no = 0; }
        if (Balance === void 0) { Balance = 0.0; }
        if (Min_Balance === void 0) { Min_Balance = 0.0; }
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.Min_Balance = Min_Balance;
        return _this;
    }
    SavingAccount.prototype.addCustomer = function () {
        return "this is add customer from SavingAccount class";
    };
    SavingAccount.prototype.removeCustomer = function () {
        return "this is remove customer from SavingAccount class";
    };
    return SavingAccount;
}(Account));
// Test case for creating an instance of CurrentAccount class with valid arguments:
var currAcc = new CurrentAccount(1234, 5000.0, 5.0);
console.log(currAcc.Acc_no); // expected output: 1234
console.log(currAcc.getBalance()); // expected output: 5000.0
console.log(currAcc.interestRate); // expected output: 5.0
//Test case for creating an instance of SavingAccount class with valid arguments:
var savAcc = new SavingAccount(5678, 10000.0, 2000.0);
console.log(savAcc.Acc_no); // expected output: 5678
console.log(savAcc.getBalance()); // expected output: 10000.0
console.log(savAcc.Min_Balance); // expected output: 2000.0
// Test case for calling addCustomer() method from CurrentAccount class:
var currAcc1 = new CurrentAccount(1234, 5000.0, 5.0);
console.log(currAcc1.addCustomer()); // expected output: "this is add customer from CurrentAccount class"
// Test case for calling addCustomer() method from SavingAccount class:
var savAcc1 = new SavingAccount(5678, 10000.0, 2000.0);
console.log(savAcc1.addCustomer()); // expected output: "this is add customer from SavingAccount class"
// Test case for calling removeCustomer() method from CurrentAccount class:
var currAcc2 = new CurrentAccount(1234, 5000.0, 5.0);
console.log(currAcc2.removeCustomer()); // expected output: "this is remove customer from CurrentAccount class"
// Test case for calling removeCustomer() method from SavingAccount class:
var savAcc2 = new SavingAccount(5678, 10000.0, 2000.0);
console.log(savAcc2.removeCustomer()); // expected output: "this is remove customer from SavingAccount class"
// Test case for calling debitAmount() method from Account class:
var acc = new Account(1111, 500.0);
console.log(acc.debitAmount()); // expected output: "this is debitAmount"
// Test case for calling creditAmount() method from Account class:
var acc1 = new Account(1111, 500.0);
console.log(acc1.creditAmount()); // expected output: "this is creditAmount"
