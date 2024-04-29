class BankAccount{

constructor(accountName,accountNumber,accountBalance){
this.accountName=accountName,
this.accountNumber=accountNumber,
this.accountBalance=accountBalance

}

deposit(amount)
{
    this.accountBalance+=amount;
}

withdraw(amount)
{
    this.accountBalance-=amount;
}

}

let thrishaaccount=new BankAccount("Thrisha",1234,400.00);
let advikaaccount=new BankAccount("Advik",2234,4000.00);
thrishaaccount.deposit(100);
thrishaaccount.withdraw(10);
advikaaccount.deposit(300);



console.log(thrishaaccount.accountNumber);
console.log(thrishaaccount.accountName);
console.log(thrishaaccount.accountBalance);


console.log("Advik's account number "+advikaaccount.accountNumber);
console.log(advikaaccount.accountName);
console.log(advikaaccount.accountBalance);
