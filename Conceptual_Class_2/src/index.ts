class Account {
  nominee?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
  ) {}

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Invalid Amount");
    this._balance = this._balance + amount;
  }

  private verifyAccount() {
    //
  }
  private calculateFee() {
    return this._balance * 0.1;
  }

  get balance() {
    this.verifyAccount();
    return this._balance;
  }
}

const account = new Account(1, "Ruhan", 0);

account.deposit(200);

console.log(account.balance);
