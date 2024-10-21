/* 4. Create a Bank Account object with properties as follows
● accountNumber
● accountHolderName
● Balance
Methods :- deposit( amount deposited ), withdraw (subtract from
deposited amount), checkBalance (calculate balance after withdrawal).*/

let BankAccount = {
    accountNumber: 62467144628,
    accountHolderName: "Srinivasa Reddy",
    balance: 2000,
    deposit: function(amountDeposited){
        console.log(`Amount Deposited is: ${amountDeposited} Rupees`);
    },
    withdraw: function(amountWithdrawn){
        console.log(`Amount Withdrawn is: ${amountWithdrawn} Rupees`);
    },
    checkBalance: function(balance){
        console.log(`Available Balance is: ${balance + BankAccount.deposit - BankAccount.withdraw} Rupees`);
    },
}

BankAccount.deposit(1000);
BankAccount.withdraw(500);
BankAccount.checkBalance(BankAccount.balance);
