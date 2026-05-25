/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name = "Brian";
const age = 32;
const studyField = "Computer Science";

const participant = {
    name,
    age,
    studyField
};
console.log(participant);



/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const participant1 = {
    ...participant,
    displayInfo() {
        console.log(`Participant Name: ${this.name}, Age: ${this.age}, Field of Study: ${this.studyField}`);
    }
}
participant1.displayInfo();
/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participant2 = {
    ...participant,
    displayInfo: () => {
        console.log(`Participant Name: ${participant.name}, Age: ${participant.age}, Field of Study: ${participant.studyField}`);
    }
}

/*
 * Observations:
 * TODO: Explain here.
 * In the case of the arrow function, `this` does not refer to the `participant2` object as it does in the regular function. Instead, it refers to the surrounding lexical context, which is the global scope in this case. 
 * Therefore, we cannot use `this` to access the properties of `participant2` within the arrow function. Instead, we have to directly reference the `participant` object to access its properties. 
 * This is a key difference between regular functions and arrow functions in JavaScript regarding the behavior of `this`.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(participant, name, value) {
    return {
        ...participant,
        [name]: value
    };
}

console.log(updateParticipantInfo(participant, "name", "Switcing to JavaScript"));


