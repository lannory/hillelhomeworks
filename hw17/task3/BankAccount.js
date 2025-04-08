class BankAccount {
	#balance; 
	constructor(balance){
		this.#balance = balance;
	}

	deposit(amount){
		this.#balance += amount;
	}

	withdraw(amount){
		this.#balance -= amount;
	}

	getBalance(){
		return this.#balance;
	}
}