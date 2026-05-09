const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

//account holders can view their accounts using their ID. 
function getAccountById (id)
{
	for (const account of accounts)
		{
			if (account.id == id)
				{
					return account;
				}
	}
	return null;
}

// customers can create a new account wirh an ID and their name with 0 balance
function createAccount (newAccountId, newAccountOwner, newAccountBalance) {


		{ accounts.push(
		{
			
			id: newAccountId,
			owner: newAccountOwner,
			balance: 0
		}
	);
}
}


// account holders can deposit money to their accounts with their ID if amount withdrawn is greaters than 0. 
function depositMoney (accountId, amount)
{
	const account = getAccountById(accountId);
	
	if (!account) 
		{
		throw new Error("Account not found.");
	
		}

	if (!Number.isFinite(amount) || amount <= 0) {
		
		console.log("The account cannot not identfied in our system.")

};

	account.balance += amount;
}

function withdrawMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found.");
	}

	if (!Number.isFinite(amount) || amount <= 0 || amount > account.balance)
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
	}

	account.balance -= amount;
}


// account holders can transfer their money from their money to another account hodlder's account using ID's if the amount to be transferred is greater than 0.
function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (fromAccount && amount > 0) {
		transferMoney;
	}

	else if (!fromAccount)
	{
		throw new Error("Source account not found.");
	}

	if (!Number.isFinite(amount) || amount <= 0 || amount >accounts.balance)
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}

	fromAccount.balance -= amount;
	toAccount.balance += amount;
}




/*Hints:*/

getAccountById(1);

createAccount(1, "Alice", 0);
console.log(accounts);
createAccount(3, "Bob", 0);
console.log(accounts);
accounts.push({id: 3, owner: "Charlie", balance: 20});
console.log(accounts);

createAccount(3, "Charlie");
console.log(accounts)

createAccount(3, "Charlie");
console.log(accounts)
createAccount(3, "charlie")
console.log(accounts)
createAccount(3, "charile");
console.log(accounts)

depositMoney(1, 300)
console.log(accounts)
depositMoney(1, 300)
console.log(accounts)
depositMoney(2, 600)
console.log(accounts[1])

depositMoney(1, 100)
console.log(accounts[0])

accounts.push({id: 4, owner: "David", balance: 0});
depositMoney(4, 100)
console.log(accounts)

withdrawMoney(1, 100)
console.log(accounts)
withdrawMoney(1, 700)
console.log(accounts)
withdrawMoney(1, 150)
console.log(accounts)

transferMoney(1, 4, 100)
console.log(accounts)
transferMoney(1, 2, 501);
console.log(accounts)
transferMoney(1, 2, 100);
console.log(accounts)





