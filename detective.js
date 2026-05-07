function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
	{ console.log("The operation is completed successfully!"); }
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}


let vacationDays = 13;
let motivationDay = 1;
let attendanceDays = 3;
let missionsToAttend = 20;



try{ 

	for (let i = 20; i > 0; i--){
		console.log("testing" + i)

		if (true) {
			mysteryOperation;
		}


	}
}
catch (error) {
	console.log(error)
}

 finally {
	console.log("Operation completed.")
 }


