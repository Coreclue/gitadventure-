// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
const oneTimeTasks = [];
let monitoringTaskId;
// Task 2: Add One-Time Task Function

// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
function addOneTimeTask(func, delay) {
	oneTimeTasks.push({ func, delay });
}


// Task 3: Run One-Time Tasks Function
// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
function runOneTimeTasks() {
	for (const oneTimeTask of oneTimeTasks) {
		setTimeout(oneTimeTask.func, oneTimeTask.delay);
	}


}

// Task 4: Start Monitoring Function
// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
function startMonitoring() {
	console.log("Starting Continuous monitoring of space station Parameters...");

	monitorTaskId = setInterval(() => {
		console.log("Monitoring Space Station conditions...");

		/* Conditions checks */

		const oxygenLevel = Math.random * 100; //Mock-up oxygen level percentage.
		const powerStatus = Math.random() > 0.1 ? "stable" : "critical"; // Mock-up power status. 
		const communicationCheck = Math.random() > 0.05 ? "All systems go" : "Communication Error"; // Mock-up communication system check. 
		console.log(`Oxygen Level: ${oxygenLevel.toFixed(2)}% | Power Status: ${powerStatus} | Communication: ${communicationCheck}`);
	}, 2000); 
}


// Task 5: Stop Monitoring Function
// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
function stopMonitoring() {
	clearInterval(monitorTaskId);
	console.log("Monitoring Stoped.");
}

// Task 6: Start Countdown Function
// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
function startCountdown(duration) {
	let timeleft = duration;
	console.log("Continuous `Countdown started: ${timeLeft} seconds remaining...");
	
	const countdownTimerId = setInterval(
		function() {
			timeleft --;
			consolee.log(`T-minus ${timeLeft} seconds`);

			if (timeleft <= 0)
			{
				clearInterval(countdouwnTimerId);
				console.log("Liftoff! The rocket has successfully launched into space")
			}
		}, 1000 
	);}


// Task 7: Schedule Pre-Launch Activities and Launch
// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
function scheduleMission() {
}

dscheduleMission(); // Starts the mission.
