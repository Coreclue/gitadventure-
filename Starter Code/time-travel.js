/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.

let destination = "Ancient Egypt";
console.log(`Destination: ${destination}`);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe";
console.log(`New Destination: ${destination}`);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.

const travelDate = "2030-03-15";
console.log(`Travel Date: ${travelDate}`);

/* Observations:
 * TODO: Explain here.
* Task 1 destination assigned a string, then print the variable, Get reassigned another value then print again.
 * Task 3 create varaiable that store date, then log date.
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.

console.log(`Time Machine Model: ${timeMachineModel}`);
var timeMachineModel = "T-800";
/*
 * Observations:
 * TODO: Explain here.
 * The log statement prints "undefined" instead of throwing a ReferenceError.
 * This is due to variable hoisting, where variable declarations (but not initializations) are hoisted or lifted to the top of their scope.
 * In this case, "timeMachineModel" is declared with "var", so its declaration is hoisted to the top of its scope.
 * However, its assignment occurs after the console.log statement, explaining why it logs "undefined".
 */
